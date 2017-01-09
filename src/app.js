import React from 'react';
import ReactDOM from 'react-dom';

function MyComponent(props) {
    return <h2>Test {props.data}</h2>;
}

function App(props) {
    return (
        <div>
            <MyComponent data="111" />
            <MyComponent data="555" />
            <MyComponent data="333" />
            <div>{props.vvv}</div>
        </div>
    );
}

ReactDOM.render(
    <App vvv="qqq" />,
    document.getElementById('root')
);
