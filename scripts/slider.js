export {moveSlide,openAlert}

const id = (el) => document.getElementById(el)

const moveSlide = (target,mainImage) =>{
    const direction = target.dataset.direction || target.parentNode.dataset.direction
    if(direction){
        const src = mainImage.src,
        actualImage = src.substring(src.length-5,src.length-4)
    const actions = {
        'right':()=>{
            mainImage.classList.add('Sliding');
            
            setTimeout(()=>{
                (Number(actualImage)+1 === 5)
            ?mainImage.src = `./assets/images/image-product-${1}.jpg`
            :mainImage.src = `./assets/images/image-product-${Number(actualImage)+1}.jpg`
            },300)

            setTimeout(()=>{
                mainImage.classList.remove('Sliding');
            },500)
        },
        'left':()=>{
            mainImage.classList.add('Sliding');

            setTimeout(()=>{
                (Number(actualImage)-1 === 0)
            ?mainImage.src = `./assets/images/image-product-${4}.jpg`
            :mainImage.src = `./assets/images/image-product-${Number(actualImage)-1}.jpg`
            },300)

            setTimeout(()=>{
                mainImage.classList.remove('Sliding');
            },500)
            
        }
    }
    actions[direction]()
    }
    else if(target.className.includes('thumbnail')){
        
        const src = target.src,
        imgToDisplay = src.substring(src.length-15,src.length-14)
        mainImage.classList.add('Sliding');
        
        setTimeout(()=>{
            mainImage.src = `./assets/images/image-product-${imgToDisplay}.jpg`
        },300)

        setTimeout(()=>{
            mainImage.classList.remove('Sliding')
        },500)
    }
    
}

const openAlert = (appear) =>{
    appear.classList.toggle('CLOSED')
}