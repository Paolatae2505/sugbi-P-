create table catalog.book_item(
  book_item_id bigint generated always as identity primary key,
  book_id bigint not null references catalog.book
);
--;;
create table catalog.book_lending (
  book_lending_id bigint generated always as identity primary key,
  user_id bigint not null, 
  book_item_id bigint not null references catalog.book_item, 
  loan_date date not null, 
  due_date date not null 
);
