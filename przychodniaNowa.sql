-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Czas generowania: 27 Sty 2016, 10:08
-- Wersja serwera: 10.1.9-MariaDB
-- Wersja PHP: 7.0.1

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Baza danych: `przychodnia`
--

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `choroba`
--

CREATE TABLE `choroba` (
  `id_choroby` bigint(11) NOT NULL,
  `nazwa_choroby` varchar(50) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `objawy` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `choroba`
--

INSERT INTO `choroba` (`id_choroby`, `nazwa_choroby`, `objawy`) VALUES
(1, 'przeziebienie', 'stan zapalny gardla, katar, oslabienie organizmu, goraczka, kaszel suchy'),
(2, 'ospa wietrzna', 'wysoka goraczka, bol glowy, krosty (tulow, twarz), swiad.'),
(3, 'odra', 'bol gardla, niezyt blony sluzowej nosa i spojowek, stan zapalny gornych drog oddechowych, suchy kaszel, goraczka;\r\n wysypka o charakterze gruboplamistym, kolorze rozowym, zlewajaca sie.'),
(4, 'rozyczka', 'goraczka; male, czerwone plamki; powiekszenie wezlow chlonnych i bol przy ich dotykaniu'),
(5, 'grypa', 'dreszcze; wzrost temperatury ciala; bole miesni; oslabienie organizmu; brak apetytu; bole glowy; bole w klatce piersiowej; nudnosci'),
(6, 'zapalenie opon mozgowo-rdzeniowych', 'bole glowy; goraczka; bole miesni; niezyt drog oddechowych'),
(7, 'choroba Heinego-Medina', 'goraczka; niezyt gardla, nosa; bole glowy; oslabienie organizmu'),
(8, 'swinka', 'zapalenie slinianek przyusznych; goraczka; zapalenie opon mozgowo-rdzeniowych.'),
(9, 'angina', 'bol gardla; goraczka;\r\nzaczerwienione gardlo, rozpulchnione migdalki podniebienne; powiekszone i bolesne wezły chlonne podzuchwowe oraz szyjne'),
(10, 'zoltaczka zakazna', 'utrata laknienia; nudnosci; zle samopoczucie; goraczka bole stawowe;\r\nzaolcenie skory roznego stopnia, ciemny kolor moczu; bole brzucha po stronie prawej w okolicy podzebrowej; zaparcia'),
(11, 'opryszczka wargowa', 'zapalne pecherzyki na granicy blony sluzowej jamy ustnej i warg; pieczenie w zmienionym chorobowo miejscu'),
(12, 'zapalenie spojowek', 'zaczerwienienie, pieczenie oczu;\r\nlzawienie; wydzielina ropna; przekrwienie oczu');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `godziny_przyjec`
--

CREATE TABLE `godziny_przyjec` (
  `id_terminu` bigint(5) NOT NULL,
  `id_pracownika` bigint(11) NOT NULL,
  `dzien_tyg` enum('poniedziałek','wtorek','środa','czwartek','piątek','sobota','') CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  `pocz_pracy` int(2) DEFAULT NULL,
  `koniec_pracy` int(2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `godziny_przyjec`
--

INSERT INTO `godziny_przyjec` (`id_terminu`, `id_pracownika`, `dzien_tyg`, `pocz_pracy`, `koniec_pracy`) VALUES
(1, 30, 'poniedziałek', 7, 13),
(2, 30, 'środa', 7, 13),
(3, 31, 'wtorek', 7, 13),
(4, 31, 'czwartek', 7, 13),
(5, 32, 'sobota', 10, 15),
(6, 32, 'piątek', 7, 13),
(7, 33, 'poniedziałek', 13, 19),
(8, 33, 'środa', 13, 19),
(9, 34, 'wtorek', 13, 19),
(10, 34, 'czwartek', 13, 19),
(11, 25, 'poniedziałek', 6, 13),
(12, 25, 'środa', 6, 13),
(13, 26, 'wtorek', 6, 13),
(14, 26, 'czwartek', 6, 13),
(15, 27, 'piątek', 6, 13),
(16, 27, 'sobota', 9, 15),
(17, 28, 'poniedziałek', 13, 19),
(18, 28, 'środa', 13, 19),
(19, 29, 'wtorek', 13, 19),
(20, 29, 'czwartek', 13, 19);

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `pacjenci`
--

CREATE TABLE `pacjenci` (
  `pesel` bigint(11) NOT NULL,
  `imie` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `nazwisko` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
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

CREATE TABLE `recepta` (
  `id_recepty` bigint(11) NOT NULL,
  `nr_recepty` bigint(20) NOT NULL,
  `kto_wystawil` bigint(20) DEFAULT NULL,
  `pesel_pacjenta` bigint(11) NOT NULL,
  `data_wystawienia` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `recepta`
--

INSERT INTO `recepta` (`id_recepty`, `nr_recepty`, `kto_wystawil`, `pesel_pacjenta`, `data_wystawienia`) VALUES
(1, 2546, 30, 72110421159, '2015-12-24'),
(2, 30365, 30, 85012507660, '2016-01-10'),
(3, 3654, 31, 73020516184, '2016-01-02'),
(4, 3698, 32, 95120365987, '2015-12-30'),
(5, 2568, 33, 94081305640, '2015-12-27'),
(6, 2615, 33, 94061425147, '2015-12-22'),
(7, 7525, 33, 87120531558, '2016-01-10'),
(8, 3658, 34, 95100365487, '2016-01-03'),
(9, 1528, 34, 92101513456, '2016-01-04'),
(10, 3659, 32, 97021351789, '2016-01-05'),
(11, 6025, 31, 98020536258, '2016-01-03');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `skierowanie`
--

CREATE TABLE `skierowanie` (
  `id_skierowania` bigint(11) NOT NULL,
  `id_lekarza` bigint(11) NOT NULL,
  `pesel_pacjenta` bigint(11) NOT NULL,
  `typ_badania` text CHARACTER SET utf8 COLLATE utf8_unicode_ci,
  `data_wystawienia` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `skierowanie`
--

INSERT INTO `skierowanie` (`id_skierowania`, `id_lekarza`, `pesel_pacjenta`, `typ_badania`, `data_wystawienia`) VALUES
(1, 32, 94061425147, 'Skierowanie do pracowni MRI na badanie rezonansem magnetycznym (MRI) lewego stawu kolanowego.', '2015-12-22'),
(2, 32, 85012507660, 'Skierowanie do pracowni MRI na badanie rezonansem magnetycznym (MRI) prawego stawu łokciowego.', '2016-01-03'),
(3, 33, 98020536258, 'Skierowanie badanie rezonansem magnetycznym (MRI) jamy brzusznej.', '2016-01-05');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `uzytkownicy`
--

CREATE TABLE `uzytkownicy` (
  `id_pracownika` bigint(11) NOT NULL,
  `login` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `haslo` varchar(20) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `permission` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Data_zatrudnienia` date NOT NULL,
  `Imie` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `Nazwisko` varchar(30) CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL
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
(34, '34', '34', 'doctor', '2015-11-24', 'Tomasz', 'Kurczaba'),
(35, 'kasiabasia', 'test', 'n', '0000-00-00', '', '');

-- --------------------------------------------------------

--
-- Struktura tabeli dla tabeli `wizyta`
--

CREATE TABLE `wizyta` (
  `id_wizyty` bigint(11) NOT NULL,
  `pesel_pacjenta` bigint(11) NOT NULL,
  `lekarz` bigint(11) NOT NULL,
  `data_wizyty` date DEFAULT NULL,
  `id_choroby` bigint(11) NOT NULL,
  `id_recepty` bigint(11) DEFAULT NULL,
  `id_skierowania` bigint(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Zrzut danych tabeli `wizyta`
--

INSERT INTO `wizyta` (`id_wizyty`, `pesel_pacjenta`, `lekarz`, `data_wizyty`, `id_choroby`, `id_recepty`, `id_skierowania`) VALUES
(1, 72110421159, 30, '2015-12-24', 1, 1, NULL),
(2, 85012507660, 30, '2016-01-10', 2, 2, NULL),
(3, 73020516184, 31, '2016-01-02', 3, 3, NULL),
(4, 95120365987, 32, '2015-12-30', 4, 4, NULL),
(5, 94081305640, 33, '2015-12-27', 5, 5, NULL),
(6, 94061425147, 33, '2015-12-22', 6, 6, NULL),
(7, 87120531558, 33, '2016-01-10', 7, 7, NULL),
(8, 95100365487, 34, '2016-01-03', 8, 8, NULL),
(9, 92101513456, 34, '2016-01-04', 9, 9, NULL),
(10, 97021351789, 32, '2016-01-05', 10, 10, NULL),
(11, 98020536258, 31, '2016-01-03', 11, 11, NULL);

--
-- Indeksy dla zrzutów tabel
--

--
-- Indexes for table `choroba`
--
ALTER TABLE `choroba`
  ADD PRIMARY KEY (`id_choroby`);

--
-- Indexes for table `godziny_przyjec`
--
ALTER TABLE `godziny_przyjec`
  ADD PRIMARY KEY (`id_terminu`),
  ADD KEY `id_pracownika` (`id_pracownika`);

--
-- Indexes for table `pacjenci`
--
ALTER TABLE `pacjenci`
  ADD PRIMARY KEY (`pesel`);

--
-- Indexes for table `recepta`
--
ALTER TABLE `recepta`
  ADD PRIMARY KEY (`id_recepty`),
  ADD KEY `pesel_pacjenta` (`pesel_pacjenta`),
  ADD KEY `kto_wystawil` (`kto_wystawil`);

--
-- Indexes for table `skierowanie`
--
ALTER TABLE `skierowanie`
  ADD PRIMARY KEY (`id_skierowania`),
  ADD KEY `pesel_pacjenta` (`pesel_pacjenta`),
  ADD KEY `id_lekarza` (`id_lekarza`);

--
-- Indexes for table `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  ADD PRIMARY KEY (`id_pracownika`);

--
-- Indexes for table `wizyta`
--
ALTER TABLE `wizyta`
  ADD PRIMARY KEY (`id_wizyty`),
  ADD KEY `pesel_pacjenta` (`pesel_pacjenta`),
  ADD KEY `id_recepty` (`id_recepty`),
  ADD KEY `id_choroby` (`id_choroby`),
  ADD KEY `lekarz` (`lekarz`),
  ADD KEY `id_skierowania` (`id_skierowania`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT dla tabeli `choroba`
--
ALTER TABLE `choroba`
  MODIFY `id_choroby` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=13;
--
-- AUTO_INCREMENT dla tabeli `godziny_przyjec`
--
ALTER TABLE `godziny_przyjec`
  MODIFY `id_terminu` bigint(5) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
--
-- AUTO_INCREMENT dla tabeli `recepta`
--
ALTER TABLE `recepta`
  MODIFY `id_recepty` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- AUTO_INCREMENT dla tabeli `skierowanie`
--
ALTER TABLE `skierowanie`
  MODIFY `id_skierowania` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT dla tabeli `uzytkownicy`
--
ALTER TABLE `uzytkownicy`
  MODIFY `id_pracownika` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=36;
--
-- AUTO_INCREMENT dla tabeli `wizyta`
--
ALTER TABLE `wizyta`
  MODIFY `id_wizyty` bigint(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;
--
-- Ograniczenia dla zrzutów tabel
--

--
-- Ograniczenia dla tabeli `godziny_przyjec`
--
ALTER TABLE `godziny_przyjec`
  ADD CONSTRAINT `godziny_przyjec_ibfk_1` FOREIGN KEY (`id_pracownika`) REFERENCES `uzytkownicy` (`id_pracownika`);

--
-- Ograniczenia dla tabeli `recepta`
--
ALTER TABLE `recepta`
  ADD CONSTRAINT `recepta_ibfk_1` FOREIGN KEY (`pesel_pacjenta`) REFERENCES `pacjenci` (`pesel`),
  ADD CONSTRAINT `recepta_ibfk_2` FOREIGN KEY (`kto_wystawil`) REFERENCES `uzytkownicy` (`id_pracownika`);

--
-- Ograniczenia dla tabeli `skierowanie`
--
ALTER TABLE `skierowanie`
  ADD CONSTRAINT `skierowanie_ibfk_2` FOREIGN KEY (`pesel_pacjenta`) REFERENCES `pacjenci` (`pesel`),
  ADD CONSTRAINT `skierowanie_ibfk_3` FOREIGN KEY (`id_lekarza`) REFERENCES `uzytkownicy` (`id_pracownika`);

--
-- Ograniczenia dla tabeli `wizyta`
--
ALTER TABLE `wizyta`
  ADD CONSTRAINT `wizyta_ibfk_1` FOREIGN KEY (`pesel_pacjenta`) REFERENCES `pacjenci` (`pesel`),
  ADD CONSTRAINT `wizyta_ibfk_3` FOREIGN KEY (`id_recepty`) REFERENCES `recepta` (`id_recepty`),
  ADD CONSTRAINT `wizyta_ibfk_4` FOREIGN KEY (`id_choroby`) REFERENCES `choroba` (`id_choroby`),
  ADD CONSTRAINT `wizyta_ibfk_5` FOREIGN KEY (`lekarz`) REFERENCES `uzytkownicy` (`id_pracownika`),
  ADD CONSTRAINT `wizyta_ibfk_6` FOREIGN KEY (`id_skierowania`) REFERENCES `skierowanie` (`id_skierowania`);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
