let result = '';

function segitiga(baris){
for (let h = 1; h <= baris; h++){
    for (let i  = 1; i <= baris -h; i++){
        result += ' ';
        }
        for (let j = 1; j < 2 * h; j++){
            result += "*";
        }
    result += '\n';
    }
return result;
}

console.log(segitiga(5))
