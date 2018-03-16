// SEARCH
function Search(){
  var temp_query = document.getElementById("searchInput").value;
  query = temp_query.toLowerCase();
  console.log(query);
  if (query == "dog collar" || query == "collar"){
    var link = document.getElementById("searchForm");
    link.action = "collar_results.html";
  }
  else if (query == "cover" || query == "iphone cover" || query == "iphone case"){
    var link = document.getElementById("searchForm");
    link.action = "iphone_results.html";
  }
}


function Enter_Call(e){
  console.log('x');
  var keynum;
  if(window.event) { // IE
    keynum = e.keyCode;
  }
  else if(e.which){ // Netscape/Firefox/Opera
    keynum = e.which;
  }
  if(keynum == 13){
    document.getElementById("searchButton").click();
    // or Search(); or return Search();
  }
}
