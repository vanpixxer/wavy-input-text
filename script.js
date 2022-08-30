/* get a node list of the labels */
const labels = document.querySelectorAll('.form-control label')

/* with a node list we can use the forEach() method */
labels.forEach( label => {
    label.innerHTML = label.innerText
    /* use split() method to split letters in labels  into an array */
    .split( '' )
    .map( (letter, index) => `<span style="transition-delay:${index *50}ms">${letter}</span>`)
    /* turn the array of letters into a string with .join() method */
    .join( '' )

})