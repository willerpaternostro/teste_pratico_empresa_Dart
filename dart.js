function contadorLetras(primeiro,segundo, retirarEspaco = false){

    let contador = 0;
    let complemento = ' E '

    const unidades = {0:'ZERO', 1:'UM', 2:'DOIS', 3:'TRES', 4:'QUATRO', 5:'CINCO', 6:'SEIS', 7:'SETE', 8:'OITO', 9:'NOVE'};
    const unicosDezena = {0:'DEZ', 1:'ONZE', 2:'DOZE', 3:'TREZE', 4:'QUATORZE', 5:'QUINZE', 6:'DEZESSEIS', 7:'DEZESSETE', 8:'DEZOITO', 9:'DEZENOVE'}; //Não repetem em dezenas
    const dezenas = {0:'', 1:unicosDezena, 2:'VINTE', 3:'TRINTA', 4:'QUARENTA', 5:'CINQUENTA', 6:'SESSENTA', 7:'SETENTA', 8:'OITENTA', 9:'NOVENTA'};
    const centenas = {0:'', 1:'CENTO', 2:'DUZENTOS', 3:'TREZENTOS', 4:'QUATROCENTOS', 5:'QUINHENTOS', 6:'SEISCENTOS', 7:'SETECENTOS', 8:'OITOCENTOS', 9:'NOVECENTOS'};
    
    for(let i = primeiro; i <= segundo; i++ ){
        if(i < 10){
            let posicao = Object.keys(unidades).findIndex(element => {return element == i});
            contador += unidades[posicao].length
            console.log(i+': '+ unidades[posicao]);
            continue;
        }
      
        if(i <= 100){
            if(i === 100){
                contador += 'CEM'.length;
                console.log(i+':CEM');
                continue;
            }

            let auxiliarUnidade = i % 10;
           //console.log('AuxiliarUnidade: '+auxiliarUnidade);
            let auxiliarDezena = parseInt(i / 10);
           //console.log('AuxiliarDezena: '+auxiliarDezena);
            
            let posicaoUnidade = Object.keys(unidades).findIndex(element => {return element == auxiliarUnidade});
            //console.log('Posicao unidade: '+posicaoUnidade);
            let posicaoDezena = Object.keys(dezenas).findIndex(element => {return element == auxiliarDezena});
            //console.log('Posicao dezena: '+posicaoUnidade);
      
            let nomeNumero = '';

            if(auxiliarUnidade === 0 && auxiliarDezena != 1)
                nomeNumero = dezenas[posicaoDezena]
            if(auxiliarUnidade === 0 && auxiliarDezena === 1)
                nomeNumero = dezenas[posicaoDezena][posicaoUnidade]
            if(auxiliarUnidade != 0 && auxiliarDezena === 1)
                nomeNumero = dezenas[posicaoDezena][posicaoUnidade]
            if(auxiliarUnidade != 0 && auxiliarDezena != 1)
                nomeNumero = dezenas[posicaoDezena] +complemento+ unidades[posicaoUnidade]
           
            console.log(i + ': ' + nomeNumero);

            retirarEspaco?contador += nomeNumero.replace(/\s+/g,"").length:contador += nomeNumero.length
            
            continue;
        }
        if(i <= 1000){
            if(i === 1000){
                contador += 'MIL'.length;
                console.log('MIL');
                continue;
            }
            //console.log(i);
            let auxiliarUnidade = i % 100 % 10;
            //console.log('AuxiliarUnidade: '+auxiliarUnidade);
            let auxiliarDezena = parseInt((i % 100) / 10);
            //console.log('AuxiliarDezena: '+auxiliarDezena);
            let auxiliarCentena = parseInt(i/ 100);
            //console.log('AuxiliarCentena: '+auxiliarCentena);
            
            let posicaoUnidade = Object.keys(unidades).findIndex(element => {return element == auxiliarUnidade});
            //console.log('Posicao unidade: '+posicaoUnidade);
            let posicaoDezena = Object.keys(dezenas).findIndex(element => {return element == auxiliarDezena});
            //console.log('Posicao dezena: '+posicaoUnidade);
            let posicaoCentena = Object.keys(centenas).findIndex(element => {return element == auxiliarCentena});
            //console.log('Posicao centena: '+posicaoCentena);
           

            let nomeNumero =''
            if(auxiliarDezena === 0 || auxiliarDezena === 1){
                if(auxiliarDezena === 0 && auxiliarUnidade === 0) nomeNumero = centenas[posicaoCentena];
                
                if(auxiliarDezena === 0 && auxiliarUnidade != 0 ) nomeNumero = centenas[posicaoCentena] + complemento + unidades[posicaoUnidade];

                if(auxiliarDezena === 1){nomeNumero = centenas[posicaoCentena]+ complemento + dezenas[posicaoDezena][posicaoUnidade] };
            }
            else{
                if(auxiliarUnidade === 0)
                    nomeNumero = centenas[posicaoCentena]+ complemento + dezenas[posicaoDezena] 
                else 
                    nomeNumero = centenas[posicaoCentena]+ complemento + dezenas[posicaoDezena] + complemento+ unidades[posicaoUnidade];
            } 
            console.log(i+': ' +nomeNumero);

            retirarEspaco?contador += nomeNumero.replace(/\s+/g,"").length:contador += nomeNumero.length
            
            continue;
        }
    }
    console.log(contador +' CARACTERES');
    //return contador;
}