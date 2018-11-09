-- phpMyAdmin SQL Dump
-- version 4.4.12
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Nov 06, 2016 at 09:52 AM
-- Server version: 5.6.26-log
-- PHP Version: 5.6.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `cgpa_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `course_reg_status`
--

CREATE TABLE IF NOT EXISTS `course_reg_status` (
  `reg` varchar(12) NOT NULL,
  `first_status` enum('0','1') NOT NULL,
  `second_status` enum('0','1') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `course_reg_status`
--

INSERT INTO `course_reg_status` (`reg`, `first_status`, `second_status`) VALUES
('11/EG/CO/512', '0', '1'),
('11/EE/FF/125', '0', '1');

-- --------------------------------------------------------

--
-- Table structure for table `department`
--

CREATE TABLE IF NOT EXISTS `department` (
  `id` int(3) NOT NULL,
  `department_name` varchar(50) NOT NULL,
  `code_of_department` varchar(3) NOT NULL,
  `faculty` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `department`
--

INSERT INTO `department` (`id`, `department_name`, `code_of_department`, `faculty`) VALUES
(1, 'Computer Engineering', 'CPE', 'ENG'),
(2, 'Electrical/Electronics Engineering', 'EEE', 'ENG'),
(3, 'Agricultural Engineering', 'AGE', 'ENG'),
(4, 'Mechanical Engineering', 'MCE', 'ENG'),
(5, 'Food Engineering', 'FDE', 'ENG'),
(6, 'Civil Engineering', 'CVE', 'ENG'),
(7, 'Chemical Engineering', 'CHE', 'ENG'),
(8, 'Petroleum Engineering', 'PTE', 'ENG'),
(9, 'Computer Science', 'CPS', 'SCI'),
(10, 'Mathematics', 'MTH', 'SCI'),
(11, 'Physics', 'PHY', 'SCI'),
(12, 'Chemistry', 'CHM', 'SCI'),
(13, 'Micro Biology', 'MCB', 'SCI');

-- --------------------------------------------------------

--
-- Table structure for table `faculty`
--

CREATE TABLE IF NOT EXISTS `faculty` (
  `id` int(3) NOT NULL,
  `faculty_name` varchar(18) NOT NULL,
  `code_of_faculty` varchar(3) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `faculty`
--

INSERT INTO `faculty` (`id`, `faculty_name`, `code_of_faculty`) VALUES
(1, 'Engineering', 'ENG'),
(2, 'Science', 'SCI');

-- --------------------------------------------------------

--
-- Table structure for table `first_semester_courses`
--

CREATE TABLE IF NOT EXISTS `first_semester_courses` (
  `id` int(3) NOT NULL,
  `course_title` varchar(60) NOT NULL,
  `course_code` varchar(6) NOT NULL,
  `course_credit_hour` int(1) NOT NULL,
  `level` int(3) NOT NULL,
  `faculty` varchar(3) NOT NULL,
  `department` varchar(3) DEFAULT NULL,
  `course_type` enum('C','E','R','') NOT NULL,
  `gen` int(1) NOT NULL,
  `shared_dept` varchar(256) DEFAULT NULL,
  `child_course` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `first_semester_courses`
--

INSERT INTO `first_semester_courses` (`id`, `course_title`, `course_code`, `course_credit_hour`, `level`, `faculty`, `department`, `course_type`, `gen`, `shared_dept`, `child_course`) VALUES
(1, 'General Mathematics I', 'MTH111', 4, 100, 'SCI', 'MTH', 'C', 1, NULL, NULL),
(2, 'General Physics I', 'PHY111', 3, 100, 'SCI', 'PHY', 'C', 1, NULL, NULL),
(3, 'General Chemistry I', 'CHM111', 3, 100, 'SCI', 'CHM', 'C', 1, NULL, NULL),
(4, 'Use Of English I', 'GST111', 2, 100, 'GST', 'GST', 'C', 1, NULL, NULL),
(5, 'Engineering Mathemaics I', 'GRE211', 3, 200, 'ENG', 'FDE', 'C', 1, NULL, 'MTH111'),
(7, 'General Physics Laboratory I', 'PHY112', 1, 100, 'SCI', 'PHY', 'C', 1, NULL, NULL),
(8, 'General Chemistry Laboratory I', 'CHM112', 1, 100, 'SCI', 'CHM', 'C', 1, NULL, NULL),
(10, 'Philosophy & Human Exixtence', 'GST112', 2, 100, 'GST', 'GST', 'C', 1, NULL, NULL),
(11, 'Engineer in Society', 'GRE212', 1, 200, 'ENG', 'FDE', 'C', 1, NULL, NULL),
(12, 'Workshop Practice I', 'GRE214', 1, 200, 'ENG', 'MCE', 'C', 1, NULL, NULL),
(13, 'Engineering Drawing III', 'GRE213', 1, 200, 'ENG', 'MCE', 'C', 1, NULL, 'GRE111'),
(14, 'Electrical Engineering I', 'ELE211', 2, 200, 'ENG', 'EEE', 'C', 0, 'CPE', NULL),
(15, 'Applied Electrical Lab I', 'ELE212', 1, 200, 'ENG', 'EEE', 'C', 0, 'CPE', NULL),
(16, 'Strength of Material I', 'CVE211', 2, 200, 'ENG', 'CVE', 'C', 0, 'CPE,ELE,FDE', NULL),
(17, 'Engineering Mechanics I', 'MEE211', 2, 200, 'ENG', 'MCE', 'C', 0, 'CPE,ELE,FDE', 'PHY111'),
(18, 'Engineering Materials', 'MEE212', 2, 200, 'ENG', 'MCE', 'C', 0, 'ELE,CPE,FDE', 'CHM111'),
(19, 'Computer Circuit and Applications 1 (Lab)', 'CPE219', 1, 200, 'ENG', 'CPE', 'C', 0, NULL, NULL),
(20, 'Computer Programming and Languages 1', 'CPE211', 2, 200, 'ENG', 'CPE', 'C', 0, 'ELE,FDE,CVE,CHE', NULL),
(21, 'Computer-based management Information System', 'CPE213', 2, 200, 'ENG', 'CPE', 'C', 0, NULL, NULL),
(22, 'Enterpreneural Studies', 'GST211', 2, 200, 'GST', 'GST', 'C', 1, NULL, NULL),
(23, 'Engineering Drawing I', 'GRE111', 1, 100, 'ENG', 'MCE', 'C', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `first_semester_outstanding`
--

CREATE TABLE IF NOT EXISTS `first_semester_outstanding` (
  `id` int(11) NOT NULL,
  `reg_number` varchar(12) NOT NULL,
  `course_code` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `first_semester_outstanding`
--

INSERT INTO `first_semester_outstanding` (`id`, `reg_number`, `course_code`) VALUES
(0, '11/EE/FF/124', 'PHY111'),
(0, '11/EG/CO/512', 'GRE213'),
(0, '11/EE/FF/125', 'MEE211'),
(0, '11/EE/FF/125', 'MEE212'),
(0, '11/EE/FF/125', 'CVE211'),
(0, '11/EE/FF/125', 'CPE211'),
(0, '11/EE/FF/125', 'CPE213'),
(0, '11/EE/FF/125', 'GRE211'),
(0, '11/EE/FF/125', 'GRE212'),
(0, '11/EE/FF/125', 'GRE214'),
(0, '11/EE/FF/125', 'GRE213');

-- --------------------------------------------------------

--
-- Table structure for table `first_semester_reg_courses`
--

CREATE TABLE IF NOT EXISTS `first_semester_reg_courses` (
  `course_code` varchar(30) NOT NULL,
  `reg_number` varchar(14) NOT NULL,
  `grade` enum('A','B','C','D','E','F') DEFAULT NULL,
  `level` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `first_semester_reg_courses`
--

INSERT INTO `first_semester_reg_courses` (`course_code`, `reg_number`, `grade`, `level`) VALUES
('MTH111', '11/EE/FF/124', 'A', 100),
('PHY111', '11/EE/FF/124', 'F', 100),
('CHM111', '11/EE/FF/124', 'D', 100),
('GST111', '11/EE/FF/124', 'C', 100),
('PHY112', '11/EE/FF/124', 'B', 100),
('CHM112', '11/EE/FF/124', 'C', 100),
('GST112', '11/EE/FF/124', 'C', 100),
('GRE111', '11/EE/FF/124', 'A', 100),
('MTH111', '11/EG/CO/512', 'C', 100),
('PHY111', '11/EG/CO/512', 'A', 100),
('CHM111', '11/EG/CO/512', 'D', 100),
('GST111', '11/EG/CO/512', 'C', 100),
('PHY112', '11/EG/CO/512', 'D', 100),
('CHM112', '11/EG/CO/512', 'E', 100),
('GST112', '11/EG/CO/512', 'A', 100),
('GRE111', '11/EG/CO/512', 'D', 100),
('CPE219', '11/EG/CO/512', 'A', 200),
('CPE211', '11/EG/CO/512', 'D', 200),
('CPE213', '11/EG/CO/512', 'B', 200),
('GRE211', '11/EG/CO/512', 'C', 200),
('GRE212', '11/EG/CO/512', 'A', 200),
('GRE214', '11/EG/CO/512', 'B', 200),
('GRE213', '11/EG/CO/512', 'F', 200),
('GST211', '11/EG/CO/512', 'A', 200),
('ELE211', '11/EG/CO/512', 'A', 200),
('ELE212', '11/EG/CO/512', 'A', 200),
('CVE211', '11/EG/CO/512', 'B', 200),
('MEE211', '11/EG/CO/512', 'C', 200),
('MEE212', '11/EG/CO/512', 'A', 200),
('MTH111', '11/EE/FF/125', 'A', 100),
('PHY111', '11/EE/FF/125', 'F', 100),
('CHM111', '11/EE/FF/125', 'F', 100),
('GST111', '11/EE/FF/125', 'F', 100),
('PHY112', '11/EE/FF/125', 'A', 100),
('CHM112', '11/EE/FF/125', 'A', 100),
('GST112', '11/EE/FF/125', 'A', 100),
('GRE111', '11/EE/FF/125', 'A', 100),
('PHY111', '11/EE/FF/125', 'A', 200),
('CHM111', '11/EE/FF/125', 'C', 200),
('GST111', '11/EE/FF/125', 'C', 200),
('CPE219', '11/EE/FF/125', 'A', 200),
('CPE211', '11/EE/FF/125', 'F', 200),
('CPE213', '11/EE/FF/125', 'F', 200),
('GRE211', '11/EE/FF/125', 'F', 200),
('GRE212', '11/EE/FF/125', 'F', 200),
('GRE214', '11/EE/FF/125', 'F', 200),
('GRE213', '11/EE/FF/125', 'F', 200),
('GST211', '11/EE/FF/125', 'A', 200),
('ELE211', '11/EE/FF/125', 'A', 200),
('ELE212', '11/EE/FF/125', 'A', 200);

--
-- Triggers `first_semester_reg_courses`
--
DELIMITER $$
CREATE TRIGGER `add_chour` BEFORE INSERT ON `first_semester_reg_courses`
 FOR EACH ROW BEGIN
DECLARE rRS int DEFAULT 0;
DECLARE smtr varchar(7);
DECLARE cRS int DEFAULT 0;
DECLARE chr int DEFAULT 0;
SELECT semester INTO smtr FROM school_session LIMIT 1;
SELECT COUNT(*) INTO cRS FROM course_reg_status WHERE reg = NEW.reg_number;
SELECT count(reg_number) INTO rRS FROM result_summary WHERE reg_number = NEW.reg_number AND level = NEW.level AND semester = smtr;
SELECT course_credit_hour INTO chr FROM first_semester_courses WHERE course_code = NEW.course_code;


if cRS = 0 THEN
	if smtr = 'first' THEN
    	INSERT INTO course_reg_status SET
			reg = NEW.reg_number,
			first_status = '1',
			second_status = '0';
	ELSEIF smtr = 'second' THEN
    	INSERT INTO course_reg_status SET
			reg = NEW.reg_number,
			first_status = '0',
			second_status = '1';
    END IF;
ELSEIF cRS > 0 THEN
	if smtr = 'first' THEN
    	UPDATE course_reg_status SET
			first_status = '1',
			second_status = '0' WHERE reg = NEW.reg_number;
	ELSEIF smtr = 'second' THEN
    	UPDATE course_reg_status SET
			first_status = '0',
			second_status = '1' WHERE reg = NEW.reg_number;
    END IF;
	

END IF;

IF rRS = 0 THEN 
	INSERT INTO result_summary SET
	ready = '0',
    semester = smtr,
    level = NEW.level,
    credit_hour = 0,
    reg_number = NEW.reg_number;
END IF;


END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `add_grade` AFTER UPDATE ON `first_semester_reg_courses`
 FOR EACH ROW BEGIN
DECLARE Vgrade CHAR(1);
DECLARE Vvalue int;
DECLARE QP int;
DECLARE failedCount int;
DECLARE chr int(1) DEFAULT 1;
SELECT COUNT(*) INTO failedCount FROM first_semester_outstanding WHERE reg_number = NEW.reg_number AND course_code = NEW.course_code;
SELECT course_credit_hour INTO chr FROM first_semester_courses WHERE course_code = NEW.course_code;
SET Vgrade = NEW.grade;
IF Vgrade = 'A' THEN
	SET Vvalue = 5;
ELSEIF Vgrade = 'B' THEN
	SET Vvalue = 4;
ELSEIF Vgrade = 'C' THEN
	SET Vvalue = 3;    
ELSEIF Vgrade = 'D' THEN
	SET Vvalue = 2;    
ELSEIF Vgrade = 'E' THEN
	SET Vvalue = 1; 
ELSEIF Vgrade = 'F' THEN
	SET Vvalue = 0;
    IF failedCount = 0 THEN
    	INSERT INTO first_semester_outstanding SET
        reg_number = NEW.reg_number,
        course_code = NEW.course_code;
    END IF;
END IF;
IF failedCount = 1 THEN
	IF Vgrade != 'F' THEN
    	DELETE FROM first_semester_outstanding WHERE reg_number = NEW.reg_number AND course_code = NEW.course_code;
    
    END IF;

END IF;
SET QP = chr*Vvalue;

UPDATE result_summary SET
	ready = 1,
    credit_hour = credit_hour + chr,
    qualitative_point = qualitative_point + QP,
    grade_point = qualitative_point/credit_hour
    WHERE level = NEW.level AND semester = 'first' AND reg_number = NEW.reg_number;

END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `last_log`
--

CREATE TABLE IF NOT EXISTS `last_log` (
  `id` int(6) NOT NULL,
  `reg` varchar(14) NOT NULL,
  `old` int(11) NOT NULL,
  `new` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `last_log`
--

INSERT INTO `last_log` (`id`, `reg`, `old`, `new`) VALUES
(0, '11/EE/FF/124', 1477518566, 1478413881),
(0, '11/EG/CO/512', 1478329767, 1478419806),
(0, '11/EE/FF/125', 1478413772, 1478419901);

-- --------------------------------------------------------

--
-- Table structure for table `page_properties`
--

CREATE TABLE IF NOT EXISTS `page_properties` (
  `id` int(11) NOT NULL,
  `title` varchar(100) NOT NULL,
  `pageID` varchar(20) NOT NULL,
  `page_label` varchar(50) NOT NULL
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;

--
-- Dumping data for table `page_properties`
--

INSERT INTO `page_properties` (`id`, `title`, `pageID`, `page_label`) VALUES
(1, 'Course Management', 'cmanagement', 'Course Management'),
(2, 'Course management | Register Courses', 'regcourses', 'Register Courses');

-- --------------------------------------------------------

--
-- Table structure for table `portal_status`
--

CREATE TABLE IF NOT EXISTS `portal_status` (
  `status` enum('closed','opened') NOT NULL DEFAULT 'opened'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `portal_status`
--

INSERT INTO `portal_status` (`status`) VALUES
('opened');

-- --------------------------------------------------------

--
-- Table structure for table `result_summary`
--

CREATE TABLE IF NOT EXISTS `result_summary` (
  `reg_number` varchar(12) NOT NULL,
  `credit_hour` int(3) NOT NULL,
  `qualitative_point` int(3) NOT NULL,
  `grade_point` float NOT NULL,
  `semester` varchar(15) NOT NULL,
  `ready` enum('1','0') NOT NULL DEFAULT '0',
  `level` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `result_summary`
--

INSERT INTO `result_summary` (`reg_number`, `credit_hour`, `qualitative_point`, `grade_point`, `semester`, `ready`, `level`) VALUES
('11/EE/FF/124', 17, 50, 2.94118, 'first', '1', 100),
('11/EE/FF/124', 0, 0, 0, 'second', '0', 100),
('11/EG/CO/512', 17, 54, 3.17647, 'first', '1', 100),
('11/EG/CO/512', 19, 66, 3.47368, 'second', '1', 100),
('11/EG/CO/512', 22, 84, 3.81818, 'first', '1', 200),
('11/EG/CO/512', 0, 0, 0, 'second', '0', 200),
('11/EE/FF/125', 17, 45, 2.64706, 'first', '1', 100),
('11/EE/FF/125', 19, 54, 2.84211, 'second', '1', 100),
('11/EE/FF/125', 30, 72, 2.4, 'first', '1', 200),
('11/EE/FF/125', 0, 0, 0, 'second', '0', 200);

-- --------------------------------------------------------

--
-- Table structure for table `school_session`
--

CREATE TABLE IF NOT EXISTS `school_session` (
  `session` varchar(9) NOT NULL,
  `semester` enum('first','second') NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `school_session`
--

INSERT INTO `school_session` (`session`, `semester`) VALUES
('2013/2014', 'second');

-- --------------------------------------------------------

--
-- Table structure for table `second_semester_courses`
--

CREATE TABLE IF NOT EXISTS `second_semester_courses` (
  `id` int(11) NOT NULL,
  `course_title` varchar(60) NOT NULL,
  `course_code` varchar(6) NOT NULL,
  `course_credit_hour` int(1) NOT NULL,
  `level` int(3) NOT NULL,
  `faculty` varchar(3) NOT NULL,
  `department` varchar(3) DEFAULT NULL,
  `course_type` enum('C','E','R','') NOT NULL,
  `gen` int(1) NOT NULL,
  `shared_dept` varchar(256) DEFAULT NULL,
  `child_course` varchar(6) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `second_semester_courses`
--

INSERT INTO `second_semester_courses` (`id`, `course_title`, `course_code`, `course_credit_hour`, `level`, `faculty`, `department`, `course_type`, `gen`, `shared_dept`, `child_course`) VALUES
(1, 'General Mathematics II', 'MTH121', 4, 100, 'SCI', 'MTH', 'C', 1, NULL, NULL),
(2, 'General Physics II', 'PHY121', 3, 100, 'SCI', 'PHY', 'C', 1, NULL, NULL),
(3, 'General Chemistry II', 'CHM121', 3, 100, 'SCI', 'CHM', 'C', 1, NULL, NULL),
(4, 'Use Of English II', 'GST121', 2, 100, 'GST', 'GST', 'C', 1, NULL, NULL),
(5, 'Engineering Drawing IV', 'GRE222', 1, 200, 'ENG', 'MCE', 'C', 1, NULL, 'GRE121'),
(6, 'Engineering Mathemaics II', 'GRE221', 3, 200, 'ENG', 'FDE', 'C', 1, NULL, 'MTH121'),
(7, 'General Physics Laboratory II', 'PHY122', 1, 100, 'SCI', 'PHY', 'C', 1, NULL, NULL),
(8, 'Science and Basic Technology', 'GST122', 2, 100, 'GST', 'GST', 'C', 1, NULL, NULL),
(9, 'Engineering Drawing II', 'GRE121', 1, 100, 'ENG', 'MCE', 'C', 1, NULL, NULL),
(10, 'General Chemistry II (Lab)', 'CHM122', 1, 100, 'SCI', 'CHM', 'C', 1, NULL, NULL),
(11, 'Computer Appreciation and Application', 'CPE121', 2, 100, 'ENG', 'CPE', 'C', 0, NULL, NULL),
(12, 'Workshop Practice II', 'GRE223', 1, 200, 'ENG', 'MCE', 'C', 1, NULL, NULL),
(13, 'Electrical Engineering II', 'ELE221', 2, 200, 'ENG', 'EEE', 'C', 0, 'CPE', 'PHY121'),
(14, 'Applied Electrical Lab II', 'ELE222', 1, 200, 'ENG', 'EEE', 'C', 0, 'CPE', NULL),
(15, 'Strenght of Material II', 'CVE221', 2, 200, 'ENG', 'CVE', 'C', 1, NULL, NULL),
(16, 'Thermodynamics and Heat Transfer', 'MEE221', 3, 200, 'ENG', 'MCE', 'C', 1, NULL, NULL),
(17, 'Fluid Mechanics', 'MEE222', 2, 200, 'ENG', 'MCE', 'C', 1, NULL, NULL),
(18, 'Engineering Mechanics II', 'MEE223', 2, 200, 'ENG', 'MCE', 'C', 1, NULL, NULL),
(19, 'Computer Programming and Languages II', 'CPE221', 2, 200, 'ENG', 'CPE', 'C', 0, 'ELE,FDE,CVE', NULL),
(20, 'Enterpreneural Studies II', 'GST222', 2, 200, 'GST', 'GST', 'C', 1, NULL, NULL),
(21, 'SWEP 1', 'GRE224', 1, 200, 'ENG', 'MCE', 'C', 1, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `second_semester_outstanding`
--

CREATE TABLE IF NOT EXISTS `second_semester_outstanding` (
  `id` int(11) NOT NULL,
  `reg_number` varchar(12) NOT NULL,
  `course_code` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `second_semester_outstanding`
--

INSERT INTO `second_semester_outstanding` (`id`, `reg_number`, `course_code`) VALUES
(0, '11/EG/CO/512', 'GST122'),
(0, '11/EE/FF/125', 'MTH121'),
(0, '11/EE/FF/125', 'PHY121');

-- --------------------------------------------------------

--
-- Table structure for table `second_semester_reg_courses`
--

CREATE TABLE IF NOT EXISTS `second_semester_reg_courses` (
  `course_code` varchar(30) NOT NULL,
  `reg_number` varchar(14) NOT NULL,
  `grade` enum('A','B','C','D','E','F') DEFAULT NULL,
  `level` int(4) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `second_semester_reg_courses`
--

INSERT INTO `second_semester_reg_courses` (`course_code`, `reg_number`, `grade`, `level`) VALUES
('CPE121', '11/EE/FF/124', NULL, 100),
('MTH121', '11/EE/FF/124', NULL, 100),
('PHY121', '11/EE/FF/124', NULL, 100),
('CHM121', '11/EE/FF/124', NULL, 100),
('GST121', '11/EE/FF/124', NULL, 100),
('PHY122', '11/EE/FF/124', NULL, 100),
('GST122', '11/EE/FF/124', NULL, 100),
('GRE121', '11/EE/FF/124', NULL, 100),
('CHM122', '11/EE/FF/124', NULL, 100),
('CPE121', '11/EG/CO/512', 'A', 100),
('MTH121', '11/EG/CO/512', 'C', 100),
('PHY121', '11/EG/CO/512', 'A', 100),
('CHM121', '11/EG/CO/512', 'C', 100),
('GST121', '11/EG/CO/512', 'B', 100),
('PHY122', '11/EG/CO/512', 'B', 100),
('GST122', '11/EG/CO/512', 'F', 100),
('GRE121', '11/EG/CO/512', 'C', 100),
('CHM122', '11/EG/CO/512', 'A', 100),
('GST122', '11/EG/CO/512', NULL, 200),
('CPE221', '11/EG/CO/512', NULL, 200),
('GRE222', '11/EG/CO/512', NULL, 200),
('GRE221', '11/EG/CO/512', NULL, 200),
('GRE223', '11/EG/CO/512', NULL, 200),
('CVE221', '11/EG/CO/512', NULL, 200),
('MEE221', '11/EG/CO/512', NULL, 200),
('MEE222', '11/EG/CO/512', NULL, 200),
('MEE223', '11/EG/CO/512', NULL, 200),
('GST222', '11/EG/CO/512', NULL, 200),
('GRE224', '11/EG/CO/512', NULL, 200),
('ELE221', '11/EG/CO/512', NULL, 200),
('ELE222', '11/EG/CO/512', NULL, 200),
('CPE121', '11/EE/FF/125', 'A', 100),
('MTH121', '11/EE/FF/125', 'F', 100),
('PHY121', '11/EE/FF/125', 'F', 100),
('CHM121', '11/EE/FF/125', 'A', 100),
('GST121', '11/EE/FF/125', 'A', 100),
('PHY122', '11/EE/FF/125', 'C', 100),
('GST122', '11/EE/FF/125', 'B', 100),
('GRE121', '11/EE/FF/125', 'B', 100),
('CHM122', '11/EE/FF/125', 'B', 100),
('MTH121', '11/EE/FF/125', NULL, 200),
('PHY121', '11/EE/FF/125', NULL, 200),
('CPE221', '11/EE/FF/125', NULL, 200),
('GRE222', '11/EE/FF/125', NULL, 200),
('GRE223', '11/EE/FF/125', NULL, 200),
('CVE221', '11/EE/FF/125', NULL, 200),
('MEE221', '11/EE/FF/125', NULL, 200),
('MEE222', '11/EE/FF/125', NULL, 200),
('MEE223', '11/EE/FF/125', NULL, 200),
('GST222', '11/EE/FF/125', NULL, 200),
('ELE222', '11/EE/FF/125', NULL, 200),
('GRE224', '11/EE/FF/125', NULL, 200);

--
-- Triggers `second_semester_reg_courses`
--
DELIMITER $$
CREATE TRIGGER `add_chour2` BEFORE INSERT ON `second_semester_reg_courses`
 FOR EACH ROW BEGIN
DECLARE rRS int DEFAULT 0;
DECLARE smtr varchar(7);
DECLARE cRS int DEFAULT 0;
DECLARE chr int DEFAULT 0;
SELECT semester INTO smtr FROM school_session LIMIT 1;
SELECT COUNT(*) INTO cRS FROM course_reg_status WHERE reg = NEW.reg_number;
SELECT count(reg_number) INTO rRS FROM result_summary WHERE reg_number = NEW.reg_number AND level = NEW.level AND semester = smtr;
SELECT course_credit_hour INTO chr FROM first_semester_courses WHERE course_code = NEW.course_code;


if cRS = 0 THEN
    if smtr = 'first' THEN
        INSERT INTO course_reg_status SET
            reg = NEW.reg_number,
            first_status = '1',
            second_status = '0';
    ELSEIF smtr = 'second' THEN
        INSERT INTO course_reg_status SET
            reg = NEW.reg_number,
            first_status = '0',
            second_status = '1';
    END IF;
ELSEIF cRS > 0 THEN
    if smtr = 'first' THEN
        UPDATE course_reg_status SET
            first_status = '1',
            second_status = '0' WHERE reg = NEW.reg_number;
    ELSEIF smtr = 'second' THEN
        UPDATE course_reg_status SET
            first_status = '0',
            second_status = '1' WHERE reg = NEW.reg_number;
    END IF;
END IF;

IF rRS = 0 THEN 
INSERT INTO result_summary SET
ready = '0',
    semester = smtr,
    level = NEW.level,
    credit_hour = 0,
    reg_number = NEW.reg_number;
END IF;


END
$$
DELIMITER ;
DELIMITER $$
CREATE TRIGGER `add_grade2` AFTER UPDATE ON `second_semester_reg_courses`
 FOR EACH ROW BEGIN
DECLARE Vgrade CHAR(1);
DECLARE Vvalue int;
DECLARE QP int;
DECLARE failedCount int;
DECLARE chr int(1) DEFAULT 1;
SELECT COUNT(*) INTO failedCount FROM second_semester_outstanding WHERE reg_number = NEW.reg_number AND course_code = NEW.course_code;
SELECT course_credit_hour INTO chr FROM second_semester_courses WHERE course_code = NEW.course_code;
SET Vgrade = NEW.grade;
IF Vgrade = 'A' THEN
SET Vvalue = 5;
ELSEIF Vgrade = 'B' THEN
SET Vvalue = 4;
ELSEIF Vgrade = 'C' THEN
SET Vvalue = 3;    
ELSEIF Vgrade = 'D' THEN
SET Vvalue = 2;    
ELSEIF Vgrade = 'E' THEN
SET Vvalue = 1; 
ELSEIF Vgrade = 'F' THEN
SET Vvalue = 0;
IF failedCount = 0 THEN
    	INSERT INTO second_semester_outstanding SET
        reg_number = NEW.reg_number,
        course_code = NEW.course_code;
    END IF;
END IF;
IF failedCount = 1 THEN
	IF Vgrade != 'F' THEN
    	DELETE FROM second_semester_outstanding WHERE reg_number = NEW.reg_number AND course_code = NEW.course_code;
    
    END IF;

END IF;
SET QP = chr*Vvalue;

UPDATE result_summary SET
ready = 1,
    credit_hour = credit_hour + chr,
    qualitative_point = qualitative_point + QP,
    grade_point = qualitative_point/credit_hour
    WHERE level = NEW.level AND semester = 'second' AND reg_number = NEW.reg_number;

END
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `student`
--

CREATE TABLE IF NOT EXISTS `student` (
  `fname` varchar(20) NOT NULL,
  `mname` varchar(20) NOT NULL,
  `lname` varchar(20) NOT NULL,
  `passport_url` varchar(80) NOT NULL,
  `level` int(3) NOT NULL,
  `reg` varchar(20) NOT NULL,
  `email` varchar(40) NOT NULL,
  `department` varchar(40) NOT NULL,
  `faculty` varchar(40) NOT NULL,
  `pass_w` varchar(15) NOT NULL,
  `mode_of_entry` enum('UTME','DE') NOT NULL,
  `dob` date NOT NULL,
  `level_update` enum('1','0') NOT NULL DEFAULT '1'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `student`
--

INSERT INTO `student` (`fname`, `mname`, `lname`, `passport_url`, `level`, `reg`, `email`, `department`, `faculty`, `pass_w`, `mode_of_entry`, `dob`, `level_update`) VALUES
('John', 'Carter', 'Zeus', '/passport/11EEFF123_pass.jpg', 100, '11/EE/FF/123', 'jcarter@gmail.com', 'CHM', 'SCI', '123456', 'UTME', '1915-06-08', '1'),
('Mary', 'Micheal', 'Obi', '/passport/11EEFF124_pass.jpg', 200, '11/EE/FF/124', 'mary.mike@gmail.com', 'CPE', 'ENG', '123456', 'UTME', '1997-05-10', '1'),
('Micheal', 'Stephen', 'Okon', '/passport/11EEFF125_pass.jpg', 200, '11/EE/FF/125', 'mikej@gmail.com', 'CPE', 'ENG', '123456', 'UTME', '1984-02-29', '0'),
('John', 'Ddd', 'Jjj', '/passport/11EGCO222_pass.jpg', 100, '11/EG/CO/222', 'llll@ff.com', 'CPE', 'ENG', '123456', 'UTME', '1923-05-07', '1'),
('Bassey', 'Sadi', 'Friday', '/passport/11EGCO512_pass.jpg', 200, '11/EG/CO/512', 'bassey@yahoo.com', 'CPE', 'ENG', '123456', 'UTME', '1993-12-20', '0'),
('Test', 'Test', 'Test', '/passport/11FFDD000_pass.jpg', 100, '11/FF/dd/000', 'test@test.com', 'CPE', 'ENG', '123456', 'UTME', '1921-05-18', '1'),
('Johnson', 'Obi', 'Nwankwo', '/passport/11FFDD123_pass.jpg', 100, '11/FF/DD/123', 'obi.nwa@gmail.com', 'MCE', 'ENG', '123456', 'DE', '1968-07-14', '0'),
('Joshua', 'Israel', 'Okon', '/passport/12EGCO515_pass.jpg', 100, '12/EG/CO/515', 'josh@yahoo.com', 'CPE', 'ENG', 'joshua', 'UTME', '1925-02-17', '1');

-- --------------------------------------------------------

--
-- Table structure for table `test_all`
--

CREATE TABLE IF NOT EXISTS `test_all` (
  `id` int(11) NOT NULL,
  `any` varchar(60) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `test_all`
--

INSERT INTO `test_all` (`id`, `any`) VALUES
(1, 'B');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `page_properties`
--
ALTER TABLE `page_properties`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `school_session`
--
ALTER TABLE `school_session`
  ADD UNIQUE KEY `session` (`session`);

--
-- Indexes for table `student`
--
ALTER TABLE `student`
  ADD UNIQUE KEY `reg` (`reg`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `page_properties`
--
ALTER TABLE `page_properties`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
