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
    let total = 0
    let max = 0
    let min = Number.MAX_SAFE_INTEGER
    arr.forEach((line) => {
        let seat = parseSeatId(line)
        if(seat > max) max = seat
        if(seat && seat < min) min = seat
        total += seat
    })
    let fullTotal = ((max + min) * (max - min + 1)) / 2
    return fullTotal - total
}

function main() {
    const input: string = readFileSync('input.txt', 'utf8') 
    const lines: string[] = input.split(/\r?\n/)
    console.log(parseData(lines))
}

main()