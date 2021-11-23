let date = new Date();

let vouc1 =[];
let vouc2 =[];
let vouc3 =[];
let vouc4 =[];

const generate = () =>{
    let cards = document.getElementById("quan").value;
    for (let i = 0; i <= cards; i++) {
        if (netw.value == "mtn") {
            let mtn = Math.floor(Math.random() * 1000000000000000);
            vouc1.push(mtn);
            localStorage.setItem("MTN", vouc1);
        }
        else if(netw.value == "glo"){
            let glo = Math.floor(Math.random() * 1000000000000000);
                vouc2.push(glo);
                localStorage.setItem("Glo", vouc2);
        }
        else if(netw.value == "9mobile"){
            let mobile = Math.floor(Math.random() * 1000000000000000);
                vouc3.push(mobile);
                localStorage.setItem("9mobile", vouc3);
        }
        else {
            let airtel = Math.floor(Math.random() * 1000000000000000);
                vouc4.push(airtel);
                localStorage.setItem("Airtel", vouc2);
        }
    }
}
const disp = ()=>{
    
    document.getElementById('voucher').style.display = 'none';
    document.getElementById('displayCards').style.display = 'block';
    
    let display = document.getElementById('displayCards').innerHTML;
    display = localStorage.getItem("card");
}
const vouch = () =>{
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('voucher').style.display = 'block';
    
    
}
const dialer = ()=>{
    document.getElementById('homeScreen').style.display = 'none';
    document.getElementById('dialer').style.display = 'block';
}
const myFunc = message =>{
    document.getElementById('dial').value +=  message;
}