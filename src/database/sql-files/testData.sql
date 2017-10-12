BEGIN;

INSERT INTO users (class, verified, charity_name, name, surname, email, email_verified, contact_phone, password, randomstring, admin, email_verify_string) VALUES
('admin', true, NULL, 'steve', 'r', 'steve@ticketsforgood.co.uk', false,  NULL, '$2a$10$hz44e6ydpC014IvqXR3kFesmH79ZAYWrfK0jotQBhqmpl3adcHiwS', 'tnTrLSUJ8R5J6sZEMGNP0ImgapDdtG', true, 'tnTrLSUJ8R5J6sZEMGNP0ImgapDdtH'),
('admin', true, 'founders', 'facster', '11', 'fac@11.co.uk', false, NULL, '$2a$10$jkhDxAv58B42avyNx/z3xe6jdKD7KIQAo9ueGo60dtGeti8KxIdya', 'ohV0A3Yx0pSdY3hEe4QzrK07kCqsnT', false, 'tnTrLSUJ8R5J6sZEMGNP0ImgapDdtI'),
('charity', false, 'T4G', 'john', 'doe', 'john@t4g.co.uk', true, 0794464479, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW', 'cZQMhZB90DNbeSRf8jHntp5JMELSLB', false, 'tnTrLSUJ8R5J6sZEMGNP0ImgapDdtJ'),
('charity', true, 'FAC', 'dan', 'sofer', 'dan@fac.co.uk', true, 0794464879, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW', 'MTJu4TZnhldHwbxMu94oHZku29L4E1', false, 'tnTrLSUJ8R5J6sZEMGNP0ImgapDdtK'),
('organiser', true, 'charity1', 'mary', 'doe', 'mary@t4g.co.uk', true, 0794464789, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW', 'WP3op4lFCh18Ve0uChzIiOX73rcQKX', false, 'tnTrLSUJ8R5J6sZEMGNP0ImgapDdtL');

INSERT INTO events (title, short_desc, long_desc, venue, location, event_date, start_time, end_date, end_time, min_age, tkts_available, info, max_allocation) VALUES
('Fac Welcome', 'Welcome event for facsters', 'Welcome event for all Fac memebers', 'Fac HQ','Palmers Road', to_date('03-10-2017','DD-MM-YYYY'), '10:00 AM', '03/10/2017', '5:00 PM', 18, 5, 'Everyone welcome', 2),
('Fac End', 'Leaving event for facsters', 'Leaving event for all Fac memebers', 'Fac HQ','Palmers Road', to_date('23-10-2017','DD-MM-YYYY'), '10:00 AM', '03/10/2017', '5:00 PM', 17, 3, 'Everyone welcome', 2),
('beiber', 'concert', 'Private concert for all Fac memebers', 'Fac HQ','Palmers Road', to_date('03-10-2017','DD-MM-YYYY'), '10:00 AM', '03/10/2017', '5:00 PM', 17, 4, 'Everyone welcome', 5),
('Haloween', 'party', 'Party for all Fac memebers', 'Fac HQ','Palmers Road', to_date('03-10-2017','DD-MM-YYYY'), '10:00 AM', '03-10-2017', '5:00 PM', 12, 3, 'Everyone welcome', 2);

INSERT INTO participants (event_id, charity_id, full_name, age, email, contact_phone, location, ethnicity, add_info) VALUES (1, 2, 'Test Participant 1', '18', 'test1@test.com', 0794464479, 'London', 'White', 'Wheelchair user'), (1, 2, 'Test Participant 2', '20', 'test2@test.com', 0794464479, 'Bristol', 'Asian', NULL), (2, 2, 'Test Participant 3', '40', 'test3@test.com', 0794464479, 'Northants', 'Black', NULL), (2, 3, 'Test Participant 4', '8', 'test4@test.com', 0794464479, 'Northants', 'Black', NULL);

COMMIT;
