/**
 * JavaScript validation will work using events:
 * 
 * JavaScript events:
 * -Form event (onSubmit, onchange etc.)
 * -Window event (onload etc.)
 * Keyboard event (onkeyup, onkeydown etc.)
 * -Mouse event (onclick, onfocus etc.)
 * 
 * JavaScript selector: (starts with document...)
 * -getElementById('idname')
 * -getElementByClassName('classname')
 * -getElementByTagname('tagname')
 *-querySelector('CSS_selector')
 * -querySelectorAll('CSS_selectirs')
 * -form_name or form_name.field_name
 *  
 */
let form = document.contact;
// let fullname = document.getElementbyId("fname")
// let fullname = document.contact.fname;

let fullname = form.fname,
  addr = form.addr,
  email = form.email;
//To  handle event we have: addEventListener()
//addEventListener("event", callback_function());

  form.addEventListener("submit", function(e){
    if(fullname.value == "") {
        //alert("Full name is required.");
        fullname.nextElementSibling.innerText = "Full name is required.";
        e.preventDefault();
    }
    if(addr.value == "") {
        addr.nextElementSibling.innerText = "Address is required.";
        e.preventDefault();
    }
    
        if(email.value == "") {
            email.nextElementSibling.innerText = "E-Mail is required.";
            e.preventDefault(); 
    }

  });



