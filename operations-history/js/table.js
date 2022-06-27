document.addEventListener('DOMContentLoaded', () => {
    new SimpleBar(document.getElementById('table'), {
        autoHide: false
    })

    console.log(table.length)
    if (table.length == 0) {
        document.querySelector('.main').classList.add('table_none')
    }

    document.addEventListener('DOMSubtreeModified', () => {
        var table = document.querySelectorAll('.table__value')
    
        if (table.length == 0) {
            document.querySelector('.main').classList.add('table_none')
        } else {
            document.querySelector('.main').classList.remove('table_none')
        }
    });
    
})

