document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.pages__item').forEach((item) =>
        item.addEventListener('click', () => {
            document.querySelectorAll('.pages__item').forEach((item) =>
                item.classList.remove('pages__item_active')
            )       
            item.classList.add('pages__item_active')
        })
    )
})


