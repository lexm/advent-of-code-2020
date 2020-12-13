#!/usr/bin/env node

import { readFileSync } from 'fs'

function parseData(arr: string[]) {
    let chars = new Set()
    let total = 0
    arr.forEach((line) => {
        if(line === '') {
            total += chars.size
            chars.clear()
        } else {
            line.split('').forEach((ch) => {
                chars.add(ch)
            })
        }
    })
    return total
}

function main() {
    const input: string = readFileSync('input.txt', 'utf8') 
    const lines: string[] = input.split(/\r?\n/)
    console.log(parseData(lines))
}

main()