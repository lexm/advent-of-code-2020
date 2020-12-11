#!/usr/bin/env node

import { readFileSync } from 'fs'

const input: string = readFileSync('input.txt', 'utf8') 

const lines = input.split(/\r?\n/);

function parseLine( line: string ) {
    let words: string[] = line.split(' ')
    let count = 0
    if(words.length === 3) {
        let [ min, max ]: number[] = words[0].split('-').map(intStr => parseInt(intStr))
        let ch = words[1][0]
        let pass = words[2]
        if(pass[min - 1] == ch) count++
        if(pass[max - 1] == ch) count++
        console.log(min - 1, max - 1, ch, pass, count)
        if(count == 1) return 1
    }
    return 0
}

// print all lines
let result = 0
lines.forEach((line) => {
    result += parseLine(line)
});
console.log(result)