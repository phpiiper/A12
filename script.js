function rTime(str){ // if string = 11202022 (refering to Dec 20, 2022)
  if (typeof str == "string" && !isNaN(str)){
  var year = str.substring(4); var month = str.substring(0,2);  var day = str.substring(2,4); if (month[0] == "0") {month = month[1]}
    var d = new Date(year,month,day)
  }
  else if (typeof str == "string"){
    if (str == "Today") { var d = new Date() }
    else if (typeof str == "string"){
      var d = new Date(); var dd = d.getDate();
      if (str == "Tomorrow") { num = 1;}
      else if (str == "Yesterday") {num = -1}
      else {return false}
      d.setDate(dd + num)
    }
  }
return d
}



function setCookie(name, val, exp) {
  var d = exp
  let ed = "expires="+ d.toUTCString();
  let string = name + "=" + val + ";" + ed + ";path=/"
  document.cookie = string;
console.log(string,document.cookie)
}


document.getElementById("btn").onclick = function(){
let val = prompt("Change the value of cookie \"" + document.getElementById("name").value + "\". Currently set to: \"" + getCookie(document.getElementById("name").value) + "\"")

if (val.length > 0) { setCookie( document.getElementById("name").value, val, rTime("Tomorrow")); crt(); document.reload() }
}
document.getElementById("view").onclick = function(){readCookie()}

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for(let i = 0; i <ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function readCookie(){
  if (getCookie("Cookie").length > 0){
    let val = getCookie("Cookie");
    alert("The value of cookie \"" + document.getElementById("name").value + "\" is: \"" + val + "\".")
  crt()
  }
}

function crt(){
if (getCookie("Cookie").length > 0){
  if (document.getElementById("ct") !== null) {document.getElementById("ct").remove()}
  var res = document.createElement("span"); res.id = "ct"; res.innerText = "Cookie: " + getCookie("Cookie"); document.getElementById("inputDiv").appendChild(res)
}}

crt()