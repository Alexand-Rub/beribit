document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.menu__link').forEach((item) =>
        item.addEventListener('click', () => {
            var text = item.textContent;
            var item_class = item.classList[1];
            const btn = document.getElementById('menu-btn')

            btn.classList.remove('menu__orders', 'menu__transaction', 'menu__account', 'menu__cryptocurrency', 'menu__p2p', 'menu__codes', 'menu__turnover')
            btn.classList.add(item_class)
            btn.innerText = text

            const parent = item.parentNode;

            document.querySelectorAll('.menu__item').forEach((child) => child.classList.remove('menu__item_active'))
            parent.classList.add('menu__item_active');

            document.getElementById('menu').classList.remove('menu_active')
        })
    );


    document.querySelectorAll('.menu__btn').forEach((item) =>
        item.addEventListener('click', () => {
            const parent = item.parentNode;
            parent.classList.toggle('menu_active');
        })
    )
})