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
    const template = document.getElementById('cartElementTemplate').content,
    clonedTemplate = template.cloneNode(true)
    cart.textContent = ""
    clonedTemplate.querySelector('.pageCart__wrapper--content_text-amount').textContent = amount
    clonedTemplate.querySelector('.pageCart__wrapper--content_text-total').textContent = `$${amount * 125}`
    cart.append(clonedTemplate)
}