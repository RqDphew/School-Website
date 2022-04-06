window.addEventListener('resize', function(event){
const actualWidth = window.innerWidth ||
                      document.documentElement.clientWidth ||
                      document.body.clientWidth ||
                      document.body.offsetWidth;

if (actualWidth <= 960){
    document.getElementById("contact_us_id").style.width="80%";
    document.getElementById("input1").style.width="73%";
    document.getElementById("input2").style.width="73%";
    document.getElementById("input3").style.width="73%";
    document.getElementById("input4").style.width="73%";
}
else if(actualWidth >= 960 && actualWidth <= 1400){
    document.getElementById("contact_us_id").style.width="30%";
    document.getElementById("input1").style.width="80%";
    document.getElementById("input2").style.width="80%";
    document.getElementById("input3").style.width="80%";
    document.getElementById("input4").style.width="80%";
}
else{
    document.getElementById("contact_us_id").style.width="20%";
    document.getElementById("input1").style.width="80%";
    document.getElementById("input2").style.width="80%";
    document.getElementById("input3").style.width="80%";
    document.getElementById("input4").style.width="80%";
}
});