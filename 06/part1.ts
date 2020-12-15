#!/usr/bin/env node

import { readFileSync } from 'fs'

function intersection(set1: Set<string>, set2: Set<string>) {
    let result = new Set<string>()
    for (let ele of set2) {
        if(set1.has(ele)) {
            result.add(ele)
        }
    }
    return result
}

function parseData(arr: string[]): number {
//    let charSets = new Set()[]
    let intersect = new Set<string>()
    let total = 0
    let idx = 0
    arr.forEach((line) => {
        if(line === '') {
            total += intersect.size
            console.log(line, intersect, total)
            intersect.clear()
        } else {
            let qs = new Set<string>()
            line.split('').forEach((ch) => {
                qs.add(ch)
            })
            if(!idx) {
                intersect = qs
            } else {
                intersect = intersection(intersect, qs)
            }
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