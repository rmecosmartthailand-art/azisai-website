document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    // セクションフェードイン
    const fadeTargets = document.querySelectorAll(
        '.about, .services, .service-area, .contact'
    );
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
                sectionObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    fadeTargets.forEach(target => sectionObserver.observe(target));

    // カード順番表示
    const servicesGrid = document.querySelector('.services-grid');
    if (servicesGrid) {
        const cardObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const cards = entry.target.querySelectorAll('.service-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('animate-slide-up');
                        }, index * 100);
                    });
                    cardObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);
        cardObserver.observe(servicesGrid);
    }

    // タイトルアニメーション
    const titleTargets = document.querySelectorAll(
        '.section-title, .section-subtitle'
    );
    const titleObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-slide-up');
                titleObserver.unobserve(entry.target);
            }
        });
    }, observerOptions);

    titleTargets.forEach(target => titleObserver.observe(target));

    // パララックス効果（Hero）
    const heroContent = document.querySelector('.hero-content');
    if (heroContent) {
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const scrollPercent = Math.min(scrollY / window.innerHeight, 1);
            if (scrollPercent < 1) {
                heroContent.style.transform = `translateY(${scrollY * 0.5}px)`;
            }
        }, { passive: true });
    }
});
