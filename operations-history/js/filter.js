document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.filter__triger').forEach((item) =>
        item.addEventListener('click', () => {
            const parent = item.parentNode;
            parent.classList.toggle('filter__item_active');
        })
    );
    document.querySelectorAll('.filter__open').forEach((item) =>
        item.addEventListener('click', () => {
            const parent = item.parentNode;
            parent.classList.toggle('filter_open');
        })
    );

    const parentElement = document.getElementById('filter');
    let ua = navigator.userAgent,
        event = (ua.match(/iPad/i) || ua.match(/iPhone/)) ? "touchstart" : "click";

    document.addEventListener(event, (e) => {
    let target = e.target;
    
    if (!(parentElement.contains(target))) {
        parentElement.classList.remove('filter_open')
    }
    })
});

var a,b;
function foo(c) {
    if (a != c) {b = 0;a = c};
    b ^= 1;
    c.checked = b
};  