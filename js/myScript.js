
/*
let sum = 5000;
let tipTwo = 0;
let inv =0;
function type() {
    
   let tip = 1
    
    if (tip == 0)sum+=5000;
    
    if (tip == 1)sum+=10000;
    
    if (tip == 2)sum+=15000;
    
    if (tip == 0)tipTwo="Сайт-визитка" ;
    
    if (tip == 1)tipTwo="Корпоротивный сайт"; 
    
    if (tip == 2)tipTwo="Интернет-магазин" ; 
    
    if (tip >2)inv="Недопустимое значение";
    
    
    
    if (tip<=2) ;
    if (tip<=2) ;
    if (tip>2) ;
    
    
    
}


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
    
    
    if (design <=2) ;
    if (design <=2) ;
    if (design >2) ;
}



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
    
    if (Adaptability > 2)invThree="Недопустимое значение";
    
    
    
    if (Adaptability <=2) ;
    
    if (Adaptability <=2) ;
    
    if (Adaptability >2) ;
    
    alert(sum+sumTwo+sumThree);
    
};











   





$(document).ready(function() {
    
    let options = { threshold: [1]};
    let observer = new IntersectionObserver(onEntry, options);
    let elements = $('.element-animation');
    elements.each((i,el) => {
        observer.observe(el);
    });
    
    function onEntry (entry){
  entry.forEach(change =>{
      if (change.isIntersecting){
          change.target.classList.add('show-animation');
          
      } 
});


}
    
    $(window).scroll(() =>{
    let scrollDistance = $(window).scrollTop();
    
    $(".section").each((i, el) =>{
        
        if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
            $("nav a").each((i, el) => {
                if ($(el).hasClass("active")){
                    $(el).removeClass("active");
                }
            });
            
            $('nav li:eq('+ i +')').find('a').addClass('active');
        }
    });
    
});
});



$(document).ready(function(){


});











function dcf() {
    var n = document.getElementById("sel").text;
    document.getElementById("demo").innerHTML = n;
};

document.querySelector("#fgh").onclick = function(){
    let p = document.getElementById("sel").text;
  if (sel.options[sel.selectedIndex].value);
};


let n = (sel.options[sel.selectedIndex].value);


document.querySelector("#fgh").onclick = function(){
    let n = (sel.options[sel.selectedIndex].value);
    if (n==1){
    newvar ="15000"};
    if (n == 2){
        newvar = "20000"
    };
    if (n == 3){
        newvar = "25000"
    };
    
    let m = (nel.options[nel.selectedIndex].value);
    

    
    if (m == 1)newvar=parseInt(newvar)+5000;
    
    if (m == 2)newvar=parseInt(newvar)+10000;
    
    if (m == 3)newvar=parseInt(newvar)+15000;
    
    
    let d = (ada.options[ada.selectedIndex].value);
    
    if (d == 1)newvar=parseInt(newvar)+5000;
    
    if (d == 2)newvar=parseInt(newvar)+10000;
    
    if (d == 3)newvar=parseInt(newvar)+15000;
    
    // Начало новой функции с другими переменными 

    
    let e = (sel.options[sel.selectedIndex].value);
    if (e==1){
    newvar2 ="1 Неделя"};
    if (e == 2){
        newvar2 = "2 Неделя"
    };
    if (e == 3){
        newvar2 = "3 Неделя"
    };
    
    let df = (nel.options[nel.selectedIndex].value);
    
    let srok = parseInt(nel.options[nel.selectedIndex].value)+parseInt(sel.options[sel.selectedIndex].value)+parseInt(ada.options[ada.selectedIndex].value);
    
    console.log(srok);
    
    let week = ("Неделя");
    
    if (srok == 1)week = (" Неделя")
    
    if (srok > 1)week = (" Недели")
    
    if (srok < 5)week = (" Недели")
    
    if (srok >= 5)week = (" Недель")
    
    console.log(week);
    
    

    
    if (df == 1)newvar2=parseInt(newvar2)+parseInt(df) + " " + (week);
    
    if (df == 2)newvar2=parseInt(newvar2)+parseInt(df) + " " + (week);
    
    if (df == 3)newvar2=parseInt(newvar2)+parseInt(df) + " " + (week);
    
    
    let de = (ada.options[ada.selectedIndex].value);
    
    if (de == 1)newvar2=parseInt(newvar2)+parseInt(df) + " " + (week);
    
    if (de == 2)newvar2=parseInt(newvar2)+parseInt(df) + " " + (week);
    
    if (de == 3)newvar2=parseInt(newvar2)+parseInt(df) + " " + (week);
    
    
    
    
    newvar2 = (srok) + (week);
    
    
    
    
 isit.innerHTML=newvar2
 isid.innerHTML=newvar
}; 



$(window).ready(function() {
$('html, body').animate({scrollTop : 0});
}); 


*/









$(document).ready(function() {
    
   $("#inputPassword3").mask("+7 (999) 999-99-99"); 
 
});

$(document).ready(function() {

$('form').submit(function(event){
    event.preventDefault();
    
    $.ajax({
        type: "POST",
        url: "php/mail.php",
        data: $(this).serialize()
        
    }).done(function (){
        $(this).find("input").val("");
        alert("Успешно отправлено");
        $("form").trigger("reset");
    });
    return false;
    
});

});


$(document).ready(function() {

    
    
    
});













