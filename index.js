maxPoint = 130;

function GetValues() {
  //tartalom
  fogIsm = parseInt(document.getElementById("fogIsm").value);
  fogDef = parseInt(document.getElementById("fogDef").value);
  tarKif = parseInt(document.getElementById("tarKif").value);
  elAlk = parseInt(document.getElementById("elAlk").value);
  oszErt = parseInt(document.getElementById("oszErt").value);
  //felepeites
  idBe = parseInt(document.getElementById("idBe").value);
  feEp = parseInt(document.getElementById("feEp").value);
  //eloadas
  elAd = parseInt(document.getElementById("elAd").value);
  szaNye = parseInt(document.getElementById("szaNye").value);
  //irasbeli
  iras = parseInt(document.getElementById("iras").value);
   
  Calculate();
}

function Calculate() {
  szobeli =
    fogIsm +
    fogDef +
    tarKif +
    elAlk +
    oszErt +
    idBe +
    feEp +
    elAd +
    szaNye;

    if(isNaN(szobeli) || isNaN(iras)){
        alert("Töltsd ki az összes mezőt.")
        return
    }
    
    if(szobeli+iras > 130){
        alert("Ne adj meg nagyobb számokat a maximumnál.")
        return
    }

    if(iras <= 12 || szobeli <= 3.6){
        document.getElementById("jegy").value = 1
        console.log(`1 \n ${szobeli} \n ${iras}` ) 
    }else if ((szobeli+iras)/maxPoint <= 0.24) {
        document.getElementById("jegy").value = 1
        console.log(`1 \n ${szobeli} \n ${iras} \n ${(szobeli+iras)/maxPoint}`) 
    }else if ((szobeli+iras)/maxPoint <= 0.33) {
        document.getElementById("jegy").value = 2
        console.log(`2 \n ${szobeli} \n ${iras} \n ${(szobeli+iras)/maxPoint}`) 
    }else if ((szobeli+iras)/maxPoint <= 0.47) {
        document.getElementById("jegy").value = 3
        console.log(`3 \n ${szobeli} \n ${iras} \n ${(szobeli+iras)/maxPoint}`) 
    }else if ((szobeli+iras)/maxPoint < 0.60) {
        document.getElementById("jegy").value = 4
        console.log(`4 \n ${szobeli} \n ${iras} \n ${(szobeli+iras)/maxPoint}`) 
    }else{
        document.getElementById("jegy").value = 5
        console.log(`5 \n ${szobeli} \n ${iras} \n ${(szobeli+iras)/maxPoint}`) 
    }
}
