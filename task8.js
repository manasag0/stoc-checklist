//continue

let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1];
}

let inputs = parseInt(readLine());

for(let i = 0;i<inputs;i++){
    let values = parseInt(readLine());
    if(values%2===0){
        console.log(values);
    }else{
        continue;
    }
}