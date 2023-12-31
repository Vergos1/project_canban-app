# Рекомендації щодо структури проекту

>Ця документація описує рекомендовану структуру папок та компонентів для реакт-додатків у нашому проекті. Ми застосовуємо
методологію `Контейнери` та `Презентаційні компоненти`.

## Контейнери та Презентаційні компоненти

<br>

***

### Контейнери

_**Контейнери** відповідають за управління логікою та станом додатка. Вони можуть виконувати запити до API, керувати
станом
за допомогою Redux чи інших інструментів. Головна їхня роль - передавати дані та обробники подій до презентаційних
компонентів._

_**Компоненти**, які містять `легку` логіку, таку як зміна мови або теми, можуть залишатися в папці components, оскільки
це
не впливає значно на загальну архітектуру додатку. Контейнери, зазвичай, використовуються для більш `складної` логіки,
яка
включає взаємодію з Redux або контекстом, управління станами, здійснення API-запитів тощо._

### Структура:

`src/`
<br>
`|-- containers/`
<br>
`|----- UserContainer.js`
<br>
`|----- ProductContainer.js`

<br>

***

### Презентаційні компоненти

Презентаційні компоненти зосереджені на відображенні UI та взаємодії з користувачем. Вони отримують дані через `props` і
реагують на події, але не взаємодіють безпосередньо зі станом або API.

### Структура:

`src/`
<br>
`|-- components/`
<br>
`|----- UserList.js`
<br>
`|----- ProductCard.js`
<br>
`|----- Button.js`

<br>

***

### Сторінки

```
Сторінки розміщуються в текі `pages` чи `routes` і слугують точками входу для різних розділів додатка. Вони
використовують контейнери та презентаційні компоненти для формування повної сторінки.
```

### Структура:

`src/`
<br>
`|-- pages/`
<br>
`|----- HomePage.js`
<br>
`|----- AboutPage.js`
<br>
`|----- ProductPage.js`

### Загальні вказівки

- Слідкуйте за чітким розділенням між контейнерами та презентаційними компонентами.
- Використовуйте глобальні компоненти для елементів, що повторюються в додатку.
- Підтримуйте код чистим, легко перевикористовуваним та тестованим.

<br>
<hr style="border: 2px solid rgba(0,255,247,0.27);"/>

# Конвенція найменування

1. **PascalCase (UpperCamelCase):** Кожне слово починається з великої літери без пробілів між словами. Використовується
   для найменування компонентів і тому подібного, наприклад, MyComponent, UserProfile.
2. **camelCase:** Перше слово починається з маленької літери, а кожне наступне слово - з великої. використовується для
   найменування змінних та функцій(окрім компонентів), а також може використовуватися для файлів стилів, наприклад,
   myStylesheet, headerStyle.

### PascalCase (UpperCamelCase)

- Використання: компоненти, класи.
- Приклади: `MyComponent`, `UserProfile`.

### camelCase

- Використання: змінні, функції, файли стилів.
- Приклади: `myVariable`, `fetchUserData`, `headerStyle`.

<br>
<hr style="border: 2px solid rgba(0,255,247,0.27);"/>

# Послідовність імпортів

1. **Стилі:** На початку імпортуються стилі.
2. **Зовнішні бібліотеки:** Після стилів імпортуються модулі з зовнішніх бібліотек.
3. **Компоненти React:** Після зовнішніх бібліотек імпортуються компоненти React.
4. **Інші локальні імпорти:** Наприклад, утиліти, константи, зображення тощо.
***
1. **Стилі**

* `import './styles/style.scss';`

2. **Зовнішні бібліотеки**

* `import { Route, Routes } from "react-router-dom";`<br>

3. **Компоненти React**

* `import Layout from "./Layout.jsx";`
* `import HomePage from "./pages/HomePage.jsx";`

4. **Інші локальні імпорти (якщо є)**