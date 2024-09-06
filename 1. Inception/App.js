const h= React.createElement("h1",{id: "heading  "},"Hello in heading");  // got element using react


console.log(h) // it will return an object ... h is not an element right now. It will use as element after rendering

const root= ReactDOM.createRoot(document.getElementById("root")); // got root where i will render my program using reactDom

root.render(h) // render. It will convert h in an elemtn and push in root