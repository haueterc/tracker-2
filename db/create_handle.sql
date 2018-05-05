INSERT INTO handles
(handle, user_id, social_media_platfrom)
VALUES
($1, $2, $3)
RETURNING *;