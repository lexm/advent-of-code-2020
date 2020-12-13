#!/usr/bin/env node

import { readFileSync } from 'fs'

function parseData(arr: string[]) {
    let dict = {}
    let count = 0
    arr.forEach((line) => {
        console.log(line)
        count++
    })
    return count
}

function main() {
    const input: string = readFileSync('input.txt', 'utf8') 
    const lines: string[] = input.split(/\r?\n/)
    console.log(parseData(lines))
}

main()