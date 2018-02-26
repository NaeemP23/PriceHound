function User(name){
  this.name = name;
  this.password = "";
}

var Nusers = 10;
var usernames = [];

var rika = new User('rika');
rika.password = rika;
usernames.push(rika);

var nancy = new User('nancy');
nancy.password = nancy;
usernames.push(nancy);

var naeem = new User('naeem');
naeem.password = naeem;
usernames.push(naeem);

var ignacio = new User('ignacio');
ignacio.password = ignacio;
usernames.push(ignacio);

function SignIn(user, pass){
  var index = -1;
  for(i = 0; i < Nusers; i++){
    if(usernames[i].name == user){
      index = i;
      break;
    }
  }
  if(index == -1){
    console.log("Username not found");
    return false;
  }
  else if(usernames[index].password != pass){
    console.log("Incorrect password");
    return false;
  }
  return true;
}

function SignUp(user, pass){
  var index = -1;
  for(i = 0; i < Nusers; i++){
    if(usernames[i].name == user){
      index = i;
      break;
    }
  }
  if(index != -1){
    console.log("Username already taken. Please choose another");
    return false;
  }
  else{
    var new_user = User(user);
    new_user.password = pass;
    usernames.push(new_user);
  }
}
