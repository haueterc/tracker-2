CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY, 
    display_name TEXT,
    picture TEXT,
    platform_and_id TEXT,
    provider_platform TEXT,
    provider_id TEXT,
    access_token TEXT,
    access_token_secret TEXT
)
