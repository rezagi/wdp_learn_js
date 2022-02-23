let result='';

function square(baris,kolom){
    for (let i=0; i<= baris; i++){
        for (let j=0; j < kolom; j++){
            result+=((kolom - baris)*i)+ j + '\t';
        }
        result+='\n';
    }
return result;
}

console.log(square(10,20))


