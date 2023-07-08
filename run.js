const fs = require('fs');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

var answer = []
var input_1 = []
var input_2 = []

fs.readFile("./program.txt", "utf8", (err, code) => {

    var line = 0
    console.log(`running program`)

    function run() {

        setInterval(() => {
            fs.readFile("./save.txt", "utf8", (err, s) => {

                let L = code.toString().replace(/ /g, ``).replace(/\n/g, `*`).replace(/[a-z]/g, ``).replace(/[A-Z]/g, ``).replace(/[0-9]/g, ``)
                if (line >= L.length && L.length > 0 || !L && line == 2) {

                    return false
                } else if (L.length <= 1 && line < 1) {

                    if (code.toLocaleLowerCase().startsWith(`say`)) {
                        setTimeout(() => {
                            const print = code.split(` `).slice(1).join(` `).toString().replace(/save/g, `${s}`).replace(/input1/g, `${input_1}`)
                            console.log(print)

                        }, 6)
                    }
                    if (code.toLocaleLowerCase().startsWith(`count`)) {
                        let number = Number(code.split(` `).slice(1, 2).toString().replace(/save/, `${s}`).toString())
                        setTimeout(() => {
                            fs.writeFileSync("./debug.txt", `${number}`)
                            if (number !== 0) {
                                number = (number < 1) ? (number * -1) + 1 : number + 1
                                let n = 0

                                count()

                                function count() {
                                    if (n + 1 < number + 1) {
                                        if (n + 1 >= number + 1) return false
                                        else {
                                            console.log(n)
                                            n = (n + 1 < number + 1) ? n + 1 : n
                                            count()
                                        }
                                    }
                                }
                            }
                        }, 7)
                    }
                    if (code.toLocaleLowerCase().startsWith(`random`)) {
                        function mode(n) {
                            return Math.floor(Math.random() * n);
                        }
                        setTimeout(() => {
                            let a = Number(code_line.split(` `).slice(1, 2).toString().replace(/save/, `${s}`))

                            const answer2 = mode(a) + 1
                            answer = answer2
                            console.log(`${answer2}`)
                        }, 7)
                    }

                    line = line + 1

                    return false

                } else if (line < L.length + 1 && L) {

                    const code_line = code.replace(/\n/g, `*`).split('*').slice(line, line + 1).toString()

                    if (code_line.toLocaleLowerCase().startsWith(`say`)) {
                        setTimeout(() => {
                            const print = code_line.split(` `).slice(1).join(` `).toString().replace(/save/g, `${s}`).replace(/input1/g, `${input_1}`)
                            if (print) {
                                console.log(print)
                            }
                        }, 7)
                    }
                    if (code_line.toLocaleLowerCase().startsWith(`loop`)) {
                        fs.readFile("./loop_counter.txt", "utf8", (err, nums) => {
                            setTimeout(() => {
                                let num_line = Number(code_line.split(` `).slice(1, 2).toString())
                                let rounds = Number(code_line.split(` `).slice(2, 3).toString())
                                rounds = (!rounds) ? Infinity : rounds
                                if (rounds > Number(nums)) {
                                    line = num_line - 1
                                    fs.writeFileSync("./loop_counter.txt", `${Number(nums) + 1}`)
                                } else if (rounds <= Number(nums)) {
                                    return;
                                }
                            }, 7)
                        })
                    }
                    if (code_line.toLocaleLowerCase().startsWith(`count`)) {
                        let number = Number(code_line.split(` `).slice(1, 2).toString().replace(/save/, `${s}`).toString())
                        setTimeout(() => {
                            fs.writeFileSync("./debug.txt", `${number}`)
                            if (number !== 0) {
                                number = (number < 1) ? (number * -1) + 1 : number + 1
                                answer = number
                                let n = 0

                                count()

                                function count() {
                                    if (n + 1 < number + 1) {
                                        if (n + 1 >= number + 1) return false
                                        else {
                                            console.log(n.toString())
                                            n = (n + 1 < number + 1) ? n + 1 : n
                                            count()
                                        }
                                    }
                                }
                            }
                        }, 7)
                    }
                    if (code_line.toLowerCase().startsWith(`saves`)) {
                        setTimeout(() => {
                            let slot = code_line.split(` `).slice(1, 2).toString().toLowerCase()
                            let pre_line = line - 2
                            const wanted_line = code.replace(/\n/g, `*`).split('*').slice(pre_line, pre_line + 1).toString()
                            let wanted_value = (slot.includes(`t`)) ? wanted_line.split(` `).slice(1).join(` `).toString() : (slot.includes(`a`)) ? answer : answer
                            fs.writeFileSync("./save.txt", `${wanted_value}`)
                            console.log()
                        }, 6)
                    }
                    if (code_line.toLocaleLowerCase().startsWith(`add`)) {
                        setTimeout(() => {
                            let a = Number(code_line.split(` `).slice(1, 2).toString().replace(/save/, `${s}`))
                            let b = Number(code_line.split(` `).slice(2, 3).toString().replace(/save/, `${s}`))
                            const answer2 = a + b
                            answer = answer2
                            console.log(`${a} + ${b} = ${answer2}`)
                        }, 7)
                    }
                    if (code_line.toLocaleLowerCase().startsWith(`divide`)) {
                        setTimeout(() => {
                            let a = Number(code_line.split(` `).slice(1, 2).toString().replace(/save/, `${s}`))
                            let b = Number(code_line.split(` `).slice(2, 3).toString().replace(/save/, `${s}`))
                            const answer2 = a / b
                            answer = answer2
                            console.log(`${a}/${b} = ${answer2}`)
                        }, 7)
                    }
                    if (code_line.toLocaleLowerCase().startsWith(`subtract`)) {
                        setTimeout(() => {
                            let a = Number(code_line.split(` `).slice(1, 2).toString().replace(/save/, `${s}`))
                            let b = Number(code_line.split(` `).slice(2, 3).toString().replace(/save/, `${s}`))
                            const answer2 = a - b
                            answer = answer2
                            console.log(`${a} - ${b} = ${answer2}`)
                        }, 7)
                    }
                    if (code_line.toLocaleLowerCase().startsWith(`multiply`)) {
                        setTimeout(() => {
                            let a = Number(code_line.split(` `).slice(1, 2).toString().replace(/save/, `${s}`))
                            let b = Number(code_line.split(` `).slice(2, 3).toString().replace(/save/, `${s}`))
                            let answer2 = a * b
                            answer = answer2
                            console.log(`${a}*${b} = ${answer2}`)
                        }, 7)
                    }
                    if (code_line.toLocaleLowerCase().startsWith(`random`)) {
                        function mode(n) {
                            return Math.floor(Math.random() * n);
                        }
                        setTimeout(() => {
                            let a = Number(code_line.split(` `).slice(1, 2).toString().replace(/save/, `${s}`))

                            const answer2 = mode(a) + 1
                            answer = answer2
                            console.log(`${answer2}`)
                        }, 7)
                    }
                    if (code_line.toLocaleLowerCase() == `forget`) {
                        setTimeout(() => {
                            fs.writeFileSync("./save.txt", ``)
                        }, 7)
                    }
                    /*
                    if (code_line.toLowerCase().startsWith(`debug`)) {
                        setTimeout(() => {
                            let debug_line = Number(code_line.split(` `).slice(1, 2).toString().toLowerCase())
                            let line_num = debug_line - 1
                            if (line - 1 !== debug_line) {
                                line = line_num
                            }
                            setTimeout(() => {
                                fs.writeFileSync("./debug.txt", `${answer}`)
                            }, 1)
                        }, 7)
                    }
                    */
                    line = line + 1
                }
            })
        }, 1)
    }
    run()
})

/*
commands
say -> prints what you type
loop -> loop back to the code line 
count -> counts from 0 to a number 
saves a/t -> saves the last value that been used
divide -> divide a by b (a/b)
add -> add a to b (a+b)
subtract -> subtract a from b(a - b)
multiply -> multiply a and b (a*b)
random -> randomly pick a number between 1 - x 
forget -> clear the memory from the last saved info in the run
*debug -> saves the values of specific lines into a txt file*
 */