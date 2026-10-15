/*Create a function which answers the question "Are you playing banjo?".
If your name starts with the letter "R" or lower case "r", you are playing banjo!

The function takes a name as its only argument, and returns one of the following strings:

name + " plays banjo" 
name + " does not play banjo"
Names given are always valid strings.*/


//My Solution
function areYouPlayingBanjo(name) {
  // Implement me
  if(name[0].toLowerCase() == 'r'){return (name+ " plays banjo");}
  else{return (name+ " does not play banjo");}
  return name;
}

//Different Solution

//Solution#1
function areYouPlayingBanjo(name) {
  return name[0].toLowerCase() == "r" ? name + " plays banjo" : name + " does not play banjo";
}

//Solution#2
function areYouPlayingBanjo(name) {
  if (name[0].toLowerCase() === 'r') {
    return name + ' plays banjo';
  } else {
    return name + ' does not play banjo';
  }
}