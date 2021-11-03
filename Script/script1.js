"use strict";

var theme = document.getElementById('theme');
var body = document.getElementsByTagName('body')[0];
var count = 0;
var changeTheme = function(){
      count++;
      if(count % 2 == 0){
        body.style.backgroundImage = "linear-gradient(to bottom right, #010f1a, #031037)";
        body.style.color = "white";
        theme.innerHTML = "Light Mode";
      }else{
        body.style.backgroundImage = "linear-gradient(to bottom right, #e3dce5, #ffffff)";
        body.style.color = "black";
        theme.innerHTML = "Dark Mode";
      }
}
theme.addEventListener('click', changeTheme);


var submit = document.getElementById('submit');

var hide = function(){
  var form = document.getElementsByClassName('form_filling')[0];
  var formFilled = document.getElementById('form_filled');

  // console.log(formFilled);
  formFilled.style.display = "block";
  form.style.display = "none";

}
submit.addEventListener('click', hide);


var curr = 0;
function update(){
    carousal[curr].classList.add('carousal_item_visible');
}

var prev = function(){
    carousal[curr].classList.remove('carousal_item_visible');
    if(curr == 0){
        curr = carousal.length - 1;
    }else{
        curr--;
    }
    update(curr);
}

var next = function(){
    carousal[curr].classList.remove('carousal_item_visible');
    if(curr == carousal.length - 1){
        curr = 0;
    }else{
        curr++;
    }
    update(curr);
}

setInterval(next, 2000);


var carousal = document.getElementsByClassName('carousal_item');
var moveN = document.getElementById('button_prev');
var moveP = document.getElementById('button_next');
moveN.addEventListener('click', next);
moveP.addEventListener('click', prev);