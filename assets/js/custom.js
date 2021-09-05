var container1 = $(".demoTxt1");
var speed1 = 150;
var content1 = container1.html();
var text1 = $.trim(content1);
var newHtml1 = "";

text1.split("").forEach(function(v) {
  newHtml1 += '<span>' + v + '</span>';
});

container1.html(newHtml1);

var txtNum1 = 0;
container1.css({opacity: 1});
setInterval(function() {
  container1.find('span').eq(txtNum1).css({opacity: 1});
  txtNum1++;
}, speed1);

var container2 = $(".demoTxt2");
var speed2 = 106;
var content2 = container2.html();
var text2 = $.trim(content2);
var newHtml2 = "";

text2.split("").forEach(function(v) {
  newHtml2 += '<span>' + v + '</span>';
});

container2.html(newHtml2);

var txtNum2 = 0;
container2.css({opacity: 1});
setInterval(function() {
  container2.find('span').eq(txtNum2).css({opacity: 1});
  txtNum2++;
}, speed2);
