import { readFileSync } from 'fs'

const input: string = readFileSync('input.txt', 'utf8') 

const lines: string[] = input.split(/\r?\n/);
let gridLength = lines[0].length

function hitTree(line: string, pos: number): boolean {
    console.log(line, pos, line[pos])
    if(line[pos] === '#') return true
    if(line[pos] === '.') return false
    console.error('not a grid char')
    return false
}

function treeCount(lines: string[], right: number, down: number) {
    let result = 0
    for(let row = 0, col = 0; 
        row < lines.length - 1; 
        row += down, col = (col + right) % gridLength) {
            if(hitTree(lines[row], col)) result++
    }
    return result
}

let prod = treeCount(lines, 1, 1)
prod *= treeCount(lines, 3, 1)
prod *= treeCount(lines, 5, 1)
prod *= treeCount(lines, 7, 1)
prod *= treeCount(lines, 1, 2)
console.log(prod)