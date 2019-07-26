DELETE FROM schedule 
WHERE schedule.building_id = $1 AND schedule.week_id = $2;

