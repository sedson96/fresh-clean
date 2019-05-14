INSERT INTO users (username, password,name,email,phone)
VALUES  ($1,$2,$3,$4,$5);

SELECT * FROM users
WHERE is_admin = false;