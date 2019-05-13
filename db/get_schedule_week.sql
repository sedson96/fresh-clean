SELECT s.week_id, s.monday, s.tuesday, s.wednesday, s.thursday, s.friday, w.week_start, w.week_end, b.building_id,b.name FROM schedule as s
JOIN week as w ON w.week_id = s.week_id
JOIN building as b ON b.building_id = s.building_id
WHERE now() BETWEEN week_start AND week_end
