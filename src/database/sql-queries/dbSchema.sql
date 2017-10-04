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
  short_desc    VARCHAR(200)  DEFAULT NULL,     --short description of event
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

COMMIT;
