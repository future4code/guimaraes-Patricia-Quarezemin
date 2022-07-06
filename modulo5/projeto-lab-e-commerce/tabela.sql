CREATE TABLE labecommerce_users (
    id VARCHAR (255) PRIMARY KEY
    name VARCHAR (255) NOT NULL
    email VARCHAR (255) UNIQUE NOT NULL
    password VARCHAR (255) NOT NULL
);

CREATE TABLE labecommerce_products (
    id VARCHAR (255) PRIMARY KEY
    name VARCHAR (255) NOT NULL
    price FLOAT
    imageUrl VARCHAR (255)
);