// My solutions to the Intermediate Algorithm Scripting Challenges on freeCodeCamp.org

// Sum All Numbers in a Range
function sumAll(arr) {
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let sum = 0;
    for (let i=min; i<=max; i++)
      sum += i;
  
    return sum;
}

// Diff Two Arrays
function diffArray(arr1, arr2) {
    var newArr = [];
  
    newArr = arr1.filter(a => arr2.indexOf(a) === -1).concat(arr2.filter(a => arr1.indexOf(a) === -1))
  
    return newArr;
}

// Seek and Destroy
function destroyer(arr, ...rest) {
    //I added the parameter "...rest" in the function
    return arr.filter(a => !rest.includes(a));
}

// Wherefore art thou
function whatIsInAName(collection, source) {
    var arr = [];
      
  let srcKeys = Object.keys(source);
  
  return collection.filter(function(obj) {
     return srcKeys.every(function(key) {
        return obj.hasOwnProperty(key) && obj[key] === source[key];
      });
    });  
}  

// Spinal Tap Case
function spinalCase(str) {
    // Create a variable for the white space and underscores.
    let regex = /\s+|_+/g;
  
    // Replace low-upper case to low-space-uppercase
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  
    // Replace space and underscore with -
    return str.replace(regex, "-").toLowerCase();
}

// Pig Latin
function translatePigLatin(str) {

    let arr = str.split("")
    let vowels = ["a", "e", "i", "o", "u"];
    let cluster = [];
  
    for (let i=0; i<arr.length; i++)
      if (!vowels.includes(arr[i]))
        cluster.push(arr[i])
      else
        break;
  
    if (vowels.includes(arr[0]))
      return arr.join("").concat("way");
    else
      return arr.slice(cluster.length).join("").concat(cluster.join("")+"ay");
}  

//-> Search and Replace

// DNA Pairing
function pairElement(str) {
  
    let elts = str.split("");
    let pairs = [];
    let first;
    let mis = "";
  
    for (let i=0; i<elts.length; i++)
      if (elts[i] === "C")
        {first = elts[i];
        mis = "G";
        pairs.push([first,mis]);}
      else if (elts[i] === "G")
        {first = elts[i];
        mis = "C";
        pairs.push([first,mis]);}
      else if (elts[i] === "A")
        {first = elts[i];
        mis = "T";
        pairs.push([first,mis]);}
      else if (elts[i] === "T")
        {first = elts[i];
        mis = "A";
        pairs.push([first,mis]);}
  
    return pairs;  
}

//-> Missing letters

// Sorted Union
function uniteUnique(...arr) {
    
    let res = [];
  
    let elt;
  
    for (let i=0; i<arr.length; i++) {
      for (let j=0; j<arr[i].length; j++) {
        elt = arr[i][j];
        if(!res.includes(elt))        
          res.push(elt);
      }
    }
    
    return res;
}

//-> Convert HTML Entities

// Sum All Odd Fibonacci Numbers
function sumFibs(num) {
  
    let sum = 0;
    let n1 = 1; let n2 = 1;
    //let fibs = [];
    let tmp = 0;  
  
    if (num===1) {
      sum = 2; tmp = 2;
    }    
  
    if (num<1)
      return undefined;
  
    //Fibonacci series
    /*for (let i=0; i<=num; i++)    
      if (i===0 || i===1)     
        fibs.push(1);
      else {
      tmp = n1+n2;    
      fibs.push(tmp);       
      n1 = n2;
      n2 = tmp;}*/
     
    while (tmp<=num) {
      if (tmp%2!==0)
        sum += tmp;                  
      n1 = n2;
      n2 = tmp;
      tmp = n1+n2;         
    }
    
    return sum;  
}
    
// Sum All Primes
function sumPrimes(num) {

    let sum = 0;  
    let limit = 0;
    let prime = 2;  
    let flag;
  
    if (num<2) {
      return "Not any prime number less than 2!";
    }    
  
    while (prime<=num) {
      flag = true;
      limit = parseInt(Math.sqrt(prime))
      for (let i=2; i<=limit; i++) 
        if (prime % i === 0) {
            flag = false;
            break;
        }    
      if (flag === true)
        sum += prime;
      prime++;
    }
    
    return sum;  
}
  
// Smallest Common Multiple
function smallestCommons(arr) {
  
    let max = Math.max(...arr);
    let min = Math.min(...arr);
    let scm = max;
  
    for (let i=max-1; i>=min; i--)
      if (scm % i) {
        scm += max;
        i = max;  
      }
        
    return scm; 
}

// Drop it
function dropElements(arr, func) {
  
    for (let i=0; i<arr.length; i++)
      if (func(arr[i]))
        return arr.slice(i);
    
    return [];  
}

//-> Steamroller

// Binary Agents
function binaryAgent(str) {
    return String.fromCharCode(
      ...str.split(" ").map(function(char) {
        return parseInt(char, 2);
      })
    );
}
  
// Everything Be True
function truthCheck(collection, pre) {
  
    let srcKeys = [pre];
  
    let filtered = collection.filter(function(obj) {
      return srcKeys.every(function(key) {
        return obj.hasOwnProperty(key) && obj[key];
      });
    });
    
    return filtered.length === collection.length;  
}

// Arguments Optional
function addTogether(first, second) {
    if (typeof first !== "number") {
      return undefined;
    }
    const sum = second =>
      typeof second === "number" ? first + second : undefined;
    return typeof second === "undefined" ? second => sum(second) : sum(second);
}

// Make a Person
var Person = function(firstAndLast) {
    // Only change code below this line
    // Complete the method below and implement the others similarly
    let fullName = firstAndLast;
    /*let first = firstAndLast.split(" ")[0];
    let last = firstAndLast.split(" ")[1];*/  
    this.getFullName = function() {
      return fullName;
    };
  
    this.getFirstName = function() {
      return fullName.split(" ")[0];
    };
  
    this.getLastName = function() {
      return fullName.split(" ")[1];
    };
    
    this.setFullName = function(firstAndLast) {
      fullName = firstAndLast;
    };
  
    this.setFirstName = function(first) {
      fullName = first + " " +fullName.split(" ")[1];
    };
  
    this.setLastName = function(last) {
      fullName = fullName.split(" ")[0] + " " +last;
    };
  
    return firstAndLast;
};
  //Testing
  var bob = new Person('Bob Ross');  
  console.log(bob.getFullName());
  console.log(bob.getFirstName());
  console.log(Object.keys(bob).length);

// Map the Debris
function orbitalPeriod(arr) {
    var GM = 398600.4418;
    var earthRadius = 6367.4447;
    var newArr = [];
  
    //Looping through each key in arr object
    for (var elem in arr) {
      //Rounding off the orbital period value
      var orbitalPer = Math.round(
        2 * Math.PI * Math.sqrt(Math.pow(arr[elem].avgAlt + earthRadius, 3) / GM)
      );
      //Adding new object with orbitalPeriod property
      newArr.push({name: arr[elem].name, orbitalPeriod: orbitalPer});
    }
  
    return newArr;
}
