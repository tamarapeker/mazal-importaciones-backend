create table category
(
    category_id SERIAL primary key,
	category_name varchar(100) not null unique
);

create table subcategory 
(
	subcategory_id SERIAL primary key,
	subcategory_name varchar(100) not null unique,
    category_id int references category(category_id)
);

create table product
(
	product_id SERIAL primary key,
    product_code varchar(100) not null unique,
	product_name varchar(100) not null,
    product_description varchar(100),
    product_measures longtext,
    product_unit varchar(100),
    product_min_cant varchar(100),
    product_cant_bulto varchar(100),
    product_image longblob,
    product_observations varchar(100),
    product_timestamp date default current_date not null
);

create table product_category_subcategory
(
    prod_cat_subcat_id SERIAL primary key,
    product_id int references product(product_id),
    category_id int references category(category_id),
    subcategory_id int references subcategory(subcategory_id)
);