const dt = new Date();
let currentYear = parseInt(dt.getFullYear());
let nextYear = currentYear+1;
document.getElementById("yearDet").innerHTML="Enrollment for the academic year "+currentYear.toString()+'/'+nextYear.toString();