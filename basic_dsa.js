// My solutions to the Basic Algorithm Scripting Challenges on freeCodeCamp.org

// Convert Celsius to Fahrenheit
function convertToF(celsius) {
  
    return celsius*(9/5)+32;
}

// Reverse a String
function reverseString(str) {

    return str.split("").reverse().join("");
}

// Factorialize a Number
function factorialize(num) {
    if (num == 0 || num == 1)
      return 1;
    else
      return num * factorialize(num - 1);
}

// Find the Longest Word in a String
function findLongestWordLength(str) {

    let arr = str.split(" ");
    let len = []
  
    for (let i=0; i<arr.length; i++)
      len.push(arr[i].length);
  
    return Math.max.apply(null, len);
}
  
// Return Largest Numbers in Arrays
function largestOfFour(arr) {
  
    let results = [];
  
    for (let i=0; i<arr.length; i++){
  
      results.push(Math.max(...arr[i]));  
    }
  
    return results; 
}

// Confirm the Ending
function confirmEnding(str, target) {
    
    return str.slice(str.length-target.length,str.length) === target;
}

// Repeat a String
function repeatStringNumTimes(str, num) {

    if (num <= 0)
      return "";
    else
      return str.concat(repeatStringNumTimes(str, num-1));  
}

// Truncate a String
function truncateString(str, num) {

    let len = str.length;
  
    if (len > num)
      return str.slice(0,num) + "..."
  
    return str;
}

// Finders Keepers
function findElement(arr, func) {
    let num = 0;
  
    for (let i=0; i<arr.length; i++)
      if (func(arr[i]))
        return arr[i];
  
    return undefined;
}

//Boo Who
function booWho(bool) {
    return (bool === true || bool === false) ? true:false;
}

// Title Case a Sentence
function titleCase(str) {
  
    let arr1 = [];
    let arr2 = [];
    
    arr1 = str.toLowerCase().split(" ")
  
    for (let i=0; i<arr1.length; i++)
      arr2.push(arr1[i][0].toUpperCase() + arr1[i].slice(1,))
  
    arr2 = arr2.join(" ");
  
    return arr2;
}

// Slice and Splice
function frankenSplice(arr1, arr2, n) {
  
    let a2 = [...arr2];
    a2.splice(n,0,...arr1);
    return a2; //don't do: return a2.splice(n,0,...arr1);
    
    //another solution
    //return arr2.slice(0,n).concat(arr1).concat(arr2.slice(n))
}

// Falsy Bouncer
function bouncer(arr) {

    let truthy = []
  
    for (let i of arr)
      if (Boolean(i) === false)
        continue;
      else
        truthy.push(i);
  
    return truthy;

    //short solution
    //return arr.filter(a => Boolean(a));
}

// Where do I Belong
function getIndexToIns(arr, num) {

    let tmp = arr.sort((a,b) => a-b);
  
    if (tmp.length == 0)
        return 0;
  
    for (let i=0; i<tmp.length; i++){
      if (num <= tmp[i])
        return i;
      else if (num > tmp[tmp.length-1])
        return tmp.length;  
    }  
}

// Mutations
function mutation(arr) {

    let tmp = [];
  
    for (let i of arr)
      tmp.push(i.toLowerCase());
  
    let item1 = tmp[0];
    let item2 = tmp[1];
  
    item1 = item1.split("")
    item2 = item2.split("")
  
    for (let i of item2) 
      if (!item1.includes(i))
        return false;
  
    return true;   
}
  
// Chunky Monkey
function chunkArrayInGroups(arr, size) {

    let res = [];
    let subA = [];
    let tail = [];
    let n = 1;
    let rest = arr.length % size; //Number of elements at the end of the array.
  
    for (let i=0; i<arr.length; i++){  
        subA.push(arr[i]);      
        if (i == n*size - 1){
          res.push(subA);
          subA = [];
          n += 1;
        }
    }
      
    if (rest !== 0){
      tail = arr.splice(-rest);
      res.push(tail);
    }
  
    return res;
}
