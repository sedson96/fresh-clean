SELECT * FROM schedule
JOIN week ON week.week_id = schedule.week_id
WHERE week_start < now() AND week_end > now();