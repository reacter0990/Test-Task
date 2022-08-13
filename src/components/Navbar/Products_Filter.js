export const onAllCategorySort = () => {

    let clothes = document.querySelectorAll('.clothes');
    let tech = document.querySelectorAll('.tech');
    for (const iterator of clothes) {
        iterator.setAttribute('style', 'display:block');
    }

    for (const iterator of tech) {
        iterator.setAttribute('style', 'display: block')
    }
}

export const onClothesCategorySort = ()  => {
    let clothes = document.querySelectorAll('.clothes');
    let tech = document.querySelectorAll('.tech');
    for (const iterator of clothes) {
        iterator.setAttribute('style', 'display:block');
    }

    for (const iterator of tech) {
        iterator.setAttribute('style', 'display: none')
    }
}

export const onTechCategorySort = ()  => {
    let clothes = document.querySelectorAll('.clothes');
    let tech = document.querySelectorAll('.tech');
    for (const iterator of clothes) {
        iterator.setAttribute('style', 'display: none');
    }

    for (const iterator of tech) {
        iterator.setAttribute('style', 'display: block')
    }

}
