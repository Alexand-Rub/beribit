document.querySelectorAll('.footer__triger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        parent.classList.toggle('footer__colomn_active');
    })
)

