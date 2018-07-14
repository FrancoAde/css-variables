



addEventListener('scroll', () =>{
    //Documento HTML principal
    const h1 = document.documentElement.scrollHeight
    const h2 = document.documentElement.clientHeight
    console.log(h1)
    console.log(h2)
    console.log('-------------');
    const scrollUnit = (h1-h2)/100  
    const rootStyle = document.documentElement.style
    rootStyle.setProperty('--width',`${ Math.round(scrollY/scrollUnit)}`)
})

console.log(getComputedStyle(document.documentElement))
console.log(document.getElementsByTagName('html')[0].style)

// prueba

const p = document.getElementById('p')
p.addEventListener('scroll',()=>{
    console.log(p.scrollHeight) //tamaño del scroll total, que va a recorrer
    console.log(p.clientHeight) //tamaño de la altura del viewport
    console.log(p.style.backgroundColor)
    console.log('----------------');
})