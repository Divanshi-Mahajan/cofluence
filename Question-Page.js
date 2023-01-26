
function rangeVal(){
  var value = document.getElementById("ran").value;
  value=value/1000000;
  value=value.toFixed(1);
  console.log(value+"M");
  document.getElementById("result").innerHTML=value+"M";

}