function customRender(reactElement, container){
    // const domElement = document.createElement(reactElement.type)
    // domElement.innerHTML = reactElement.children
    // domElement.setAttribute('href', reactElement.props.target)
    // container.appendChild(domElement)


    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (prop === 'children') continue
        domElement.setAttribute(prop, reactElement.props[prop])        
        }
        container.appendChild(domElement)
    }


//this won't work as react does not understand type, props and children
const reactElement = {
    type: 'a',
    props: {
        href: "https://google.com",
        target: '_blank'
    },
    children: 'Click me to Visit Google'
}
//this is how react understands what is to be executed

// const areactElement = React.createElement(
//     'a',
//     {href: 'https://google.com', target: '_blank'}, // we need to keep in mind that there is an order followed in react, that we can see in this code part
//     'click to visit google'
// )
//why I'm not useing it? because it will not work until and unless we do not import react, we can try this code in 01basicvite file and 01basicreact
const mainContainer = document.querySelector('#root')

customRender(reactElement, mainContainer)