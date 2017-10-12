BEGIN;

DROP TABLE IF EXISTS users, events, participants cascade;

CREATE TABLE IF NOT EXISTS users (
  id            SERIAL        PRIMARY KEY,
  class         VARCHAR(15)   DEFAULT NULL,
  verified      VARCHAR(10)   DEFAULT 'pending',
  charity_name  VARCHAR(20)   DEFAULT NULL,
  charity_number VARCHAR(15)  DEFAULT NULL,
  area_of_work  VARCHAR(40)   DEFAULT NULL,
  charity_address VARCHAR(40) DEFAULT NULL,
  name          VARCHAR(30)   DEFAULT NULL,
  surname       VARCHAR(30)   DEFAULT NULL,
  email         VARCHAR(30)   DEFAULT NULL UNIQUE,
  email_verified BOOLEAN      DEFAULT FALSE,
  contact_phone INTEGER       DEFAULT NULL,
  password      VARCHAR(70)   NOT NULL,
  randomstring  VARCHAR(70)   NOT NULL UNIQUE,
  admin         BOOLEAN       DEFAULT FALSE,
  email_verify_string  VARCHAR(70)   NOT NULL UNIQUE
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
  image_url     VARCHAR(200)  DEFAULT NULL
);

CREATE TABLE IF NOT EXISTS participants (
  id            SERIAL        PRIMARY KEY,
  event_id      INTEGER       REFERENCES events(id) ON UPDATE cascade DEFAULT 1,
  charity_id    INTEGER       REFERENCES users(id) ON UPDATE cascade DEFAULT NULL,
  full_name     VARCHAR(30)   DEFAULT NULL,
  age           INTEGER       DEFAULT NULL,
  email         VARCHAR(30)   DEFAULT NULL,
  contact_phone INTEGER       DEFAULT NULL,
  location      VARCHAR(30)   DEFAULT NULL,
  ethnicity     VARCHAR(15)   DEFAULT NULL,
  add_info      VARCHAR(400)  DEFAULT NULL
);

COMMIT;