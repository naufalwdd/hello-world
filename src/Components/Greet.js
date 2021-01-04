import React from 'react'

// function Greet() {
//     return <h1>Hello, Naufal!</h1>
// }

const Greet = (properties) => {
    return (
        <div>
            <h1>Hello, {properties.name} a.k.a {properties.heroName}</h1>
            {properties.children}
        </div>
    )
}

export default Greet