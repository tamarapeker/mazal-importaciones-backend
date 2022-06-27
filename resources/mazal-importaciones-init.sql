create table category
(
    category_id SERIAL primary key,
	category_name text not null unique
);

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
    product_measures text[],
    product_unit text,
    product_min_cant text,
    product_cant_bulto text,
    product_image bytea,
    product_observations text,
    product_timestamp date default current_date not null
);

create table product_category_subcategory
(
    prod_cat_subcat_id SERIAL primary key,
    product_id int references product(product_id),
    category_id int references category(category_id),
    subcategory_id int references subcategory(subcategory_id)
);