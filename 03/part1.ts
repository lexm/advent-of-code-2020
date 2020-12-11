import { readFileSync } from 'fs'

const input: string = readFileSync('input.txt', 'utf8') 

const lines: string[] = input.split(/\r?\n/);
let gridLength = lines[0].length

function hitTree( line: string, pos: number): boolean {
    console.log(line, pos, line[pos])
    if(line[pos] === '#') return true
    if(line[pos] === '.') return false
    console.error('not a grid char')
    return false
}

let result = 0
let col = 0
let right = 3
let down = 1

for(let row = 0, col = 0; 
    row < lines.length; 
    row += down, col = (col + right) % gridLength) {
        if(hitTree(lines[row], col)) result++
}

console.log(result)
