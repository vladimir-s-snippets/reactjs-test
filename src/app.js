import React from 'react';
import ReactDOM from 'react-dom';

class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggledOn: false};
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggledOn: !prevState.isToggledOn
        }));
    }

    render() {
        return (
            <div>
                <button onClick={this.handleClick}>
                    {this.state.isToggledOn ? 'ON' : 'OFF'}
                </button>
                <WarningBanner warn={this.state.isToggledOn} />
            </div>
        );
    }
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            date: new Date()
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }

    render() {
        return (
            <div>Сейчас {this.state.date.toLocaleTimeString()}</div>
        );
    }
}

class WarningBanner extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (!this.props.warn) {
            return null;
        }
        else {
            return <div>Warning!</div>;
        }
    }
}

ReactDOM.render(
    <div><Clock /><Toggle /></div>,
    document.getElementById('root')
);
