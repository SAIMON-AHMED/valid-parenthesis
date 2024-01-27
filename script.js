/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    const stack = [];
    let flag = false;
    for (let i = 0; i < s.length; i++) {
        if (s[i] === "(" || s[i] === "{" || s[i] === "[") {
            stack.push(s[i]);
        } else if (s[i] === ")" && stack[stack.length - 1] === "(") {
            stack.pop();
            flag = true;
        } else if (s[i] === "}" && stack[stack.length - 1] === "{") {
            stack.pop();
            flag = true;
        } else if (s[i] === "]" && stack[stack.length - 1] === "[") {
            stack.pop();
            flag = true;
        } else {
            return false;
        }
    }
    if (stack.length !== 0) {
        return false;
    }
    return flag;
}
