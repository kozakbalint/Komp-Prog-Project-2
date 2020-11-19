maxPoint = 130;

function GetValues() {
    document.getElementById("jegy") = null
  //tartalom
  fogIsm = document.getElementById("fogIsm").value;
  fogDef = document.getElementById("fogDef").value;
  tarKif = document.getElementById("tarKif").value;
  elAlk = document.getElementById("elAlk").value;
  oszErt = document.getElementById("oszErt").value;
  //felepeites
  idBe = document.getElementById("idBe").value;
  feEp = document.getElementById("feEp").value;
  //eloadas
  elAd = document.getElementById("elAd").value;
  szaNye = document.getElementById("szaNye").value;
  //irasbeli
  iras = document.getElementById("iras").value;

  Calculate();
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

    if(iras == 12 || sumPoints-100 == 3.6){
        document.getElementById("jegy").innerHTML += 1
    }else if (sumPoints/maxPoint <= 0.24) {
        document.getElementById("jegy").innerHTML += 1
    }else if (sumPoints/maxPoint <= 0.25) {
        document.getElementById("jegy").innerHTML += 2
    }else if (sumPoints/maxPoint <= 0.33) {
        document.getElementById("jegy").innerHTML += 3
    }else if (sumPoints/maxPoint < 0.47) {
        document.getElementById("jegy").innerHTML += 4
    }else if (sumPoints/maxPoint < 0.60) {
        document.getElementById("jegy").innerHTML += 5
    }
}
