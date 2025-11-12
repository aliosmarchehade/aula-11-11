function soma (a, b){
    return a+b;
}

test ( "Deve se somar dois numeros", ()=>{
    expect (soma(1,2)).toBe(3)
} )