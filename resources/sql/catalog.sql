-- :name insert-book! :! :1
insert into catalog.book (title, isbn) values (:title, :isbn)
returning *;

-- :name insert-book_item! :! :1
insert into catalog.book_item (book_id) values (:book_id)
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
where isbn = :isbn;

-- :name get-books :? :*
select isbn, true as "available"
from catalog.book;

-- :name insert-lending! :! :1
insert into catalog.book_lending (user_id, book_item_id,loan_date,due_date) values
 (:user_id, :book_item_id,CURRENT_TIMESTAMP, CURRENT_TIMESTAMP + INTERVAL '2 weeks')
returning *;

-- :name delete-User :! :n
delete catalog.book_lending where user_id = :user_id AND book_item_id = :book_item_id ;

-- :name books-from-user  :? :*
select book_id, title
from catalog.book_lending JOIN catalog.book ON catalog.book_lending.book_id = catalog.book.book_id
where user_id = :user_id;

-- :name get-loan-date :? :1
select loan_date
from catalog.book_lending
where user_id =: user_id AND book_item_id := book_item_id;

-- :name is-late :? :1
select due_date > loan_date +  INTERVAL '2 weeks'
from catalog.book_lending
where user_id = :user_id AND book_item_id = :book_item_id;

-- :name get-book-id :? :1
select book_id
from catalog.book
where isbn = :isbn;

-- :name get-book-id-2 :? :1
select book_id
from catalog.book_item
where book_item_id = :book_item_id;

-- :name get-isbn :? :1
select isbn
from catalog.book_item JOIN catalog.book ON catalog.book_item.book_id = catalog.book.book_id
where book_item_id = :book_item_id AND book_id = :book_id;

-- :name count-books-from-id :? :1
select COUNT(book_id) 
from catalog.book_item
where book_id = :book_id;

-- :name books-on-loan :? :*
select COUNT(book_id)
from catalog.book_item JOIN catalog.book_lending ON catalog.book_item.book_item_id = catalog.book_lending.book_item_id
where book_id = :book_id;

-- :name is-taken :? :1
select book_item_id = :book_item_id as "available"
from catalog.book_lending
where book_item_id = :book_item_id;

-- :name exist-book-item :? :1
select book_item_id = :book_item_id as "available"
from catalog.book_item
where book_item_id = :book_item_id;

-- :name exist-user-id :? :1
select user_id = :user_id as "available"
from catalog.book_lending
where user_id = :user_id;

-- :name exist-book-item-And-user :? :1
select book_item_id = :book_item_id AND user_id = :user_id as "available"
from catalog.book_lending
where book_item_id = :book_item_id AND user_id = :user_id;
