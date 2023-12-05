# Insira aqui as query utilizadas

## Todas as agendas
select * from schedules

## Todas as agendas com a tag "Dev"
SELECT * FROM schedules
WHERE id IN (
  SELECT schedule_id FROM schedule_tags WHERE tag_id IN (SELECT id FROM tags WHERE title = 'Dev')
);

## Todas as agendas que acontecerão no dia 10 de maio
SELECT * FROM schedules
WHERE start_time >= '2023-05-10 00:00:00' AND end_time <= '2023-05-10 23:59:59';

## Todas as agendas que o usuário Luís participou
SELECT * FROM schedules
WHERE id IN (
  SELECT schedule_id FROM schedule_users
  WHERE user_id IN (SELECT id FROM users WHERE first_name = 'Luís')
);


