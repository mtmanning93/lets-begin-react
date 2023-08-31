import React from "react";

// Can also extend just react if component is imported "extends Component"
class StatefulGreetingWithPrevState extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello",
            buttonText: "Exit",
            count: 0,
        };
    }

    handleClick() {
        this.setState({
            introduction: this.state.introduction === "Hello!" ? "Goodbye!" : "Hello!",
            buttonText: this.state.buttonText === "Exit" ? "Enter" : "Exit",
        }, () => {
            console.log('new state', this.state.introduction);
            console.log('new state', this.state.buttonText);
        });
    }

    increment() {
        this.setState({
            count: this.state.count += 1,
        }, () => {
            console.log(this.state.count)
        });
    }

    render() {
        return (
            <div>
                <h1>{this.state.introduction} {this.props.greeting}</h1>
                <button onClick={() => this.handleClick()}>{this.state.buttonText}</button>
                <button onClick={() => this.increment()}>Increment</button>
                <p> You've clicked {this.state.count} times.</p>
            </div>
        )
    };
}

export default StatefulGreetingWithPrevState