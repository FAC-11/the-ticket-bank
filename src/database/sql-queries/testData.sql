BEGIN;
INSERT INTO users (class, verified, charity_name, name, surname, email, email_verified, contact_phone, password, randomstring) VALUES
('admin', true, NULL, 'steve', 'r', 'steve@ticketsforgood.co.uk', false,  NULL, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW', 'tnTrLSUJ8R5J6sZEMGNP0ImgapDdtG'),
('admin', true, NULL, 'facster', '11', 'fac@11.co.uk', false, NULL, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW', 'ohV0A3Yx0pSdY3hEe4QzrK07kCqsnT'),
('charity', false, 'T4G', 'john', 'doe', 'john@t4g.co.uk', true, 0794464479, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW', 'cZQMhZB90DNbeSRf8jHntp5JMELSLB'),
('charity', true, 'FAC', 'dan', 'sofer', 'dan@fac.co.uk', true, 0794464879, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW', 'MTJu4TZnhldHwbxMu94oHZku29L4E1'),
('organiser', true, 'T4G', 'mary', 'doe', 'mary@t4g.co.uk', true, 0794464789, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW', 'WP3op4lFCh18Ve0uChzIiOX73rcQKX');

INSERT INTO events (title, short_desc, long_desc, venue, location, event_date, start_time, end_date, end_time, min_age, tkts_available, info, max_allocation, org_id) VALUES
('Fac Welcome', 'Welcome event for facsters', 'Welcome event for all Fac memebers', 'Fac HQ','Palmers Road', '03/10/2017', '10:00 AM', '03/10/2017', '5:00 PM', 18, 5, 'Everyone welcome', 2, 4),
('Fac End', 'Leaving event for facsters', 'Leaving event for all Fac memebers', 'Fac HQ','Palmers Road', '03/10/2017', '10:00 AM', '03/10/2017', '5:00 PM', 17, 3, 'Everyone welcome', 2, 2),
('beiber', 'concert', 'Private concert for all Fac memebers', 'Fac HQ','Palmers Road', '03/10/2017', '10:00 AM', '03/10/2017', '5:00 PM', 17, 4, 'Everyone welcome', 5, 2),
('Haloween', 'party', 'Party for all Fac memebers', 'Fac HQ','Palmers Road', '03/10/2017', '10:00 AM', '03/10/2017', '5:00 PM', 12, 3, 'Everyone welcome', 2, 3);
COMMIT;
