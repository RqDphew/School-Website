function show_text(element_id){
switch(element_id){
  case'button_1':
  if(document.getElementById("1").style.display != "block"){
  document.getElementById("1").style.display = "block";
  document.getElementById("chevron_1").style.transform = "rotate(270deg)";
  document.getElementById("chevron_2").style.transform = "rotate(90deg)";
  document.getElementById("chevron_3").style.transform = "rotate(90deg)";
  document.getElementById("2").style.display = "none";
  document.getElementById("3").style.display = "none";
  }
  else{
    document.getElementById("chevron_1").style.transform = "rotate(90deg)";
    document.getElementById("1").style.display = "none";
  }
  break;
  case'button_2':
  if(document.getElementById("2").style.display != "block"){
    document.getElementById("chevron_2").style.transform = "rotate(270deg)";
    document.getElementById("chevron_1").style.transform = "rotate(90deg)";
    document.getElementById("chevron_3").style.transform = "rotate(90deg)";
    document.getElementById("2").style.display = "block";
    document.getElementById("1").style.display = "none";
    document.getElementById("3").style.display = "none";
    }
    else{
      document.getElementById("2").style.display = "none";
      document.getElementById("chevron_2").style.transform = "rotate(90deg)";
    }
  break;
  case'button_3':
  if(document.getElementById("3").style.display != "block"){
    document.getElementById("3").style.display = "block";
    document.getElementById("chevron_3").style.transform = "rotate(270deg)";
    document.getElementById("chevron_2").style.transform = "rotate(90deg)";
    document.getElementById("chevron_1").style.transform = "rotate(90deg)";
    document.getElementById("2").style.display = "none";
    document.getElementById("1").style.display = "none";
    }
    else{
      document.getElementById("3").style.display = "none";
      document.getElementById("chevron_3").style.transform = "rotate(90deg)";
    }
  break;
  default:
    break;
}
}