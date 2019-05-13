SELECT * FROM invoice 
JOIN building ON building.building_id = invoice.building_id
JOIN users ON users.user_id = building.user_id
WHERE building.user_id = $1 ORDER BY invoice.invoice_id DESC;