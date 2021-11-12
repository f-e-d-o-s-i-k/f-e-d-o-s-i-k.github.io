"use strict"




let sum = 5000;
let tipTwo = 0;
let inv =0;
function type() {
    
   let tip = prompt (" 0 - Сайт-визитка   1 - Корпоративный сайт   2 - Интернет-магазин ");
    
    if (tip == 0)sum+=5000;
    
    if (tip == 1)sum+=10000;
    
    if (tip == 2)sum+=15000;
    
    if (tip == 0)tipTwo="Сайт-визитка" ;
    
    if (tip == 1)tipTwo="Корпоротивный сайт"; 
    
    if (tip == 2)tipTwo="Интернет-магазин" ; 
    
    if (tip >2)inv="Недопустимое значение";
    
    
    
    if (tip<=2) alert(tipTwo);
    if (tip<=2) alert(sum);
    if (tip>2) alert(inv);
    
    
    
}
type();

let invTwo = 0;
let sumTwo = 0;
let designTwo = 0;

function typeTwo() {
    
    let design = prompt (" 0 - Простой дизайн  1 - Бизнес дизайн  2 - Вау-дизайн ");
    
    if (design == 0)sumTwo+=5000;
    
    if (design == 1)sumTwo+=10000;
    
    if (design == 2)sumTwo+=15000;  
    
    if (design == 0)designTwo="Простой дизайн";
    
    if (design == 1)designTwo="Бизнес дизайн";
    
    if (design == 2)designTwo="Вау-дизайн"; 
    
    if (design >2)invTwo="Недопустимое значение";
    
    
    if (design <=2) alert(designTwo);
    if (design <=2) alert(sumTwo);
    if (design >2) alert(invTwo);
}
typeTwo();


let sumThree = 5000;
let invThree = 0;
let AdaptabilityTwo = 0;

function typeThree() {
    let Adaptability = prompt (" 0 - Под ПК  1 - Под Телефоны  2 - Под всё вместе ");
    
    if (Adaptability == 0)sumThree+=5000; 
    
    if (Adaptability == 1)sumThree+=10000;
    
    if (Adaptability == 2)sumThree+=15000;
        
    if (Adaptability == 0)AdaptabilityTwo="Под ПК";
    
    if (Adaptability == 1)AdaptabilityTwo="Под Телефоны";
    
    if (Adaptability == 2)AdaptabilityTwo="Под всё вместе";
    
    if (Adaptability > 2)invThree="Недопустимое значение"
    
    
    
    if (Adaptability <=2) alert(AdaptabilityTwo);
    
    if (Adaptability <=2) alert(sumThree);
    
    
    
    if (Adaptability >2) alert(invThree);
    
    alert(sum+sumTwo+sumThree);
    
}
typeThree();
























