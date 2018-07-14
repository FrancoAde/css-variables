/*  CSSOM
*
* getComputedStyle(element) -> devuelve el objeto que contiene todas las propiedades de un selector al momento de renderizar
*
* RECUPERAR UNA VARIABLE CSS
*   getComputedStyle(element).getPropertyValue('--variable')
*
* SETEAR UNA VARIABLE
*   element.style.setProperty('--variable','value') 
*
* ELEMENTO RAIZ DEL DOM
*   document.documentElement
*/

const rootStyles = getComputedStyle(document.documentElement)
console.log(rootStyles);