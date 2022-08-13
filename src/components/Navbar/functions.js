import setItems from '../Products/Toggle/Toggle';
let isOpened = false;
let cartItemsArray = [];

export function CheckCardToogle(){
    const main = document.querySelector('.products-storage');
    const cardToggle = document.querySelector('.card-toogle');
    const productImage = document.querySelectorAll('.product-image');
    const AddToCard = document.querySelectorAll('.add-to-card');
    const productTitle = document.querySelectorAll('.product-title');
    const productPrice = document.querySelectorAll('.product-price');

    switch(isOpened)
    {
        case false:
            
            main.setAttribute('class', 'products-storage w-full relative bg-toggle-bg')

            cardToggle.setAttribute('class', 'card-toogle absolute h-toggle 2xl:w-toggle-lg xl:w-toggle-lg lg:w-toggle-lg' +
            'md:w-toggle-lg sm:w-toggle-sm w-toggle-sm bg-white top-0 2xl:right-10% xl:right-10%' +
                    'lg:right-10% md:right-10% sm:right-10% right-0 z-20 block');

            for (const iterator of productImage) {

                 iterator.setAttribute('class', 'product-image w-full h-full object-cover z-0 opacity-50')
            }     
            
            for (const iterator of AddToCard) {
                
                iterator.setAttribute('class', 'add-to-card absolute h-add-card-btn w-add-card-btn bg-white 2xl:top-85% xl:top-86% lg:top-86% md:top-86% sm:top-85% top-85% right-10% bg-lime-500 rounded-full hover:bg-lime-400 hidden opacity-50')

            }

            for (const iterator of productTitle) {
                
                iterator.setAttribute('class', 'product-title w-full h-20% flex justify-start items-end opacity-50')
            }

            for (const iterator of productPrice) {
                
                iterator.setAttribute('class', 'product-price w-full h-20% flex justify-start opacity-50')
            }

            isOpened = true;

        break;

        case true:
            main.setAttribute('class', 'products-storage w-full relative bg-body-bg')

            cardToggle.setAttribute('class', 'card-toogle absolute h-toggle 2xl:w-toggle-lg xl:w-toggle-lg lg:w-toggle-lg' + 
            'md:w-toggle-lg sm:w-toggle-sm w-toggle-sm bg-white top-0 2xl:right-10% xl:right-10%' + 
                    'lg:right-10% md:right-10% sm:right-10% right-0 z-20 hidden');  

            for (const iterator of productImage) {

                iterator.setAttribute('class', 'product-image w-full h-full object-cover z-0 opacity-100')
            } 
            
            for (const iterator of AddToCard) {
                
                iterator.setAttribute('class', 'add-to-card absolute h-add-card-btn w-add-card-btn bg-white 2xl:top-85% xl:top-86% lg:top-86% md:top-86% sm:top-85% top-85% right-10% bg-lime-500 rounded-full hover:bg-lime-400 opacity-100 hidden')
            }

            for (const iterator of productTitle) {
                
                iterator.setAttribute('class', 'product-title w-full h-20% flex justify-start items-end opacity-100')
            }

            for (const iterator of productPrice) {
                
                iterator.setAttribute('class', 'product-price w-full h-20% flex justify-start opacity-100')
            }

            isOpened = false;
            
        break;

    }
}

export const setCartItemArray = (item) => {
    cartItemsArray.push(item);
}

export const getCartItemsArray = () => {
    return cartItemsArray;
}


