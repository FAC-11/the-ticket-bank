BEGIN;

INSERT INTO users (class, verified, charity_name, name, surname, email, contact_phone, password) VALUES
('admin', true, NULL, 'steve', 'r', 'steve@ticketsforgood.co.uk', NULL, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW'),
('admin', true, NULL, 'facster', '11', 'fac@11.co.uk', NULL, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW'),
('charity', false, 'T4G', 'john', 'doe', 'john@t4g.co.uk', 0794464779, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW'),
('charity', true, 'FAC', 'dan', 'sofer', 'dan@fac.co.uk', 0794464879, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW'),
('organiser', true, 'T4G', 'mary', 'doe', 'mary@t4g.co.uk', 0794464789, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW');

INSERT INTO events (title, short_desc, long_desc, venue, location, event_date, start_time, end_date, end_time, min_age, tkts_available, info, max_allocation, org_id) VALUES
('Fac Welcome', 'Welcome event for facsters', 'Welcome event for all Fac memebers', 'Fac HQ','Palmers Road', NULL, NULL, NULL, NULL, 18, 5, 'Everyone welcome', 2, 4);

COMMIT;
