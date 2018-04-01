function openPage(pageName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
      tablinks[i].style.backgroundColor = "";
  }
  document.getElementById(pageName.textContent).style.display = "block";
  pageName.style.backgroundColor = "#f1f1f1";
}

openPage(document.getElementById("defaultOpen"));



document.querySelectorAll('.tablink').forEach((e)=> {
  e.onclick = () => {
    openPage(e);
  }
})

document.querySelectorAll('#Weight input').forEach((e)=>{
  e.oninput = () => {
    converterWeight(e);
  }
})

function converterWeight(e) {
  let val = parseFloat(e.value);
  let id = e.id;
  let inputPounds = document.getElementById("inputPounds");
  let inputOunces = document.getElementById("inputOunces");
  let inputStones = document.getElementById("inputStones");
  let inputKilograms = document.getElementById("inputKilograms");
  let inputGrams = document.getElementById("inputGrams");

  if (id == "inputPounds") {
    inputKilograms.value=(val/2.2046).toFixed(2);
    inputOunces.value=(val*16).toFixed(2);
    inputGrams.value=(val/0.0022046).toFixed();
    inputStones.value=(val*0.071429).toFixed(3);
  }
  if (id == "inputOunces") {
    inputPounds.value=(val*0.062500).toFixed(4);
    inputKilograms.value=(val/35.274).toFixed(4);
    inputGrams.value=(val/0.035274).toFixed(1);
    inputStones.value=(val*0.0044643).toFixed(4);
  }
  if (id == "inputStones") {
    inputPounds.value=(val*14).toFixed(1);
    inputKilograms.value=(val/0.15747).toFixed(1);
    inputOunces.value=(val*224).toFixed();
    inputGrams.value=(val/0.00015747).toFixed();
  }
  if (id == "inputKilograms") {
    inputPounds.value=(val*2.2046).toFixed(2);
    inputOunces.value=(val*35.274).toFixed(2);
    inputGrams.value=(val*1000).toFixed();
    inputStones.value=(val*0.1574).toFixed(3);
  }
  if (id == "inputGrams") {
    inputPounds.value=(val*0.0022046).toFixed(4);
    inputKilograms.value=(val/1000).toFixed(4);
    inputOunces.value=(val*0.035274).toFixed(3);
    inputStones.value=(val*0.00015747).toFixed(5);
  }
}





document.querySelectorAll('#Temperature input').forEach((e)=>{
  e.oninput = () => {
    converterTemperature(e);
  }
})

function converterTemperature(e) {
  let val = parseFloat(e.value);
  let id = e.id;
  let inputCelsius = document.getElementById("inputCelsius");
  let inputFahrenheit = document.getElementById("inputFahrenheit");
  let inputKelvin = document.getElementById("inputKelvin");

  if (id == "inputCelsius") {
    inputFahrenheit.value=((val*1.8)+32).toFixed(2);
    inputKelvin.value=((val)+273.15).toFixed(2);
  }
  if (id == "inputFahrenheit") {
    inputCelsius.value=((val-32)/1.8).toFixed(2);
    inputKelvin.value=(((val-32)/1.8)+273.15).toFixed(2);
  }
  if (id == "inputKelvin") {
    inputFahrenheit.value=(((val-273.15)*1.8)+32).toFixed(2);
    inputCelsius.value=((val)-273.15).toFixed(2);
  }
}




document.querySelectorAll('#Length input').forEach((e)=>{
  e.oninput = () => {
    converterLength(e);
  }
})

function converterLength(e) {
  let val = parseFloat(e.value);
  let id = e.id;
  let inputFeet = document.getElementById("inputFeet");
  let inputInches = document.getElementById("inputInches");
  let inputYards = document.getElementById("inputYards");
  let inputMiles = document.getElementById("inputMiles");
  let inputMeters = document.getElementById("inputMeters");

  if (id == "inputFeet") {
    inputMeters.value=(val/3.2808).toFixed(2);
    inputInches.value=(val*12).toFixed(2);
    inputYards.value=(val*0.33333).toFixed(2);
    inputMiles.value=(val*0.00018939).toFixed(5);
  }
  if (id == "inputInches") {
    inputFeet.value=(val*0.083333).toFixed(3);
    inputMeters.value=(val/39.370).toFixed(3);
    inputYards.value=(val*0.027778).toFixed(3);
    inputMiles.value=(val*0.000015783).toFixed(6);
  }
  if (id == "inputYards") {
    inputFeet.value=(val*3).toFixed();
    inputMeters.value=(val/1.0936).toFixed(2);
    inputInches.value=(val*36).toFixed();
    inputMiles.value=(val*0.00056818).toFixed(5);
  }
  if (id == "inputMiles") {
    inputFeet.value=(val*5280).toFixed();
    inputMeters.value=(val/0.00062137).toFixed();
    inputInches.value=(val*63360).toFixed();
    inputYards.value=(val*1760).toFixed();
  }
  if (id == "inputMeters") {
    inputFeet.value=(val*3.2808).toFixed(2);
    inputInches.value=(val*39.370).toFixed(2);
    inputYards.value=(val*1.0936).toFixed(2);
    inputMiles.value=(val*0.00062137).toFixed(5);
  }
}





document.querySelectorAll('#Speed input').forEach((e)=>{
  e.oninput = () => {
    converterSpeed(e);
  }
})

function converterSpeed(e) {
  let val = parseFloat(e.value);
  let id = e.id;
  let inputMPH = document.getElementById("inputMPH");
  let inputKPH = document.getElementById("inputKPH");
  let inputKnots = document.getElementById("inputKnots");
  let inputMach = document.getElementById("inputMach");

  if (id == "inputMPH") {
    inputKPH.value=(val*1.609344).toFixed(2);
    inputKnots.value=(val/1.150779).toFixed(2);
    inputMach.value=(val/761.207).toFixed(4);
  }
  if (id == "inputKPH") {
    inputMPH.value=(val/1.609344).toFixed(2);
    inputKnots.value=(val/1.852).toFixed(2);
    inputMach.value=(val/1225.044).toFixed(5);
  }
  if (id == "inputKnots") {
    inputMPH.value=(val*1.150779).toFixed(2);
    inputKPH.value=(val*1.852).toFixed(2);
    inputMach.value=(val/661.4708).toFixed(4);
  }
  if (id == "inputMach") {
    inputMPH.value=(val*761.207).toFixed();
    inputKPH.value=(val*1225.044).toFixed();
    inputKnots.value=(val*661.4708).toFixed();
  }
}
