INSERT INTO invoice (price, building_id, date)
VALUES ($1,$2, now());

SELECT * FROM invoice
JOIN building ON building.building_id = invoice.building_id
ORDER BY invoice.date ASC;