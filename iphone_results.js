// ===========
function Product(type){
  this.type = type;
  this.color = "";
  this.price = 0;
  this.name = "";
  this.id = -1;
}

// iPhone X Covers

var iphone_covers = [];

function add_iphone_cover(color, price, name){
  var iphone_cover = new Product('iPhone X Cover');
  iphone_cover.color = color;
  iphone_cover.price = price;
  iphone_cover.name = name;
  iphone_covers.push(iphone_cover);
}
//https://www.amazon.com/Lopie-Liquid-Silicone-Case-iPhone/dp/B078WJFM1G/ref=sr_1_10?s=wireless&ie=UTF8&qid=1518903295&sr=1-10&keywords=iphone+X+cover
add_iphone_cover("pink", 11.99, "Lopie [Liquid Silicone Series] Case for iPhone X");
//https://www.amazon.com/iPhone-Protection-Cover-Tempered-Glass/dp/B0799LY8TP/ref=sr_1_1_sspa?s=wireless&ie=UTF8&qid=1518903295&sr=1-1-spons&keywords=iphone+X+cover&psc=1
add_iphone_cover("black", 9.99, "Drop Protection Full Cover Tempered Glass Back Case for Apple iPhone X");
//https://www.amazon.com/ESR-Support-Wireless-Charging-Transparent/dp/B0743577RN/ref=sr_1_2_sspa?s=wireless&ie=UTF8&qid=1518903295&sr=1-2-spons&keywords=iphone+X+cover&psc=1
add_iphone_cover("transparent", 10.99, "ESR Slim Clear Soft TPU Cover for iPhone X");
//https://www.amazon.com/Spigen-Hybrid-Cushion-Technology-Protection/dp/B074CMHQW5/ref=sr_1_3?s=wireless&ie=UTF8&qid=1518903295&sr=1-3&keywords=iphone+X+cover
add_iphone_cover("black", 11.99, "Spigen Ultra Hybrid iPhone X Case with Air Cushion Technology and Hybrid Drop Protection");
//https://www.amazon.com/iPhone-Protection-Cover-Tempered-Glass/dp/B0799LY8TP/ref=sr_1_4?s=wireless&ie=UTF8&qid=1518903295&sr=1-4&keywords=iphone+X+cover
add_iphone_cover("purple", 13.99, "FLOVEME Luxury Slim Fit Gradual Colorful Gradient Change Color Ultra Thin Lightweight Electroplating Bumper Anti-Drop Clear Hard Back Cover Holder");

// initializing
function init(){
  for(var i = 0; i < iphone_covers.length; i++){
    document.getElementById('price'+i).innerHTML = iphone_covers[i].price;
    document.getElementById('name'+i).innerHTML = iphone_covers[i].name;
  }
}

// filtering function
function filter_ul(){
  console.log(document.getElementById("color_filter").value);
  console.log(document.getElementById("price_filter").value);
  console.log(iphone_covers.length);
  var color = document.getElementById("color_filter").value;
  var price = document.getElementById("price_filter").value;
  var upper_bound = 0.0;
  var lower_bound = 0.0
  if(price == "zero"){
    lower_bound = 0.0;
    upper_bound = 10.0;
  }
  else if(price == "ten"){
    lower_bound = 10.0;
    upper_bound = 20.0;
  }
  else{
    lower_bound = 20.0;
    upper_bound = 1000000.0;
  }
  if(price == "Select Price Range" && color == "Select Color"){
    for(i = 0; i < iphone_covers.length; i++){
      document.getElementById("product"+i).style.display = "block";
    }
  }
  else if(price == "Select Price Range"){
    //only check colors
    for(i = 0; i < iphone_covers.length; i++){
      var curr_color = iphone_covers[i].color;
      var x = document.getElementById("product"+i);
      if(curr_color == color){
        x.style.display = "block";
      }
      else{
        x.style.display = "none";
      }
    }
  }
  else if(color == "Select Color"){
    // only check prices
    for(i = 0; i < iphone_covers.length; i++){
      var curr_price = iphone_covers[i].price;
      var x = document.getElementById("product"+i);
      if((curr_price >= lower_bound) && (curr_price <= upper_bound)){
        x.style.display = "block";
      }
      else{
        x.style.display = "none";
      }
    }
  }
  else{
    for(i = 0; i < iphone_covers.length; i++){
      var curr_color = iphone_covers[i].color;
      var curr_price = iphone_covers[i].price;
      var x = document.getElementById("product"+i);
      if((curr_color == color) && ((curr_price >= lower_bound) && (curr_price <= upper_bound))){
        x.style.display = "block";
      }
      else{
        x.style.display = "none";
      }
    }
  }
}

init();
