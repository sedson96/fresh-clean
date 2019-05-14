UPDATE schedule 
SET 
monday = $1,
tuesday = $2,
wednesday = $3,
thursday = $4,
friday = $5
WHERE week_id = $6 AND building_id = $7;