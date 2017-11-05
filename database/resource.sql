DROP DATABASE IF EXISTS students;
CREATE DATABASE students;

\c students;

CREATE TABLE resource (
  ID SERIAL PRIMARY KEY,
  title VARCHAR,
  content TEXT,
  created DATE,
  author INTEGER
);

INSERT INTO resource (title, content, created, author)
  VALUES ('React', 'This is a very cool something for deving', '2/11/2017', '1');
