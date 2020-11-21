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
  console.log("asdasda") 
}

function Calculate() {
  sumPoints =
    fogIsm +
    fogDef +
    tarKif +
    elAlk +
    oszErt +
    idBe +
    feEp +
    elAd +
    szaNye +
    iras;

    console.log(iras);
    console.log(sumPoints);

    if(iras <= 12 || sumPoints-100 <= 3.6){
        document.getElementById("jegy").value = 1
        console.log("1") 
    }else if (sumPoints/maxPoint <= 0.24) {
        document.getElementById("jegy").value = 1
        console.log("1") 
    }else if (sumPoints/maxPoint <= 0.33) {
        document.getElementById("jegy").value = 2
        console.log("2") 
    }else if (sumPoints/maxPoint <= 0.47) {
        document.getElementById("jegy").value = 3
        console.log("3") 
    }else if (sumPoints/maxPoint < 0.60) {
        document.getElementById("jegy").value = 4
        console.log("4") 
    }else{
        document.getElementById("jegy").value = 5
        console.log("5") 
    }
}
