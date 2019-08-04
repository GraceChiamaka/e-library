let card = document.getElementsByClassName('card');



const addOverlay = (ev) => {
    let el= ev.target;
    for(let i = 0; i <= card.length; i++){
        var ele = el.closest('.card-overlay');
        // console.log(el)
       //console.log( card.closest('.card-overlay'))
        //card[i].closest('.card-overlay').style.display = 'block';
    }
    
}
const removeOverlay = (ev) => {

}

for(let i = 0; i <= card.length; i++){
    card[i].addEventListener('mouseover', addOverlay);
    //card[i].addEventListener('mouseleave', removeOverlay);
}