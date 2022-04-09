const dt = new Date();
let currentYear = parseInt(dt.getFullYear());
let nextYear = currentYear+1;
document.getElementById("yearDet").innerHTML="Einschreibung für das Studienjahr"+currentYear.toString()+'/'+nextYear.toString();