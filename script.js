 //Creating elements using JavaScriptp
// const pElm = document.createElement('p');
// pElm.innerText= 'This is a new paragraph created by JavaScript';
// document.body.appendChild(pElm);

// const h1Elm = document.createElement('h1');
// h1Elm.innerText = 'This is a new headding creates by JavaScript';
// document.body.appendChild(h1Elm);


//.....................................................

 //Inserting elements before another element
// const spanElm = document.createElement('span');
// spanElm.innerText = 'This is a span element inserted before the paragraph';

// const pElement = document.querySelector('p');
// document.body.insertBefore(spanElm, pElement);


//.............................................................
//Inserting elements after another element 
// const spanElm = document.createElement('span');
//  spanElm.innerText = 'This is a span element paragraph';
// const pElement = document.querySelector('p');
//  document.body.insertBefore(spanElm, pElement.nextElementSibling);

//....................................................
//Modifying content of an element
// const pElement = document.querySelector('p');
// pElement.innerHTML = 'This is a <strong>modified</strong> paragraph content by inner html.';

//...................................................
//Remove element 

//const listEl = document.querySelector('#myUl');
//const reMOv = listEl.children[0];
//listEl.removeChild(reMOv);
//listEl.replaceChildren();
//document.querySelector('#myUl').remove();
//........................................................


//Read , Write and Modify attributes
//let imgElm = document.querySelector('img');
//console.log(imgElm.getAttribute('alt')); //Read attribute

//imgElm.setAttribute('src', 'https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg');
//imgElm.setAttribute('width', '400'); //write attribute
//imgElm.removeAttribute('height'); //Remove attribute

//console.log(imgElm.hasAttribute('height') );//Check if attribute exists
// let spanEl = document.querySelector('#mainText');
// console.log('Parent Element', spanEl.parentElement.parentElement);
// console.log('Parent Node', spanEl.parentNode.parentNode);

//..................................................

//let mainEl = document.querySelector('#maindiv');

// console.log('Child Node:', mainEl.childNodes);
// console.log('Children:', mainEl.children)

// console.log('First Child:', mainEl.firstChild);
// console.log('First Element child:', mainEl.firstElementChild);


//........................................
//let mainEl = document.querySelector('#h1');

// console.log('Next Sibling;', mainEl.nextSibling);
// console.log('Next Element Sibling:', mainEl.nextElementSibling);
// console.log('Previous Sibling:', mainEl.previousSibling);
// console.log('Previous Element Sibling:', mainEl.previousElementSibling);

// console.log('First Child:', mainEl.firstChild);
// console.log('Last Child:', mainEl.lastChild);
 
