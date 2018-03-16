// SEARCH
function search(){
  var query = document.getElementById("searchInput").text;
  console.log(query);
  if (query=="dog collar" || query=="collar") {
    return true;
  }
  else{
    return false;
  }
}

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

//https://www.amazon.com/Lavender-technext020-Shockproof-Resistance-Protective/dp/B00NM384TQ/ref=pd_sbs_107_5?_encoding=UTF8&pd_rd_i=B00NM384TQ&pd_rd_r=TSKD4GW7YS3THTYFR6R4&pd_rd_w=rc7SX&pd_rd_wg=1GP9Y&psc=1&refRID=TSKD4GW7YS3THTYFR6R4
add_iphone_cover("purple", 7.99, "iPhone 6S Lavender Case, Shockproof Ultra Slim Fit Cover Shock Resistance - Purple");
//https://www.amazon.com/Lavender-technext020-Shockproof-Resistance-Protective/dp/B00NM386JY/ref=pd_sbs_107_5?_encoding=UTF8&pd_rd_i=B00NM384TQ&pd_rd_r=TSKD4GW7YS3THTYFR6R4&pd_rd_w=rc7SX&pd_rd_wg=1GP9Y&refRID=TSKD4GW7YS3THTYFR6R4&th=1
add_iphone_cover("green", 7.99, "iPhone 6S Lavender Case, Shockproof Ultra Slim Fit Cover Shock Resistance - Green");
//https://www.amazon.com/Spigen-iPhone-Wallet-Design-Holder/dp/B01GIVWS2C/ref=pd_sbs_107_4?_encoding=UTF8&pd_rd_i=B01GIVWS2C&pd_rd_r=PYR2JDZ1KGBDMFAV092T&pd_rd_w=og1EX&pd_rd_wg=Y2OGE&psc=1&refRID=PYR2JDZ1KGBDMFAV092T
add_iphone_cover("black", 17.99, "Spigen Slim Armor CS iPhone 7 Case / iPhone 8 Case with Slim Dual Layer Wallet Design and Card Slot Holder");
//https://www.amazon.com/Silk-iPhone-Wallet-Case-Protective/dp/B01JTI48LK/ref=pd_sbs_107_4?_encoding=UTF8&pd_rd_i=B01JTI48LK&pd_rd_r=Y4HB3PRF4VQJ9PV18236&pd_rd_w=UfS7E&pd_rd_wg=ARZph&psc=1&refRID=Y4HB3PRF4VQJ9PV18236
add_iphone_cover("blue", 14.99, "Silk iPhone 7/8 Wallet Case - VAULT Protective Credit Card Grip Cover- Blue Jade");
//https://www.amazon.com/TORRAS-Silicone-Shockproof-Microfiber-Cushion/dp/B01ISMN7SI/ref=sr_1_3?ie=UTF8&qid=1520878901&sr=8-3&keywords=iphone+case+yellow
add_iphone_cover("yellow", 16.99, "iPhone 6s, Liquid Silicone Rubber Shockproof Case with Soft Microfiber Cloth Cushion");

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
