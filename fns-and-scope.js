//Once you complete a problem, open up Chrome and check the answer in the console.


var name = 'Tyler';
var storeName;
//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.

  //Code Here
function  isTyler(id){
	if (id === 'Tyler'){
		return true;
	}
	return false;
}

//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.


  //Code Here
  function getName(){
  	storeName = prompt();
  	return storeName;
  }


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  //Code Here
  function welcome(){
  	return "Welcome " + storeName;
  }

//Next problem




//What is the difference between arguments and parameters?

  //Answer Here
function decla(){
  var arg = "Arguments: Is the actual value that is passed to the function <br />";
  var par = "Parameters: Refers to the variables that are used in the function";
  return arg + par;
}

//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?


  //Answer Here
  function fal(){
  var fal = "false <br /> 0 (zero) <br /> '' (empty string) <br /> null <br /> undefined <br /> NaN (a special Number value meaning Not-a-Number!)";
  return fal;
}
  


//Next Problem



//Create a function called myName that returns your name

  //Code Here
  function myName(){
  	return "Roberto";
  }

//Now save the function definition of myName into a new variable called newMyName

  //Code Here

  var newMyName = myName();

//Now alert the result of invoking newMyName
	alert(newMyName);


//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

  //Code Here
  var outerFn = function(){
  		
  			return	storeName;
  		}
  	

  	
  

//Now save the result of invoking outerFn into a variable called innerFn.

  //Code Here
  var innerFn = outerFn;

//Now invoke innerFn.
	innerFn();