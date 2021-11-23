const myFunction = ()=>{

    var Bulb = document.getElementById('Off-Bulb');

     if (Bulb.src.match('i-stock/Twitter.jpeg')){
          Bulb.src = 'bulb-off';
          btn.innerText= "ON"
     }
     else {
         Bulb.src = 'i-stock/Twitter.jpeg';
         btn.innerText = "OFF" 
     }
     
}


