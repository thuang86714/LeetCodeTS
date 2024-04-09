function countStudents(students: number[], sandwiches: number[]): number {
    //credit to lee215, TC O(n), SC O(1)
    let preferenceCount = Array(2).fill(0);
    let size = students.length, idx = 0;
    for(let preference of students){
        preferenceCount[preference]++;
    }
    for(;idx < size && preferenceCount[sandwiches[idx]] > 0; idx++){
        preferenceCount[sandwiches[idx]]--;
    }
    return size - idx;
};