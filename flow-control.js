let basicTeenager = function(age) {
  if(age >= 13 && age <= 19) {
    return "You are a teenager!";
  }
}

let teenager = function(age) {
  if(age <= 19 && age >= 13) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

let ageChecker = function(age) {
  if(age <= 19 && age >= 13) {
    return "You are a teenager!";
  } else if(age < 13){
    return "You are a kid";
  } else if(age > 19) {
    return "You are a grownup";
  }
}

let ternaryTeenager = function(age) {
return if(age <= 19 && age >= 13) ?  "You are a teenager" : "You are not a teenager";
}

let switchAge = function(age) {
  switch(age) {
    case 13:
      return "You are a teenager";
      break;
    case 14:
      return "You are a teenager";
      break;
    case 15:
      return "You are a teenager";
      break;
    case 16:
      return "You are a teenager";
      break;
    case 17:
      return "You are a teenager";
      break;
    case 18:
      return "You are a teenager";
      break;
    case 19:
      return "You are a teenager";
      break;
    default:
      return "You have an age";
  }
}
