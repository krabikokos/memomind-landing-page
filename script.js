// --- КОД ДЛЯ ПЕРЕКЛЮЧЕНИЯ ТЕМ ---

const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const themeKey = 'memoMindTheme'; 

const setTheme = (theme) => {
    if (theme === 'dark') {
        body.classList.add('dark-theme');
        body.classList.remove('light-theme');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>'; 
    } else {
        body.classList.add('light-theme');
        body.classList.remove('dark-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>'; 
    }
    localStorage.setItem(themeKey, theme);
};

document.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem(themeKey);
    if (savedTheme) {
        setTheme(savedTheme);
    } else {
        setTheme('light'); 
    }
});

themeToggle.addEventListener('click', () => {
    const currentTheme = body.classList.contains('dark-theme') ? 'dark' : 'light';
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
});


// --- КОД ДЛЯ ГАМБУРГЕР-МЕНЮ ---

const menuToggle = document.querySelector('.menu-toggle');
const mainNav = document.querySelector('.main-nav');
const navLinks = document.querySelectorAll('.nav-list a');

// Обработчик клика для гамбургер-меню
menuToggle.addEventListener('click', () => {
    mainNav.classList.toggle('active');
});

// Закрытие меню при клике на ссылку (на мобильных)
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        if (mainNav.classList.contains('active')) {
             mainNav.classList.remove('active');
        }
    });
});

// --- КОД ДЛЯ КАРТОЧЕК ВОЗМОЖНОСТЕЙ ---

const featureCards = document.querySelectorAll('.feature-card');

// Задаем вторичный цвет для интерактивности
// В Light Theme это Светло-голубой, но для контраста возьмем Темный текст
const hoverColor = '#90e0ef'; 
const defaultColor = '#52b69a'; // Твой основной акцентный цвет

featureCards.forEach(card => {
    const icon = card.querySelector('.feature-icon');

    // Событие при наведении (mouseenter)
    card.addEventListener('mouseenter', () => {
        // Меняем цвет иконки на дополнительный (для красоты)
        icon.style.color = '#007bff'; // Или любой другой яркий цвет, например, синий
        icon.style.transition = 'color 0.3s';
    });

    // Событие при уходе курсора (mouseleave)
    card.addEventListener('mouseleave', () => {
        // Возвращаем основной акцентный цвет
        icon.style.color = defaultColor; 
    });
});

// --- КОД ДЛЯ ВАЛИДАЦИИ КОНТАКТНОЙ ФОРМЫ ---

const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Останавливаем стандартную отправку формы

    // Получаем значения полей
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    // 1. Простая валидация: проверяем, что все поля заполнены
    if (name === '' || email === '' || message === '') {
        formMessage.textContent = 'Please fill out all required fields.';
        formMessage.style.color = '#ff6347'; // Красный цвет для ошибки
        return; 
    }
    
    // 2. В реальном проекте здесь был бы AJAX-запрос на сервер.
    // Для нашего лендинга мы просто имитируем успешную отправку
    
    formMessage.textContent = 'Thank you for your message! I will get back to you shortly.';
    formMessage.style.color = '#52b69a'; // Твой акцентный цвет для успеха
    
    // Очистка формы после "успешной" отправки
    contactForm.reset();
});