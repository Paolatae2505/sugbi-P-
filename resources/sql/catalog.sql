-- :name insert-book! :! :1
insert into catalog.book (title, isbn) values (:title, :isbn)
returning *;

-- :name delete-book! :! :n
delete from catalog.book where isbn = :isbn;

-- :name search :? :*
select isbn, true as "available"
from catalog.book
where lower(title) like :title;

-- :name get-book :? :1
select isbn, true as "available"
from catalog.book
where isbn = :isbn

-- :name get-books :? :*
select isbn, true as "available"
from catalog.book;

-- :name insert-lending! :! :1
insert into catalog.book_lending (user_id, book_item_id,loan_date,due_date) values
 (:user_id, :book_item_id,:loan_date,:due_date +15)
returning *;
