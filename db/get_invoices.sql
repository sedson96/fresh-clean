SELECT * FROM invoice
JOIN building ON building.building_id = invoice.building_id
ORDER BY invoice.date ASC;