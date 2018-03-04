function User(username){
  this.username = username;
  this.name = "";
  this.lastname = "";
  this.password = "";
}

var Nusers = 0;
var usernames = [];

function add_user(name, lastname, username, password){
  var new_user = new User(username);
  new_user.name = name;
  new_user.lastname = lastname;
  new_user.password = password;
  usernames.push(new_user);
  Nusers++;
}

add_user("Rika", "Ko", "rika", "password");
add_user("Nancy", "Yao", "nancy", "password");
add_user("Naeem", "Patel", "naeem", "password");
add_user("Ignacio", "de Osma", "ignacio", "password");
add_user("EECS", "330", "eecs330", "password");

function SignIn(){
  document.getElementById("error_message").innerHTML = "";
  //fix with new User definition
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  var index = -1;
  if((username == "") || (password == "")){
    error_message = "Please enter all fields";
    document.getElementById("error_message").innerHTML = error_message;
  }
  else{
    for(i = 0; i < Nusers; i++){
      if(usernames[i].username == username){
        index = i;
        break;
      }
    }
    if(index == -1){
      error_message = "Username Not Found";
      document.getElementById("error_message").innerHTML = error_message;
    }
    else if(usernames[index].password != password){
      error_message = "Incorrect password";
      document.getElementById("error_message").innerHTML = error_message;
    }
    else if(usernames[index].password == password){
      success_message = "Correct password";
      document.getElementById("success_message").innerHTML = success_message;
    }
  }
}


function SignUp(){
  document.getElementById("error_message").innerHTML = "";
  var name = document.getElementById("name").value;
  var lastname = document.getElementById("lastname").value;
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  if((name == "") || (lastname == "") || (username == "") || (password == "")){
    error_message = "Please enter all fields";
    document.getElementById("error_message").innerHTML = error_message;
  }
  else{
    var index = -1;
    for(i = 0; i < Nusers; i++){
      if(usernames[i].username == username){
        index = i;
        break;
      }
    }
    if(index != -1){
      // id = error_message
      error_message = "Username already taken. Please pick different username."
      document.getElementById("error_message").innerHTML = error_message;
    }
    else{
      add_user(name, lastname, username, password);
      success_message = "Thanks for registering!";
      document.getElementById("success_message").innerHTML = success_message;
    }
  }
}

// Sign In & Sign Up (https://codepen.io/ehermanson/pen/KwKWEv)
$('.form').find('input, textarea').on('keyup blur focus', function (e) {

  var $this = $(this),
      label = $this.prev('label');

	  if (e.type === 'keyup') {
			if ($this.val() === '') {
          label.removeClass('active highlight');
        } else {
          label.addClass('active highlight');
        }
    } else if (e.type === 'blur') {
    	if( $this.val() === '' ) {
    		label.removeClass('active highlight');
			} else {
		    label.removeClass('highlight');
			}
    } else if (e.type === 'focus') {

      if( $this.val() === '' ) {
    		label.removeClass('highlight');
			}
      else if( $this.val() !== '' ) {
		    label.addClass('highlight');
			}
    }

});

$('.tab a').on('click', function (e) {

  e.preventDefault();

  $(this).parent().addClass('active');
  $(this).parent().siblings().removeClass('active');

  target = $(this).attr('href');

  $('.tab-content > div').not(target).hide();

  $(target).fadeIn(600);

});
