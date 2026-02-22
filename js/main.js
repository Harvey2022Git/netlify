let currentLang = localStorage.getItem('lang') || 'zh';

document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
    initNavigation();
    initDemo();
    initScrollAnimations();
});

function initLanguage() {
    currentLang = localStorage.getItem('lang') || 'zh';
    updatePageContent();
    updateLangButton();
}

function toggleLanguage() {
    currentLang = currentLang === 'zh' ? 'en' : 'zh';
    localStorage.setItem('lang', currentLang);
    updatePageContent();
    updateLangButton();
}

function initNavigation() {
    const nav = document.querySelector('.nav');
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
    });
    
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function initDemo() {
    const salesInput = document.getElementById('sales');
    const daysInput = document.getElementById('days');
    const salesValue = document.getElementById('salesValue');
    const daysValue = document.getElementById('daysValue');
    const diagResult = document.getElementById('diagResult');
    
    if (!salesInput || !daysInput) return;
    
    function updateDemo() {
        salesValue.textContent = salesInput.value;
        daysValue.textContent = daysInput.value;
        
        updateDemoResult();
    }
    
    salesInput.addEventListener('input', updateDemo);
    daysInput.addEventListener('input', updateDemo);
}

function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    const animatedElements = document.querySelectorAll('.stat-card, .skill-category, .blog-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}
