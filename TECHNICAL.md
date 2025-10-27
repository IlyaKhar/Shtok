# 📋 Технические характеристики сайта Shtok

## 🎨 Дизайн и стили

### Цветовая палитра
```css
/* Основные цвета */
--primary-color: #235347;      /* Элегантный зеленый */
--primary-dark: #163832;       /* Глубокий зеленый */
--primary-darker: #0B2B26;     /* Темно-зеленый */
--primary-darkest: #051F20;    /* Почти черный зеленый */
--accent-color: #8EB69B;       /* Мятно-зеленый */
--accent-light: #DAF1DE;       /* Светлый мятный */

/* Стеклянные эффекты */
--glass-bg: rgba(142, 182, 155, 0.1);
--glass-border: rgba(142, 182, 155, 0.2);
--glass-bg-dark: rgba(35, 83, 71, 0.1);
--glass-border-dark: rgba(35, 83, 71, 0.2);
```

### Типографика
- **Основной шрифт**: Poppins (Google Fonts)
- **Размеры**: 14px - 62px
- **Веса**: 100, 200, 300, 400, 500, 600, 700, 800, 900

### Компоненты
- **Кнопки**: Скругленные углы (20px), стеклянные эффекты
- **Карточки**: Стеклянный морфизм, тени, hover эффекты
- **Формы**: Полупрозрачные поля с фокусом
- **Навигация**: Стеклянный хедер с размытием

## 📱 Адаптивность

### Брейкпоинты
```css
/* Мобильные устройства */
@media (max-width: 480px) { ... }

/* Планшеты */
@media (max-width: 768px) { ... }

/* Десктоп */
@media (max-width: 992px) { ... }

/* Большие экраны */
@media (max-width: 1200px) { ... }
```

### Адаптивные элементы
- Карусель баннера
- Сетка недвижимости
- Навигационное меню
- Формы контактов
- Счетчики статистики

## ⚡ Производительность

### Оптимизации
- **CSS переменные** для быстрого изменения темы
- **Backdrop-filter** для стеклянных эффектов
- **Transform** для GPU ускорения анимаций
- **Preconnect** для Google Fonts
- **Lazy loading** для изображений

### Метрики
- **LCP**: < 2.5s (Largest Contentful Paint)
- **FID**: < 100ms (First Input Delay)
- **CLS**: < 0.1 (Cumulative Layout Shift)

## 🎯 JavaScript функциональность

### Основные модули
```javascript
// Анимация загрузки
$(window).on('load', function() { ... });

// Скролл эффекты
$(window).scroll(function() { ... });

// Карусель
$('.owl-banner').owlCarousel({ ... });

// Фильтрация
const rdn_events_list = new Isotope(elem, { ... });

// Мобильное меню
$(".menu-trigger").on('click', function() { ... });

// Форма контактов
$('#contact-form').on('submit', function(e) { ... });
```

### Анимации
- Fade in/out для элементов
- Slide toggle для меню
- Scale эффекты для кнопок
- Transform для hover состояний

## 🔍 SEO оптимизация

### Мета-теги
```html
<meta name="description" content="Shtok - ведущее агентство недвижимости в Оренбурге">
<meta name="keywords" content="недвижимость Оренбург, агентство недвижимости">
<meta name="author" content="Shtok Real Estate">
<meta name="robots" content="index, follow">
```

### Open Graph
```html
<meta property="og:type" content="website">
<meta property="og:title" content="Shtok - Агентство недвижимости в Оренбурге">
<meta property="og:description" content="Профессиональные услуги по продаже и покупке недвижимости">
<meta property="og:image" content="assets/images/banner-01.jpg">
```

### Структурированные данные
```json
{
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  "name": "Shtok",
  "telephone": "+7(922)869-99-90",
  "email": "shtok222@mail.ru",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "19-я линия, 6",
    "addressLocality": "Оренбург"
  }
}
```

## 📊 Аналитика и отслеживание

### Поддерживаемые системы
- Google Analytics 4
- Яндекс.Метрика
- Facebook Pixel
- Google Tag Manager

### Отслеживаемые события
- Просмотры объектов недвижимости
- Отправка форм контактов
- Клики по кнопкам "Запланировать визит"
- Время на странице
- Глубина прокрутки

## 🛠 Технический стек

### Frontend
- **HTML5**: Семантическая разметка
- **CSS3**: Современные стили, Grid, Flexbox
- **JavaScript ES6+**: Современный синтаксис
- **jQuery 3.x**: DOM манипуляции
- **Bootstrap 5**: Адаптивная сетка

### Библиотеки
- **Owl Carousel 2**: Карусель изображений
- **Isotope**: Фильтрация и сортировка
- **Font Awesome**: Иконки
- **Animate.css**: CSS анимации

### Инструменты разработки
- **Git**: Контроль версий
- **VS Code**: Редактор кода
- **Live Server**: Локальная разработка
- **Browser DevTools**: Отладка

## 🔒 Безопасность

### Защита форм
- Валидация на клиенте и сервере
- CSRF токены
- Санитизация входных данных
- Rate limiting для форм

### HTTPS
- SSL сертификат (Let's Encrypt)
- Принудительное перенаправление на HTTPS
- HSTS заголовки

## 📈 Мониторинг

### Производительность
- Google PageSpeed Insights
- GTmetrix
- WebPageTest
- Lighthouse

### Доступность
- WCAG 2.1 AA соответствие
- Семантическая разметка
- Alt теги для изображений
- Keyboard navigation

### Uptime
- Pingdom мониторинг
- UptimeRobot
- StatusCake

## 🚀 Деплой и хостинг

### Поддерживаемые платформы
- GitHub Pages
- Netlify
- Vercel
- AWS S3 + CloudFront
- Обычный хостинг (Apache/Nginx)

### CI/CD
- GitHub Actions
- Netlify Build
- Vercel Deployments

## 📱 Мобильная оптимизация

### Touch-friendly элементы
- Минимальный размер кнопок: 44x44px
- Adequate spacing между элементами
- Swipe жесты для карусели

### Мобильные функции
- Responsive изображения
- Touch навигация
- Мобильное меню
- Оптимизированные формы

## 🔧 Настройка и кастомизация

### Легкая настройка цветов
```css
/* Измените эти переменные для смены темы */
:root {
  --primary-color: #235347;    /* Основной цвет */
  --accent-color: #8EB69B;     /* Акцентный цвет */
}
```

### Добавление новых объектов
1. Скопируйте блок `.properties-items`
2. Измените данные объекта
3. Добавьте соответствующие классы фильтрации

### Настройка контента
- Измените тексты в HTML файлах
- Обновите изображения в `assets/images/`
- Настройте контактную информацию

---

**Техническая поддержка**: Для вопросов по настройке обращайтесь к разработчику.
