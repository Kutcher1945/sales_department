
# Bestway – Сайт отдела продаж

Добро пожаловать в репозиторий сайта **Bestway**. Этот сайт предоставляет решения по созданию и улучшению отделов продаж, включая услуги по разработке стратегии продаж, внедрению CRM-систем и обучению персонала.

## Оглавление

1. [Обзор проекта](#обзор-проекта)
2. [Особенности](#особенности)
3. [Структура файлов](#структура-файлов)
4. [Зависимости](#зависимости)
5. [Инструкция по использованию](#инструкция-по-использованию)
6. [SEO и Мета-теги](#seo-и-мета-теги)
7. [Пользовательские скрипты](#пользовательские-скрипты)
8. [Контактная информация](#контактная-информация)

## Обзор проекта

Сайт **Bestway** является лендингом для компаний, желающих создать или улучшить свои отделы продаж. На сайте представлена информация об услугах компании, клиентах, а также предусмотрены легкие способы связи, включая интеграцию с "Звонок или WhatsApp" для быстрого взаимодействия с клиентами.

## Особенности

- **Адаптивный дизайн:** Построен с использованием Bootstrap, что гарантирует корректное отображение сайта на любых устройствах (мобильные, планшеты, десктопы).
- **Интеграция с WhatsApp:** Кнопка связи позволяет пользователям выбрать между звонком или отправкой сообщения через WhatsApp.
- **Раздел услуг:** Карусель, демонстрирующая предлагаемые услуги.
- **Счетчики:** Динамические счетчики, показывающие ключевую статистику, такую как часы консультаций и количество созданных отделов продаж.
- **Раздел FAQ:** Ответы на часто задаваемые вопросы, связанные с созданием отдела продаж.
- **Ссылки на социальные сети:** Интеграция с платформами для взаимодействия с пользователями.
- **Оптимизация для поисковых систем (SEO):** Мета-теги для лучшего ранжирования и улучшенного отображения при публикации в социальных сетях.

## Структура файлов

```
root/
│
├── css/
│   └── style.css                  # Пользовательские стили для сайта
├── images/
│   ├── image.png                  # Основное изображение для мета-тегов
│   └── [Другие изображения]       # Изображения для услуг, логотипы клиентов и пр.
├── js/
│   ├── main.js                    # Основной JavaScript для сайта
│   └── service_popup.js           # Скрипт для всплывающих окон услуг
│
├── lib/
│   ├── bootstrap/                 # Файлы CSS и JS Bootstrap
│   ├── ionicons/                  # Иконки Ionicons
│   ├── owlcarousel/               # Карусель для раздела услуг
│   └── lightbox/                  # Lightbox для галереи изображений
│
├── index.html                     # Главный HTML файл
└── README.md                      # Этот файл README
```

## Зависимости

Этот сайт использует следующие внешние библиотеки:

- **[Bootstrap 4.5](https://getbootstrap.com/):** Для создания адаптивной сетки и компонентов.
- **[jQuery](https://jquery.com/):** Для работы с DOM и обработки событий.
- **[Owl Carousel](https://owlcarousel2.github.io/OwlCarousel2/):** Для карусели в разделе услуг.
- **[Font Awesome](https://fontawesome.com/):** Для иконок, используемых по всему сайту.
- **[Ionicons](https://ionicons.com/):** Дополнительные иконки.
- **[Lightbox](https://lokeshdhakar.com/projects/lightbox2/):** Для просмотра изображений в галерее.

## Инструкция по использованию

1. **Клонируйте репозиторий:**

   ```bash
   git clone https://github.com/yourusername/bestway-website.git
   ```

2. **Откройте проект:**

   Откройте файл `index.html` в любом веб-браузере, чтобы просмотреть сайт. Для локальной разработки используйте локальный сервер для лучшей совместимости (например, с помощью PHP, XAMPP или простого сервера Python).

3. **Настройка контактной информации:**

   - Чтобы изменить номер телефона для WhatsApp или сообщение по умолчанию, отредактируйте следующую часть кода в файле `index.html`:

     ```javascript
     var phoneNumber = '77012200734'; // Ваш номер телефона
     var message = encodeURIComponent("Здравствуйте, пишу с сайта BESTWAY!! Хочу оставить заявку!!");
     ```

   - Вы также можете изменить текст в других разделах, таких как **О нас**, услуги и FAQ, отредактировав HTML-контент в `index.html`.

## SEO и Мета-теги

Этот сайт оптимизирован для поисковых систем и социальных сетей с помощью мета-тегов. Основные возможности SEO включают:

- **Теги Title** и **description** для поисковых систем.
- **Теги Open Graph** для лучшего отображения при публикации на Facebook.
- **Мета-теги Twitter card** для лучшего отображения в Twitter.
- **Канонический URL** для указания предпочтительной версии сайта поисковым системам.

Эти теги можно найти в начале файла `index.html`:

```html
<meta name="description" content="Bestway – Мы предоставляем решение по улучшению и созданию отдела продаж под ключ. Увеличьте прибыль и улучшите работу с нашими экспертами.">
<meta property="og:title" content="Bestway – Решение по созданию отдела продаж под ключ">
<meta property="twitter:card" content="summary_large_image">
```

## Пользовательские скрипты

На сайте используются несколько пользовательских скриптов для обеспечения функциональности:

1. **Скрипт для кнопки WhatsApp:**

   - При нажатии на кнопку WhatsApp скрипт проверяет, находится ли пользователь на мобильном устройстве. Если да, предлагается выбор: позвонить или отправить сообщение через WhatsApp.
   - Для пользователей на десктопе автоматически открывается WhatsApp Web.

   ```javascript
   document.getElementById('whatsappButton').addEventListener('click', function() {
       var phoneNumber = '77012200734';
       var message = encodeURIComponent("Здравствуйте, пишу с сайта BESTWAY!! Хочу оставить заявку!!");
       
       if (/Mobi|Android|iPhone/i.test(navigator.userAgent)) {
           var choice = confirm("Хотите позвонить или отправить сообщение в WhatsApp?");
           if (choice) {
               window.location.href = 'tel:' + phoneNumber;
           } else {
               window.open('https://api.whatsapp.com/send?phone=' + phoneNumber + '&text=' + message, '_blank');
           }
       } else {
           window.open('https://web.whatsapp.com/send?phone=' + phoneNumber + '&text=' + message, '_blank');
       }
   });
   ```

2. **Скрипт для всплывающих окон услуг:**

   - Этот скрипт позволяет пользователям кликать по услугам в карусели для отображения всплывающего окна с дополнительной информацией о выбранной услуге.

   ```javascript
   function openServicePopup(serviceId) {
       document.getElementById('popupTitle').innerHTML = serviceTitles[serviceId];
       document.getElementById('popupDetails').innerHTML = serviceDetails[serviceId];
       document.getElementById('servicePopup').style.display = 'block';
   }
   ```

## Контактная информация

Для любых вопросов или проблем, пожалуйста, свяжитесь с нами:

- **Email:** info@example.com
- **Телефон:** +77012200734
- **Сайт:** [https://bestgeoway.com](https://bestgeoway.com)
