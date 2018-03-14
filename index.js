// SEARCH
function Search(){
  var temp_query = document.getElementById("searchInput").value;
  query = temp_query.toLowerCase();
  console.log(query);
  if (query=="dog collar" || query=="collar") {
    var link = document.getElementById("href");  //.innerHTML = "href=collar_results.html";
    link.href = "collar_results.html";
    link.innerHTML = "collar_results.html";
    return true;
  }
  else if (query == "iphone" || query == "cover" || query == "iphone cover"){
    var link = document.getElementById("href");  //.innerHTML = "href=collar_results.html";
    link.href = "iphone_results.html";
    link.innerHTML = "iphone_results.html";
    return true;
  }
  return false;
}

function Enter_Call(){
  console.log('x');
  // var input = document.getElementById("searchInput");
  // input.addEventListener("keyup", function(event) {
  //   console.log(event);
  //   event.preventDefault();
  //   if (event.keyCode === 13) {
  //     console.log('llegó');
  //     document.getElementById("searchButton").click();
  //   }
  // });
}


// ===========
