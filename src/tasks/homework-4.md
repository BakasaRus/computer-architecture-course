---
title: Домашнее задание 4
---

# Домашнее задание №4. Расширение системы команд ЭВМ.

## Цель задания

Изучение микрокоманд базовой ЭВМ, микропрограмм выполнения отдельных команд, а так же овладение навыками составления микропрограмм для новых команд.

## Часть I

Напишите последовательность адресов микрокоманд, которые должны быть выполнены при реализации заданного фрагмента программы, начинающегося с команды, расположенной по адресу 002 (перед выполнением программы исполняется команда "Пуск", очищающая аккумулятор и регистр переноса).

| Адрес | Вариант 1  | Вариант 2  | Вариант 3  | Вариант 4  | Вариант 5  | Вариант 6  |
| ----- | ---------- | ---------- | ---------- | ---------- | ---------- | ---------- |
| 1     | `0`        | `1`        | `1`        | `1`        | `1`        | `1`        |
| 2     | `CMA`      | `INC`      | `DEC`      | `ADD 01`   | `+ BEQ 05` | `CMC`      |
| 3     | `BMI 05`   | `BLP 05`   | `BMI 05`   | `+ BPL 05` | `NOP`      | `BCS 05`   |
| 4     | `NOP`      | `NOP`      | `NOP`      | `NOP`      | `ADD 01`   | `NOP`      |
| 5     | `+ MOV 01` | `+ ADD 01` | `+ ADD 01` | `DEC`      | `INC`      | `+ ADC 01` |
