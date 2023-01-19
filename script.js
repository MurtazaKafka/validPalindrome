/*
* function `validPalindrome` (string)
* lower case `string`
* Non-alphanumeric letters => ""
* let `opposite` = string.length - 1
* let isPalindrome  = true
* loop `string`
* increment string[0]
* decrement opposite[opposite.length - 1]
*     if `string`[first] !== opposite[last]
*        isPalindrome = fals
*        break
*     else 
*        isPalindrome = true
*/
// function validPalindrome (string) {
//    string.lower()
// }

function isPalindrome(s) {
  s = s.toLowerCase();
  s = s.replace(/\W/g, ""); // removing non-alphanumeric letters
  let opposite = s.length - 1;  
  let result = true;
  for (let i = 0; i <= s.length - 1; i++, opposite--) {
    if (s[i] !== s[opposite]) {
      result = false;
      break;
    }
  }
  return result;
}

