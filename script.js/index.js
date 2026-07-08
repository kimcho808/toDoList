const write_popup = document.querySelector ('.write_popup');
const popup_bg = document.querySelector ('.popup_bg');
console.log(write_popup);
console.log(popup_bg);
write_popup.style.display = 'none';
popup_bg.style.display = 'none';
function writeShow(){
    /* 보이는 작업 처리 시 원래 객체가 가지던 CSS display속성으로 되돌린다 */
    write_popup.style.display = 'flex';
    popup_bg.style.display = 'block';
}
function writeHide(){
    write_popup.style.display = 'none';
    popup_bg.style.display = 'none';
}