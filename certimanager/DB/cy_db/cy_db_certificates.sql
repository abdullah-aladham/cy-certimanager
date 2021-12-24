CREATE DATABASE  IF NOT EXISTS `cy_db` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `cy_db`;
-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: cy_db
-- ------------------------------------------------------
-- Server version	8.0.27

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `certificates`
--

DROP TABLE IF EXISTS `certificates`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `certificates` (
  `id` int NOT NULL AUTO_INCREMENT,
  `Logged_At` varchar(255) DEFAULT NULL,
  `Common_Name` varchar(700) NOT NULL,
  `Matching_Identities` varchar(200) NOT NULL,
  `Issuer_Name` varchar(200) NOT NULL,
  `serial_number` varchar(700) NOT NULL,
  `Not_Before` varchar(255) NOT NULL,
  `Not_After` varchar(255) NOT NULL,
  `Issuer_id` int NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=168 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `certificates`
--

LOCK TABLES `certificates` WRITE;
/*!40000 ALTER TABLE `certificates` DISABLE KEYS */;
INSERT INTO `certificates` VALUES (103,'*.islamicbank.ps\nislamicbank.ps','*.islamicbank.ps','2021-02-16T09:27:10','C=US, ST=Arizona, L=Scottsdale, O=\"GoDaddy.com, Inc.\", OU=http://certs.godaddy.com/repository/, CN=Go Daddy Secure Certificate Authority - G2','00880c791aa391bf7f','2020-11-30T17:06:17.467','2020-11-30T17:06:15',904),(136,'2021-02-15T16:50:19.733','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, ST=Arizona, L=Scottsdale, O=\"GoDaddy.com, Inc.\", OU=http://certs.godaddy.com/repository/, CN=Go Daddy Secure Certificate Authority - G2','2937bdafc0d9a916','2021-02-15T16:50:18','2022-03-19T16:50:18',904),(137,'2020-12-25T19:56:47.666','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, ST=Arizona, L=Scottsdale, O=\"GoDaddy.com, Inc.\", OU=http://certs.godaddy.com/repository/, CN=Go Daddy Secure Certificate Authority - G2','00880c791aa391bf7f','2020-11-30T17:06:15','2021-02-16T09:27:10',904),(138,'2020-11-30T17:06:17.467','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, ST=Arizona, L=Scottsdale, O=\"GoDaddy.com, Inc.\", OU=http://certs.godaddy.com/repository/, CN=Go Daddy Secure Certificate Authority - G2','00880c791aa391bf7f','2020-11-30T17:06:15','2021-02-16T09:27:10',904),(139,'2020-11-23T11:34:17.372','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, ST=Arizona, L=Scottsdale, O=\"GoDaddy.com, Inc.\", OU=http://certs.godaddy.com/repository/, CN=Go Daddy Secure Certificate Authority - G2','00c69bda113e0aefd0','2020-11-23T11:34:16','2021-02-16T09:27:10',904),(140,'2020-11-10T10:12:22.973','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, ST=Arizona, L=Scottsdale, O=\"GoDaddy.com, Inc.\", OU=http://certs.godaddy.com/repository/, CN=Go Daddy Secure Certificate Authority - G2','00f263496be9f1e7bd','2020-11-10T10:12:21','2021-02-16T09:27:10',904),(141,'2020-03-28T05:21:42.822','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, ST=Arizona, L=Scottsdale, O=\"GoDaddy.com, Inc.\", OU=http://certs.godaddy.com/repository/, CN=Go Daddy Secure Certificate Authority - G2','4128a4cf684892be','2020-02-24T10:30:35','2021-02-16T09:27:10',904),(142,'2020-02-24T10:30:43.613','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, ST=Arizona, L=Scottsdale, O=\"GoDaddy.com, Inc.\", OU=http://certs.godaddy.com/repository/, CN=Go Daddy Secure Certificate Authority - G2','4128a4cf684892be','2020-02-24T10:30:35','2021-02-16T09:27:10',904),(143,'2020-02-23T06:24:10.511','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, ST=Arizona, L=Scottsdale, O=\"GoDaddy.com, Inc.\", OU=http://certs.godaddy.com/repository/, CN=Go Daddy Secure Certificate Authority - G2','00b5014ffea822a40c','2020-02-23T06:24:08','2021-02-16T09:27:10',904),(144,'2020-02-19T10:59:42.198','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, ST=Arizona, L=Scottsdale, O=\"GoDaddy.com, Inc.\", OU=http://certs.godaddy.com/repository/, CN=Go Daddy Secure Certificate Authority - G2','3d91bde38284bf71','2020-02-19T10:59:40','2021-02-16T09:27:10',904),(145,'2020-02-18T09:54:15.103','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, ST=Arizona, L=Scottsdale, O=\"GoDaddy.com, Inc.\", OU=http://certs.godaddy.com/repository/, CN=Go Daddy Secure Certificate Authority - G2','2b9a1c72216f2124','2020-02-18T09:54:11','2021-02-16T09:27:10',904),(146,'2020-02-17T11:09:11.978','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, ST=Arizona, L=Scottsdale, O=\"GoDaddy.com, Inc.\", OU=http://certs.godaddy.com/repository/, CN=Go Daddy Secure Certificate Authority - G2','67e38609e6386fa1','2020-02-17T11:09:06','2021-02-16T09:27:10',904),(147,'2020-02-17T08:22:14.926','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, ST=Arizona, L=Scottsdale, O=\"GoDaddy.com, Inc.\", OU=http://certs.godaddy.com/repository/, CN=Go Daddy Secure Certificate Authority - G2','00b58db3e5d3484573','2020-02-17T08:22:12','2021-02-16T09:27:10',904),(148,'2020-02-17T08:18:17.029','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, ST=Arizona, L=Scottsdale, O=\"GoDaddy.com, Inc.\", OU=http://certs.godaddy.com/repository/, CN=Go Daddy Secure Certificate Authority - G2','00c514f70947fff00c','2020-02-17T08:18:13','2021-02-16T09:27:10',904),(149,'2020-02-17T07:20:13.95','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, ST=Arizona, L=Scottsdale, O=\"GoDaddy.com, Inc.\", OU=http://certs.godaddy.com/repository/, CN=Go Daddy Secure Certificate Authority - G2','409be514e7e27404','2020-02-17T07:20:12','2021-02-16T09:27:10',904),(150,'2020-02-16T09:28:04.633','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, ST=Arizona, L=Scottsdale, O=\"GoDaddy.com, Inc.\", OU=http://certs.godaddy.com/repository/, CN=Go Daddy Secure Certificate Authority - G2','0ab9978d5354d397','2020-02-16T09:27:10','2021-02-16T09:27:10',904),(151,'2019-12-05T06:45:17.626','mobile.islamicbank.ps','mobile.islamicbank.ps\nwww.mobile.islamicbank.ps','C=US, O=DigiCert Inc, OU=www.digicert.com, CN=RapidSSL RSA CA 2018','074ff2161036ee479696aae2255e4440','2019-12-05T00:00:00','2020-01-15T12:00:00',62133),(152,'2019-07-23T11:30:57.759','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA','0ece7cec88c6bc20d648f900ab939e08','2019-07-23T00:00:00','2020-12-01T12:00:00',1191),(153,'2019-03-22T14:20:15.36','islamicbank.ps','islamicbank.ps\nwww.islamicbank.ps','C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA','0fa61c8b96c794b0eba94ec2b17aa42b','2019-03-22T00:00:00','2021-03-26T12:00:00',1191),(154,'2019-01-05T00:58:01.85','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA','06301314443d65cd3bd09db8fc95eca5','2019-01-05T00:00:00','2020-12-01T12:00:00',1191),(155,'2018-12-20T01:22:57.051','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps\nmobile-test.islamicbank.ps','C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA','08b950c8b44f087de80a7c5525fca4ac','2018-11-28T00:00:00','2020-12-01T12:00:00',1191),(156,'2018-11-28T17:47:37.577','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA','0f22254d5e325637f93b4c977f12515b','2018-11-28T00:00:00','2020-12-01T12:00:00',1191),(157,'2018-11-28T14:07:14.286','mobile.islamicbank.ps','mobile.islamicbank.ps','C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA','024d429fe30cf9297399f69a52c2558a','2018-11-28T00:00:00','2019-12-03T12:00:00',1191),(158,'2018-11-28T13:11:04.39','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps\nmobile-test.islamicbank.ps','C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA','08b950c8b44f087de80a7c5525fca4ac','2018-11-28T00:00:00','2020-12-01T12:00:00',1191),(159,'2018-11-28T12:29:13.975','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps\nmobile.islamicbank.ps','C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA','052fec003b1746bdf3906932e3906a31','2018-11-28T00:00:00','2020-12-01T12:00:00',1191),(160,'2018-11-28T12:23:13.193','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA','0bfad82c8fe8cf0c6afa2f60a991a406','2018-11-28T00:00:00','2020-12-01T12:00:00',1191),(161,'2018-11-28T10:56:02.079','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA','0f22254d5e325637f93b4c977f12515b','2018-11-28T00:00:00','2020-12-01T12:00:00',1191),(162,'2018-11-27T17:56:28.331','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA','04937a18d93a52d0112f941638f815b9','2018-11-27T00:00:00','2020-12-01T12:00:00',1191),(163,'2018-11-27T12:37:12.766','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA','04937a18d93a52d0112f941638f815b9','2018-11-27T00:00:00','2020-12-01T12:00:00',1191),(164,'2018-05-28T15:58:40.961','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps\nmobile-test.islamicbank.ps','C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA','08c2411476dac0704093b76d2c0bc41b','2018-04-11T00:00:00','2018-11-27T12:00:00',1191),(165,'2018-04-11T09:49:02.115','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps\nmobile-test.islamicbank.ps','C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA','08c2411476dac0704093b76d2c0bc41b','2018-04-11T00:00:00','2018-11-27T12:00:00',1191),(166,'2016-12-08T05:50:24.659','*.islamicbank.ps','*.islamicbank.ps\nislamicbank.ps','C=US, O=DigiCert Inc, CN=DigiCert SHA2 Secure Server CA','0181be322a02208de4bbf7724c37cef5','2015-11-23T00:00:00','2018-11-27T12:00:00',1191),(167,'2016-05-09T11:13:32.781','ns1.islamicbank.ps','ns1.islamicbank.ps\nwww.ns1.islamicbank.ps','C=US, ST=TX, L=Houston, O=\"cPanel, Inc.\", CN=\"cPanel, Inc. Certification Authority\"','00ec41e16be8c8c734c63772d8b39058df','2016-05-06T00:00:00','2017-05-06T23:59:59',12922);
/*!40000 ALTER TABLE `certificates` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-12-25  1:12:16
