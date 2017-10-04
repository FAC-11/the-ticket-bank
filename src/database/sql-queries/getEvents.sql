SELECT title,short_desc,venue,location, to_char(event_date, 'DD/MM/YYYY') AS event_date,tkts_available FROM events;
