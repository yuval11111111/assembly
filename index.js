const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
const fs = require('fs');
var line = 1
fs.readFile("./program.txt", "utf8", (err, P) => {
    for (var i = 0; i <= 0; i++) {
        start()
    }
    if (P) {
        readline.question(`Do yo want to write a new program or to run the current program\n 1->run current program\n 2->write a new program\n`, value => {
            if (value == `1`) {
                require(`./run`)
                fs.writeFileSync("./save.txt", ``)
                fs.writeFileSync("./loop_counter.txt", ``)
            } else if (value == `2`) {
                fs.writeFileSync("./program.txt", ``)
                fs.writeFileSync("./save.txt", ``)
                fs.writeFileSync("./loop_counter.txt", ``)
                code()
            } else {
                process.exit()
            }
        })
    } else {
        code()
    }

    function start() {
        if (P) {
            readline.question(`Do yo want to write a new program or to run the current program\n 1->run current program\n 2->write a new program\n`, value => {
                if (value == `1`) {
                    require(`./run`)
                    fs.writeFileSync("./save.txt", ``)
                    fs.writeFileSync("./loop_counter.txt", ``)
                } else if (value == `2`) {
                    fs.writeFileSync("./program.txt", ``)
                    fs.writeFileSync("./save.txt", ``)
                    fs.writeFileSync("./loop_counter.txt", ``)
                    code()
                } else {
                    process.exit()
                }
            })
        } else {
            code()
        }
    }

    function code() {
        readline.question(`${line})`, value => {
            if (value.toLowerCase() !== `end`) {
                fs.readFile("./program.txt", "utf8", (err, program) => {
                    let Code = (!program) ? `` : program + `\n`
                    fs.writeFileSync("./program.txt", Code + value)
                })
                line = line + 1
                code()
            }
            if (value.toLowerCase() == `end`) {
                readline.close()
                require(`./run`)
            }
        })
    }
})