function palindrome(str) {
    //replacing unwanted characters in the string 
    str = str.toLowerCase().replace(/[\W_]/g, "");
  for (var i = 0, len = str.length - 1; i < len / 2; i++) { 
    //checking the elements on both sides of the sting
    if (str[i] !== str[len - i]) { 
      return false;
    }
  }
  return true;
}
