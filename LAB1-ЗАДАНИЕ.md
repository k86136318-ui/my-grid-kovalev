# Лабораторная работа №1 — React + Vite

## Цель работы
Освоить базовый инструментарий React-разработчика: создать проект на Vite, структурировать его с помощью семантической разметки и CSS-модулей, собрать интерфейс из переиспользуемых JSX-компонентов, подключить данные для карточек статей и сохранить проект в Git.

## 1. Инструментарий
- Node.js 18+ (`node -v`, `npm -v`)
- Git (`git --version`)
- VS Code
- Проект создаётся командой:
  ```
  npm create vite@latest my-grid -- --template react
  ```
  (`--` отделяет аргументы самой команды create от аргументов шаблона; `--template react` — аргумент для Vite)

## 2. Структура проекта после очистки шаблона
```
src/
├── main.jsx
├── App.jsx
├── App.module.css
├── index.css
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.module.css
│   ├── ArticleCard/
│   │   ├── ArticleCard.jsx
│   │   └── ArticleCard.module.css
│   └── ArticleList/
│       ├── ArticleList.jsx
│       └── ArticleList.module.css
└── data/
    └── articles.js
```
- `src/index.css` — только базовый CSS-reset (`* { margin:0; padding:0; box-sizing:border-box; }`, шрифт и фон body)
- `src/App.css` — удаляется, стили переносятся на CSS-модули

## 3. Компоненты
- **Header** — семантический `<header>` с контейнером: заголовок сайта и `<nav>` с ссылками (Главная / Статьи / О нас)
- **data/articles.js** — массив из 6 статей: `id, title, excerpt, author, date, tag, image`
- **ArticleCard** — принимает `article` пропом, рендерит `<article>` с картинкой, тегом, заголовком, отрывком и футером (автор + дата)
- **ArticleList** — маппит `articles` в `ArticleCard` (с `key`), сетка на Flexbox: 3 карточки в ряд на широком экране → 2 на среднем (`max-width: 768px`) → 1 на узком (`max-width: 520px`)
- **App.jsx** — собирает всё: `Header` + `<main>` с `ArticleList`

Каждый компонент импортирует свой CSS-модуль (`import styles from './Имя.module.css'`) и применяет классы через `className={styles.класс}`.

## 4. Проверка в браузере
```
npm run dev
```
На странице должны быть: шапка с навигацией, сетка из 6 карточек, адаптивная вёрстка (3 → 2 → 1 колонка при сужении экрана).

Production-сборка:
```
npm run build
npm run preview
```

## 5. Сохранение в Git
```
git init
git add .
git commit -m "Лабораторная №1: React + Vite, семантика, CSS-модули, карточки"
```
Публикация на GitHub (создать пустой репозиторий без README и .gitignore):
```
git remote add origin https://github.com/ВАШ_ЛОГИН/<имя-репозитория>.git
git branch -M main
git push -u origin main
```
`.gitignore` должен содержать: `node_modules`, `dist`, `.env`

## 6. Задания для самопроверки
1. Добавьте 7-ю и 8-ю карточки в `articles.js` — проверьте, что сетка автоматически перестраивается
2. Измените `flex` в `ArticleList.module.css` так, чтобы на широком экране было 4 карточки в ряд
3. Вынесите навигацию в отдельный компонент `Nav.jsx` со своим CSS-модулем
4. Добавьте в `Header` счётчик статей — количество берите из `articles.length`

## 7. Контрольные вопросы
1. Чем Vite отличается от Create React App?
2. Что такое CSS-модуль и зачем он нужен? Как обратиться к классу в JSX?
3. Какие семантические теги HTML5 использованы в проекте и почему?
4. Как работает `flex-wrap` и `flex: 1 1 calc(...)` при построении сетки?
5. Как данные из `articles.js` попадают в карточки? Опишите путь данных.
6. Зачем нужен `key` при рендере списка через `.map()`?
