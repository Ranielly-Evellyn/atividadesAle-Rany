import { toBeEmptyDOMElement } from "@testing-library/jest-dom/dist/matchers";




export function CalcularAcai (qtdPeq, qtdMed, qtdGra, desc){

   

        if ( qtdPeq < 0 || qtdMed < 0 || qtdGra < 0 ) {
            throw new Error('Impossível realizar compra');
        }
        if(Number.isInteger(qtdPeq) == false || Number.isInteger(qtdMed) == false || 
           Number.isInteger(qtdGra) == false || Number.isInteger(desc) == false) {
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

    else if (paradas == 1) {
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
  

