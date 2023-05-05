(ns sugbi.catalog.routes
  (:require
   [spec-tools.data-spec :as ds]
   [sugbi.catalog.handlers :as catalog.handlers]
   [sugbi.catalog.db :as catalog.db]
   [clojure.string :as string]
   [buddy.auth.backends.session :as session]))


(def basic-book-info-spec
  {:isbn  string?
   :title string?})

(defn date?
  [o]
  (instance? java.time.LocalDate o))

(def info-book-lending
  {:book_loan_id int?
   :user_id      string?
   :book_item_id int?
   :loan_date    date?
   :due_date     date?})


(def book-info-spec
  {:isbn                         string?
   :available                    boolean?
   (ds/opt :title)               string?
   (ds/opt :full-title)          string?
   (ds/opt :subtitle)            string?
   (ds/opt :publishers)          [string?]
   (ds/opt :publish-date)        string?
   (ds/opt :weight)              string?
   (ds/opt :physical-dimensions) string?
   (ds/opt :genre)               string?
   (ds/opt :subjects)            [string?]
   (ds/opt :number-of-pages)     int?})

(def routes
  [""
   ["/catalog" {:swagger {:tags ["Catalog"]}}
    ["/books"
     ["" {:get  {:summary    "gets the catalog. Optionally, accepts a search criteria"
                 :parameters {:query {(ds/opt :q) string?}}
                 :responses  {200 {:body [book-info-spec]}}
                 :handler    catalog.handlers/search-books}
          :post {:summary    "add a book title to the catalog"
                 :parameters {:header {:cookie string?}
                              :body   basic-book-info-spec}
                 :responses  {200 {:body basic-book-info-spec}
                              405 {:body {:message string?}}}
                 :handler    catalog.handlers/insert-book!}}]
     ["/:isbn" {:get    {:summary    "get a book info by its isbn"
                         :parameters {:path {:isbn string?}}
                         :responses  {200 {:body book-info-spec}
                                      404 {:body {:isbn string?}}}
                         :handler    catalog.handlers/get-book}
                :delete {:summary    "delete a book title of the catalog"
                         :parameters {:header {:cookie string?}
                                      :path   {:isbn string?}}
                         :responses  {200 {:body {:deleted int?}}
                                      405 {:body {:message string?}}}
                         :handler    catalog.handlers/delete-book!}}
      ["/item" ["/:book-item-id"
                ["/checkout"
                 {:post {:summary "checkout a book by its book item id"
                         :parameters {:header {:cookie string?}
                                      :body {:book_item_id int?}}
                         :responses {200 {:body info-book-lending}
                                     404 {:body {:book-item-id int?}}
                                     409 {:body {:message string?}}
                                     403 {:body {:message string?}}}
                         :handler catalog.handlers/checkout-book}}]
                ["/return"
                 {:delete {:summary "Delete a book that is returned"
                           :paramaters {:header {:cookie string?}
                                        :path  {:book_item_id int?}}
                           :responses {200 {:body {:deleted int?}}
                                       404 {:body {:book_item_id int?}}
                                       403 {:body {:message string?}}
                                       409 {:body {:message string?}}}
                           :handler catalog.handlers/return-book}}]]]]]
    ]
    ["" {:swagger {:tags ["User"]}}
["/user"
 ["/lendings" {:get  {:summary    "Gets user's lendings"
                      :parameters {:header {:cookie string?}}
                      :responses  {200 {:body [info-book-lending]}
                                   404 {:header {:cookie string?}}
                                   403 {:body {:message string?}}}
                      :handler    catalog.handlers/lending-books}}]]
["/lendings" {:get  {:summary    "Gets user's lendings by user-id"
          :parameters {:header {:cookie string?}
                       :query {:user-id int?}}
          :responses  {200 {:body [info-book-lending]}
                       404 {:body {:user-id int?}}
                       403 {:body {:message string?}}}
          :handler    catalog.handlers/get-user-lending-books}}]]]
  
  )

