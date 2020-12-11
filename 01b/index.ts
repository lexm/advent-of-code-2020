#!/usr/bin/env node

import { readFileSync } from 'fs'

const input: string = readFileSync('../01a/input.txt', 'utf8') 

let nums: number[] = input
        .split('\n')
        .map(entry => parseInt(entry))
        .sort((a, b) => a - b)

function findPair( target: number, arr: number[], startPos: number, endPos: number ) {
//    console.log(target, arr.slice(0,100),arr.slice(100, 200), startPos, endPos)
    let ptr1 = startPos
    let ptr2 = endPos
    while(ptr1 < ptr2) {
        let newSum = nums[ptr1] + nums[ptr2]
//        console.log(ptr1, ptr2, arr[ptr1], arr[ptr2], newSum)
        if(newSum == target) {
            return arr[ptr1] * arr[ptr2]
        } else if (newSum > target) {
            ptr2--
        } else if (newSum < target) {
            ptr1++
            ptr2++
        } else {
            return 0
        }
    }
    return 0
}

function findTriplet( target: number, arr: number[]) {
    for(let i = 0; i < arr.length - 3; i++) {
        let newTarget = target - arr[i]
        let temp = findPair(newTarget, arr, i + 1, arr.length - 2) 
        console.log(i, newTarget, temp)
        if(temp) return arr[i] * temp
    }
}


// let result = findPair(2020, nums, 0, nums.length - 2)
let result = findTriplet(2020, nums)
console.log(result)