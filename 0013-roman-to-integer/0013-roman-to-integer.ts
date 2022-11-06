function romanToInt(s: string): number {
        const rom = { 
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    let num: number = 0;
    for(let i = 0; i<s.length; i++){
        let cur = rom[s[i]]
        let next = rom[s[i+1]]
        if(next > cur){
            num+=next-cur;
            i++;
        }
        else{
            num += cur
        }
    }
    return num;
};