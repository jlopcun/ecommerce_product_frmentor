export { editAmount,addToCart }

const editAmount = (actualAmount,element,operation) =>{
    const actions = {
        'plus':()=>{
            element.textContent = actualAmount +1
        },
        'minus':()=>{
            if(actualAmount === 0 ) return
            element.textContent = actualAmount -1
        }
    }
    actions[operation]()
}

const addToCart = (amount,cart) =>{
    if(amount.textContent === '0') return;
    const template = document.getElementById('cartElementTemplate').content,
    clonedTemplate = template.cloneNode(true)
    cart.textContent = ""
    clonedTemplate.querySelector('.pageCart__wrapper--content_text-amount').textContent = Number(amount.textContent)
    clonedTemplate.querySelector('.pageCart__wrapper--content_text-total').textContent = `$${Number(amount.textContent) * 125}`
    cart.append(clonedTemplate)
    document.getElementById('notifications').textContent = amount.textContent
    amount.textContent = 0
    const $trash = document.getElementById('trash')
        $trash.addEventListener('click',()=>{
            document.getElementById('pageCart').querySelector('.pageCart__wrapper').innerHTML = `<span class="empty">Your cart is empty</span>`
            document.getElementById('notifications').textContent = ""
        })

}