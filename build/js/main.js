"use strict";
const thirdUser = 45;
///////////////////////////////////////////
function echo(value) {
    return value;
}
//////////////////////////////////////////////
// custom bool checkers
function isObj(arg) {
    return (typeof arg === "object" && !Array.isArray(arg) && arg !== null);
}
function isTrue(arg) {
    if (Array.isArray(arg) && !arg.length) {
        return { value: arg, is: false };
    }
    if (isObj(arg) && !Object.keys(arg).length) {
        return { value: arg, is: false };
    }
    return { value: arg, is: Boolean(arg) };
}
///////////////////////////////////////////////////////
