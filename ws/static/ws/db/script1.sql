
INSERT INTO role
SET title = 'admin';

INSERT INTO user
SET `name` = 'WhiteShadoofs',
    `role` = 1;

INSERT INTO country
SET `title` = 'Россия';

INSERT INTO region
SET `title` = 'Костромская область',
    `country` = 
    (
        SELECT id FROM country WHERE title = 'Россия'
    );

INSERT INTO locality
SET `title` = 'Антропово',
    `region` =
    (
        SELECT id FROM region WHERE title = 'Костромская область'
    );


INSERT INTO address
SET `street` = 'Кирова',
    `latitude` = 58.397388,
    `longitude` = 42.997565,
    `locality` =
    (
        SELECT id FROM locality WHERE title = 'Антропово'
    );

INSERT INTO mem_event
SET `title` = 'Великая Отечественная Война';


INSERT INTO object 
    SET state = '4',
        title = 'Памятник погибшим войнам',
        category = '4',
        adding_date = DATE(NOW()),
        description = 'Фигура солдата на постаменте',
        user = 1,
        mem_event = 1,
        address = 
        (
            SELECT id FROM address WHERE street = 'Кирова'
        );

INSERT INTO whiteshadoofs_role
SELECT * FROM ws.role;


INSERT INTO whiteshadoofs_user
SELECT * FROM ws.user;

INSERT INTO whiteshadoofs_object
SELECT * FROM ws.object;

SELECT a.title, b.street, c.title, d.title, e.title FROM
    (((ws.object a JOIN ws.address b
    ON a.address = b.id) JOIN ws.locality c
    ON b.locality = c.id) JOIN ws.region d
    ON c.region = d.id) JOIN ws.country e
    ON d.country = e.id;


