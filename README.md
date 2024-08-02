# Проектная работа Хекслет "Игры разума"
«Игры разума» — набор из пяти консольных игр, построенных по принципу популярных мобильных приложений для прокачки мозга. Каждая игра задает вопросы, на которые нужно дать правильные ответы. После трех правильных ответов считается, что игра пройдена. Неправильные ответы завершают игру и предлагают пройти ее заново. Игры:

* Калькулятор. Арифметические выражения, которые необходимо вычислить.
* Прогрессия. Поиск пропущенных чисел в последовательности чисел.
* Определение четного числа.
* Определение наибольшего общего делителя.
* Определение простого числа.

Пример игры:
```
brain-progression
Welcome to the Brain Game!
What number is missing in the progression?
May I have your name? Roman
Hello, Roman!
Question: 14 .. 18 20 22 24 26 28
Your answer: 16 # Пользователь вводит ответ
Correct!
Question: 5 6 7 8 9 .. 11 12
Your answer: 10 # Пользователь вводит ответ
Correct!
Question: 12 15 18 21 .. 27 30 33
Your answer: 24 # Пользователь вводит ответ
Correct!
Congratulations, Roman!
```

## Требования
* Установлена Node.js и npm
* Операционна система *nix (под Windows надо запуск через терминал, иначе будут ошибки).

## Запуск игры
1. Установите пакет `make install`
2. Запустите игру в терминале вводом одной из 5 команд:
* `brain-even` - Игра "Проверка на чётность"
* `brain-calc` - Игра "Калькулятор"
* `brain-gcd` - Игра "НОД"
* `brain-progression` - Игра "Арифметическая прогрессия"
* `brain-prime` - Игра "Простое ли число"

## Записи
* [Игра "Проверка на чётность"](https://asciinema.org/a/l0K0D8fmdHe2WIfM24ZAEPOIR)
* [Игра "Калькулятор"](https://asciinema.org/a/ZjQ9IFAMTNWjw50VDJgmErzEC)
* [Игра "НОД"](https://asciinema.org/a/bcNsHmW3hBZME6rIBnqgcbufF)
* [Игра "Арифметическая прогрессия"](https://asciinema.org/a/ya8Qc1YhkOr4PvRfq3cJilhOr)
* [Игра "Простое ли число"](https://asciinema.org/a/2KWtiYa5jfHNgi0RgbhKoVnN6)

### Hexlet tests and linter status:
[![Actions Status](https://github.com/Viktoriko/frontend-project-44/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Viktoriko/frontend-project-44/actions)

[![Maintainability](https://api.codeclimate.com/v1/badges/3e2936d7814e69b0de75/maintainability)](https://codeclimate.com/github/Viktoriko/frontend-project-44/maintainability)