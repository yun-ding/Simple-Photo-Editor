var img = null;
var canvas;
var loaded;

function loadFile() {
  var fileInput = document.getElementById("file");
  img = new SimpleImage(fileInput);
  canvas = document.getElementById("can");
  img.drawTo(canvas);
}
function checkLoaded(){
  if (img == null || !img.complete()){
    return false;
  }
  else{
    return true;
  }
}
function makeGray() {
  loaded = checkLoaded();
  if (loaded == false){
    alert('Image not uploaded!');
  }
  else{
  var output = new SimpleImage(img.getWidth(), img.getHeight());
  for (var px of img.values()){
    var R = px.getRed();
    var G = px.getGreen();
    var B = px.getBlue();
    var ave = (R + G + B)/3;
    px.setRed(ave);
    px.setGreen(ave);
    px.setBlue(ave);
    output.setPixel(px.getX(), px.getY(), px);
  }
    output.drawTo(canvas);
  }
}
function makeRed() {
  loaded = checkLoaded();
  if (loaded == false){
    alert('Image not uploaded!');
  }
  else{
  var output = new SimpleImage(img.getWidth(), img.getHeight());
  for (var px of img.values()){
    var x = px.getX();
    var y = px.getY();
    var R = px.getRed();
    var G = px.getGreen();
    var B = px.getBlue();
    var ave = (R+G+B)/3;
    
    if (R < 128){
      px.setRed(ave*2);
      px.setGreen(0);
      px.setBlue(0);
      output.setPixel(x, y, px);      
    }
    else{
      px.setRed(255);
      px.setGreen(2*ave - 255);
      px.setBlue(2*ave - 255);
      output.setPixel(x, y, px);
    }
  }
    output.drawTo(canvas);
}
}
function makeRainbow(){
  loaded = checkLoaded();
  if (loaded == false){
    alert('Image not uploaded!');
  }
  else{
    var output = new SimpleImage(img.getWidth(), img.getHeight());
    for (var px of img.values()){
      var x = px.getX();
      var y = px.getY();
      var R = px.getRed();
      var G = px.getGreen();
      var B = px.getBlue();
      var ave = (R+G+B)/3;
      var h = img.getHeight();
    
      if (y<h/7){
        px.setRed(128);
        px.setGreen(0);
        px.setBlue(0);
        px.setAlpha(255-ave);
        output.setPixel(x, y, px);
      }
      else if(y<h*2/7){
        px.setRed(153);
        px.setGreen(51);
        px.setBlue(0);
        px.setAlpha(255-ave);
        output.setPixel(x, y, px);
      }
      else if(y<h*3/7){
        px.setRed(204);
        px.setGreen(153);
        px.setBlue(0);
        px.setAlpha(255-ave);
        output.setPixel(x, y, px);
      }
      else if(y<h*4/7){
        px.setRed(0);
        px.setGreen(51);
        px.setBlue(0);
        px.setAlpha(255-ave);
        output.setPixel(x, y, px);
      }
      else if(y<h*5/7){
        px.setRed(0);
        px.setGreen(0);
        px.setBlue(153);
        px.setAlpha(255-ave);
        output.setPixel(x, y, px);
      }
      else if(y<h*6/7){
        px.setRed(51);
        px.setGreen(0);
        px.setBlue(128);
        px.setAlpha(255-ave);
        output.setPixel(x, y, px);
      }
      else{
        px.setRed(102);
        px.setGreen(0);
        px.setBlue(102);
        px.setAlpha(255-ave);
        output.setPixel(x, y, px);        
      }
    }
    output.drawTo(canvas);    
  }
}
function remainRed() {
  loaded = checkLoaded();
  if (loaded == false){
    alert('Image not uploaded!');
  }
  else{
  var output = new SimpleImage(img.getWidth(), img.getHeight());
  for (var px of img.values()){
    var x = px.getX();
    var y = px.getY();
    var R = px.getRed();
    var G = px.getGreen();
    var B = px.getBlue();
    var ave = (R+G+B)/3;
    
    if (R > (G+B)*7/5 && R>G && R>B){
      output.setPixel(x, y, px);
    }
    else{
      px.setRed(ave);
      px.setGreen(ave);
      px.setBlue(ave);
      output.setPixel(x, y, px);
    }
  }
  output.drawTo(canvas);
  }
}
function makeNoise(){
  loaded = checkLoaded();
  if (loaded == false){
    alert('Image not uploaded!');
  }
  else{
  var output = new SimpleImage(img.getWidth(), img.getHeight());
  for (var px of img.values()){
    var x = px.getX();
    var y = px.getY();
    var R = px.getRed();
    var G = px.getGreen();
    var B = px.getBlue();
    var ave = (R + G + B)/3;
    
    var ran = Math.random();
    if (ran > 0.4){
      px.setAlpha(150);
      output.setPixel(x, y, px);
    }
    else{
      output.setPixel(x, y, px);
    }
  }
    output.drawTo(canvas);
  }
}
function makeGlitter() {
  loaded = checkLoaded();
  if (loaded == false){
    alert('Image not uploaded!');
  }
  else{
  var output = new SimpleImage(img.getWidth(), img.getHeight());
  for (var px of img.values()){
    var x = px.getX();
    var y = px.getY();
    var R = px.getRed();
    var G = px.getGreen();
    var B = px.getBlue();
    var ave = (R + G + B)/3;
    
    var glitter1 = glitterPosition1(x, y);
    var glitter2 = glitterPosition2(x, y);
    var glitter3 = glitterPosition3(x, y);
    
    if (glitter1 == true){
      px.setAlpha(30);
      output.setPixel(x, y, px);
      }
    if (glitter2 == true){
      px.setAlpha(100);
      output.setPixel(x, y, px);
    }
    if (glitter3 == true){
      px.setAlpha(150);
      output.setPixel(x, y, px);
    }
    else{
      output.setPixel(x, y, px);
    }
  }
    output.drawTo(canvas);
  }
}
function glitterPosition1(x, y){
  var rx = x % 400;
  var ry = y % 300;
  
  if (rx>=9 && rx<=14){
    if(ry>=0 && ry<=23){
      return true;
    }
    else{
      return false;
    }
  }
  if (rx>=0 && rx<=8){
    if(ry>=9 && ry<=14){
      return true;
    }
    else{
      return false;
    }
  }
  if (rx>=15 && rx<=23){
    if(ry>=9 && ry<=14){
      return true;
    }
    else{
      return false;
    }
  }
}
function glitterPosition2(x, y){
  var rx = x % 560;
  var ry = y % 500;
  
  if (rx>=18 && rx<=26){
    if(ry>=0 && ry<=44){
      return true;
    }
    else{
      return false;
    }
  }
  if (rx>=9 && rx<=17){
    if(ry>=9 && ry<=35){
      return true;
    }
    else{
      return false;
    }
  }
  if (rx>=27 && rx<=35){
    if(ry>=9 && ry<=35){
      return true;
    }
    else{
      return false;
    }
  }  
  if (rx>=0 && rx<=8){
    if(ry>=18 && ry<=26){
      return true;
    }
    else{
      return false;
    }
  }
  if (rx>=36 && rx<=44){
    if(ry>=18 && ry<=26){
      return true;
    }
    else{
      return false;
    }
  }  
}
function glitterPosition3(x, y){
  var rx = x%450;
  var ry = y%280;
  
  if (rx>=0 && rx<=8){
    if(ry>=21 && ry<=23){
      return true;
    }
    else{
      return false;
    }
  }
  if (rx>=9 && rx<=12){
    if(ry>=13 && ry<=31){
      return true;
    }
    else{
      return false;
    }
  }
  if (rx>=13 && rx<=17){
    if(ry>=10 && ry<=33){
      return true;
    }
    else{
      return false;
    }
  }  
  if (rx>=18 && rx<=20){
    if(ry>=0 && ry<=42){
      return true;
    }
    else{
      return false;
    }
  }
  if (rx>=21 && rx<=25){
    if(ry>=10 && ry<=33){
      return true;
    }
    else{
      return false;
    }
  }
  if (rx>=26 && rx<=29){
    if(ry>=13 && ry<=31){
      return true;
    }
  }
  if (rx>=30 && rx<=38){
    if(ry>=21 && ry<=23){
      return true;
    }
  }
}
function makeBlur(){
  loaded = checkLoaded();
  if (loaded == false){
    alert('Image not uploaded!');
  }
  else{
  var output = new SimpleImage(img.getWidth(), img.getHeight());
  for (var px of img.values()){
    var x = px.getX();
    var y = px.getY();
    output.setPixel(x, y, px);
  }
  for (var px of img.values()){
    var x = px.getX();
    var y = px.getY();
    var newX;
    var newY;
    
    var ran = halfTime();
    if (ran == true){
      var dxRan = Math.random();
      var dyRan = Math.random();
      var dx = Math.round(dxRan*20);
      var dy = Math.round(dyRan*20);
      
      var signX = halfTime();
      if (signX == true){
        newX = x + dx;
      }
      else{
        newX = x - dx;
      }
      
      var signY = halfTime();
      if (signY == true){
        newY = y + dy;
      }
      else{
        newY = y - dy;
      }
      }
    if (newX > 0 && newY > 0 && newX < img.getWidth() && newY < img.getHeight()){
        output.setPixel(newX, newY, px);
    }
  }
    output.drawTo(canvas);
  }
}

function halfTime(){
  var ran = Math.random();
  if (ran>0.5){
    return true;
  }
  else{
    return false;
  }
}
