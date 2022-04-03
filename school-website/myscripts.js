const navLinks = document.getElementById("navLinks");
function show_icons(){
    navLinks.style.right="0";
}
function hide_icons(){
    navLinks.style.right="-200px";
}
function facebook_button(){
    location. href = "https://www.facebook.com/СОТУ-ЃОРЃИ-НАУМОВ-БИТОЛА-344675759281549/";
}

var path = window.location.pathname;
var page = path.split("/").pop();
switch(page){
    case"index.html":
        document.getElementById("Home").style.backgroundColor ="rgb(102,255,127)";
        document.getElementById("Home").style.borderRadius="3px";
        document.getElementById("Home").style.border = "1px gray";
        document.getElementById("Home").style.color = "black";
        break;
    case"Struki.html":
        document.getElementById("Courses").style.backgroundColor ="rgb(102,255,127)";
        document.getElementById("Courses").style.borderRadius="3px";
        document.getElementById("Courses").style.border = "1px gray";
        document.getElementById("Courses").style.color = "black";
        break;
    case"Info.html":
        document.getElementById("About").style.backgroundColor ="rgb(102,255,127)";
        document.getElementById("About").style.borderRadius="3px";
        document.getElementById("About").style.border = "1px gray";
        document.getElementById("About").style.color = "black";
        break;
    case"Contact.html":
        document.getElementById("Contact").style.backgroundColor ="rgb(102,255,127)";
        document.getElementById("Contact").style.borderRadius="3px";
        document.getElementById("Contact").style.border = "1px gray";
        document.getElementById("Contact").style.color = "black";
        break;
    default:
        break;
}
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
else{
    document.getElementById("contact_us_id").style.width="30%";
    document.getElementById("input1").style.width="80%";
    document.getElementById("input2").style.width="80%";
    document.getElementById("input3").style.width="80%";
    document.getElementById("input4").style.width="80%";
}
