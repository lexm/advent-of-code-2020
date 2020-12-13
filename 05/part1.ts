#!/usr/bin/env node

import { readFileSync } from 'fs'

function parseSeatId(line: string) {
    let seatId = line.split('').map((ch) => {
        if(ch === 'F' || ch === 'L') return '0'
        if(ch === 'B' || ch === 'R') return '1'
    }).join('')
    let seat = parseInt(seatId, 2)
    if(isNaN(seat)) return 0
    return seat
}

function parseData(arr: string[]) {
    let dict = {}
    let max = 0
    arr.forEach((line) => {
        let seat = parseSeatId(line)
        if(seat > max) max = seat
    })
    return max
}

function main() {
    const input: string = readFileSync('input.txt', 'utf8') 
    const lines: string[] = input.split(/\r?\n/)
    console.log(parseData(lines))
}

main()