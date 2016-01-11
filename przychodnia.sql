-- phpMyAdmin SQL Dump
-- version 4.2.11
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Czas generowania: 11 Sty 2016, 22:19
-- Wersja serwera: 5.6.21
-- Wersja PHP: 5.6.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Baza danych: `przychodnia`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `choroba`
--

CREATE TABLE IF NOT EXISTS `choroba` (
  `id_choroby` int(11) NOT NULL,
  `nazwa_choroby` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `objawy` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `data_badania` date NOT NULL,
  `lekarz` int(11) NOT NULL,
  `pesel_pacjenta` bigint(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `choroba`
--

INSERT INTO `choroba` (`id_choroby`, `nazwa_choroby`, `objawy`, `data_badania`, `lekarz`, `pesel_pacjenta`) VALUES
(1, 'przeziębienie', 'stan zapalny gardła, katar, osłabienie organizmu, gorączka, kaszel suchy', '2015-12-24', 30, 72110421159),
(2, 'ospa wietrzna', 'wysoka gorączka, ból głowy, krosty (tułów, twarz), świąd', '2016-01-10', 30, 85012507660),
(3, 'odra', 'ból gardła, nieżyt błony śluzowej nosa i spojówek, stan zapalny górnych dróg oddechowych, suchy kaszel, gorączka;\r\n wysypka o charakterze gruboplamistym, kolorze różowym, zlewająca sie.', '2016-01-02', 31, 73020516184),
(4, 'różyczka', 'gorączka; małe, czerwone plamki; powiększenie węzłów chłonnych i ból przy ich dotykaniu', '2015-12-30', 32, 95120365987),
(5, 'grypa', 'dreszcze; wzrost temperatury ciała; bóle mięśni; osłabienie organizmu; brak apetytu; bóle głowy; bóle w klatce piersiowej; nudności', '2015-12-27', 33, 94081305640),
(6, 'zapalenie opon mózgowo-rdzeniowych', 'bóle głowy; gorączka; bóle mięśni; nieżyt dróg oddechowych', '2016-01-24', 33, 94061425147),
(7, 'choroba Heinego-Medina', 'gorączka; nieżyt gardła, nosa; bóle głowy; osłabienie organizmu', '2016-01-10', 33, 87120531558),
(8, 'świnka', 'zapalenie ślinianek przyusznych; gorączka;zapalenie opon mózgowo-rdzeniowych.', '2016-01-03', 34, 95100365487),
(9, 'angina', 'ból gardła; gorączka;\r\nzaczerwienione gardło, rozpulchnione migdałki podniebienne; powiększone i bolesne węzły chłonne podżuchwowe oraz szyjne', '2016-01-04', 34, 92101513456),
(10, 'żóltaczka zakaźna', 'utrata łaknienia; nudności; złe samopoczucie; gorączka bóle stawowe;\r\nzażółcenie skóry różnego stopnia, ciemny kolor moczu; bóle brzucha po stronie prawej w okolicy podżebrowej;zaparcia', '2016-01-05', 32, 97021351789),
(11, 'opryszczka wargowa', 'zapalne pęcherzyki na granicy błony śluzowej jamy ustnej i warg;pieczenie w zmienionym chorobowo miejscu', '2016-01-03', 31, 98020536258);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `pacjenci`
--

CREATE TABLE IF NOT EXISTS `pacjenci` (
  `pesel` bigint(11) NOT NULL,
  `imie` varchar(30) NOT NULL,
  `nazwisko` varchar(30) NOT NULL,
  `nr_tel` bigint(9) DEFAULT NULL,
  `miejscowosc` varchar(50) NOT NULL,
  `kod_poczt` int(5) NOT NULL,
  `ulica` varchar(50) NOT NULL,
  `nr_domu` int(5) NOT NULL,
  `nr_mieszk` int(4) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `pacjenci`
--

INSERT INTO `pacjenci` (`pesel`, `imie`, `nazwisko`, `nr_tel`, `miejscowosc`, `kod_poczt`, `ulica`, `nr_domu`, `nr_mieszk`) VALUES
(72110421159, 'Katarzyna', 'Mewa', 852123654, 'Krakow', 12456, 'Galicyjska', 12, 16),
(73020516184, 'Karol', 'Kot', 753159987, 'Krakow', 12456, 'Stradomska', 36, 32),
(85012507660, 'Karolina', 'Kucyk', 639258452, 'Krakow', 51410, 'Nowowiejska', 12, 13),
(87120531558, 'Kazimierz', 'Nowakowski', 731864550, 'Krakow', 26159, 'Warszawska', 293, 12),
(92101513456, 'Anna', 'Michalczyk', 791456123, 'Krakow', 31150, 'Piastowska', 10, 85),
(94061425147, 'Gabriela', 'Kawa', 745852693, 'Krakow', 22291, 'Krakowska', 25, 36),
(94081305640, 'Bartosz', 'Kotera', 693852147, 'Krakow', 25369, 'Kalwaryjska', 15, 4),
(95100365487, 'Marek', 'Koral', 654258369, 'Krakow', 32654, 'Michanowska', 215, NULL),
(95120365987, 'Anna', 'Konar', 874632159, 'Krakow', 25269, 'Kotlarska', 12, 16),
(97021351789, 'Jacek', 'Midura', 548789698, 'Krakow', 32690, 'Powstancow Wielkopolskich', 126, 125),
(98020536258, 'Szymon', 'Nowak', 746198235, 'Krakow', 12852, 'Nowohucka', 15, 123);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `recepta`
--

CREATE TABLE IF NOT EXISTS `recepta` (
  `id_recepty` int(11) NOT NULL,
  `nr_recepty` bigint(20) NOT NULL,
  `lekarz` int(11) NOT NULL,
  `pesel_pacjenta` bigint(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `recepta`
--

INSERT INTO `recepta` (`id_recepty`, `nr_recepty`, `lekarz`, `pesel_pacjenta`) VALUES
(1, 2546, 30, 72110421159),
(2, 30365, 30, 85012507660),
(3, 3654, 31, 73020516184),
(4, 3698, 32, 95120365987),
(5, 2568, 33, 94081305640),
(6, 2615, 33, 94061425147),
(7, 7525, 33, 87120531558),
(8, 3658, 34, 95100365487),
(9, 1528, 34, 92101513456),
(10, 3659, 32, 97021351789),
(11, 6025, 31, 98020536258);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uzytkownicy`
--

CREATE TABLE IF NOT EXISTS `uzytkownicy` (
  `id_pracownika` int(11) NOT NULL,
  `login` varchar(20) NOT NULL,
  `haslo` varchar(20) NOT NULL,
  `permission` varchar(30) NOT NULL,
  `Data_zatrudnienia` date DEFAULT NULL,
  `Imie` varchar(30) NOT NULL,
  `Nazwisko` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `uzytkownicy`
--

INSERT INTO `uzytkownicy` (`id_pracownika`, `login`, `haslo`, `permission`, `Data_zatrudnienia`, `Imie`, `Nazwisko`) VALUES
(1, 'dominik59', 'test', 'admin', '2015-12-16', 'Dominik', 'Pawlik'),
(2, 'ania13', 'test', 'nurse', '2015-12-16', 'Anna', 'Gawor'),
(25, '25', '25', 'nurse', '2016-01-04', 'Maria', 'Kowalska'),
(26, '26', '26', 'nurse', '2015-11-16', 'Katarzyna', 'Lubomika'),
(27, '27', '27', 'nurse', '2016-01-10', 'Natalia', 'Nowa'),
(28, '28', '28', 'nurse', '2015-12-22', 'Ewa', 'Micurek'),
(29, '29', '29', 'nurse', '2015-11-02', 'Klaudia', 'Dzwon'),
(30, '30', '30', 'doctor', '2015-12-06', 'Jacek', 'Dobry'),
(31, '31', '31', 'doctor', '2015-11-09', 'Marek', 'Niedobry'),
(32, '32', '32', 'doctor', '2015-11-15', 'Krzysztof', 'Malina'),
(33, '33', '33', 'doctor', '2015-11-08', 'Leszek', 'Stary'),
(34, '34', '34', 'doctor', '2015-11-24', 'Tomasz', 'Kurczaba');

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `choroba`
--
ALTER TABLE `choroba`
 ADD PRIMARY KEY (`id_choroby`), ADD KEY `pesel_pacjenta` (`pesel_pacjenta`), ADD KEY `lekarz` (`lekarz`);

--
-- Indexes for table `pacjenci`
--
ALTER TABLE `pacjenci`
 ADD PRIMARY KEY (`pesel`);

--
-- Indexes for table `recepta`
--
ALTER TABLE `recepta`
 ADD PRIMARY KEY (`id_recepty`), ADD KEY `pesel_pacjenta` (`pesel_pacjenta`), ADD KEY `lekarz` (`lekarz`);

--
-- Indexes for table `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
 ADD PRIMARY KEY (`id_pracownika`);

--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `choroba`
--
ALTER TABLE `choroba`
ADD CONSTRAINT `choroba_ibfk_1` FOREIGN KEY (`pesel_pacjenta`) REFERENCES `pacjenci` (`pesel`),
ADD CONSTRAINT `choroba_ibfk_2` FOREIGN KEY (`lekarz`) REFERENCES `uzytkownicy` (`id_pracownika`);

--
-- Ograniczenia dla tabeli `recepta`
--
ALTER TABLE `recepta`
ADD CONSTRAINT `recepta_ibfk_1` FOREIGN KEY (`pesel_pacjenta`) REFERENCES `pacjenci` (`pesel`),
ADD CONSTRAINT `recepta_ibfk_2` FOREIGN KEY (`lekarz`) REFERENCES `uzytkownicy` (`id_pracownika`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
