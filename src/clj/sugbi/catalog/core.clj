(ns sugbi.catalog.core
 (:require
  [clojure.set :as set]
  [sugbi.catalog.db :as db]
  [sugbi.catalog.open-library-books :as olb]))


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
;; => #'sugbi.catalog.core/available


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
      (db/insert-lending! {:user_id user-id , :book_item_id  book-item-id})) 
;; => #'sugbi.catalog.core/checkout-book

(defn return-book [user-id book-item-id]
  (db/delete-User {:user_id user-id ,:book_item_id book-item-id})
)
;; => #'sugbi.catalog.core/return-book

(defn get-book-lendings [user-id]
  (let [lendings (db/books-from-user{:user_id user-id})]
    (lendings))
)
;; => #'sugbi.catalog.core/get-book-lendings

