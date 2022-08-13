import { getCartItemsArray } from "../Navbar/functions";


let cartItems = {};

export function CartItemSet(item) {
    cartItems = item;
}


export function CartItemsGet() {
    return cartItems;
}




export const GetTotalPrice = () => {

    const quantity_title = document.querySelector('.cart-quantity-title');
    const total_price = document.querySelector('.cart-total-price');

    quantity_title.innerHTML = getCartItemsArray().length;

    let totalPrice = 0;
    
    for (const iterator of getCartItemsArray()) {

        totalPrice += iterator.prices[0].amount;
    }
    
    total_price.innerHTML = '$' + Math.ceil(totalPrice);
    
}


export const SetToggleItems = () => {

    const counter = document.querySelector('.items-quantity');
    const summ = document.querySelector('.summ');
    counter.innerHTML = getCartItemsArray().length + ' items';
    let total_summ = 0;

    for (const iterator of getCartItemsArray()) {
        
        total_summ += iterator.prices[0].amount;
    }

    summ.innerHTML = '$' + Math.ceil(total_summ);

    if(getCartItemsArray().length == 0){
        
        document.querySelector('.cart-items-list').setAttribute('style', 'display: none');
        document.querySelector('.empty-list').setAttribute('style', 'display: flex');
        console.log('If 1 switched');

    }else if(getCartItemsArray().length > 0){
        
        document.querySelector('.empty-list').setAttribute('style', 'display: none');
        document.querySelector('.cart-items-list').setAttribute('style', 'display: flex');
        console.log('If 2 switched');
    }

}

export const AddToggleItems = (item) => {

    const ul = document.querySelector('.cart-items-list');

    let size_buttons_array = [];
    let color_buttons_array = [];


    const li = document.createElement('li');
    li.className = 'w-full h-toggle-items flex mb-10';
    const info_and_selection = document.createElement('div');
    info_and_selection.className = 'info-and-selection w-60% h-full py-2 flex';
    const info = document.createElement('div');
    info.className = 'info w-90% h-full';
    const item_name = document.createElement('h5');
    item_name.className = 'item-name h-12% w-full text-16px text-Raleway flex justify-start items-center font-light';
    const items_title = document.createElement('h5');
    items_title.className = 'item-title h-12% w-full text-14px text-Raleway flex justify-start font-light';
    const item_price = document.createElement('h5');
    item_price.className = 'item-price h-20% w-full text-16px text-Raleway flex justify-start items-end leading-160% font-bold';
    const size_title = document.createElement('h5');
    size_title.className = 'size-title h-15% w-full text-16px text-Raleway flex justify-start items-center leading-160% font-light';
    const size_buttons = document.createElement('div');
    size_buttons.className = 'size-buttons h-12% w-full flex justify-start';

    // size_button.className = 'h-full w-13% border-2 border-black text-11px flex justify-center items-center font-bold';

    const color_title = document.createElement('h5');
    color_title.className = 'color-title w-full h-18% text-16px text-Raleway flex justify-start items-center font-light';
    const color_selection = document.createElement('div');
    color_selection.className = 'color-selection h-10% w-full flex';



    const selection = document.createElement('div');
    selection.className = 'selection w-10% h-full flex flex-col justify-between';
    const selection_button_increase = document.createElement('button');
    selection_button_increase.className = 'w-full h-10% border border-black flex justify-center items-center pb-1';
    const selection_button_reduce = document.createElement('button');
    selection_button_reduce.className = 'w-full h-10% border border-black flex justify-center items-center pb-1';
    const image = document.createElement('div');
    image.className = 'image w-40% h-full px-1 py-2';
    const img = document.createElement('img');
    img.classList = 'w-full h-full object-contain object-left';



    item_name.innerHTML = item.brand;
    items_title.innerHTML = item.name;
    item_price.innerHTML = item.prices[0].currency.symbol + ' ' + item.prices[0].amount;
    size_title.innerHTML = 'Size';
    color_title.innerHTML = 'Color';
    selection_button_increase.innerHTML = '+';
    selection_button_reduce.innerHTML = '-';
    img.src = item.gallery[0];

    li.appendChild(info_and_selection);
    info_and_selection.appendChild(info);
    info.appendChild(item_name);
    info.appendChild(items_title);
    info.appendChild(item_price);
    info.appendChild(size_title);
    info.appendChild(size_buttons);


    for (let index = 0; index < 5; index++) {

        const size_button = document.createElement('button');

        if (index == 0) {

            size_button.className = 'h-full w-13% border-2 border-black text-11px flex justify-center items-center font-bold';
            size_button.innerHTML = 'XL'
            size_buttons_array.push(size_button);
            continue

        }
        else if (index == 1) {

            size_button.className = 'h-full w-13% border-2 border-black text-11px flex justify-center items-center font-bold ml-2 bg-black text-white';
            size_button.innerHTML = 'S';
            size_buttons_array.push(size_button);
            continue;

        } else if (index == 2) {

            size_button.innerHTML = 'M';


        } else if (index == 3) {

            size_button.innerHTML = 'L';

        }

        size_button.className = 'h-full w-13% border-2 border-black text-11px flex justify-center items-center font-bold ml-2';
        size_buttons_array.push(size_button);

    }

    for (let index = 0; index < 4; index++) {
        size_buttons.appendChild(size_buttons_array[index]);
    }

    info.appendChild(color_title);
    info.appendChild(color_selection);


    for (let index = 0; index < 3; index++) {

        const color_button = document.createElement('button');

        if (index == 0) {

            color_button.className = 'color h-full w-11% bg-items-light';
            color_buttons_array.push(color_button);
            continue

        }
        else if (index == 1) {

            color_button.className = 'color h-full w-11% ml-2 bg-items-dark';
            color_buttons_array.push(color_button);
            continue;

        }

        color_button.className = 'color h-full w-11% ml-2 bg-items-green';
        color_buttons_array.push(color_button);

    }

    for (let index = 0; index < 3; index++) {
        color_selection.appendChild(color_buttons_array[index]);
        console.log(color_buttons_array[index]);
    }

    info_and_selection.appendChild(selection);
    selection.appendChild(selection_button_increase);
    selection.appendChild(selection_button_reduce);
    image.appendChild(img);
    li.appendChild(image);
    ul.appendChild(li);
}



export const checkIsEmptyArray = () => {
    

}
