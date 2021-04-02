-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Apr 01, 2021 at 10:59 PM
-- Server version: 10.4.17-MariaDB
-- PHP Version: 8.0.2

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_lrg`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_announcements`
--

CREATE TABLE `tbl_announcements` (
  `announcement_id` int(5) NOT NULL,
  `announcement_title` varchar(250) NOT NULL,
  `announcement_body` longtext NOT NULL,
  `announcement_date` date DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_announcements`
--

INSERT INTO `tbl_announcements` (`announcement_id`, `announcement_title`, `announcement_body`, `announcement_date`) VALUES
(1, 'Announcement Test 1', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ante metus dictum at tempor commodo ullamcorper. Id eu nisl nunc mi ipsum faucibus. Orci sagittis eu volutpat odio. Scelerisque purus semper eget duis at tellus. Dictumst quisque sagittis purus sit amet. Posuere morbi leo urna molestie at elementum eu facilisis sed. Vulputate eu scelerisque felis imperdiet proin. Enim blandit volutpat maecenas volutpat blandit aliquam etiam erat velit. Quam lacus suspendisse faucibus interdum.\r\n\r\nElementum nibh tellus molestie nunc non. Id faucibus nisl tincidunt eget nullam non. Etiam sit amet nisl purus in mollis nunc sed. Varius vel pharetra vel turpis nunc eget lorem. Vel turpis nunc eget lorem dolor sed viverra. Pellentesque eu tincidunt tortor aliquam nulla facilisi cras fermentum odio. Arcu felis bibendum ut tristique et egestas. Metus vulputate eu scelerisque felis imperdiet proin. Commodo sed egestas egestas fringilla phasellus faucibus scelerisque eleifend donec. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo.\r\n\r\nSit amet risus nullam eget felis eget nunc lobortis. In dictum non consectetur a erat. Enim ut sem viverra aliquet. Potenti nullam ac tortor vitae purus faucibus. Et tortor consequat id porta nibh venenatis cras. Faucibus nisl tincidunt eget nullam non nisi est sit amet. Dui nunc mattis enim ut tellus elementum sagittis. Eget nullam non nisi est sit amet. Sit amet dictum sit amet. Lacus suspendisse faucibus interdum posuere lorem ipsum dolor sit. Ut sem nulla pharetra diam. Nam libero justo laoreet sit amet cursus sit amet. Sed risus pretium quam vulputate dignissim suspendisse in est. Id donec ultrices tincidunt arcu non sodales neque sodales. Dolor purus non enim praesent. Sit amet nulla facilisi morbi tempus iaculis urna id volutpat. At consectetur lorem donec massa sapien faucibus et molestie.', '2021-03-29'),
(2, 'test', 'test', '2021-03-29');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE `tbl_user` (
  `user_id` mediumint(8) NOT NULL,
  `user_fname` varchar(250) NOT NULL,
  `user_name` varchar(250) NOT NULL,
  `user_pass` varchar(250) NOT NULL,
  `user_email` varchar(250) NOT NULL,
  `user_date` timestamp NOT NULL DEFAULT current_timestamp(),
  `user_ip` varchar(50) NOT NULL DEFAULT 'no',
  `user_level` int(2) NOT NULL DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`user_id`, `user_fname`, `user_name`, `user_pass`, `user_email`, `user_date`, `user_ip`, `user_level`) VALUES
(1, 'Taylor', 'admin', 'admin', 'test@test.ca', '2021-02-24 14:19:09', '127.0.0.1', 2),
(3, 'Parent Test', 'parent', 'parent', 'parent@test.ca', '2021-03-29 19:05:13', '127.0.0.1', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_announcements`
--
ALTER TABLE `tbl_announcements`
  ADD PRIMARY KEY (`announcement_id`);

--
-- Indexes for table `tbl_user`
--
ALTER TABLE `tbl_user`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_announcements`
--
ALTER TABLE `tbl_announcements`
  MODIFY `announcement_id` int(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `tbl_user`
--
ALTER TABLE `tbl_user`
  MODIFY `user_id` mediumint(8) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
