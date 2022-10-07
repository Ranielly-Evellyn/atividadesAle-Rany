



export function CalcularAcai (qtdPeq, qtdMed, qtdGra, desc){

   

        if ( qtdPeq < 0 || qtdMed < 0 || qtdGra < 0 ) {
            throw new Error('Impossível realizar compra');
        }


        if( qtdPeq >= 0 || qtdMed >= 0 || qtdGra >= 0 ){

            let total = qtdPeq * 13.50 + qtdMed * 15 + qtdGra * 17.50;
            let desconto = total * desc / 100
            let final = total - desconto
             
            return final 
        }

}