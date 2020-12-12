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
    return verifyField(dict, 'byr') &&
        verifyField(dict, 'iyr') &&
        verifyField(dict, 'eyr') &&
        verifyField(dict, 'hgt') &&
        verifyField(dict, 'hcl') &&
        verifyField(dict, 'ecl') &&
        verifyField(dict, 'pid')
}

function verifyDate(dict, key, min, max) {
    if(!dict.hasOwnProperty(key)) return false
    let val = dict[key]
    if(val.length !== 4) return false
    let numVal = parseInt(val)
    if(isNaN(numVal) ||
    numVal < min ||
    numVal > max) return false
    return true
}

function verifyHeight(dict) {
    let hVal = dict['hgt']
    let unit = hVal.slice(-2)
    if(unit === 'in') {
        let hgt = hVal.slice(0, hVal.length - 2)
        if(isNaN(hgt) || 
        hgt < 59 ||
        hgt > 76) return false
        return true
    } else if (unit === 'cm') {
        let hgt = hVal.slice(0, hVal.length - 2)
        if(isNaN(hgt) || 
        hgt < 150 ||
        hgt > 193) return false
        return true
    }
}

function verifyHair(dict) {
    let val = dict['hcl']
    const regexp = /^#[0-9a-fA-F]{6}$/;
    return regexp.test(val)
}

function verifyEyes(dict) {
    let val = dict['ecl']
    return ['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth'].includes(val)
}

function verifyPid(dict) {
    let val = dict['pid']
    const regexp = /^[0-9]{9}$/;
    return regexp.test(val)
}

function verifyField(dict, key) {
    if(!dict.hasOwnProperty(key)) return false
    if(key === 'byr') {
        return verifyDate(dict, 'byr', 1920, 2002)
    } else if(key === 'iyr') {
        return verifyDate(dict, 'iyr', 2010, 2020)
    } else if(key === 'eyr') {
        return verifyDate(dict, 'eyr', 2020, 2030) 
    } else if(key === 'hgt') {
        return verifyHeight(dict)
    } else if(key === 'hcl') {
        return verifyHair(dict)
    } else if(key === 'ecl') {
        return verifyEyes(dict)
    } else if(key === 'pid') {
        return verifyPid(dict)
    }
    return false
}


function main() {
    const input: string = readFileSync('input.txt', 'utf8') 
    const lines: string[] = input.split(/\r?\n/)
    console.log(parseData(lines))
}

main()