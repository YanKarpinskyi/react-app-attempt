import React from "react";

function MyFirstComponent() {

    const showAlert = () => {
        alert('My first alert!');
    };

    return(
        <>
            <p>Hello, React!</p>
            <button onClick={showAlert}>Click me</button>           
        </>
    );
}

export default MyFirstComponent;