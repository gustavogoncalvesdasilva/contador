function dispara(){
   ini = document.querySelector('#ini')
   fim = document.querySelector('#fim')
   pas = document.querySelector('#pas')
   res = document.querySelector('#res')
//value.length = quantidade de caracteres dentro da caixa de formulario
   if (ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
    res.innerHTML = 'Impucivel contar, falta dados!'
   }

   else{
    //converção
     i = Number(ini.value)
     f = Number(fim.value)
     p = Number(pas.value)

     res.innerHTML = 'Contando: <br>'
    
     if (p <= 0 ){
        alert('Passo invalido! Considerando (PASSO) como (1)')
        p = 1
     }

      if (i < f){
        //contagem crescente
        for(c = i; c <= f; c +=p) {
            res.innerHTML += ` ${c} \u{1f449} `
         } 
     }

     else {

        for(c = i; c >= f; c -=p) {
            res.innerHTML += ` ${c} \u{1f449} `
         } 
     }

     res.innerHTML += `\u{1f3c1} `
   }
}