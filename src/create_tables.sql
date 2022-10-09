 CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

 CREATE TABLE users (
      id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
      email VARCHAR(128) UNIQUE NOT NULL,
      name VARCHAR(256) NOT NULL,
      password VARCHAR(128) NOT NULL 
    );
    
