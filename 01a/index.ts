#!/usr/bin/env node

import { readFileSync } from 'fs'

// import axios from 'axios'

const input: string = readFileSync('input.txt', 'utf8') 

let nums: number[] = input.split('\n').map(entry => parseInt(entry))

let numSet = new Set()

let result: number

for(let i = 0; i < nums.length; i++) {
    let cur = nums[i]
    if(numSet.has(2020 - cur)) {
        result = cur * (2020 - cur);
        break;
    } else {
        numSet.add(cur)
    }
}

console.log(result)