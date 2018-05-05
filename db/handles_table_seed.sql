CREATE TABLE IF NOT EXISTS handles (
    id SERIAL PRIMARY KEY,
    handle TEXT,
    user_id TEXT,
    social_media_platform TEXT,
    user_profile_img TEXT
)