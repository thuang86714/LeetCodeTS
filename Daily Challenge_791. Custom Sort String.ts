function customSortString(order: string, s: string): string {
    //TC O(n + m), where n and m are the length of order and s respectively, SC O(1)
    const charCount = new Array(26).fill(0);//count the appearance of char

    for(let ch of s){//then we know the overall appearance of s
        const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        charCount[index]++;
    }

    let ans = "";//an empty string as answer

    // Construct the answer based on the order.
    for(let ch of order){
        const index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
        ans += ch.repeat(charCount[index]);
        charCount[index] = 0;
    }

    // Add remaining characters not in order.
    for(let i = 0; i < 26; i++){
        if(charCount[i] > 0){
            ans += String.fromCharCode(i + 'a'.charCodeAt(0)).repeat(charCount[i]);
        }
    }

    return ans;
};