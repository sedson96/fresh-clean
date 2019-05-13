SELECT week_id FROM week
WHERE now() BETWEEN week_start AND week_end;
