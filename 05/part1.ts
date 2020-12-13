#!/usr/bin/env node

import { readFileSync } from 'fs'

function parseData(arr: string[]) {
    let dict = {}
    let count = 0
    let max = 0
    arr.forEach((line) => {
        let seatId = line.split('').map((ch) => {
            if(ch === 'F' || ch === 'L') return '0'
            if(ch === 'B' || ch === 'R') return '1'
        }).join('')
        let seat = parseInt(seatId, 2)
        if(!isNaN(seat) && seat > max) max = seat
    })
    return max
}

function main() {
    const input: string = readFileSync('input.txt', 'utf8') 
    const lines: string[] = input.split(/\r?\n/)
    console.log(parseData(lines))
}

main()