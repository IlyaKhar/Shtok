# 🚀 Деплой сайта Shtok

## Варианты размещения сайта

### 1. GitHub Pages (Бесплатно)

1. **Загрузите файлы в репозиторий**
   ```bash
   git add .
   git commit -m "Обновленный дизайн с мятно-зеленой схемой"
   git push origin main
   ```

2. **Включите GitHub Pages**
   - Перейдите в Settings → Pages
   - Выберите Source: Deploy from a branch
   - Branch: main
   - Folder: / (root)

3. **Ваш сайт будет доступен по адресу:**
   ```
   https://ilyakhar.github.io/Shtok/
   ```

### 2. Netlify (Бесплатно)

1. **Подключите GitHub репозиторий**
   - Зайдите на [netlify.com](https://netlify.com)
   - Нажмите "New site from Git"
   - Выберите GitHub и ваш репозиторий

2. **Настройки деплоя**
   - Build command: (оставьте пустым)
   - Publish directory: /
   - Нажмите "Deploy site"

3. **Получите кастомный домен**
   - Site settings → Domain management
   - Добавьте свой домен

### 3. Vercel (Бесплатно)

1. **Подключите репозиторий**
   - Зайдите на [vercel.com](https://vercel.com)
   - Import Project → GitHub
   - Выберите ваш репозиторий

2. **Настройки**
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (оставьте пустым)
   - Output Directory: ./

### 4. Хостинг провайдеры

#### Timeweb, Beget, REG.RU
1. Загрузите файлы через FTP/файловый менеджер
2. Поместите все файлы в папку `public_html` или `www`
3. Настройте домен на папку с файлами

#### Настройка домена
```bash
# Пример настройки DNS
A    @     IP_СЕРВЕРА
CNAME www  your-domain.com
```

## 🔧 Оптимизация для продакшена

### Сжатие изображений
```bash
# Установите ImageOptim или используйте онлайн сервисы
# Оптимизируйте все изображения в папке assets/images/
```

### Минификация CSS/JS
```bash
# Используйте онлайн минификаторы или инструменты:
# CSS: cssnano, clean-css
# JS: uglify-js, terser
```

### Кэширование
Добавьте в `.htaccess` (для Apache):
```apache
# Кэширование статических файлов
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 month"
    ExpiresByType application/javascript "access plus 1 month"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
</IfModule>
```

## 📊 Мониторинг и аналитика

### Google Analytics
Добавьте в `<head>` каждого HTML файла:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Яндекс.Метрика
```html
<!-- Yandex.Metrica -->
<script type="text/javascript">
   (function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
   m[i].l=1*new Date();k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
   (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");

   ym(METRIKA_ID, "init", {
        clickmap:true,
        trackLinks:true,
        accurateTrackBounce:true,
        webvisor:true
   });
</script>
```

## 🔒 SSL сертификат

### Let's Encrypt (Бесплатно)
```bash
# Установка certbot
sudo apt install certbot python3-certbot-apache

# Получение сертификата
sudo certbot --apache -d your-domain.com
```

### Автообновление
```bash
# Добавьте в crontab
sudo crontab -e
# Добавьте строку:
0 12 * * * /usr/bin/certbot renew --quiet
```

## 📱 Мобильная оптимизация

### Проверка производительности
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [GTmetrix](https://gtmetrix.com/)
- [WebPageTest](https://www.webpagetest.org/)

### Оптимизация изображений
```html
<!-- Responsive images -->
<img src="image.jpg" 
     srcset="image-small.jpg 480w, 
             image-medium.jpg 800w, 
             image-large.jpg 1200w"
     sizes="(max-width: 480px) 100vw, 
            (max-width: 800px) 50vw, 
            25vw"
     alt="Описание">
```

## 🚀 Автоматический деплой

### GitHub Actions
Создайте файл `.github/workflows/deploy.yml`:
```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    
    - name: Deploy to GitHub Pages
      uses: peaceiris/actions-gh-pages@v3
      with:
        github_token: ${{ secrets.GITHUB_TOKEN }}
        publish_dir: ./
```

## 📞 Поддержка

При возникновении проблем с деплоем:
1. Проверьте логи в панели управления хостинга
2. Убедитесь, что все файлы загружены корректно
3. Проверьте настройки DNS
4. Обратитесь к поддержке хостинг-провайдера

---

**Удачного деплоя! 🚀**
