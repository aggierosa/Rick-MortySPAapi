CREATE EXTENSION "uuid-ossp";

CREATE TABLE users(
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    name VARCHAR(100) UNIQUE,
    password VARCHAR(100),
    created_on VARCHAR(100)
)

CREATE TABLE favorite_characters(
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100),
    photoUrl VARCHAR(100),
    user_id INTEGER NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users (id) ON DELETE CASCADE
)