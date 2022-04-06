const dt = new Date();
let currentYear = parseInt(dt.getFullYear());
let nextYear = currentYear+1;
document.getElementById("yearDet").innerHTML="Упис за учебната "+currentYear.toString()+'/'+nextYear.toString();