export const articles = [
  {
    id: 1,
    title: 'Что такое JSX и зачем он нужен',
    excerpt:
      'JSX выглядит как HTML внутри JavaScript, но на самом деле это синтаксический сахар над вызовами React.createElement.',
    author: 'Анна Соколова',
    date: '12 сентября 2026',
    tag: 'Основы',
    image: 'https://picsum.photos/seed/jsx/400/250',
  },
  {
    id: 2,
    title: 'Пропсы: как компоненты обмениваются данными',
    excerpt:
      'Пропсы передаются сверху вниз и только для чтения. Разбираем, почему это делает интерфейс предсказуемым.',
    author: 'Игорь Левин',
    date: '18 сентября 2026',
    tag: 'Компоненты',
    image: 'https://picsum.photos/seed/props/400/250',
  },
  {
    id: 3,
    title: 'useState за пять минут',
    excerpt:
      'Состояние — это память компонента между рендерами. Показываем минимальный пример со счётчиком и типичные ошибки.',
    author: 'Мария Чернова',
    date: '21 сентября 2026',
    tag: 'Хуки',
    image: 'https://picsum.photos/seed/usestate/400/250',
  },
  {
    id: 4,
    title: 'CSS-модули против глобальных стилей',
    excerpt:
      'CSS-модуль превращает имена классов в уникальные строки, поэтому стили одного компонента не ломают другой.',
    author: 'Дмитрий Орлов',
    date: '24 сентября 2026',
    tag: 'Вёрстка',
    image: 'https://picsum.photos/seed/cssmodules/400/250',
  },
  {
    id: 5,
    title: 'Flexbox: адаптивная сетка без медиазапросов',
    excerpt:
      'Комбинация flex-wrap и flex: 1 1 calc() даёт сетку, которая сама перестраивается под ширину экрана.',
    author: 'Елена Гурова',
    date: '27 сентября 2026',
    tag: 'Вёрстка',
    image: 'https://picsum.photos/seed/flexbox/400/250',
  },
  {
    id: 6,
    title: 'Почему Vite быстрее Create React App',
    excerpt:
      'Vite отдаёт браузеру нативные ES-модули и собирает только то, что реально запрошено — отсюда мгновенный старт.',
    author: 'Павел Кузьмин',
    date: '30 сентября 2026',
    tag: 'Инструменты',
    image: 'https://picsum.photos/seed/vite/400/250',
  },
]

export default articles
