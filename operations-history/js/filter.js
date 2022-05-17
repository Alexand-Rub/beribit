document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.filter__triger').forEach((item) =>
        item.addEventListener('click', () => {
            const parent = item.parentNode;
            parent.classList.toggle('filter__item_active');
        })
    );
});

var a,b;
function foo(c) {
    if (a != c) {b = 0;a = c};
    b ^= 1;
    c.checked = b
};  