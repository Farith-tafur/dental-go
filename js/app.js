document.addEventListener('DOMContentLoaded', function() {
    inicializarHeader();
    inicializarMenuMobile();
    inicializarScrollAnimaciones();
});

// ============================================
// HEADER SCROLL
// ============================================
function inicializarHeader() {
    const header = document.getElementById('header');
    if (!header) return;
    
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    });
}

// ============================================
// MENÚ MOBILE
// ============================================
function inicializarMenuMobile() {
    const btnMenu = document.getElementById('btnMenuMobile');
    const navPrincipal = document.getElementById('navPrincipal');
    
    if (btnMenu && navPrincipal) {
        btnMenu.addEventListener('click', function() {
            navPrincipal.classList.toggle('abierto');
            const icon = this.querySelector('i');
            if (icon) {
                icon.classList.toggle('fa-bars');
                icon.classList.toggle('fa-times');
            }
        });
        
        navPrincipal.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navPrincipal.classList.remove('abierto');
            });
        });
    }
}

// ============================================
// ANIMACIONES AL SCROLL
// ============================================
function inicializarScrollAnimaciones() {
    const elementos = document.querySelectorAll('.beneficio-item, .servicio-card, .galeria-item');
    
    if (elementos.length === 0) return;
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    elementos.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(el);
    });
}
