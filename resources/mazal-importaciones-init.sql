create table subcategory 
(
	subcategory_id SERIAL primary key,
	subcategory_name text not null unique,
    category_id int references category(category_id)
);

create table product
(
	product_id SERIAL primary key,
    product_code text not null unique,
	product_name text not null,
    product_description text,
    product_measures json,
    product_unit text,
    product_min_cant text,
    product_cant_bulto text,
    product_image bytea,
    product_observations text,
    product_timestamp date default current_date not null
);

create table product_category_subcategory
(
    product_category_subcategory_id SERIAL primary key,
    product_id int references product(product_id) not null,
    category_id int references category(category_id) not null,
    subcategory_id int references subcategory(subcategory_id) not null
);