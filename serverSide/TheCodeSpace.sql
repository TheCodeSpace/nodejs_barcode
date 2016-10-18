-- MySQL dump 10.13  Distrib 5.6.28, for osx10.9 (x86_64)
--
-- Host: localhost    Database: TheCodeSpace_inventory
-- ------------------------------------------------------
-- Server version	5.6.28

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
-- Table structure for table `TheCodeSpace_inventory_history`
--

DROP TABLE IF EXISTS `TheCodeSpace_inventory_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TheCodeSpace_inventory_history` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `User` int(11) DEFAULT NULL,
  `Product` int(11) DEFAULT NULL,
  `Action` varchar(11) DEFAULT '',
  `Admin` tinyint(1) DEFAULT NULL,
  `Date` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TheCodeSpace_inventory_history`
--

LOCK TABLES `TheCodeSpace_inventory_history` WRITE;
/*!40000 ALTER TABLE `TheCodeSpace_inventory_history` DISABLE KEYS */;
INSERT INTO `TheCodeSpace_inventory_history` VALUES (2,21,1,'U',0,NULL),(3,21,1,'I',0,NULL),(4,21,2,'U',0,NULL),(5,21,1,'I',0,NULL),(6,1,1,'I',0,NULL),(7,21,1,'U',0,'Tue Oct 18 2016 19:2'),(8,21,1,'U',0,'Tue Oct 18 2016 19:3'),(9,1,1,'I',0,'Tue Oct 18 2016 19:3'),(10,1,1,'I',1,'Tue Oct 18 2016 19:3');
/*!40000 ALTER TABLE `TheCodeSpace_inventory_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `TheCodeSpace_inventory_overview`
--

DROP TABLE IF EXISTS `TheCodeSpace_inventory_overview`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `TheCodeSpace_inventory_overview` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `Name` varchar(20) DEFAULT NULL,
  `Description` varchar(140) DEFAULT NULL,
  `In` int(11) DEFAULT NULL,
  `Out` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `TheCodeSpace_inventory_overview`
--

LOCK TABLES `TheCodeSpace_inventory_overview` WRITE;
/*!40000 ALTER TABLE `TheCodeSpace_inventory_overview` DISABLE KEYS */;
INSERT INTO `TheCodeSpace_inventory_overview` VALUES (1,'Arduino Nano','An Arduino.',3,7),(2,'LED',NULL,97,23);
/*!40000 ALTER TABLE `TheCodeSpace_inventory_overview` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2016-10-18 20:33:27
