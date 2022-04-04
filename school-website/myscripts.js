//mobile adaptation of nav menu
const navLinks = document.getElementById("navLinks");
function show_icons(){
    navLinks.style.right="0";
}
function hide_icons(){
    navLinks.style.right="-200px";
}

//footer fb button
function facebook_button(){
    location. href = "https://www.facebook.com/СОТУ-ЃОРЃИ-НАУМОВ-БИТОЛА-344675759281549/";
}

//nav menu backgrounds
function change_color(element_name){
    document.getElementById(element_name).style.color = "black";
    document.getElementById(element_name).style.backgroundColor = "rgb(255, 255, 255, 0.7)";
    document.getElementById(element_name).style.borderRadius="5px";
}
function change_back(element_name){
    var path = window.location.pathname;
    var page = path.split("/").pop();
    switch(page){
    case"index.html":
        if(element_name == "Home"){
        document.getElementById("Home").style.backgroundColor="rgb(0, 183, 76, 1)";
        document.getElementById("Home").style.borderRadius="5px";
        document.getElementById("Home").style.border="1px gray";
        document.getElementById("Home").style.color="black";
        }
        else{
        document.getElementById(element_name).style.backgroundColor="transparent";
        document.getElementById(element_name).style.borderRadius="5px";
        document.getElementById(element_name).style.color="white";
        }
        break;
    case"Struki.html":
        if(element_name == "Courses"){
        document.getElementById("Courses").style.backgroundColor="rgb(0, 183, 76, 1)";
        document.getElementById("Courses").style.borderRadius="5px";
        document.getElementById("Courses").style.border="1px gray";
        document.getElementById("Courses").style.color="black";
        }
        else{
        document.getElementById(element_name).style.backgroundColor="transparent";
        document.getElementById(element_name).style.borderRadius="5px";
        document.getElementById(element_name).style.color="white";
        }
        break;
    case"Info.html":
        if(element_name == "About"){
        document.getElementById("About").style.backgroundColor="rgb(0, 183, 76, 1)";
        document.getElementById("About").style.borderRadius="5px";
        document.getElementById("About").style.border="1px gray";
        document.getElementById("About").style.color="black";
        }
        else{
        document.getElementById(element_name).style.backgroundColor="transparent";
        document.getElementById(element_name).style.borderRadius="5px";
        document.getElementById(element_name).style.color="white";
        }
        break;
    case"Contact.html":
        if(element_name == "Contact"){
        document.getElementById("Contact").style.backgroundColor="rgb(0, 183, 76, 1)";
        document.getElementById("Contact").style.borderRadius="5px";
        document.getElementById("Contact").style.border="1px gray";
        document.getElementById("Contact").style.color="black";
        }
        else{
            document.getElementById(element_name).style.backgroundColor="transparent";
            document.getElementById(element_name).style.borderRadius="5px";
            document.getElementById(element_name).style.color="white";   
        }
        break;
    default:
        break;
    }
}
var final_path = window.location.pathname;
var final_page = final_path.split("/").pop();
switch(final_page){
    case"index.html":
        document.getElementById("Home").style.backgroundColor="rgb(0, 183, 76, 1)";
        document.getElementById("Home").style.borderRadius="5px";
        document.getElementById("Home").style.border="1px gray";
        document.getElementById("Home").style.color="black";
        break;
    case"Struki.html":
        document.getElementById("Courses").style.backgroundColor="rgb(0, 183, 76, 1)";
        document.getElementById("Courses").style.borderRadius="5px";
        document.getElementById("Courses").style.border="1px gray";
        document.getElementById("Courses").style.color="black";
        break;
    case"Info.html":
        document.getElementById("About").style.backgroundColor="rgb(0, 183, 76, 1)";
        document.getElementById("About").style.borderRadius="5px";
        document.getElementById("About").style.border="1px gray";
        document.getElementById("About").style.color="black";
        break;
    case"Contact.html":
        document.getElementById("Contact").style.backgroundColor="rgb(0, 183, 76, 1)";
        document.getElementById("Contact").style.borderRadius="5px";
        document.getElementById("Contact").style.border="1px gray";
        document.getElementById("Contact").style.color="black";
        break;
    default:
        break;
}