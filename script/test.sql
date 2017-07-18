/*
Navicat MySQL Data Transfer

Source Server         : MySQLDATA
Source Server Version : 50713
Source Host           : localhost:3306
Source Database       : test

Target Server Type    : MYSQL
Target Server Version : 50713
File Encoding         : 65001

Date: 2017-07-18 17:07:22
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for hero
-- ----------------------------
DROP TABLE IF EXISTS `hero`;
CREATE TABLE `hero` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of hero
-- ----------------------------
INSERT INTO `hero` VALUES ('1', 'Mr. Nice');
INSERT INTO `hero` VALUES ('2', 'Narco');
INSERT INTO `hero` VALUES ('3', 'Bombasto');
INSERT INTO `hero` VALUES ('4', 'Celeritas');
INSERT INTO `hero` VALUES ('5', 'Magneta');
INSERT INTO `hero` VALUES ('6', 'RubberMan');
INSERT INTO `hero` VALUES ('7', 'Dynama');
INSERT INTO `hero` VALUES ('8', 'Dr IQ');
INSERT INTO `hero` VALUES ('9', 'Magma');
INSERT INTO `hero` VALUES ('10', 'Tornado');
