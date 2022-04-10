function getVal() {
    let sumPovedenie = 0, sumMatematika = 0, sumMakedonski = 0, sumAngliski = 0, sumFizika = 0, totalSum = 0, natprevar = 0;
    for(let i=1;i<=4;i++){
        if(Number.isNaN(parseInt(document.getElementById('povedenie'+i).value))==true){
            window.alert("ne vnegiksdf");    
            return;
        }
        if(Number.isNaN(parseInt(document.getElementById('math'+i).value))==true){
            window.alert("ne vnegiksdf");    
            return;
        }
        if(Number.isNaN(parseInt(document.getElementById('jazik'+i).value))==true){
            window.alert("ne vnegiksdf");    
            return;
        }
        if(Number.isNaN(parseInt(document.getElementById('stranski'+i).value))==true){
            window.alert("ne vnegiksdf");    
            return;
        }
        sumPovedenie+=parseInt(document.getElementById('povedenie'+i).value);
        sumMatematika+=parseInt(document.getElementById('math'+i).value);
        sumMakedonski+=parseInt(document.getElementById('jazik'+i).value);
        sumAngliski+=parseInt(document.getElementById('stranski'+i).value);
    }
    sumFizika+=parseInt(document.getElementById('fizika1').value);
    sumFizika+=parseInt(document.getElementById('fizika2').value);

    sumPovedenie/=4;
    sumMatematika/=4;
    sumMakedonski/=4;
    sumAngliski/=4;
    sumFizika/=2;
    var select = document.getElementById('natprevar');
    natprevar = parseInt(select.options[select.selectedIndex].value);
    totalSum+=Math.round(((sumMatematika+sumMakedonski+sumAngliski+sumFizika)*10)/4+sumMatematika+sumMakedonski+sumAngliski+sumFizika+sumPovedenie+natprevar);

    document.getElementById("poeni").innerHTML="Поени за упис: "+totalSum;
  }