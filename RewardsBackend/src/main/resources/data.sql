
drop table if exists customer CASCADE;
drop table if exists transaction CASCADE;

create table customer (
    id number not null,
    name varchar(255),
    primary key (id)
);

create table transaction (
    id varchar(255) not null,
    description varchar(255),
    price double,
    date_time varchar(255),
    customer_id number not null,
    primary key (id)
);

alter table transaction 
   add constraint custTxns 
   foreign key (customer_id) 
   references customer;

INSERT INTO customer (id, name) VALUES (1, 'John Smith');
INSERT INTO customer (id, name) VALUES (2, 'Lucky');
INSERT INTO customer (id, name) VALUES (3, 'Krishna');
INSERT INTO customer (id, name) VALUES (4, 'Raj');
INSERT INTO customer (id, name) VALUES (5, 'Pete');
INSERT INTO customer (id, name) VALUES (6, 'Tej LLC');

INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (11, 'WalMart Misc', 120.00, '02-04-2023 09:00:10 AM', 1);
INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (12, 'Schnucks Misc', 75.00, '03-14-2023 11:00:22 AM', 1);
INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (13, 'Restaurant bill', 94.00, '03-01-2023 12:30:40 PM', 1);
INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (14, 'Mobile bill pay', 20.00, '04-14-2023 02:05:58 PM', 1);
INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (15, 'Internet bill pay', 55.00, '04-21-2023 04:07:12 PM', 1);
INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (16, 'Other', 15.00, '04-23-2023 04:07:12 PM', 1);

INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (21, 'Training Subscription', 200.00, '03-01-2023 10:07:44 AM', 2);
INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (22, 'Verify card', 1.00, '02-09-2023 06:19:07 PM', 2);
INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (23, 'Kris Foods', 80.00, '02-11-2023 07:08:10 PM', 2);
INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (24, 'Pan at WalMart', 224.00, '03-27-2023 08:06:16 PM', 2);

INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (31, 'Electricity Bill', 125.00, '02-07-2023 08:30:35 AM', 3);
INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (32, 'Costsco Gas', 75.00, '02-01-2023 10:07:05 AM', 3);

INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (41, 'Google Services', 10.00, '02-19-2023 12:07:16 PM', 4);
INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (42, 'Dollar Tree', 75.00, '02-19-2023 12:07:16 PM', 4);

INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (51, 'Costco WHSE', 220.00, '03-26-2023 04:07:19 PM', 5);
INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (52, 'Movie Tickets', 224.00, '03-28-2023 02:25:25 PM', 5);

INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (61, 'Preschool Bill', 120.00, '02-21-2023 10:07:55 AM', 6);
INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (62, 'Schnucks Misc', 150.00, '03-24-2023 11:07:29 AM', 6);
INSERT INTO transaction (id, description, price, date_time, customer_id) VALUES (63, 'Paypal Bill pay', 90.00, '04-22-2023 04:07:39 PM', 6);

