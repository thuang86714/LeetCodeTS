function leastInterval(tasks: string[], n: number): number {
    //credit to beetlecamera and pegsmanoo
    const charCountMap= new Map<string, number>();
    let maxCount = 0, maxFreqTask = 0;
    for(const task of tasks){
        let newCount = (charCountMap.get(task) || 0) + 1;
        charCountMap.set(task, newCount);

        if(maxCount === newCount){
            maxFreqTask++;
        }else if(maxCount < newCount){
            maxCount = newCount;
            maxFreqTask = 1;
        }
    }

    let ans = (maxCount - 1)*(n + 1) + maxFreqTask;
    return Math.max(ans, tasks.length);
};
/*
1.First count the number of occurrences of each element.
2.Let the max frequency seen be M for element E
3.We can schedule the first M-1 occurrences of E, each E will be followed by at least N CPU cycles in between successive schedules of E
4.Total CPU cycles after scheduling M-1 occurrences of E = (M-1) * (N + 1) // 1 comes for the CPU cycle for E itself
5.Now schedule the final round of tasks. We will need at least 1 CPU cycle of the last occurrence of E. If there are multiple tasks with frequency M, they will all need 1 more cycle.
6.Run through the frequency dictionary and for every element which has frequency == M, add 1 cycle to result.
7.If we have more number of tasks than the max slots we need as computed above we will return the length of the tasks array as we need at least those many CPU cycles.
*/