var valores = [];
var result = 0, numero = '';
function escrever(x){
    if(x != '-' && x != '+' && x != '*' && x != '/' && x != '='){
        numero = numero.concat(x);
    }else if(x == '='){
        valores.push(parseInt(numero));
        result = valores[0]
        valores.forEach(function(x,i){
            if(x == '-'){
                result -= valores[i+1]
            }else if(x == '+'){
                result += valores[i+1]
            }else if(x == '*'){
                result *= valores[i+1]
            }else if(x == '/'){
                result /= valores[i+1]
            }
        })
        valores = [result]
        document.getElementById('display2').innerHTML =result 
    }else{
        console.log('entrou')
        valores.push(parseInt(numero), x);
        numero = ''
    }
    document.getElementById('display1').innerHTML += x
    console.log('valores:',valores,'\n','numero:',numero)
}
function clean(){
    valores = [];
    result = null;
    numero = '';
    document.getElementById('display1').innerHTML = ''
    document.getElementById('display2').innerHTML = ''
}