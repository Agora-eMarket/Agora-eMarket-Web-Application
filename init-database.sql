CREATE DATABASE albaik;

use albaik;

CREATE TABLE `user` (
 `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
 `fname` varchar(20) NOT NULL,
 `lname` varchar(20) NOT NULL,
 `email` varchar(50) NOT NULL,
 `mobile` varchar(10) NOT NULL,
 `hash` varchar(80) NOT NULL,
 PRIMARY KEY (`email`),
 UNIQUE KEY `id` (`id`)
);

 CREATE TABLE `orders` (
 `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
 `email` varchar(50) NOT NULL,
 `items` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL CHECK (json_valid(`items`)),
 `totalPrice` double NOT NULL,
 `status` varchar(25) NOT NULL,
 PRIMARY KEY (`id`),
 UNIQUE KEY `id` (`id`),
 KEY `email` (`email`),
 CONSTRAINT `orders_ibfk_1` FOREIGN KEY (`email`) REFERENCES `user` (`email`) ON DELETE CASCADE ON UPDATE CASCADE
);

 CREATE TABLE `item` (
 `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
 `name` varchar(50) NOT NULL,
 `description` varchar(50) NOT NULL,
 `price` double NOT NULL,
 `category` varchar(20) NOT NULL,
 `img` varchar(120) NOT NULL,
 UNIQUE KEY `id` (`id`)
);

INSERT INTO `item` (`id`, `name`, `description`, `price`, `category`, `img`) VALUES
(4, 'Almarai Full Fat Fresh Milk 2L', 'Origin - Kingdom of Saudi Arabia', 10.95, 'Dairy', 'https://cdnprod.mafretailproxy.com/sys-master-root/hc5/h94/16847349186590/106475_main.jpg_200Wx200H'),
(5, 'Almarai Full Fat Fresh Milk 2.85L', 'Origin - Kingdom of Saudi Arabia', 14.5, 'Dairy', 'https://cdnprod.mafretailproxy.com/sys-master-root/h78/h48/16847346925598/560836_main.jpg_200Wx200H'),
(6, 'Almarai Fresh Full Fat Laban 2L', 'Origin - Kingdom of Saudi Arabia', 10.95, 'Dairy', 'https://cdnprod.mafretailproxy.com/sys-master-root/h80/h7e/16847350005790/106459_main.jpg_200Wx200H'),
(7, 'Rahima Fresh Eggs White 15 Egg', 'Origin - Kingdom of Saudi Arabia', 11.95, 'Eggs', 'https://cdnprod.mafretailproxy.com/sys-master-root/h3e/h56/9021937647646/254557_main.jpg_200Wx200H'),
(8, 'Almarai Plain Full Fat Yogurt 170g', 'Origin - Kingdom of Saudi Arabia', 2, 'Dairy', 'https://cdnprod.mafretailproxy.com/sys-master-root/hf5/h0c/11671577952286/357349_main.jpg_200Wx200H'),
(9, 'Almarai Uht Cooking Cream 500ml', 'Origin - Kingdom of Saudi Arabia', 16.95, 'Dairy', 'https://cdnprod.mafretailproxy.com/sys-master-root/h85/h80/13893002952734/528573_main.jpg_200Wx200H'),
(10, 'Banana Delmonte', 'Approx 7 pieces/Kg', 7.9, 'Fruits', 'https://cdnprod.mafretailproxy.com/sys-master-root/hd7/hc7/9180054880286/78158_main.jpg_200Wx200H'),
(11, 'Cucumber', 'Approx 10 pieces/Kg', 4.9, 'Vegetables', 'https://cdnprod.mafretailproxy.com/sys-master-root/h58/hf8/9216722698270/78541_main.jpg_200Wx200H'),
(12, 'Potato Fresh', 'Approx 7 pieces/Kg', 3.9, 'Vegetables', 'https://cdnprod.mafretailproxy.com/sys-master-root/h8e/h2e/9216717324318/78680_main.jpg_200Wx200H'),
(13, 'Tomato', 'Approx 7 pieces/Kg', 4.9, 'Vegetables', 'https://cdnprod.mafretailproxy.com/sys-master-root/h6e/hb2/12624678289438/78493_main.jpg_200Wx200H'),
(14, 'Lemon', 'Approx 6 pieces/Kg', 5.9, 'Vegetables', 'https://cdnprod.mafretailproxy.com/sys-master-root/hd0/h46/9452471648286/77972_main.jpg_200Wx200H');

ALTER TABLE `item`
  ADD UNIQUE KEY `id` (`id`);

ALTER TABLE `item`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;
  
COMMIT;