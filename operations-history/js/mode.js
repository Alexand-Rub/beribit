document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.mode').forEach((item) =>
        item.addEventListener('click', () => {
            var body = document.querySelector("body");
            body.classList.toggle('dark');
        })
    );
});