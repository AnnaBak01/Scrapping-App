-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Czas generowania: 01 Kwi 2020, 17:16
-- Wersja serwera: 10.4.11-MariaDB
-- Wersja PHP: 7.2.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `school`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `reference`
--


--
-- Zrzut danych tabeli `reference`
--

INSERT INTO `reference` (`name`, `link`, `type`) VALUES
('Switek Zbigniew', 'http://zsstaszow.pl/switek-zbigniew/', 'Język polski'),
('Janik Krzysztof', 'http://zsstaszow.pl/janik-krzysztof/', 'Język angielski'),
('Mikus Anna', 'http://zsstaszow.pl/kl-iiiti-jezyk-angielski-zawodowy/', 'Angielski zawodowy'),
('Misterkiewicz Agnieszka', 'http://zsstaszow.pl/english-class-3-ti/', 'Język angielski'),
('Żmuda Wojciech', 'http://zsstaszow.pl/zmuda-wojciech/', 'Język niemiecki'),
('Sikora Grażyna', 'http://zsstaszow.pl/sikora-grazyna/', 'Język rosyjski'),
('Kochanowska Małgorzata', 'http://zsstaszow.pl/klasa-iii-ti-matematyka/',  'Matematyka'),
('Fąfara Andrzej', 'http://zsstaszow.pl/fizyka-3-ti/', 'Fizyka'),
('Kosowicz Janusz', 'http://zsstaszow.pl/kosowicz-janusz/','PP'),
('Krupa Jan', 'http://zsstaszow.pl/historia-klasa-3ts-3-tom-3-ti/','Historia'),
('Stawiński Andrzej', 'http://zsstaszow.pl/klasa-3-ti/', 'Montaż i eksploatacja'),
('Kochanowski Robert', 'http://zsstaszow.pl/klasa-iii-ti-informa/', 'Twojrzenie aplikacji'),
('Dygulski Tomasz', 'http://zsstaszow.pl/tworzenie-aplikacji-i-witryny-internetowe-kl-3ti/', 'Witryny i aplikacje');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
