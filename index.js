// SEARCH
function search(){
  var query = document.getElementById(searchInput).text;
  if (query=="dog collar" || query=="collar") {
    document.getElementById(main).style.background = black;
  }
}


// ===========
function Product(type){
  this.type = type;
  this.color = "";
  this.price = 0;
  this.name = "";
  this.id = -1;
  this.getType = getProductType;
  this.getColor = getProductColor;
  this.getPrice = getProductPrice;
  this.getName = getProductName;
  this.getId = getProductId;
}

function getProductType(){
  return this.type;
}

function getProductColor(){
  return this.color;
}

function getProductPrice(){
  return this.price;
}

function getProductName(){
  return this.name;
}

function getProductId(){
  return this.id;
}

// Dog Collars

//https://www.amazon.com/Collar-Pawsitive-Durable-Collar-Chrome/dp/B079GRH9WX/ref=sr_1_2_sspa?s=pet-supplies&ie=UTF8&qid=1518902724&sr=1-2-spons&keywords=dog+collar&psc=1
var dog_collar1 = new Product('Dog Collar');
dog_collar1.color = "Blue";
dog_collar1.price = 10.99;
doc_collar1.name = "Pawsitive Co Durable Nylon Puppy and Dog Collar";
dog_collar1.id = 431;

//https://www.amazon.com/Blueberry-Pet-Classic-Turquoise-Collars/dp/B00HRQAUN2/ref=sr_1_4?s=pet-supplies&ie=UTF8&qid=1518902724&sr=1-4&keywords=dog+collar
var dog_collar2 = new Product('Dog Collar');
dog_collar2.color = "Medium Turquoise";
dog_collar2.price = 8.99;
doc_collar2.name = "Blueberry Pet Classic Solid Color Dog Collar";
dog_collar2.id = 432;

//https://www.amazon.com/Blueberry-Pet-Patterns-Turquoise-Adjustable/dp/B06XNJ8XQN/ref=sr_1_6?s=pet-supplies&ie=UTF8&qid=1518902724&sr=1-6&keywords=dog+collar
var dog_collar3 = new Product('Dog Collar');
dog_collar3.color = "Turquoise";
dog_collar3.price = 13.99;
doc_collar3.name = "Blueberry Pet Spring Scent Floral Collection - Dog Collar";
dog_collar3.id = 433;

//https://www.amazon.com/LaReineTM-Personalized-Leather-Braided-Engraved/dp/B077SQDTC1/ref=sr_1_9?s=pet-supplies&ie=UTF8&qid=1518902724&sr=1-9&keywords=dog+collar
var dog_collar4 = new Product('Dog Collar');
dog_collar4.color = "Blue";
dog_collar4.price = 11.77;
doc_collar4.name = "LaReine Personalized Leather Dog Collar";
dog_collar4.id = 434;

//https://www.amazon.com/Blueberry-Pet-Reflective-Adjustable-Collars/dp/B00ZP4A75E/ref=sr_1_11?s=pet-supplies&ie=UTF8&qid=1518902724&sr=1-11&keywords=dog+collar
var dog_collar5 = new Product('Dog Collar');
dog_collar5.color = "Misty Blue ";
dog_collar5.price = 13.99;
doc_collar5.name = "Blueberry Pet Soft & Comfy 3M Reflective Pastel Color Padded Dog Collar";
dog_collar5.id = 435;

var dog_collars = [dog_collar1, dog_collar2, dog_collar3, dog_collar4, dog_collar5];

// iPhone X Covers

//https://www.amazon.com/Lopie-Liquid-Silicone-Case-iPhone/dp/B078WJFM1G/ref=sr_1_10?s=wireless&ie=UTF8&qid=1518903295&sr=1-10&keywords=iphone+X+cover
var iphone_cover1 = new Product('iPhone X Cover');
iphone_cover1.color = "Salmon Pink";
iphone_cover1.price = 11.99;
iphone_cover1.name = "Lopie [Liquid Silicone Series] Case for iPhone X";
iphone_cover1.id = 931;

//https://www.amazon.com/iPhone-Protection-Cover-Tempered-Glass/dp/B0799LY8TP/ref=sr_1_1_sspa?s=wireless&ie=UTF8&qid=1518903295&sr=1-1-spons&keywords=iphone+X+cover&psc=1
var iphone_cover2 = new Product('iPhone X Cover');
iphone_cover2.color = "Black";
iphone_cover2.price = 9.99;
iphone_cover2.name = "Drop Protection Full Cover Tempered Glass Back Case for Apple iPhone X";
iphone_cover2.id = 932;

//https://www.amazon.com/ESR-Support-Wireless-Charging-Transparent/dp/B0743577RN/ref=sr_1_2_sspa?s=wireless&ie=UTF8&qid=1518903295&sr=1-2-spons&keywords=iphone+X+cover&psc=1
var iphone_cover3 = new Product('iPhone X Cover');
iphone_cover3.color = "Transparent Clear";
iphone_cover3.price = 10.99;
iphone_cover3.name = "ESR Slim Clear Soft TPU Cover for iPhone X";
iphone_cover3.id = 933;

//https://www.amazon.com/Spigen-Hybrid-Cushion-Technology-Protection/dp/B074CMHQW5/ref=sr_1_3?s=wireless&ie=UTF8&qid=1518903295&sr=1-3&keywords=iphone+X+cover
var iphone_cover4 = new Product('iPhone X Cover');
iphone_cover4.color = "Matte Black";
iphone_cover4.price = 11.99;
iphone_cover4.name = "Spigen Ultra Hybrid iPhone X Case with Air Cushion Technology and Hybrid Drop Protection";
iphone_cover4.id = 934;

//https://www.amazon.com/iPhone-Protection-Cover-Tempered-Glass/dp/B0799LY8TP/ref=sr_1_4?s=wireless&ie=UTF8&qid=1518903295&sr=1-4&keywords=iphone+X+cover
var iphone_cover5 = new Product('iPhone X Cover');
iphone_cover5.color = "Transparent Purple";
iphone_cover5.price = 13.99;
iphone_cover5.name = "FLOVEME Luxury Slim Fit Gradual Colorful Gradient Change Color Ultra Thin Lightweight Electroplating Bumper Anti-Drop Clear Hard Back Cover Holder";
iphone_cover5.id = 935;

var iphone_covers = [iphone_cover1, iphone_cover2, iphone_cover3, iphone_cover4, iphone_cover5];

// filtering functions
