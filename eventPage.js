chrome.runtime.onMessage.addListener(function(response, sender, sendResponse) {
  console.log(response);
  chrome.contextMenus.update("convertYo", {"title":findConversionType(response), "enabled":false});
});

var contextMenuItem = {
  "id": "convertYo",
  "title": "Highlight to convert",
  "enabled": false,
  "contexts": ["selection"]
};


chrome.contextMenus.create(contextMenuItem);

chrome.contextMenus.onClicked.addListener(function(clickData) {
  if (clickData.menuItemId == "convertYo" && clickData.selectionText) {
    //open popup.html with all the converters
    //looooort
    // https://stackoverflow.com/questions/21828818/how-to-open-default-popup-on-contextmenu-item-click-in-chrome-extension
  }
})

function findConversionType(selectedText) {

  var num = selectedText.match(/(-)?[0-9]{1,6}(([.|,])?([0-9]{1,3}))?/i);
  if (num === null) {
    console.log('No numbers found');
    return "No numbers selected";
  }

  num = parseFloat(num[0].replace(/,/, "."));



  var temperatures = [
    "celsius",
    "kelvin",
    "fahrenheit",
    "degree",
    "deg",
    "°",
    "˚"
  ];

  for (var i = 0; i < temperatures.length; i++) {
    if (selectedText.toLowerCase().includes(temperatures[i])) {
      return convertTemperature(selectedText, num);
    }
  }


  var weights = [
    "pound", "lb",
    "ounc", "oz",
    "stone", "st",
    "kg",
    "g",
    "kilo",
    "gram"
  ];

  //check weights after temperatures, as we're checking for a match on the letter "g"
  for (var i = 0; i < weights.length; i++) {
    if (selectedText.toLowerCase().includes(weights[i])) {
      return convertWeight(selectedText, num);
    }
  }


  return "Nothing to convert";
}

function convertTemperature(selectedText, num) {
  if (selectedText.length > 20) {
    return "Please highlight less than 20 characters";
  }

  var result;
  console.log('inside convertTemperature()');

  var unit = selectedText.match(/celsius|fahrenheit|kelvin|((°|˚)(\s)?(c|f|k))/i);



  if (unit === null) {
    console.log('No unit found though...');
    return "Couldn't convert temperature";

  } else if (unit[0].toLowerCase().includes("k")) {
    console.log('this is kelvin');
    result = parseFloat(num) - 273.15;
    return num.toFixed(2) + "°K = " + result.toFixed(2) + "°C";

  } else if (unit[0].toLowerCase().includes("f")) {
    console.log('this is fahrenheit');
    result = (parseFloat(num) - 32) / 1.8;
    return num.toFixed(2) + "°F = " + result.toFixed(2) + "°C";

  } else {
    console.log('this is celsius');
    result = (parseFloat(num) * 1.8) + 32;
    return num.toFixed(2) + "°C = " + result.toFixed(2) + "°F";
  }



  return "Couldn't convert temperature";
}


function convertWeight(selectedText, num) {
  if (selectedText.length > 20) {
    return "Please highlight less than 20 characters";
  }

  var result;
  console.log('inside convertWeight()');

  var unit = selectedText.match(/pound|lb|ounc|oz|stone|st|kilo|kg|gram|(([0-9])(\s)?(g))/i);

  if (unit === null) {
    console.log('No unit found though...');
    return "Couldn't convert weight";

  } else if (unit[0].toLowerCase().includes("poun") || unit[0].toLowerCase().includes("lb")) {
    console.log('this is pound');
    result = parseFloat(num) / 0.0022046;
    return num.toFixed(2) + " lb = " + result.toFixed(2) + " g";

  } else if (unit[0].toLowerCase().includes("ounc") || unit[0].toLowerCase().includes("oz")) {
    console.log('this is ounces');
    result = parseFloat(num) / 0.035274;
    return num.toFixed(2) + " oz = " + result.toFixed(2) + " g";

  } else if (unit[0].toLowerCase().includes("st")) {
    console.log('this is stone');
    result = parseFloat(num) / 0.00015747;
    return num.toFixed(2) + " st = " + result.toFixed(2) + " g";

  } else if (unit[0].toLowerCase().includes("kilo") || unit[0].toLowerCase().includes("kg")) {
    console.log('this is kilograms');
    result = parseFloat(num) * 1000;
    return num.toFixed(2) + " kg = " + result.toFixed(2) + " g";

  } else {
    console.log('this is grams');
    result = parseFloat(num) * 0.035274;
    return num.toFixed(2) + " g = " + result.toFixed(2) + " oz";
  }


  return "Couldn't convert weight";
}
