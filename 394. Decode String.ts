function buildString(curString: string, startIdx: number): [string, number] {
    let result = "";
    let idx = startIdx;
    
    while (idx < curString.length && curString[idx] !== ']') {
        if (!(/^\d$/.test(curString[idx]))){//regex way to check isDigit()
            result += curString[idx];
            idx++;
        } else {
            let repeat = 0;
            while (idx < curString.length && /^\d$/.test(curString[idx])) {
                repeat = repeat * 10 + (curString.charCodeAt(idx) - '0'.charCodeAt(0));
                idx++;
            }
            idx++; // skip '['
            let [tempString, newIdx] = buildString(curString, idx);
            idx = newIdx + 1; // skip ']' and move to next character
            
            while (repeat > 0) {
                repeat--;
                result += tempString;
            }
        }
    }
    
    return [result, idx];
}

function decodeString(s: string): string {
    let [decodedString, ] = buildString(s, 0);//we dont't use pass-by-reference in this case
    return decodedString;
}