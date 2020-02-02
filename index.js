// Write your code here! 

let remove = document.querySelector('main')  
remove.remove() 

let newHeader = document.createElement('h1') 

newHeader.setAttribute("id", "victory")
console.log(newHeader)
newHeader.innerHTML = "is the champion"