let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

var icon=document.getElementById('icon');
icon.onclick=function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src="./dark theme icon/sun.png";
    }
}

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click', (e) =>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML =="AC")
        {
            string="";
            input.value=string;
        }
        else if(e.target.innerHTML =="DEL"){
            string =string.substring(0,string.length-1);
            input.value = string;
        }
        else{
            string += e.target.innerHTML;
            input.value = string;
        }
        
    })
})
