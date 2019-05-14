INSERT INTO schedule (week_id, building_id)
VALUES ($1,$2);

SELECT building.building_id,building.name,schedule.week_id, schedule.monday, schedule.tuesday, schedule.wednesday,schedule.thursday,schedule.friday  FROM schedule
JOIN building on building.building_id = schedule.building_id;