document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

  document.querySelectorAll('.filter__triger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        parent.classList.toggle('filter__item_active');
    })
  )
  
})