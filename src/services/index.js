




export function CalcularAcai (qtdPeq, qtdMed, qtdGra, desc){

   

        if ( qtdPeq < 0 || qtdMed < 0 || qtdGra < 0 ) {
            throw new Error('Impossível realizar compra');
        }
        if(Number.isInteger(qtdPeq) === false || Number.isInteger(qtdMed) === false || 
           Number.isInteger(qtdGra) === false || Number.isInteger(desc) === false) {
            throw new Error('Caracteres Inválidos')
        }


        else if( qtdPeq >= 0 || qtdMed >= 0 || qtdGra >= 0 ){

            let total = qtdPeq * 13.50 + qtdMed * 15 + qtdGra * 17.50;
            let desconto = total * desc / 100
            let final = total - desconto
             
            return final 
        }


}

export function SalarioC(salarioBase, bonus, desc){
    if(salarioBase <= 0 ){
        throw new Error ('Salário inválido')
    }

    let bo= salarioBase * bonus /100;
    let soma= salarioBase + bo - desc;

    return soma;
}


export function Litros (capacidade, consumo, dist){
    if( capacidade <= 0 || consumo <= 0 || dist <= 0) {
        throw new Error ('Você não precisa fazer paradas')
    }
    
    let resultado = '';
    let litros = dist / consumo;
    let paradas = litros / capacidade;

    paradas = Math.ceil (paradas)

    if (paradas > 1) {
         resultado = 'Você precisa fazer ' + paradas + ' para abastecer'
    }

    else if (paradas === 1) {
        resultado = 'Você precisa fazer uma parada para abastecer'
    }

    return resultado
}

export function Febre (temperatura){


    let msg='';

    if(temperatura >= 41){
        msg = 'Você está com hipertemia'
    }

    else if (temperatura >= 39.6 && temperatura < 41){
        msg= 'Você está com febre alta'
    }

    else if(temperatura >= 37.6 && temperatura < 39.6){
        msg='Você está com febre'
    }

    else if( temperatura >= 36 && temperatura < 37.6){
        msg= 'Sua temeperatura está normal'
    }

    else {
        msg= 'Você está com hipotermia'
    }

    return msg;
}

export function OrcamentoFamiliar (ganhos, gastos) {
    
    let calculo = gastos / ganhos * 100;


    let msg = ''

    if(ganhos < 0 || gastos < 0)
        throw new Error('Informações inválidas!');

    

    if ( calculo < 20 ){
        msg= 'Parabéns você está gerenciando bem o seu orçamento'
    }

    else if (calculo >= 21 && calculo <= 50) {
        msg = 'Muito bem, seus gastos não ultrapassam metade dos ganhos'
    }

    else if ( calculo >= 51 && calculo<= 80) {
        msg= 'Atenção, melhor conter os gastos!'
    }

    else if (calculo >= 81 && calculo <= 100) {
        msg= 'Cuidado, seu orçamento pode ficar comprometido!'
    }

    else  {
        msg= 'Orçamento comprometido! Hora de rever seus gastos!'
    }

    return msg
}

export function totalCompra(inteiras, meias, diaSemana, nacional){
    let total = 0;
    
    if(inteiras < 0 || meias < 0){
        throw new Error('Os ingressos não podem ter valores negativos');
    }


    if(nacional === true){
        total = (inteiras + meias ) * 5;
    }

    else if(diaSemana === 'quarta-feira'){
        total = (inteiras + meias) * (28.5 / 2);
    }

    else{
        total = (inteiras * 28.5 ) + (meias * 28.5 / 2);
    }

    return total;
}

export function totalContar(inicio, fim){

    if(isNaN (inicio)|| isNaN (fim)) throw new Error ('Isso não é um número!');
    

    let array= []
    let i= 0
    
    for(let contar = inicio; contar <= fim; contar ++){ 
      array [i] = contar;
      i++
     }

     return array;
}
  

export function contarLinhas (tamanho) {

    let array = []


    for(let contar= 0; contar < tamanho; contar ++){

        array[contar] = ("*");
        
    }

    return array;
}


export function contarRetangulo(base, altura) {
    
    let a = [];
    let array = [];

    for(let i = 0; i < altura; i++) {

        for(let h = 0; h < base; h++) {
            array[h] = '*';
        }

        a[i] = array;
    }

    return a;

}
        

export function cafe(alunos, capac, mili){
    let tt = (alunos * mili) / 1000;
    let l = capac;

    while(tt > l){
        l += capac
    }

    return l;
}
    
