CREATE USER 'fdbaccdb24943a1c1423fc8b09f885a6'@'%' IDENTIFIED BY '6be6f545e812a61239d2ce648d452e2a';

CREATE DATABASE web1;

use web1;
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;
DROP TABLE IF EXISTS `flag_content`;
CREATE TABLE `flag_content`  (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `flag` varchar(255) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NULL DEFAULT NULL,
  PRIMARY KEY (`id`) USING BTREE
) ENGINE = MyISAM AUTO_INCREMENT = 4 CHARACTER SET = utf8mb4 COLLATE = utf8mb4_general_ci ROW_FORMAT = Dynamic;

INSERT INTO `flag_content` VALUES (1, '{A_S1mpl3_U5e1e55_f1ag}');
INSERT INTO `flag_content` VALUES (2, '{U5e1e55_t00}');
INSERT INTO `flag_content` VALUES (3, '{e1ecte0n_i5_a1way5_5afe}');

GRANT ALL ON web1.* TO 'fdbaccdb24943a1c1423fc8b09f885a6'@'%';
