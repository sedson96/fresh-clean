SELECT * FROM invoice
JOIN building ON building.building_id = invoice.building_id
WHERE building.user_id = $1 ORDER BY invoice_id DESC
