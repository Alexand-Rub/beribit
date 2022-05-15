document.addEventListener('DOMContentLoaded', () => {
    var element=document.querySelector('.table__value');
    if(!element){
        document.querySelector('.table__no-contect').classList.add('table__no-contect_active')
    };

    
    new SimpleBar(document.getElementById('table'), {
        autoHide: false
    });

})


