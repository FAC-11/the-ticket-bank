BEGIN;

DROP TABLE IF EXISTS users, events, participants cascade;

CREATE TABLE IF NOT EXISTS users (
  id            SERIAL        PRIMARY KEY,
  class         VARCHAR(15)   NOT NULL,
  verified      VARCHAR(10)   DEFAULT FALSE,
  charity_name  VARCHAR(20)   DEFAULT NULL,
  name          VARCHAR(30)   DEFAULT NULL,
  surname       VARCHAR(30)   DEFAULT NULL,
  email         VARCHAR(30)   DEFAULT NULL UNIQUE,
  contact_phone INTEGER       DEFAULT NULL,
  password      VARCHAR(70)   NOT NULL
);

CREATE TABLE IF NOT EXISTS events (
  id            SERIAL        PRIMARY KEY,
  title         VARCHAR(100)  NOT NULL,
  short_desc    VARCHAR(200)  DEFAULT NULL,     --short escription of event
  long_desc     VARCHAR(2000) DEFAULT NULL,     --long dscription of event
  venue         VARCHAR(100)  DEFAULT NULL,
  location      VARCHAR(100)  DEFAULT NULL,
  event_date    DATE          DEFAULT NULL,
  start_time    TIME          DEFAULT NULL,
  end_date      DATE          DEFAULT NULL,
  end_time      TIME          DEFAULT NULL,
  min_age       INTEGER       DEFAULT NULL,     --minimum age ot participate into event
  tkts_available INTEGER      NOT NULL,         --how many tickets are avaialble
  tkt_name      VARCHAR(50)   DEFAULT NULL,     -- ticket name
  info          VARCHAR(200)  DEFAULT NULL,     --additional info
  max_allocation INTEGER      DEFAULT 1,        --maximum ticket allocation per charity
  external_link VARCHAR(200)  DEFAULT NULL,
  image_url     VARCHAR(200)  DEFAULT NULL,
  org_id        INTEGER       REFERENCES users(id) ON UPDATE cascade DEFAULT 2
);

CREATE TABLE IF NOT EXISTS participants (
  id            SERIAL        PRIMARY KEY,
  event_id      INTEGER       REFERENCES events(id) ON UPDATE cascade DEFAULT 1,
  org_id        INTEGER       DEFAULT NULL,
  charity_id    INTEGER       DEFAULT NULL,
  name          VARCHAR(30)   DEFAULT NULL,
  surname       VARCHAR(30)   DEFAULT NULL,
  age           INTEGER       DEFAULT NULL,
  email         VARCHAR(30)   DEFAULT NULL,
  contact_phone INTEGER       DEFAULT NULL,
  postcode      VARCHAR(8)    DEFAULT NULL,
  ethnicity     VARCHAR(15)   DEFAULT NULL,
  info          VARCHAR(400)  DEFAULT NULL
);


INSERT INTO users (class, verified, charity_name, name, surname, email, contact_phone, password) VALUES
('admin', true, NULL, 'steve', 'r', 'steve@ticketsforgood.co.uk', NULL, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW'),
('admin', true, NULL, 'facster', '11', 'fac@11.co.uk', NULL, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW'),
('charity', false, 'T4G', 'john', 'doe', 'john@t4g.co.uk', 0794464779, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW'),
('charity', true, 'FAC', 'dan', 'sofer', 'dan@fac.co.uk', 0794464879, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW'),
('organiser', true, 'T4G', 'mary', 'doe', 'mary@t4g.co.uk', 0794464789, '$2a$10$UcORsLgChmFC8UPlqoOJluX8IU0yccwL.zfP2hrUPWwWCDiV8y9LW');

INSERT INTO events (title, short_desc, long_desc, venue, location, event_date, start_time, end_date, end_time, min_age, tkts_available, info, max_allocation, org_id) VALUES
('Fac Welcome', 'Welcome event for facsters', 'Welcome event for all Fac memebers', 'Fac HQ','Palmers Road', NULL, NULL, NULL, NULL, 18, 5, 'Everyone welcome', 2, 4);

COMMIT;
