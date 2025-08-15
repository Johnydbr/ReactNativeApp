-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 12-Jun-2023 às 22:14
-- Versão do servidor: 10.4.22-MariaDB
-- versão do PHP: 8.0.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `dbevento`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbaluno`
--

CREATE TABLE `tbaluno` (
  `idAluno` int(11) NOT NULL,
  `nomeAluno` varchar(100) DEFAULT NULL,
  `turma` varchar(100) DEFAULT NULL,
  `data` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbaluno`
--

INSERT INTO `tbaluno` (`idAluno`, `nomeAluno`, `turma`, `data`) VALUES
(2, 'XCZZXC', '', '2023-05-22 00:00:00'),
(3, 'RYAN BURRO', '', '2023-05-22 00:00:00'),
(4, 'RYAN BURRO', '', '2023-05-22 00:00:00'),
(5, '', '', '2023-05-22 00:00:00'),
(6, 'sad', '', '2023-05-22 00:00:00'),
(7, 'Ryan', '', '2023-05-22 00:00:00'),
(8, 'Bryan', '', '2023-05-22 00:00:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbconvidado`
--

CREATE TABLE `tbconvidado` (
  `idConvidado` int(11) NOT NULL,
  `nomeConvidado` varchar(100) NOT NULL,
  `data` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbconvidado`
--

INSERT INTO `tbconvidado` (`idConvidado`, `nomeConvidado`, `data`) VALUES
(1, '', '2023-05-22 00:00:00'),
(2, 'xiczjzx', '2023-05-22 00:00:00'),
(3, 'xiczjzx', '2023-05-22 00:00:00'),
(4, 'sad', '2023-05-22 00:00:00'),
(5, 'da', '2023-05-22 00:00:00'),
(6, 'Bryan', '2023-05-22 00:00:00'),
(7, 'Ryan', '2023-05-22 00:00:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `tbprofessor`
--

CREATE TABLE `tbprofessor` (
  `idProfessor` int(11) NOT NULL,
  `nomeProfessor` varchar(100) DEFAULT NULL,
  `data` date DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `tbprofessor`
--

INSERT INTO `tbprofessor` (`idProfessor`, `nomeProfessor`, `data`) VALUES
(1, 'htehterh', '2023-05-22'),
(2, 'tjhhfrsbfd', '2023-05-22'),
(3, 'ndgndgfnfdg', '2023-05-22'),
(4, 'htehetrhre', '2023-05-22'),
(5, 'gerhrgegrwe', '2023-05-22'),
(6, 'eew', '2023-05-22'),
(7, 'grsdgsgdsd', '2023-05-22'),
(8, 'grwrg', '2023-05-22'),
(9, 'hfdfhsfhds', '2023-05-22'),
(10, 'bfsbfs', '2023-05-22'),
(11, 'rgfrrwg', '2023-05-22'),
(12, 'gergrew', '2023-05-22'),
(13, 'asdasd', '2023-05-22'),
(14, 'fdd', '2023-05-22'),
(15, 'asasx', '2023-05-22'),
(16, 'dsa', '2023-05-22'),
(17, 'Allan', '2023-05-22'),
(18, 'Allan', '2023-05-22');

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `tbaluno`
--
ALTER TABLE `tbaluno`
  ADD PRIMARY KEY (`idAluno`);

--
-- Índices para tabela `tbconvidado`
--
ALTER TABLE `tbconvidado`
  ADD PRIMARY KEY (`idConvidado`);

--
-- Índices para tabela `tbprofessor`
--
ALTER TABLE `tbprofessor`
  ADD PRIMARY KEY (`idProfessor`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `tbaluno`
--
ALTER TABLE `tbaluno`
  MODIFY `idAluno` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- AUTO_INCREMENT de tabela `tbconvidado`
--
ALTER TABLE `tbconvidado`
  MODIFY `idConvidado` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT de tabela `tbprofessor`
--
ALTER TABLE `tbprofessor`
  MODIFY `idProfessor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=19;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
