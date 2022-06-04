import { openPhoneMenu } from "./menu.js"

const id = (el) => document.getElementById(el)

const $openMenu = id('openMenu'),
$menu = id('menu')

window.addEventListener('DOMContentLoaded',()=>{
    $openMenu.addEventListener('click',()=>openPhoneMenu($openMenu,$menu))
})