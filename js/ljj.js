$(document).ready(function(){
  var naviArr = [[
    "fiv","#five","FIVEFINGERS"
  ],[
    "bra","#bran","BRAND"
  ],[
    "eve","#even","EVENT"
  ],[
    "ins","#inst","INSTAGRAM"
  ]];
  var a = "";
  for(var j = 0; j < naviArr.length; j++){
  a +="<li class="+naviArr[j][0]+"><a href="+naviArr[j][1]+"><span>"+naviArr[j][2]+"</span></a></li>";
}
  $("#gnb").append(a);
});
