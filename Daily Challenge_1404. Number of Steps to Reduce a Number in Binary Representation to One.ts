function numSteps(s: string): number {
    let step = 0, carry = 0;

    // Start from the least significant bit and process towards the most significant bit
    for (let i = s.length - 1; i > 0; i--) {
        if (parseInt(s[i]) + carry === 1) {
            // If the current bit (plus carry) is 1, we need to subtract 1 and add a carry for the next iteration
            carry = 1;
            step += 2; // One for the subtraction (making it zero) and one for the division
        } else {
            // If the current bit (plus carry) is 0, we just divide by 2
            step += 1;
        }
    }

    // Finally, account for the most significant bit
    return step + carry;
};