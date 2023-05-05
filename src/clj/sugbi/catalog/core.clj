(ns sugbi.catalog.core
 (:require
  [clojure.set :as set]
  [sugbi.catalog.db :as db]
  [sugbi.catalog.open-library-books :as olb]))

(comment

  (db/insert-book! {:title "Alicia en el pais de las maravillas", :isbn "1290689"})
  ;; => {:book_id 4, :title "Alicia en el pais de las maravillas", :isbn "1290689"}
  (db/insert-book_item!{:book_id 4})
  ;; => {:book_item_id 5, :book_id 4} 
  (db/insert-book_item! {:book_id 4})
  ;; => {:book_item_id 6, :book_id 4} 
  (db/count-books-from-id{:book_id 1})
  ;; => {:count 2} 
  (db/insert-lending!{:user_id 1 , :book_item_id 5})
 ;; => {:book_lending_id 2,
 ;;     :user_id 1,
 ;;     :book_item_id 5,
 ;;     :loan_date #object[java.time.LocalDate 0x5c7086 "2023-04-28"],
 ;;     :due_date #object[java.time.LocalDate 0xdd63f51 "2023-05-12"]}
  
  (db/is-late{:user_id 1, :book_item_id 5})
  ;; => {:?column? false} 
  (db/is-taken{:book_item_id 5})
  ;; => {:available true}
   (available "1290689")
   ;; => Execution error (PSQLException) at org.postgresql.core.v3.QueryExecutorImpl/receiveErrorResponse (QueryExecutorImpl.java:2675).
   ;;    ERROR: operator does not exist: bigint = jsonb
   ;;      Hint: No operator matches the given name and argument types. You might need to add explicit type casts.
   ;;      Position: 61

  (db/is-taken {:book_item_id 4})
  ;; => nil

 ;; => {:available true}
  
  (db/get-books {})
  ;; => [{:isbn "882007405", :available true} {:isbn "18281", :available true} {:isbn "250589", :available true}] ()
  )

(defn merge-on-key
  [k x y]
  (->> (concat x y)
       (group-by k)
       (map val)
       (mapv (fn [[x y]] (merge x y)))))


(def available-fields olb/relevant-fields)

(defn available [isbn]
  (let [book-id (db/get-book-id {:isbn isbn})
        book-instances (db/count-books-from-id {:book_id book-id})
        books-taken (db/books-on-loan {:book_id book-id})
        books-availables (- book-instances books-taken)]
    (if (> books-availables 0)
      true
      false)))

(defn get-book
  [isbn fields]
  (when-let [db-book (db/get-book {:isbn isbn})]
    (let [open-library-book-info (olb/book-info isbn fields)
          av (available isbn)]
      (merge db-book open-library-book-info{:available av}))))
;; => #'sugbi.catalog.core/get-book


(defn get-books
  [fields]
  (let [db-books                (db/get-books {})
        isbns                   (map :isbn db-books)
        open-library-book-infos (olb/multiple-book-info isbns fields)]
    (merge-on-key
     :isbn
     db-books
     open-library-book-infos)))
;; => #'sugbi.catalog.core/get-books


(defn enriched-search-books-by-title
  [title fields]
  (let [db-book-infos           (db/matching-books title)
        isbns                   (map :isbn db-book-infos) 
        open-library-book-infos (olb/multiple-book-info isbns fields)]
    (merge-on-key
     :isbn
     db-book-infos
     open-library-book-infos)))

(defn checkout-book [user-id book-item-id]
  (let [is-taken (db/is-taken {:book_item_id book-item-id})]
    (if (is-taken)
        "The copy of the book is already taken, try another one !!!!"
      (db/insert-lending! {:user_id user-id :book_item_id  book-item-id}))) 
  )
;; => #'sugbi.catalog.core/checkout-book

(defn return-book [user-id book-item-id]
  (db/delete-User {:user_id user-id :book_item_id book-item-id})
)
;; => #'sugbi.catalog.core/return-book

(defn get-book-lendings [user-id]
  (let [lendings (db/books-from-user{:user_id user-id})]
    (lendings))
)
;; => #'sugbi.catalog.core/get-book-lendings

