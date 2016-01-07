-- MySQL dump 10.13  Distrib 5.5.43, for debian-linux-gnu (x86_64)
--
-- Host: localhost    Database: ws
-- ------------------------------------------------------
-- Server version	5.5.43-0ubuntu0.14.04.1

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `auth_group`
--

DROP TABLE IF EXISTS `auth_group`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `name` (`name`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group`
--

LOCK TABLES `auth_group` WRITE;
/*!40000 ALTER TABLE `auth_group` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_group_permissions`
--

DROP TABLE IF EXISTS `auth_group_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_group_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `group_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `group_id` (`group_id`,`permission_id`),
  KEY `auth_group__permission_id_1f49ccbbdc69d2fc_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_group_permission_group_id_689710a9a73b7457_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_group__permission_id_1f49ccbbdc69d2fc_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_group_permissions`
--

LOCK TABLES `auth_group_permissions` WRITE;
/*!40000 ALTER TABLE `auth_group_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_group_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_permission`
--

DROP TABLE IF EXISTS `auth_permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `content_type_id` int(11) NOT NULL,
  `codename` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `content_type_id` (`content_type_id`,`codename`),
  CONSTRAINT `auth__content_type_id_508cf46651277a81_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=67 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_permission`
--

LOCK TABLES `auth_permission` WRITE;
/*!40000 ALTER TABLE `auth_permission` DISABLE KEYS */;
INSERT INTO `auth_permission` VALUES (1,'Can add log entry',1,'add_logentry'),(2,'Can change log entry',1,'change_logentry'),(3,'Can delete log entry',1,'delete_logentry'),(4,'Can add permission',2,'add_permission'),(5,'Can change permission',2,'change_permission'),(6,'Can delete permission',2,'delete_permission'),(7,'Can add group',3,'add_group'),(8,'Can change group',3,'change_group'),(9,'Can delete group',3,'delete_group'),(10,'Can add user',4,'add_user'),(11,'Can change user',4,'change_user'),(12,'Can delete user',4,'delete_user'),(13,'Can add content type',5,'add_contenttype'),(14,'Can change content type',5,'change_contenttype'),(15,'Can delete content type',5,'delete_contenttype'),(16,'Can add session',6,'add_session'),(17,'Can change session',6,'change_session'),(18,'Can delete session',6,'delete_session'),(19,'Can add util_category',7,'add_util_category'),(20,'Can change util_category',7,'change_util_category'),(21,'Can delete util_category',7,'delete_util_category'),(22,'Can add util_state',8,'add_util_state'),(23,'Can change util_state',8,'change_util_state'),(24,'Can delete util_state',8,'delete_util_state'),(25,'Can add role',9,'add_role'),(26,'Can change role',9,'change_role'),(27,'Can delete role',9,'delete_role'),(28,'Can add user',10,'add_user'),(29,'Can change user',10,'change_user'),(30,'Can delete user',10,'delete_user'),(34,'Can add country',12,'add_country'),(35,'Can change country',12,'change_country'),(36,'Can delete country',12,'delete_country'),(37,'Can add region',13,'add_region'),(38,'Can change region',13,'change_region'),(39,'Can delete region',13,'delete_region'),(40,'Can add district',14,'add_district'),(41,'Can change district',14,'change_district'),(42,'Can delete district',14,'delete_district'),(43,'Can add locality',15,'add_locality'),(44,'Can change locality',15,'change_locality'),(45,'Can delete locality',15,'delete_locality'),(46,'Can add address',16,'add_address'),(47,'Can change address',16,'change_address'),(48,'Can delete address',16,'delete_address'),(49,'Can add mem_event',17,'add_mem_event'),(50,'Can change mem_event',17,'change_mem_event'),(51,'Can delete mem_event',17,'delete_mem_event'),(52,'Can add object',18,'add_object'),(53,'Can change object',18,'change_object'),(54,'Can delete object',18,'delete_object'),(55,'Can add geo_object',19,'add_geo_object'),(56,'Can change geo_object',19,'change_geo_object'),(57,'Can delete geo_object',19,'delete_geo_object'),(58,'Can add arangement',20,'add_arangement'),(59,'Can change arangement',20,'change_arangement'),(60,'Can delete arangement',20,'delete_arangement'),(64,'Can add image',22,'add_image'),(65,'Can change image',22,'change_image'),(66,'Can delete image',22,'delete_image');
/*!40000 ALTER TABLE `auth_permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user`
--

DROP TABLE IF EXISTS `auth_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `password` varchar(128) NOT NULL,
  `last_login` datetime DEFAULT NULL,
  `is_superuser` tinyint(1) NOT NULL,
  `username` varchar(30) NOT NULL,
  `first_name` varchar(30) NOT NULL,
  `last_name` varchar(30) NOT NULL,
  `email` varchar(254) NOT NULL,
  `is_staff` tinyint(1) NOT NULL,
  `is_active` tinyint(1) NOT NULL,
  `date_joined` datetime NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user`
--

LOCK TABLES `auth_user` WRITE;
/*!40000 ALTER TABLE `auth_user` DISABLE KEYS */;
INSERT INTO `auth_user` VALUES (1,'pbkdf2_sha256$20000$KoKvrP3a54hQ$PAeEkbTCLtbSdxfuRIwECBGFxM98d/cEGbVwGYjBj5g=','2015-12-26 16:18:21',1,'root','','','netlenskiy@yandex.ru',1,1,'2015-12-06 17:52:49');
/*!40000 ALTER TABLE `auth_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_groups`
--

DROP TABLE IF EXISTS `auth_user_groups`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_groups` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `group_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`group_id`),
  KEY `auth_user_groups_group_id_33ac548dcf5f8e37_fk_auth_group_id` (`group_id`),
  CONSTRAINT `auth_user_groups_group_id_33ac548dcf5f8e37_fk_auth_group_id` FOREIGN KEY (`group_id`) REFERENCES `auth_group` (`id`),
  CONSTRAINT `auth_user_groups_user_id_4b5ed4ffdb8fd9b0_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_groups`
--

LOCK TABLES `auth_user_groups` WRITE;
/*!40000 ALTER TABLE `auth_user_groups` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_groups` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `auth_user_user_permissions`
--

DROP TABLE IF EXISTS `auth_user_user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `auth_user_user_permissions` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` int(11) NOT NULL,
  `permission_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `user_id` (`user_id`,`permission_id`),
  KEY `auth_user_u_permission_id_384b62483d7071f0_fk_auth_permission_id` (`permission_id`),
  CONSTRAINT `auth_user_user_permissi_user_id_7f0938558328534a_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `auth_user_u_permission_id_384b62483d7071f0_fk_auth_permission_id` FOREIGN KEY (`permission_id`) REFERENCES `auth_permission` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `auth_user_user_permissions`
--

LOCK TABLES `auth_user_user_permissions` WRITE;
/*!40000 ALTER TABLE `auth_user_user_permissions` DISABLE KEYS */;
/*!40000 ALTER TABLE `auth_user_user_permissions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_admin_log`
--

DROP TABLE IF EXISTS `django_admin_log`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_admin_log` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `action_time` datetime NOT NULL,
  `object_id` longtext,
  `object_repr` varchar(200) NOT NULL,
  `action_flag` smallint(5) unsigned NOT NULL,
  `change_message` longtext NOT NULL,
  `content_type_id` int(11) DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  KEY `djang_content_type_id_697914295151027a_fk_django_content_type_id` (`content_type_id`),
  KEY `django_admin_log_user_id_52fdd58701c5f563_fk_auth_user_id` (`user_id`),
  CONSTRAINT `django_admin_log_user_id_52fdd58701c5f563_fk_auth_user_id` FOREIGN KEY (`user_id`) REFERENCES `auth_user` (`id`),
  CONSTRAINT `djang_content_type_id_697914295151027a_fk_django_content_type_id` FOREIGN KEY (`content_type_id`) REFERENCES `django_content_type` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=38 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_admin_log`
--

LOCK TABLES `django_admin_log` WRITE;
/*!40000 ALTER TABLE `django_admin_log` DISABLE KEYS */;
INSERT INTO `django_admin_log` VALUES (1,'2015-12-06 17:55:04','1','user',1,'',9,1),(2,'2015-12-06 17:55:22','1','ivan',1,'',10,1),(3,'2015-12-06 17:55:41','1','test event',1,'',17,1),(4,'2015-12-06 17:56:54','1','Россия',1,'',12,1),(5,'2015-12-06 17:56:57','1','Костромская область, Россия',1,'',13,1),(6,'2015-12-06 17:56:59','1','Антроповский район',1,'',14,1),(7,'2015-12-06 18:00:45','2','Россия',1,'',12,1),(8,'2015-12-06 18:00:47','2','Костромская область, Россия',1,'',13,1),(9,'2015-12-06 18:00:49','2','Антроповский район',1,'',14,1),(10,'2015-12-06 18:09:01','3','Россия',1,'',12,1),(11,'2015-12-06 18:09:03','3','Костромская область, Россия',1,'',13,1),(12,'2015-12-06 18:09:04','3','Антроповский район',1,'',14,1),(13,'2015-12-06 18:09:08','4','Палкино',1,'',15,1),(14,'2015-12-06 18:09:11','1','Советская, Палкино',1,'',16,1),(15,'2015-12-06 18:09:32','1','test',1,'',18,1),(16,'2015-12-12 11:18:43','1','test',3,'',18,1),(17,'2015-12-12 11:24:07','2','test',1,'',18,1),(18,'2015-12-12 11:25:30','2','test',3,'',18,1),(19,'2015-12-12 11:26:09','3','test',1,'',18,1),(20,'2015-12-12 15:51:20','12','test',1,'',18,1),(21,'2015-12-13 17:06:24','15','test 1',1,'',18,1),(22,'2015-12-13 17:06:58','15','test 1',3,'',18,1),(23,'2015-12-13 17:17:06','16','test 1',1,'',18,1),(24,'2015-12-13 17:17:35','16','test 1',3,'',18,1),(25,'2015-12-13 17:27:34','17','test 1',1,'',18,1),(26,'2015-12-13 17:30:38','17','test 1',3,'',18,1),(27,'2015-12-13 17:31:57','18','asdf',1,'',18,1),(28,'2015-12-13 17:32:05','18','asdf',3,'',18,1),(29,'2015-12-13 17:36:19','19','asdf',1,'',18,1),(30,'2015-12-13 17:38:44','20','test 1',1,'',18,1),(31,'2015-12-13 18:08:21','29','test 1',1,'',18,1),(32,'2015-12-13 18:08:59','29','test 1',3,'',18,1),(33,'2015-12-13 18:11:16','30','вапро',1,'',18,1),(34,'2015-12-13 18:13:29','20','test 1',3,'',18,1),(35,'2015-12-13 18:13:29','19','asdf',3,'',18,1),(36,'2015-12-13 18:13:29','12','test',3,'',18,1),(37,'2015-12-13 18:13:29','3','test',3,'',18,1);
/*!40000 ALTER TABLE `django_admin_log` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_content_type`
--

DROP TABLE IF EXISTS `django_content_type`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_content_type` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app_label` varchar(100) NOT NULL,
  `model` varchar(100) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `django_content_type_app_label_45f3b1d93ec8c61c_uniq` (`app_label`,`model`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_content_type`
--

LOCK TABLES `django_content_type` WRITE;
/*!40000 ALTER TABLE `django_content_type` DISABLE KEYS */;
INSERT INTO `django_content_type` VALUES (1,'admin','logentry'),(3,'auth','group'),(2,'auth','permission'),(4,'auth','user'),(5,'contenttypes','contenttype'),(6,'sessions','session'),(16,'ws','address'),(20,'ws','arangement'),(12,'ws','country'),(14,'ws','district'),(19,'ws','geo_object'),(22,'ws','image'),(15,'ws','locality'),(17,'ws','mem_event'),(18,'ws','object'),(13,'ws','region'),(9,'ws','role'),(10,'ws','user'),(7,'ws','util_category'),(8,'ws','util_state');
/*!40000 ALTER TABLE `django_content_type` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_migrations`
--

DROP TABLE IF EXISTS `django_migrations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_migrations` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `app` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `applied` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=33 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_migrations`
--

LOCK TABLES `django_migrations` WRITE;
/*!40000 ALTER TABLE `django_migrations` DISABLE KEYS */;
INSERT INTO `django_migrations` VALUES (1,'contenttypes','0001_initial','2015-12-06 17:39:41'),(2,'auth','0001_initial','2015-12-06 17:39:44'),(3,'admin','0001_initial','2015-12-06 17:39:44'),(4,'contenttypes','0002_remove_content_type_name','2015-12-06 17:39:45'),(5,'auth','0002_alter_permission_name_max_length','2015-12-06 17:39:45'),(6,'auth','0003_alter_user_email_max_length','2015-12-06 17:39:45'),(7,'auth','0004_alter_user_username_opts','2015-12-06 17:39:45'),(8,'auth','0005_alter_user_last_login_null','2015-12-06 17:39:46'),(9,'auth','0006_require_contenttypes_0002','2015-12-06 17:39:46'),(10,'sessions','0001_initial','2015-12-06 17:39:46'),(11,'ws','0001_initial','2015-12-06 17:39:52'),(12,'ws','0002_auto_20151104_0832','2015-12-06 17:40:02'),(13,'ws','0003_auto_20151104_0901','2015-12-06 17:40:11'),(14,'ws','0004_util_category_util_state','2015-12-06 17:40:11'),(15,'ws','0005_auto_20151202_0903','2015-12-06 17:40:12'),(16,'ws','0006_object_state','2015-12-06 17:40:13'),(17,'ws','0007_auto_20151202_0917','2015-12-06 17:40:14'),(18,'ws','0008_auto_20151202_0948','2015-12-06 17:40:14'),(19,'ws','0009_auto_20151202_0950','2015-12-06 17:40:15'),(20,'ws','0010_auto_20151202_0952','2015-12-06 17:40:15'),(21,'ws','0011_auto_20151202_1003','2015-12-06 17:40:25'),(22,'ws','0012_auto_20151206_1558','2015-12-06 17:40:26'),(23,'ws','0013_auto_20151206_1601','2015-12-06 17:40:26'),(24,'ws','0014_auto_20151206_1623','2015-12-06 17:40:33'),(25,'ws','0015_auto_20151206_1625','2015-12-06 17:40:34'),(26,'ws','0016_auto_20151206_1645','2015-12-06 17:40:44'),(27,'ws','0017_auto_20151206_1655','2015-12-06 17:40:44'),(28,'ws','0018_auto_20151212_1343','2015-12-12 13:43:59'),(29,'ws','0019_auto_20151212_1542','2015-12-12 15:42:11'),(30,'ws','0020_auto_20151212_1550','2015-12-12 15:50:21'),(31,'ws','0021_auto_20151212_1554','2015-12-12 15:54:29'),(32,'ws','0018_auto_20151213_1514','2015-12-13 15:14:29');
/*!40000 ALTER TABLE `django_migrations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_de54fa62` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('603cs6rr1xz8yvls5fgefgaxiet9100e','ZWY0MzAyODE2ODlkODAxZDNjYzBjMjNmYTlmMjBiYjI5ZWY2NmI1NTp7Il9hdXRoX3VzZXJfaGFzaCI6IjllYjYxODJlNDEwYWU3NjEwZTcyZTlhMzlkYWQxYWQ2ZDY0Nzk3MWQiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2015-12-20 17:53:05'),('j92craxterphbqnx36rfwww0tto3mrje','ZWY0MzAyODE2ODlkODAxZDNjYzBjMjNmYTlmMjBiYjI5ZWY2NmI1NTp7Il9hdXRoX3VzZXJfaGFzaCI6IjllYjYxODJlNDEwYWU3NjEwZTcyZTlhMzlkYWQxYWQ2ZDY0Nzk3MWQiLCJfYXV0aF91c2VyX2JhY2tlbmQiOiJkamFuZ28uY29udHJpYi5hdXRoLmJhY2tlbmRzLk1vZGVsQmFja2VuZCIsIl9hdXRoX3VzZXJfaWQiOiIxIn0=','2016-01-09 16:18:21');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ws_address`
--

DROP TABLE IF EXISTS `ws_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ws_address` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `street` varchar(45) NOT NULL,
  `locality_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ws_address_7e3ea948` (`locality_id`),
  CONSTRAINT `ws_address_locality_id_440c05e477dc5c44_fk_ws_locality_id` FOREIGN KEY (`locality_id`) REFERENCES `ws_locality` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ws_address`
--

LOCK TABLES `ws_address` WRITE;
/*!40000 ALTER TABLE `ws_address` DISABLE KEYS */;
INSERT INTO `ws_address` VALUES (1,'Советская',4);
/*!40000 ALTER TABLE `ws_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ws_arangement`
--

DROP TABLE IF EXISTS `ws_arangement`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ws_arangement` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` longtext NOT NULL,
  `creation_date` datetime NOT NULL,
  `begining_date` datetime NOT NULL,
  `ending_date` datetime NOT NULL,
  `object_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ws_arangement_af31437c` (`object_id`),
  KEY `ws_arangement_e8701ad4` (`user_id`),
  CONSTRAINT `ws_arangement_object_id_3a3c2224befb4575_fk_ws_object_id` FOREIGN KEY (`object_id`) REFERENCES `ws_object` (`id`),
  CONSTRAINT `ws_arangement_user_id_64b23b9990ee45a3_fk_ws_user_id` FOREIGN KEY (`user_id`) REFERENCES `ws_user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ws_arangement`
--

LOCK TABLES `ws_arangement` WRITE;
/*!40000 ALTER TABLE `ws_arangement` DISABLE KEYS */;
/*!40000 ALTER TABLE `ws_arangement` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ws_country`
--

DROP TABLE IF EXISTS `ws_country`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ws_country` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(30) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ws_country`
--

LOCK TABLES `ws_country` WRITE;
/*!40000 ALTER TABLE `ws_country` DISABLE KEYS */;
INSERT INTO `ws_country` VALUES (1,'Россия'),(2,'Россия'),(3,'Россия');
/*!40000 ALTER TABLE `ws_country` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ws_district`
--

DROP TABLE IF EXISTS `ws_district`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ws_district` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `region_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ws_district_region_id_2a1ec5d309450710_fk_ws_region_id` (`region_id`),
  CONSTRAINT `ws_district_region_id_2a1ec5d309450710_fk_ws_region_id` FOREIGN KEY (`region_id`) REFERENCES `ws_region` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ws_district`
--

LOCK TABLES `ws_district` WRITE;
/*!40000 ALTER TABLE `ws_district` DISABLE KEYS */;
INSERT INTO `ws_district` VALUES (1,'Антроповский район',1),(2,'Антроповский район',2),(3,'Антроповский район',3);
/*!40000 ALTER TABLE `ws_district` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ws_geo_object`
--

DROP TABLE IF EXISTS `ws_geo_object`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ws_geo_object` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `disclamer` varchar(1000) NOT NULL,
  `latitude` double NOT NULL,
  `longitude` double NOT NULL,
  `face_link` varchar(255) NOT NULL,
  `gallery_link` varchar(255) NOT NULL,
  `object_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ws_geo_object_af31437c` (`object_id`),
  CONSTRAINT `ws_geo_object_object_id_3b124fd2536cf32a_fk_ws_object_id` FOREIGN KEY (`object_id`) REFERENCES `ws_object` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ws_geo_object`
--

LOCK TABLES `ws_geo_object` WRITE;
/*!40000 ALTER TABLE `ws_geo_object` DISABLE KEYS */;
INSERT INTO `ws_geo_object` VALUES (6,'вапродж','апролдэ',58.244306,42.930191,'ws/2015/12/13/images_080qET9.jpg','http://белыежуравли.рф',30);
/*!40000 ALTER TABLE `ws_geo_object` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ws_image`
--

DROP TABLE IF EXISTS `ws_image`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ws_image` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ws_image`
--

LOCK TABLES `ws_image` WRITE;
/*!40000 ALTER TABLE `ws_image` DISABLE KEYS */;
/*!40000 ALTER TABLE `ws_image` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ws_locality`
--

DROP TABLE IF EXISTS `ws_locality`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ws_locality` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `district_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ws_locality_a34a99d3` (`district_id`),
  CONSTRAINT `ws_locality_district_id_34b1cdd262db87df_fk_ws_district_id` FOREIGN KEY (`district_id`) REFERENCES `ws_district` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ws_locality`
--

LOCK TABLES `ws_locality` WRITE;
/*!40000 ALTER TABLE `ws_locality` DISABLE KEYS */;
INSERT INTO `ws_locality` VALUES (4,'Палкино',3);
/*!40000 ALTER TABLE `ws_locality` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ws_mem_event`
--

DROP TABLE IF EXISTS `ws_mem_event`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ws_mem_event` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `description` longtext NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ws_mem_event`
--

LOCK TABLES `ws_mem_event` WRITE;
/*!40000 ALTER TABLE `ws_mem_event` DISABLE KEYS */;
INSERT INTO `ws_mem_event` VALUES (1,'test event','');
/*!40000 ALTER TABLE `ws_mem_event` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ws_object`
--

DROP TABLE IF EXISTS `ws_object`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ws_object` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) NOT NULL,
  `category_id_id` int(11) DEFAULT NULL,
  `adding_date` date NOT NULL,
  `description` longtext NOT NULL,
  `address_id` int(11) DEFAULT NULL,
  `mem_event_id` int(11) DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  `state_id_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ws_object_category_id_79e284fa90e93289_uniq` (`category_id_id`),
  KEY `ws_object_d5582625` (`state_id_id`),
  KEY `ws_object_address_id_5664ab1291b1c1c_fk_ws_address_id` (`address_id`),
  KEY `ws_object_mem_event_id_61dc72d081da55a0_fk_ws_mem_event_id` (`mem_event_id`),
  KEY `ws_object_user_id_151cbd8e8cd31e82_fk_ws_user_id` (`user_id`),
  CONSTRAINT `ws_object_address_id_5664ab1291b1c1c_fk_ws_address_id` FOREIGN KEY (`address_id`) REFERENCES `ws_address` (`id`),
  CONSTRAINT `ws_object_category_id_id_65c10f4cc06bb3f8_fk_ws_util_category_id` FOREIGN KEY (`category_id_id`) REFERENCES `ws_util_category` (`id`),
  CONSTRAINT `ws_object_mem_event_id_61dc72d081da55a0_fk_ws_mem_event_id` FOREIGN KEY (`mem_event_id`) REFERENCES `ws_mem_event` (`id`),
  CONSTRAINT `ws_object_state_id_id_568955a35794713e_fk_ws_util_state_id` FOREIGN KEY (`state_id_id`) REFERENCES `ws_util_state` (`id`),
  CONSTRAINT `ws_object_user_id_151cbd8e8cd31e82_fk_ws_user_id` FOREIGN KEY (`user_id`) REFERENCES `ws_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ws_object`
--

LOCK TABLES `ws_object` WRITE;
/*!40000 ALTER TABLE `ws_object` DISABLE KEYS */;
INSERT INTO `ws_object` VALUES (30,'вапро',4,'2015-12-13','апролджэ',1,1,1,3);
/*!40000 ALTER TABLE `ws_object` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ws_region`
--

DROP TABLE IF EXISTS `ws_region`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ws_region` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  `country_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ws_region_country_id_48732b3c9f5a8305_fk_ws_country_id` (`country_id`),
  CONSTRAINT `ws_region_country_id_48732b3c9f5a8305_fk_ws_country_id` FOREIGN KEY (`country_id`) REFERENCES `ws_country` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ws_region`
--

LOCK TABLES `ws_region` WRITE;
/*!40000 ALTER TABLE `ws_region` DISABLE KEYS */;
INSERT INTO `ws_region` VALUES (1,'Костромская область',1),(2,'Костромская область',2),(3,'Костромская область',3);
/*!40000 ALTER TABLE `ws_region` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ws_role`
--

DROP TABLE IF EXISTS `ws_role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ws_role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(45) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ws_role`
--

LOCK TABLES `ws_role` WRITE;
/*!40000 ALTER TABLE `ws_role` DISABLE KEYS */;
INSERT INTO `ws_role` VALUES (1,'user');
/*!40000 ALTER TABLE `ws_role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ws_user`
--

DROP TABLE IF EXISTS `ws_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ws_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `soc_network` varchar(45) NOT NULL,
  `soc_network_id` varchar(45) NOT NULL,
  `nick` varchar(45) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(254) NOT NULL,
  `role_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `ws_user_role_id_343d07359fc081c9_fk_ws_role_id` (`role_id`),
  CONSTRAINT `ws_user_role_id_343d07359fc081c9_fk_ws_role_id` FOREIGN KEY (`role_id`) REFERENCES `ws_role` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ws_user`
--

LOCK TABLES `ws_user` WRITE;
/*!40000 ALTER TABLE `ws_user` DISABLE KEYS */;
INSERT INTO `ws_user` VALUES (1,'ivan','','','','password','email@email.com',1);
/*!40000 ALTER TABLE `ws_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ws_util_category`
--

DROP TABLE IF EXISTS `ws_util_category`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ws_util_category` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ws_util_category`
--

LOCK TABLES `ws_util_category` WRITE;
/*!40000 ALTER TABLE `ws_util_category` DISABLE KEYS */;
INSERT INTO `ws_util_category` VALUES (0,'Аллея'),(1,'Вечный огонь'),(2,'Мемориал'),(3,'Монумент'),(4,'Памятник'),(5,'Парк'),(6,'Площадь'),(7,'Обелиск'),(8,'Улица'),(9,'Другое');
/*!40000 ALTER TABLE `ws_util_category` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ws_util_state`
--

DROP TABLE IF EXISTS `ws_util_state`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ws_util_state` (
  `id` int(11) NOT NULL,
  `name` varchar(25) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ws_util_state`
--

LOCK TABLES `ws_util_state` WRITE;
/*!40000 ALTER TABLE `ws_util_state` DISABLE KEYS */;
INSERT INTO `ws_util_state` VALUES (1,'очень плохое'),(2,'плохое'),(3,'среднее'),(4,'хорошее'),(5,'отличное');
/*!40000 ALTER TABLE `ws_util_state` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-01-05 15:20:56
