function reverseVowels(s: string): string {
    //credit to OsidAbu-Alrub and Vega98
  let left = 0;
  let right = s.length - 1;
  const VOWELS = new Set(["a", "i", "u", "e", "o","A", "I", "U", "E", "O"])
  const ans = [...s];
  while(left < right){
    if(!VOWELS.has(ans[left]))
      left++;
    if(!VOWELS.has(ans[right]))
      right--;
    if(VOWELS.has(ans[left]) && VOWELS.has(ans[right])){
      [ans[left++], ans[right--]] = [ans[right], ans[left]];
    }
  }
  return ans.join("");
};