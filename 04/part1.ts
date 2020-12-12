#!/usr/bin/env node

import { readFileSync } from 'fs'

function parseData(arr: string[]) {
    let dict = {}
    let count = 0
    arr.forEach((line) => {
        if(line === '') {
            count += verifyPassport(dict)? 1 : 0
            dict = {}
        } else {
            line.split(' ').forEach((token) => {
                let [key, val] = token.split(':')
                dict[key] = val
            })
        }
    })
    return count
}

function verifyPassport(dict): boolean {
    return dict.hasOwnProperty('byr') &&
        dict.hasOwnProperty('iyr') &&
        dict.hasOwnProperty('eyr') &&
        dict.hasOwnProperty('hgt') &&
        dict.hasOwnProperty('hcl') &&
        dict.hasOwnProperty('ecl') &&
        dict.hasOwnProperty('pid')
}

function main() {
    const input: string = readFileSync('input.txt', 'utf8') 
    const lines: string[] = input.split(/\r?\n/)
    console.log(parseData(lines))
}

main()