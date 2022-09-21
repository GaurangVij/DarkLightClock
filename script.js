
function DisplayTime(){
    let hoursDisplay = document.getElementById('hours');
    let minutesDisplay = document.getElementById('minutes');
    let secondsDisplay = document.getElementById('seconds');
    let sessionDisplay = document.getElementById('session');
    let dateTime = new Date();
    hours = dateTime.getHours();
    minutes = dateTime.getMinutes();
    seconds = dateTime.getSeconds();


    hoursDisplay.innerHTML = hours+":";
    minutesDisplay.innerHTML = minutes+':';
    secondsDisplay.innerHTML = seconds+":";
    if(hours>12){
        sessionDisplay.innerHTML = "PM";
    }else{
        sessionDisplay.innerHTML = "AM";
    }
    setTimeout(()=>{
        DisplayTime();
    },1000);
    
    


let  button = document.getElementById("click");
button.addEventListener('click', (e)=>{
    if(button.innerHTML =="Dark Mode"){
        document.getElementById('container').style.backgroundColor ="black";
        button.innerHTML = "Light Mode";
        button.style.backgroundColor = "white";
        button.style.color = 'black';
        
        return;
    }else{
        document.getElementById('container').style.backgroundColor ="white";
        button.innerText = "Dark Mode";
         button.style.backgroundColor = "black";
        button.style.color = 'white';
        return;
    }
});

}DisplayTime();
