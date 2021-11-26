"use strict";


// Change Theme
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




// Form show and hide
var submit = document.getElementById('submit');

var hide = function(){
  var form = document.getElementsByClassName('form_filling')[0];
  var formFilled = document.getElementById('form_filled');

  formFilled.style.display = "block";
  form.style.display = "none";

}
submit.addEventListener('click', hide);



// Carousal
var curr = 0;
function update(curr){
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


// Like and follow 
var like = document.getElementById('like');
var follow = document.getElementById('follow');

var likeC = document.getElementById('like_count');
var followC = document.getElementById('follow_count');

var countL = 0;
var countF = 0;

var updateLike = function(){
    countL++;
    if(countL % 2 != 0){
        likeC.innerHTML = parseInt(likeC.innerHTML) + 1;
        like.style.backgroundColor = "midnightblue";
        like.style.boxShadow = "0px 0px 12px 4px white";
        like.style.color = "white";
    }else{
        likeC.innerHTML = parseInt(likeC.innerHTML) - 1;
        like.style.backgroundColor = "lawngreen";
        like.style.color = "black";
        like.style.boxShadow = "0px 0px 0px 0px white";
    }
}


var updateFollow = function(){
    countF++;
    if(countF % 2 != 0){
        followC.innerHTML = parseInt(followC.innerHTML) + 1;
        follow.style.backgroundColor = "midnightblue";
        follow.style.boxShadow = "0px 0px 12px 4px white";
        follow.style.color = "white";
    }else{
        followC.innerHTML = parseInt(followC.innerHTML) - 1;
        follow.style.backgroundColor = "lawngreen";
        follow.style.color = "black";
        follow.style.boxShadow = "0px 0px 0px 0px white";
    }
}

like.addEventListener('click', updateLike);

follow.addEventListener('click', updateFollow);