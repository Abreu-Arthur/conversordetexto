var usertxt=document.getElementById('usertxt')

function countcarac(){
    tam=usertxt.value.length
    carac=document.getElementById('carac').innerHTML='Caracteres: '+tam+' | '   
    hula=usertxt.value.split(' ')
    words=document.getElementById('word').innerHTML='Quantidade de palavras: '+hula.length
}
function limpar(){
    document.getElementById('usertxt').value=''
    tam=usertxt.value.length
    carac=document.getElementById('carac').innerHTML='Caracteres: '+tam+' | '   
    hula=usertxt.value.split(' ')
    words=document.getElementById('word').innerHTML='Quantidade de palavras: '+hula.length
}
function what(oq){
    if(document.getElementById('oq').style.display=='none'){
        var dv=document.getElementById('oq')
        dv.style.display='block'
        dv.innerHTML=oq
    }else{
        var dv=document.getElementById('oq').style.display='none'
        dv.innerHTML=''
    }
}
function up(){
    if(usertxt.style.textTransform=='none' || usertxt.style.textTransform=='lowercase'){
        usertxt.style.textTransform='uppercase'
        document.getElementById('aply').innerHTML='Remover'
    }else{
        usertxt.style.textTransform='none'
        document.getElementById('aply').innerHTML='Aplicar'
    }
}
function low(){
    if(usertxt.style.textTransform=='none' || usertxt.style.textTransform=='uppercase'){
        usertxt.style.textTransform='lowercase'
        document.getElementById('aply').innerHTML='Remover'
    }else{
        usertxt.style.textTransform='none'
        document.getElementById('aply').innerHTML='Aplicar'
    }
    usertxt.style.textTransform='lowercase'
}
function sub(){
    usertxt.style.textDecoration='underline'
    usertxt.style.textDecorationColor='#333'
}
function cds(){
    var cors=document.getElementById('cds')
    usertxt.style.textDecorationColor=cors.value
}
function tachado(){
    usertxt.style.textDecoration='line-through'
    usertxt.style.textDecorationColor='#333'
}
function ritalic(){
    usertxt.style.fontStyle='normal'
}
function italic(){
    usertxt.style.fontStyle='italic'
}
function rneg(){
    usertxt.style.fontWeight='normal'
}
function negrito(){
    usertxt.style.fontWeight='bold'
}
function fontsize(){
    val=document.getElementById("fs").value
    usertxt.style.fontSize=val+"px"
}
function colortxt(){
    val=document.getElementById("color").value
    usertxt.style.color=val
}
function cbc(){
    v=document.getElementById("cbc")
    usertxt.style.backgroundColor=v.value
}
function zdeg(){
    usertxt.style.transform='rotateY(0deg)'
}
function mirror(){
    usertxt.style.transform='rotateY(180deg)'
}
var txt=''
function reverso(){
    txt=''
    tam=usertxt.value.length-1
    while (tam>=0){
        txt+=usertxt.value[tam]
        tam--
    }
    usertxt.value=''
    usertxt.value+=txt
}
function ls(){
    i=document.getElementById('ls').value
    usertxt.style.letterSpacing=i+'px'
}
function lw(){
    input=document.getElementById('lw').value
    usertxt.style.wordSpacing=input+'px'
}
function pre(){
    document.getElementById('pre').style.display='none'
    document.getElementById('conteudo').style.display='block'
}