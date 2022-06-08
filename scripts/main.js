import { openPhoneMenu } from "./menu.js"
import { moveSlide,openAlert } from "./slider.js"
import { editAmount,addToCart } from "./userinteraction.js"

const id = (el) => document.getElementById(el)

const $openMenu = id('openMenu'),
$menu = id('menu'),
$slideButtons = id('slideButtons'),
$thumbnails = id('thumbnails'),
slideImage = id('slideImage'),
$slideAlertButtons = id('slideAlertButtons'),
$slideAlertImage = id('slideAlertImage'),
$thumbnailsAlert = id('thumbnailsAlert'),
$slideAlert = id('slideAlert'),
$closeAlert = id('closeAlert'),
$userInteraction = id('userInteraction'),
$productAmount = id('productAmount'),
$navCart = id('navCart'),
$pageCart = id('pageCart')

window.addEventListener('DOMContentLoaded',()=>{
    $openMenu.addEventListener('click',()=>openPhoneMenu($openMenu,$menu))
    $slideButtons.addEventListener('click',(e)=>moveSlide(e.target,slideImage))
    $thumbnails.addEventListener('click',(e)=>moveSlide(e.target,slideImage))
    $slideAlertButtons.addEventListener('click',(e)=>moveSlide(e.target,$slideAlertImage))
    $thumbnailsAlert.addEventListener('click',(e)=>moveSlide(e.target,$slideAlertImage))
    slideImage.addEventListener('click',()=>openAlert($slideAlert))
    $closeAlert.addEventListener('click',()=>openAlert($slideAlert))
    $userInteraction.addEventListener('click',(e)=>{
        if(e.target.dataset.add) editAmount(Number($productAmount.textContent),$productAmount,e.target.dataset.add)
        else if (e.target.dataset.cart) addToCart($productAmount,$pageCart.querySelector('.pageCart__wrapper'))
    })
    $navCart.addEventListener('click',()=>{
        $pageCart.classList.toggle('OPENED')
    })
    
})