export function OnCardOver(element){
    let child = element.children;
    let child1 = child[0].children;
    let button = child1[3];    

    button.setAttribute('style', 'display:block');
}

export function OnCardOut(element){
    let child = element.children;
    let child1 = child[0].children;
    let button = child1[3];

    button.setAttribute('style', 'display:none');
}

export function ShowButtons(element){
   
    let children = element.children;
    let little_childrens = children[0];
    let little_childrens1 = little_childrens;
    let little_childrens2 = little_childrens1.children;
    let button_left = little_childrens2[1];
    let button_right = little_childrens2[2];

    button_left.setAttribute('style', 'display: block');
    button_right.setAttribute('style', 'display:block');
}

export function HideButtons(element){
   
    let children = element.children;
    let little_childrens = children[0];
    let little_childrens1 = little_childrens;
    let little_childrens2 = little_childrens1.children;
    let button_left = little_childrens2[1];
    let button_right = little_childrens2[2];

    button_left.setAttribute('style', 'display: none');
    button_right.setAttribute('style', 'display: none');
}