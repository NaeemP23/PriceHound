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

// Dog Collars
dog_collars = [];

function add_dog_collar(color, price, name, id){
  var dog_collar = new Product('Dog Collar');
  dog_collar.color = color;
  dog_collar.price = price;
  dog_collar.name = name;
  dog_collar.id = id;
  dog_collars.push(dog_collar);
}

//https://www.amazon.com/Collar-Pawsitive-Durable-Collar-Chrome/dp/B079GRH9WX/ref=sr_1_2_sspa?s=pet-supplies&ie=UTF8&qid=1518902724&sr=1-2-spons&keywords=dog+collar&psc=1
add_dog_collar("blue", 10.99, "Blueberry Pet Classic Solid Color Dog Collar", 1);
//https://www.amazon.com/Blueberry-Pet-Classic-Turquoise-Collars/dp/B00HRQAUN2/ref=sr_1_4?s=pet-supplies&ie=UTF8&qid=1518902724&sr=1-4&keywords=dog+collar
add_dog_collar("pink", 8.99, "Blueberry Pet Spring Scent Floral Collection - Dog Collar", 2);
//https://www.amazon.com/Blueberry-Pet-Patterns-Turquoise-Adjustable/dp/B06XNJ8XQN/ref=sr_1_6?s=pet-supplies&ie=UTF8&qid=1518902724&sr=1-6&keywords=dog+collar
add_dog_collar("blue", 15.99, "Pawsitive Co Durable Nylon Puppy and Dog Collar", 3);
//https://www.amazon.com/LaReineTM-Personalized-Leather-Braided-Engraved/dp/B077SQDTC1/ref=sr_1_9?s=pet-supplies&ie=UTF8&qid=1518902724&sr=1-9&keywords=dog+collar
add_dog_collar("blue", 11.77, "LaReine Personalized Leather Dog Collar", 4);
//https://www.amazon.com/Blueberry-Pet-Reflective-Adjustable-Collars/dp/B00ZP4A75E/ref=sr_1_11?s=pet-supplies&ie=UTF8&qid=1518902724&sr=1-11&keywords=dog+collar
add_dog_collar("blue", 13.99, "Blueberry Pet Soft & Comfy 3M Reflective Pastel Color Padded Dog Collar", 5);

add_dog_collar("purple", 18.99, "", 6);

add_dog_collar("pink", 18.49, "", 7);

add_dog_collar("blue", 7.99, "", 8);

add_dog_collar("brown", 16.49, "", 9);

add_dog_collar("pink", 21.99, "", 10);

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
  for(var i = 0; i < dog_collars.length; i++){
    document.getElementById('price'+i).innerHTML = dog_collars[i].price;
    document.getElementById('name'+i).innerHTML = dog_collars[i].name;
  }
}

// filtering function
function filter_ul(){
  console.log(document.getElementById("color_filter").value);
  console.log(document.getElementById("price_filter").value);
  console.log(dog_collars.length);
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
    for(i = 0; i < dog_collars.length; i++){
      document.getElementById("product"+i).style.display = "block";
    }
  }
  else if(price == "Select Price Range"){
    //only check colors
    for(i = 0; i < dog_collars.length; i++){
      var curr_color = dog_collars[i].color;
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
    for(i = 0; i < dog_collars.length; i++){
      var curr_price = dog_collars[i].price;
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
    for(i = 0; i < dog_collars.length; i++){
      var curr_color = dog_collars[i].color;
      var curr_price = dog_collars[i].price;
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
