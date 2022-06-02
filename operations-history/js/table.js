document.addEventListener('DOMContentLoaded', () => {
    new SimpleBar(document.getElementById('table'), {
        autoHide: false
    })

    const table = document.querySelectorAll('.table__value')
    
    console.log(table.length)
    if (table.length == 0) {
        document.querySelector('.main').classList.add('table_none')
    }

})


