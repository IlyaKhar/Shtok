# 🔄 Инструкции по обновлению сайта Shtok

## 📝 Как обновить контент

### 1. Добавление новых объектов недвижимости

#### В файле `properties.html`:
```html
<div class="col-lg-4 col-md-6 align-self-center mb-30 properties-items col-md-6 adv">
  <div class="item">
    <a href="property-details.html">
      <img src="assets/images/property-07.jpg" alt="Новый объект">
    </a>
    <span class="category">Новая категория</span>
    <h6>15.000.000р</h6>
    <h4><a href="property-details.html">Название объекта</a></h4>
    <ul>
      <li>Спальная комната: <span>4</span></li>
      <li>Санузел: <span>2</span></li>
      <li>Общая площадь: <span>120m2</span></li>
      <li>Этаж: <span>5</span></li>
      <li>Стоянка: <span>1 место</span></li>
    </ul>
    <div class="main-button">
      <a href="property-details.html">Запланировать визит</a>
    </div>
  </div>
</div>
```

#### Классы фильтрации:
- `adv` - Квартиры
- `str` - Малые дома  
- `rac` - Большие дома

### 2. Обновление баннера на главной странице

#### В файле `index.html`:
```html
<div class="item item-4">
  <div class="header-text">
    <span class="category">Shtok, <em>Оренбург</em></span>
    <h2>Новый заголовок<br>С новым предложением</h2>
  </div>
</div>
```

#### Добавьте CSS для нового слайда:
```css
.main-banner .item-4 {
  background-image: url(../images/banner-04.jpg);
}
```

### 3. Обновление контактной информации

#### В файле `index.html` и других:
```html
<!-- Телефон -->
<li><i class="fa fa-phone"></i> +7(XXX)XXX-XX-XX</li>

<!-- Email -->
<li><i class="fa fa-envelope"></i> new-email@mail.ru</li>

<!-- Адрес -->
<li><i class="fa fa-map"></i> Новый адрес</li>
```

### 4. Обновление статистики

#### В файле `index.html`:
```html
<div class="counter">
  <h2 class="timer count-title count-number" data-to="25" data-speed="1000"></h2>
  <p class="count-text">Новая статистика<br>Описание</p>
</div>
```

## 🎨 Изменение дизайна

### 1. Смена цветовой схемы

#### В файле `assets/css/templatemo-villa-agency.css`:
```css
:root {
  /* Измените эти переменные */
  --primary-color: #НовыйЦвет;
  --primary-dark: #ТемныйВариант;
  --accent-color: #АкцентныйЦвет;
  --accent-light: #СветлыйАкцент;
}
```

### 2. Изменение шрифтов

#### В файле `index.html`:
```html
<link href="https://fonts.googleapis.com/css2?family=НовыйШрифт:wght@100;200;300;400;500;600;700;800;900&display=swap" rel="stylesheet">
```

#### В CSS:
```css
html, body {
  font-family: 'НовыйШрифт', sans-serif;
}
```

### 3. Добавление новых анимаций

#### В файле `assets/css/templatemo-villa-agency.css`:
```css
/* Новая анимация */
@keyframes newAnimation {
  0% { transform: scale(1); }
  50% { transform: scale(1.1); }
  100% { transform: scale(1); }
}

.new-element {
  animation: newAnimation 2s infinite;
}
```

## 📱 Обновление мобильной версии

### 1. Добавление новых брейкпоинтов

#### В CSS:
```css
@media (max-width: 360px) {
  /* Стили для очень маленьких экранов */
  .main-banner .item h2 {
    font-size: 24px;
    line-height: 32px;
  }
}
```

### 2. Оптимизация для планшетов

```css
@media (min-width: 768px) and (max-width: 1024px) {
  /* Стили для планшетов */
  .properties .item {
    margin-bottom: 25px;
  }
}
```

## 🔧 Технические обновления

### 1. Добавление новых JavaScript функций

#### В файле `assets/js/custom.js`:
```javascript
// Новая функция
function newFeature() {
  // Код новой функции
}

// Вызов при загрузке
$(document).ready(function() {
  newFeature();
});
```

### 2. Обновление мета-тегов

#### В файле `index.html`:
```html
<meta name="description" content="Новое описание сайта">
<meta name="keywords" content="новые, ключевые, слова">
<meta property="og:title" content="Новый заголовок">
```

### 3. Добавление новых страниц

#### Создайте новый HTML файл:
```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <!-- Скопируйте head из index.html -->
</head>
<body>
  <!-- Скопируйте header и footer -->
  <!-- Добавьте новый контент -->
</body>
</html>
```

## 📊 Обновление аналитики

### 1. Google Analytics

#### Замените ID в HTML файлах:
```html
<script>
  gtag('config', 'НОВЫЙ_GA_ID');
</script>
```

### 2. Яндекс.Метрика

```html
<script type="text/javascript">
   ym(НОВЫЙ_METRIKA_ID, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
```

## 🚀 Процесс обновления

### 1. Подготовка
```bash
# Создайте резервную копию
cp -r Shtok Shtok-backup

# Перейдите в папку проекта
cd Shtok
```

### 2. Внесение изменений
- Отредактируйте нужные файлы
- Протестируйте локально
- Проверьте на разных устройствах

### 3. Загрузка на сервер
```bash
# Git
git add .
git commit -m "Обновление: описание изменений"
git push origin main

# Или через FTP/файловый менеджер
```

### 4. Проверка
- Откройте сайт в браузере
- Проверьте все страницы
- Протестируйте формы
- Проверьте мобильную версию

## 🔍 Отладка проблем

### 1. Проблемы с отображением
- Проверьте консоль браузера (F12)
- Убедитесь, что все файлы загружены
- Проверьте пути к изображениям

### 2. Проблемы с JavaScript
- Откройте консоль разработчика
- Проверьте ошибки в коде
- Убедитесь в правильности синтаксиса

### 3. Проблемы с CSS
- Используйте инспектор элементов
- Проверьте специфичность селекторов
- Убедитесь в правильности синтаксиса

## 📋 Чек-лист обновления

- [ ] Создана резервная копия
- [ ] Изменения протестированы локально
- [ ] Проверена мобильная версия
- [ ] Обновлены мета-теги
- [ ] Проверены все ссылки
- [ ] Протестированы формы
- [ ] Проверена производительность
- [ ] Обновлена аналитика
- [ ] Загружено на сервер
- [ ] Проведено финальное тестирование

## 🆘 Поддержка

При возникновении проблем:
1. Проверьте консоль браузера
2. Убедитесь в правильности синтаксиса
3. Проверьте пути к файлам
4. Обратитесь к документации
5. Создайте issue в репозитории

---

**Удачных обновлений! 🚀**
