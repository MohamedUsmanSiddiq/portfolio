//toggle button script
let sidebar=document.querySelector('.sidebar')
let btn1=document.getElementById('open')
let btn2=document.getElementById('close')

function show(){
    sidebar.style.display="block"
    btn1.style.display='none'
    btn2.style.display='block'
}

function closebar(){
    sidebar.style.display="none"
    btn1.style.display='block'
    btn2.style.display='none'
}