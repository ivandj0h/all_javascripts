function reverse1(str){
  let r = "";
  for(let i = str.length-1; i >= 0; i--){
    r += str[i];
  }
  return r;
}

console.log(reverse1("javascript"))

--------------------------------------------------

function reverse1(str){
  var  len = str.length, result = "";
  for(var i = 0; i <= len-1; i++){
    result = result + str[len-i-1];
  }
  return result;
}
var str = "abcdef";
str = reverse1(str);
console.log(str);

--------------------------------------------------

function reverse1(str){
  var r = "";
  for(var i = str.length - 1; i >= 0; i--){
    r += str.charAt(i);
  }
  return r;
}

str = reverse1(str);

---------------------------------------------------

function reverse(str) {
  return Array.prototype.reduce.call(str, function(result, c) {
    return c + result;
  }, "");
}

console.log(reverse("Hello world!"));

---------------------------------------------------

let reverse = str => Array.prototype.reduce.call(str, (result, c) => c + result, "");

console.log(reverse("Hello world!"));