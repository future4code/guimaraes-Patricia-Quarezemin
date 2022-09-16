CREATE TABLE
    IF NOT EXISTS Catalog_Amaro (
        id VARCHAR(64) PRIMARY KEY,
        name VARCHAR(64) NOT NULL,
        tags VARCHAR(255) NOT NULL
    );