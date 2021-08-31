create table category 
(
	category_id SERIAL primary key,
	category_name text not null unique,
    category_description text
);

create table subcategory 
(
	subcategory_id SERIAL primary key,
	subcategory_name text not null unique,
    subcategory_description text
);

create table product
(
	product_id SERIAL primary key,
    product_code int not null unique,
	product_name text not null unique,
    product_description text,
    product_image bytea
);

create table category_subcategory
(
    category_subcategory_id SERIAL primary key,
    category_id int references category(category_id) not null,
    subcategory_id int references subcategory(subcategory_id) not null
);

create table product_category_subcategory
(
    product_category_subcategory_id SERIAL primary key,
    product_id int references product(product_id) not null,
    category_id int references category(category_id) not null,
    subcategory_id int references subcategory(subcategory_id) not null
);