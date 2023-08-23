//break
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

let input = parseInt(readLine())

for(let i = 0;i<input;i++){
    let inputs = parseInt(readLine());
    if (inputs == 42){
        break
    }
    console.log(inputs)
}
