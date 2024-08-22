window.addEventListener('DOMContentLoaded', () => {
    const navContainer = document.querySelector('.navContainer');
    if (navContainer) {
        window.addEventListener('scroll', () => {
            if (window.pageYOffset > 0) {
                navContainer.classList.add('sticky');
            } else {
                navContainer.classList.remove('sticky');
            }
        });
    }
});