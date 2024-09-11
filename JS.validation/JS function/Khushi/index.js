function increaseCounter(){
    let counter = document.getElementById('content').innerText;
    counter++;
    document.getElementById('content').innerText=counter;
}

function decreaseCounter(){
    let counter = document.getElementById('counter').innerText;
    counter++;
    document.getElementById('counter').innerText = counter;
}