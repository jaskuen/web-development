var i = {
    value: 0
}
function calc(inStr) {
    var strArray = inStr.split('')
    var sign
    var result = 0
    var temp
    var spaceMet = false
    var num
    var anotherSign = false
    while (i.value < strArray.length) {
        //console.log(strArray[i.value])
        //console.log('sign is ', sign)
        if (ifNum(strArray[i.value])) {
            //console.log(strArray[i])
            if (!spaceMet) {
                if (ifNum(strArray[i.value - 1])) result = result + strArray[i.value]; else {
                    result = strArray[i.value]
                    //console.log(result)
                }
            } else {
                if (ifNum(strArray[i.value - 1])) num = num + strArray[i.value]; else {
                    num = strArray[i.value]
                    //console.log(num)
                }
            }
        } else {
            //console.log(strArray[i])
            if (result != 0 && strArray[i.value] == ' ') spaceMet = true;
            if (strArray[i.value] == '(') {
                if (!spaceMet) {
                    spaceMet = true
                    result = insideBrackets(strArray, i)
                } else num = insideBrackets(strArray, i);
            } else
                if (strArray[i.value] == '+' || strArray[i.value] == '-' || strArray[i.value] == '*' || strArray[i.value] == '/') {
                    if (!anotherSign) {
                        sign = strArray[i.value]
                        anotherSign = true
                    } else {
                        if (!spaceMet) {
                            spaceMet = true
                            result = smallerCalc(strArray, i)
                        } else {
                            num = smallerCalc(strArray, i)
                        }
                    }
                                            
                } else if (strArray[i.value] != ' ' && strArray[i.value] != ')') {
                    console.log("Error")
                    break
                }
        } i.value++
    }
    return doArifm(sign, result, num)
}
    
function doArifm(sign, numOne, numTwo) {
    //console.log('#1 = ', numOne, '#2 = ', numTwo, 'sign is "', sign, '"')
    if (sign == '+') return parseInt(numOne) + parseInt(numTwo); else
    if (sign == '-') return parseInt(numOne) - parseInt(numTwo); else
    if (sign == '*') return parseInt(numOne) * parseInt(numTwo); else
    if (sign == '/') return parseInt(numOne) / parseInt(numTwo); else
    return false
}

function insideBrackets(strArray,count) {
    var newString = ''
    count.value++
    while (strArray[count.value] != ')') {
        newString = newString.concat(strArray[count.value])
        count.value++
    }
    return(calcInBr(newString))
}

function smallerCalc(strArray,count) {
    //console.log('START OF FUNC')
    var newString = ''
    var countOfNums = 2
    var lastNumMet = false
    while (!lastNumMet) {
        //console.log(strArray[count.value])
        if (strArray[count.value + 1] == '+' || strArray[count.value + 1] == '-' || strArray[count.value + 1] == '*' || strArray[count.value + 1] == '/') {
            countOfNums++
            //console.log('sign met in func')
        }
        if (countOfNums != 0 && (numToSpace(strArray[count.value], strArray[count.value + 1]) || count.value >= strArray.length)) {
            countOfNums = countOfNums - 1
            //console.log('FOUND NUM, LEFT: ', countOfNums)
        }
        if (countOfNums == 0 || count.value == strArray.length) lastNumMet = true
        if (!lastNumMet || (lastNumMet && ifNum(strArray[count.value]))) {
            newString = newString.concat(strArray[count.value])
            count.value++
        }
    }
    count.value--
    //console.log(newString)
    //console.log('END OF FUNC')
    return(calcInBr(newString))
}

function numToSpace(A, B) {
    if (ifNum(A) && !ifNum(B)) return true; else return false
}

function calcInBr(inStr) {
    var strArray = inStr.split('')
    var signn
    var resultt = 0
    var spaceMet = false
    var numm
    var i = {
        value: 0
    }
    var anotherSign = false
    while (i.value < strArray.length) {
        if (ifNum(strArray[i.value])) {
            //console.log(strArray[i])
            if (!spaceMet) {
                if (ifNum(strArray[i.value - 1])) resultt = resultt + strArray[i.value]; else {
                    resultt = strArray[i.value]
                    //console.log(result)
                }
            } else {
                if (ifNum(strArray[i.value - 1])) numm = numm + strArray[i.value]; else {
                    numm = strArray[i.value]
                    //console.log(num)
                }
            }
        } else {
            //console.log(strArray[i])
            if (resultt != 0 && strArray[i.value] == ' ') spaceMet = true;
            if (strArray[i.value] == '(') {
                if (resultt == 0) {
                    resultt = insideBrackets(strArray, i)
                } else numm = insideBrackets(strArray, i);
            } else
                if (strArray[i.value] == '+' || strArray[i.value] == '-' || strArray[i.value] == '*' || strArray[i.value] == '/') {
                    if (!anotherSign) {
                        signn = strArray[i.value]
                        anotherSign = true
                    } else {
                        if (resultt == 0) {
                            spaceMet = true
                            resultt = smallerCalc(strArray, i)
                        } else {
                            numm = smallerCalc(strArray, i)
                        }
                    }
                                            
                } else if (strArray[i.value] != ' ' && strArray[i.value] != ')') {
                    console.log("Error")
                    break
                }
        } i.value++
    }
    //console.log('Func res: ', doArifm(signn, resultt, numm))
    return doArifm(signn, resultt, numm)
}



function ifNum(A) {
    if ((A == 1 || A == 2 || A == 3 || 
         A == 4 || A == 5 || A == 6 || 
         A == 7 || A == 8 || A == 9 || 
         A == 0) && A != ' ') return true; else return false
}
    
console.log(calc("* - * / 15 - 7 + 1 1 3 + 2 + 1 1 (+ 1 3)"))