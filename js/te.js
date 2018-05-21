

function input(){
  var hong = document.getElementById("hong");
  var content = hong.options[hong.selectedIndex].text;


  //alert(content);
  return content;
}

function tmp(){
  var temp = input();
  alert(temp);
}
function open_window(){
  window.open("te.html"+alert("hello"));

  return false;
}
