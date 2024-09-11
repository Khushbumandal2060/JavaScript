function changeHeading(){
let h1 = document.getElementById('heading');
//console.log(h1.style);
h1.style.background= 'Red';
h1.style.borderLeft= "20px solid green "
//document.querySelector('#heading')
}
 
function hidePara(){
    let p =document.getElementById('para');
        p.style.display ='none';
}

function showPara(){
    let p = document.getElementById('para');
    p.style.display = 'block';
}