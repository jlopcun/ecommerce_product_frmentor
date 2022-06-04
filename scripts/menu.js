export {openPhoneMenu}

const openPhoneMenu = (opener,menu) =>{
    Array.from(opener.children).forEach(el=>{
        (el.className.includes('OPENED'))
        ?el.classList.remove('OPENED')
        :el.classList.add('OPENED')
    })
    menu.classList.toggle('OPENED')
    const $pageNav = document.getElementById('pageNav')
    $pageNav.classList.toggle('OPENED')
}