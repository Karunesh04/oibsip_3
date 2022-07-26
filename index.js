function convert() {
  var temp = document.getElementById("degree").value;
  
  var type = document.getElementById("select");

  var selected = type.selectedIndex;

  var ans = document.getElementById("result");

  if (type.options[selected].text == "Celsius") {
    ans.value = (parseFloat(temp) - 32) / 1.8;
  }
  else if (type.options[selected].text == "Fahrenheit") {
    ans.value = parseFloat(temp) * 1.8 + 32;
  } 
}

