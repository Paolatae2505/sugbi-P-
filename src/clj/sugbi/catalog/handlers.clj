(ns sugbi.catalog.handlers 
  (:require
   [ring.util.http-response :as response]
   [sugbi.catalog.db :as catalog.db]
   [sugbi.catalog.core :as catalog.core]
   [buddy.auth.backends.session :as session]
   [ring.util.response :as response1]))


(defn search-books
  [request]
  (if-let [criteria (get-in request [:parameters :query :q])]
    (response/ok
     (catalog.core/enriched-search-books-by-title
      criteria
      catalog.core/available-fields))
    (response/ok
     (catalog.core/get-books
      catalog.core/available-fields))))


(defn insert-book!
  [request]
  (let [{:keys [_isbn _title]
         :as book-info} (get-in request [:parameters :body])
        is-librarian?   (get-in request [:session :is-librarian?])]
    (if is-librarian?
      (response/ok
       (select-keys (catalog.db/insert-book! book-info) [:isbn :title]))
      (response/forbidden {:message "Operation restricted to librarians"}))))

(defn delete-book!
  [request]
  (let [isbn          (get-in request [:parameters :path :isbn])
        is-librarian? (get-in request [:session :is-librarian?])]
    (if is-librarian?
      (response/ok
       {:deleted (catalog.db/delete-book! {:isbn isbn})})
      (response/forbidden {:message "Operation restricted to librarians"}))))

(defn get-book
  [request]
  (let [isbn (get-in request [:parameters :path :isbn])]
    (if-let [book-info (catalog.core/get-book
                        isbn
                        catalog.core/available-fields)]
      (response/ok book-info)
      (response/not-found {:isbn isbn}))))

(defn checkout-book 
  [request]
  (let [book_item_id (get-in request [:parameters :path :book-item-id])
        user_id      (get-in request [:session :sub])]
    (if (some? user_id)
    (if (catalog.db/exist-book-item {:book_item_id book_item_id}) 
     (if (catalog.db/is-taken {:book_item_id book_item_id})
      (response/conflict {:message "The copy of the book is already taken, try another one !!!!"}) 
       (response/ok (catalog.core/checkout-book  user_id  book_item_id))) 
      (response/not-found {:message "Doesn't exist the book item id"})) 
      (response/forbidden {:message "You are not in an active session"}) )
    ))

(defn return-book 
  [request]
  (let [book_item_id (get-in request [:parameters :path :book-item-id])
        user_id      (get-in request [:session :sub])]
    (if (some? user_id) 
        (if (catalog.db/exist-book-item {:book_item_id book_item_id})
          (if (catalog.db/exist-book-item-And-user {:book_item_id book_item_id :user_id user_id})
            (response/ok (catalog.core/return-book user_id book_item_id))
            (response/conflict {:message "You don't have that book on loan"}))
          (response/not-found {:message "Doesn't exist the book item id"}))
      (response/forbidden {:message "You need to have an active session
"})) 
    )
  )

(defn lending-books
  [request]
   (let [user_id  (get-in request [:session :sub])]
     (if (some? user_id)
       (if (catalog.db/exist-user-id {:user_id user_id})
         (response/ok (catalog.core/get-book-lendings user_id))
         (response/not-found {:message "User doesn't have book lendings"}))
       (response/forbidden {:message "You need to have an active session"}))
     ) 
  )
;; => #'sugbi.catalog.handlers/lending-books


(defn get-user-lending-books [request]
  (let [user_id (get-in request [:parameters :query :user_id])
        is-librarian?   (get-in request [:session :is-librarian?])]
    (if is-librarian? 
      (if (catalog.db/exist-user-id {:user_id user_id}) 
        (response/ok (catalog.core/get-book-lendings user_id)) 
        (response/not-found {:message "User doesn't exist !!!!"}))
     (response/forbidden {:message "Operation restricted to librarians"})
     )
    ))

;; => #'sugbi.catalog.handlers/get-user-lending-books
