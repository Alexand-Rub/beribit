document.addEventListener('DOMContentLoaded', () => { // Структура страницы загружена и готова к взаимодействию

  document.querySelectorAll('.filter__triger').forEach((item) =>
    item.addEventListener('click', () => {
        const parent = item.parentNode;
        parent.classList.toggle('filter__item_active');
    })
  )
  const button = document.querySelector('.filter__btn') // находим кнопку для открытия/закрытия окна навигации
  const nav = document.querySelector('.filter__list') // находим окно навигации

  button.addEventListener('click', () => { // при клике на кнопку
    nav.classList.toggle('filter__list_active') // открываем/закрываем окно навигации, добаляя/удаляя активный класс
  })

  window.addEventListener('click', e => { // при клике в любом месте окна браузера
    const target = e.target // находим элемент, на котором был клик
    if (!target.closest('.filter__list') && !target.closest('.filter__btn')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
      nav.classList.remove('filter__list_active') // то закрываем окно навигации, удаляя активный класс
    }
  })
  
})