document.addEventListener('DOMContentLoaded', function() {
    initNavigation();
    initDemo();
    initScrollAnimations();
});

function initNavigation() {
    const nav = document.querySelector('.nav');
    let lastScroll = 0;
    
    window.addEventListener('scroll', function() {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll > 100) {
            nav.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
        } else {
            nav.style.boxShadow = 'none';
        }
        
        lastScroll = currentScroll;
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
        
        const sales = parseInt(salesInput.value);
        const days = parseInt(daysInput.value);
        
        if (days > 60 && sales < 200) {
            diagResult.className = 'demo-result danger';
            diagResult.innerHTML = '<div class="demo-result-title">诊断：滞销风险</div><div class="demo-result-desc">库存天数过高且销量低迷，建议发起清理策略。</div>';
        } else if (days < 7 && sales > 800) {
            diagResult.className = 'demo-result warning';
            diagResult.innerHTML = '<div class="demo-result-title">诊断：缺货预警</div><div class="demo-result-desc">销量增速快，库存即将耗尽，请立即补货。</div>';
        } else {
            diagResult.className = 'demo-result success';
            diagResult.innerHTML = '<div class="demo-result-title">诊断：健康运行</div><div class="demo-result-desc">当前库存水平与周转率处于目标区间。</div>';
        }
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
