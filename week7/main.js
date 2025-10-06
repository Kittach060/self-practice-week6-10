/*console.log(window.document) //root node
console.log(document) //root node
console.log(typeof document)
console.log(document.getElementById("123"))
const htmlElement = document.documentElement
console.log(htmlElement)

console.log(htmlElement.parentElement) //null
console.log(htmlElement.parentNode) //root node
if (htmlElement.parentNode === document) {
  console.log("parent of html is a root node")
}

console.log(document.firstChild) //<!DOCTYPE html>
console.log(document.firstChild.nextSibling)
//<!-- sample comment #1 -->
console.log(document.firstChild.previousSibling) //null
console.log(document.firstElementChild) //<html>
console.log(document.firstElementChild.previousSibling) //<!-- sample comment #1 -->
console.log(document.lastChild) //<!-- sample comment #3 -->
console.log(document.lastElementChild) //<html lang="en">
 

const divElement = document.getElementById('123')
const divChildNodes = divElement.childNodes
console.log(divChildNodes.length);
divChildNodes.forEach((child) => console.log(child));

const divChildren = divElement.children
console.log(divChildren.length);
Array.from(divChildren).forEach((child) => console.log(child))

const divAttrs =divElement.attributes
console.log(divAttrs.length);

for(let i=0;i<divAttrs.length;i++){
    const attrsName = divAttrs[i].name
    const attrValue = divAttrs[i].value
    console.log('attribute name: ${attrName}, attribute value: ${attrValue')
    console.log(divAttrs[i].ownerElement);
    
}
console.log(divElement.getAttribute("id"));
console.log(divElement.getAttribute("style"));



console.log(document.firstChild.nodeType);
if(document.firstChild.nodeType === 1){
    alert("Hello,HTML node")
}else console.log("Hello, any node");

const pElement=document.createElement('p')
const idAttr=document.createAttributeNS('id')
idAttr.value='p5'
pElement.setAttributeNode(idAttr)
const pText =document.createTextNode("#5")
pElement.appendChild(pText)
const body =document.body
body.appendChild(pElement)


let el = document.getElementById("demo")
console.log(el.innerHTML)
console.log(el.innerText)
console.log(el.textContent)
*/

//1. append <p> under <div id="demo">
const pElement = document.createElement('p')
document.getElementById('demo').appendChild(pElement)
//1.5 add format='italic' attribute to <p>
pElement.setAttribute("format", "italic")
//2.try to add three different text types
//2.1 add <i>Sample Italic Text</i> with innerHTML
const inHtml = document.createElement('i')
//2.2 add <i>Sample Italic Text</i> with innerText
const inText = document.createElement('i')
//2.3 add <i>Sample Italic Text</i> with textContent
const textCon = document.createElement('i')
 
inHtml.innerHTML='Sameple Italic text '
inText.innerText='Sameple Italic text '
textCon.textContent='Sameple Italic text'
 
pElement.appendChild(inHtml)
pElement.appendChild(inText)
pElement.appendChild(textCon)
//60 กลุ่ม
 
