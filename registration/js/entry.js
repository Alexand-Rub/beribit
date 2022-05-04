document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.entry__close').forEach((item) =>
        item.addEventListener('click', () => {
            document.querySelectorAll('.entry').forEach((item) => 
                item.classList.toggle('entry_active')
            )
            document.querySelectorAll('.entry__inp-password').forEach((item) => 
                    item.type = 'password'
            )
        })
    )

    document.querySelectorAll('.to-login').forEach((item) =>
        item.addEventListener('click', () => {
            document.querySelectorAll('.entry__form').forEach((item) => 
                item.classList.remove('entry__form_active')
            )
            document.querySelectorAll('.entry__login').forEach((item) => 
                item.classList.add('entry__form_active')
            )
            document.querySelectorAll('.entry__inp-password').forEach((item) => 
                    item.type = 'password'
            )
        })
    )

    document.querySelectorAll('.to-registration').forEach((item) =>
        item.addEventListener('click', () => {
            document.querySelectorAll('.entry__form').forEach((item) => 
                item.classList.remove('entry__form_active')
            )
            document.querySelectorAll('.entry__registration').forEach((item) => 
                item.classList.add('entry__form_active')
            )
            document.querySelectorAll('.entry__inp-password').forEach((item) => 
                    item.type = 'password'
            )
        })
    )

    document.querySelectorAll('.to-recovery').forEach((item) =>
        item.addEventListener('click', () => {
            document.querySelectorAll('.entry__form').forEach((item) => 
                item.classList.remove('entry__form_active')
            )
            document.querySelectorAll('.entry__recovery').forEach((item) => 
                item.classList.add('entry__form_active')
            )
            document.querySelectorAll('.entry__inp-password').forEach((item) => 
                    item.type = 'password'
            )
        })
    )


    document.querySelectorAll('.entry__look').forEach((item) => 
        item.addEventListener('click', () => {
            document.querySelectorAll('.entry__password').forEach((item) => 
                item.classList.toggle('entry__password_open')
            )
            if (document.querySelector('.entry__password').classList.contains('entry__password_open')) {
                document.querySelectorAll('.entry__inp-password').forEach((item) => 
                    item.type = 'text'
                )
            } else {
                document.querySelectorAll('.entry__inp-password').forEach((item) => 
                    item.type = 'password'
                )
            }
        })
    )
})
