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
    document.getElementById(element_name).style.backgroundColor = "rgb(0, 140, 40, 0.9)";
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
        case"mashinski_doc.html":
        case"elektro_doc.html":
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
    case"e-uchilishte.html":
    if(element_name == "E-school"){
        document.getElementById("E-school").style.backgroundColor="rgb(0, 183, 76, 1)";
        document.getElementById("E-school").style.borderRadius="5px";
        document.getElementById("E-school").style.border="1px gray";
        document.getElementById("E-school").style.color="black";
        }
        else{
            document.getElementById(element_name).style.backgroundColor="transparent";
            document.getElementById(element_name).style.borderRadius="5px";
            document.getElementById(element_name).style.color="white";   
        }
        break;
    case"about.html":
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
        document.getElementById("Home").style.border="1px black";
        document.getElementById("Home").style.color="black";
        document.getElementById("Upis").style.color = "white";
        document.getElementById("Upis").style.backgroundColor = "#009688";
        document.getElementById("Upis").style.borderRadius="5px";
        break;
    case"Struki.html":
    case"mashinski_doc.html":
    case"elektro_doc.html":
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
    case"e-uchilishte.html":
        document.getElementById("E-school").style.backgroundColor="rgb(0, 183, 76, 1)";
        document.getElementById("E-school").style.borderRadius="5px";
        document.getElementById("E-school").style.border="1px gray";
        document.getElementById("E-school").style.color="black";
        break;
    case"about.html":
        document.getElementById("About").style.backgroundColor="rgb(0, 183, 76, 1)";
        document.getElementById("About").style.borderRadius="5px";
        document.getElementById("About").style.border="1px gray";
        document.getElementById("About").style.color="black";
        break;
    default:
        break;
}
window.onscroll = function() {myFunction()};

function myFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";  } 
  else {
    document.getElementById("myBtn").style.display = "none";
  }
}
function change(lang){
    var path = final_path.substring(0, final_path.lastIndexOf("/"));
    var directoryName = path.substring(path.lastIndexOf("/")+1);
    if(final_page=="elektro_doc.html" || final_page == "mashinski_doc.html")
        location.href="../../../../"+"school-website/"+lang+"/struki/"+directoryName+"/"+final_page;   
    else
        location.href = "../../"+lang+"/"+directoryName+"/"+final_page;
}