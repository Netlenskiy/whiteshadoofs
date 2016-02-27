
CREATE DATABASE IF NOT EXISTS ws COLLATE utf8_general_ci;



DROP TABLE IF EXISTS user;
CREATE TABLE user
(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	name VARCHAR(45) NOT NULL COMMENT 'фио пользователя',
	soc_network VARCHAR(45) COMMENT 'недоработано',
	soc_network_id VARCHAR(45) COMMENT 'недоработано',
	nick VARCHAR(45) COMMENT 'недоработано',
	role INT UNSIGNED NOT NULL COMMENT 'внешний ключ ссылается на таблицу role',
	INDEX ixRole (role) COMMENT 'индекс на внешний ключ',
	CONSTRAINT user_pk PRIMARY KEY (id),
	CONSTRAINT user_fk_to_role FOREIGN KEY (role) REFERENCES role (id)
) COMMENT 'таблица "роль"';



DROP TABLE IF EXISTS role;
DROP TABLE IF EXISTS role;
CREATE TABLE role
(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	title VARCHAR(45) NOT NULL COMMENT 'название роли',
	CONSTRAINT role_pk PRIMARY KEY (id)
) COMMENT 'таблица "роль"';



DROP TABLE IF EXISTS image;
CREATE TABLE image
(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	link_to_file VARCHAR(255) NOT NULL COMMENT 'ссылка на фотографию',
	object INT UNSIGNED NOT NULL COMMENT 'внешний ключ ссылается на таблицу object',
	INDEX ixObject (object) COMMENT 'индекс на внешний ключ',
	CONSTRAINT image_pk PRIMARY KEY (id),
	CONSTRAINT image_fk_to_object FOREIGN KEY (object) REFERENCES object (id)
) COMMENT 'таблица изображение памятного объекта';



DROP TABLE IF EXISTS mem_event;
CREATE TABLE mem_event
(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	title VARCHAR(45) NOT NULL COMMENT 'название военного события',
	description TEXT COMMENT 'описание события',
	CONSTRAINT mem_event_pk PRIMARY KEY (id)
) COMMENT 'таблица "военное событие';


DROP TABLE IF EXISTS country;
CREATE TABLE country
(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	title VARCHAR(30) NOT NULL COMMENT 'название страны', 
	CONSTRAINT country_pk PRIMARY KEY (id)
) COMMENT 'таблица "страна"';


DROP TABLE IF EXISTS region;
CREATE TABLE region
(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	title VARCHAR(30) NOT NULL COMMENT 'название страны',
	country INT UNSIGNED NOT NULL COMMENT 'внешний ключ ссылается на таблицу country',
	INDEX ixCountry (country),
	CONSTRAINT region_pk PRIMARY KEY (id),
	CONSTRAINT region_fk_to_country FOREIGN KEY (country) REFERENCES country (id)
) COMMENT 'таблица "страна"';


DROP TABLE IF EXISTS locality;
CREATE TABLE locality
(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	title VARCHAR(30) NOT NULL COMMENT 'название населенного пункта', 
	region INT UNSIGNED NOT NULL COMMENT 'внешний ключ ссылается на таблицу region',
	INDEX ixRegion (region),
	CONSTRAINT locality_pk PRIMARY KEY (id),
	CONSTRAINT locality_fk_to_region FOREIGN KEY (region) REFERENCES region (id)
) COMMENT 'таблица "населенный пункт"';


DROP TABLE IF EXISTS address;
CREATE TABLE address
(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	street VARCHAR(45) NOT NULL,
	latitude FLOAT4 NOT NULL COMMENT 'широта заполняется программно',
	longitude FLOAT4 NOT NULL COMMENT 'долгота заполняется программно',
	locality INT UNSIGNED NOT NULL,
	INDEX ixLocality (locality),
	CONSTRAINT address_pk PRIMARY KEY (id),
	CONSTRAINT address_fk_to_locality FOREIGN KEY (locality) REFERENCES locality (id)
) COMMENT 'таблица "адрес"';





DROP TABLE IF EXISTS object;
CREATE TABLE object
(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	state ENUM('1','2','3','4','5') NOT NULL COMMENT 'состояние объекта',
	title VARCHAR(255) NOT NULL COMMENT 'название объекта',
	category SET('1','2','3','4','5','6','7','8','9','10') NOT NULL COMMENT 'категория объекта (памятник, монумент и т.д.',
	adding_date DATETIME NOT NULL COMMENT 'заполняется программно',
	description TEXT COMMENT 'описание объекта',
	user INT UNSIGNED NOT NULL COMMENT 'внешний ключ ссылается на таблицу user',
	INDEX ixUser (user) COMMENT 'индекс на внешний ключ',
	mem_event INT UNSIGNED NOT NULL COMMENT 'внешний ключ ссылается на таблицу event',
	INDEX ixMem_Event (mem_event) COMMENT 'индекс на внешний ключ',
	address INT UNSIGNED NOT NULL COMMENT 'внешний ключ ссылается на таблицу address',
	INDEX ixAddress (address) COMMENT 'индекс на внешний ключ',
	/*image INT UNSIGNED NOT NULL COMMENT 'внешний ключ ссылается на таблицу image',
	INDEX ixImage (image) COMMENT 'индекс на внешний ключ',*/
	CONSTRAINT object_pk PRIMARY KEY (id),
	CONSTRAINT object_fk_to_user FOREIGN KEY (user) REFERENCES user (id),
	CONSTRAINT object_fk_to_mem_event FOREIGN KEY (mem_event) REFERENCES mem_event (id),
	CONSTRAINT object_fk_to_address FOREIGN KEY (address) REFERENCES address (id)/*,
	CONSTRAINT image_fk FOREIGN KEY (image) REFERENCES image (id)*/
) COMMENT 'таблица "пользователь"';


DROP TABLE IF EXISTS arangement;
CREATE TABLE arangement
(
	id INT UNSIGNED NOT NULL AUTO_INCREMENT,
	title VARCHAR(45) NOT NULL COMMENT 'название мероприятия',
	description TEXT COMMENT 'описание мероприятия',
	creation_date DATETIME COMMENT 'дата создания, заполняется программно',
	beginning_date DATETIME NOT NULL COMMENT 'дата проведения мероприятия',
	ending_date DATETIME COMMENT 'дата окончания мероприятия',

	user INT UNSIGNED NOT NULL COMMENT 'внешний ключ ссылается на таблицу user',
	INDEX ixUser (user) COMMENT 'индекс на внешний ключ',

	object INT UNSIGNED NOT NULL COMMENT 'внешний ключ ссылается на таблицу user',
	INDEX ixObject (object) COMMENT 'индекс на внешний ключ',

	CONSTRAINT arangement_pk PRIMARY KEY (id),
	CONSTRAINT arangement_fk_to_user FOREIGN KEY (user) REFERENCES user (id),
	CONSTRAINT arangement_fk_to_object FOREIGN KEY (object) REFERENCES object (id)
) COMMENT 'таблица "роль"';


ALTER TABLE region MODIFY title VARCHAR(45) NOT NULL;

ALTER TABLE locality MODIFY title VARCHAR(45) NOT NULL;

INSERT INTO auth_user
SET password = 'password',
	is_superuser = 1,
	username = 'admin',
	first_name = 'Ivan',
	last_name = 'Smirnov',
	email = 'netlenskiy@yandex.ru',
	is_staff = 1,
	is_active = 1,
	date_joined = NOW()