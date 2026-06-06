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

    // Hero 動画ロード最適化
    const heroVideo = document.querySelector('.hero-video');
    if (heroVideo) {
        // 動画がメタデータをロードしたら、フェードイン準備
        heroVideo.addEventListener('loadedmetadata', () => {
            heroVideo.style.opacity = '1';
        }, { once: true });

        // フォールバック：3秒後に opacity を確保（遅い通信環境対応）
        setTimeout(() => {
            heroVideo.style.opacity = '1';
        }, 3000);

        // 初期状態
        heroVideo.style.opacity = '0.9';
    }
});
