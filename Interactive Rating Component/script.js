var test='x'
function rate1(){
    let x=document.getElementById('1')
    x.style.backgroundColor="#fe790cdc"
    x.style.color='white'
    if(test!=='x' && test!=='1'){
        let u=document.getElementById(test)
        u.style.backgroundColor='#262F38'
        u.style.color='hsl(220, 15%, 55%)'
    }
    test=x.value
}
function rate2(){
    let x=document.getElementById('2')
    x.style.backgroundColor="#fe790cdc"
    x.style.color='white'
    if(test!=='x' && test!=='2'){
        let u=document.getElementById(test)
        u.style.backgroundColor='#262F38'
        u.style.color='hsl(220, 15%, 55%)'
    }
    test=x.value
}
function rate3(){
    let x=document.getElementById('3')
    x.style.backgroundColor="#fe790cdc"
    x.style.color='white'
    if(test!=='x' && test!=='3'){
        let u=document.getElementById(test)
        u.style.backgroundColor='#262F38'
        u.style.color='hsl(220, 15%, 55%)'
    }
    test=x.value
}
function rate4(){
    let x=document.getElementById('4')
    x.style.backgroundColor="#fe790cdc"
    x.style.color='white'
    if(test!=='x' && test!=='4'){
        let u=document.getElementById(test)
        u.style.backgroundColor='#262F38'
        u.style.color='hsl(220, 15%, 55%)'
    }
    test=x.value
}
function rate5(){
    let x=document.getElementById('5')
    x.style.backgroundColor="#fe790cdc"
    x.style.color='white'
    if(test!=='x' && test!=='5'){
        let u=document.getElementById(test)
        u.style.backgroundColor='#262F38'
        u.style.color='hsl(220, 15%, 55%)'
    }
    test=x.value
    
}



function submit(){
    let x=document.getElementById('thankyou')
    x.style.display='inline-block'
    let y=document.getElementById('conteudo1')
    y.style.display='none'
    let k=document.getElementById('apresentrate')
    k.innerText=`You selected ${test} out of 5`
}
