# Insira aqui as query utilizadas

## Todas as agendas
```sql
select * from schedules
```
## Todas as agendas com a tag "Dev"
```sql
SELECT schedules.* FROM schedules
JOIN schedule_tags ON schedules.id = schedule_tags.schedule_id
JOIN tags ON schedule_tags.tag_id = tags.id
WHERE tags.title = 'Dev'
```

## Todas as agendas que acontecerão no dia 10 de maio
```sql
SELECT * FROM schedules
WHERE start_time >= '2023-05-10 00:00:00' AND end_time <= '2023-05-10 23:59:59'
```

## Todas as agendas que o usuário Luís participou
```sql
SELECT schedules.* FROM schedules
JOIN schedule_users ON schedules.id = schedule_users.schedule_id
JOIN users ON schedule_users.user_id = users.id
WHERE users.first_name = 'Luís'
```

