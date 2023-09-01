import React from "react";

class EventBinding extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
            introduction: "Hello!",
            buttonText: "Exit",
        };
        // bind in the constructor (better for performance in larger apps)
        // this.handleClick = this.handleClick.bind(this)
    }
    // Original function
    // handleClick = () => {
    //     this.setState({
    //         introduction: "Goodbye!",
    //     });
    //     console.log(this.state.introduction);
    // }
    // Altered to arrow function
    handleClick = () => {
        this.setState({
            introduction: "Goodbye!",
        });
        console.log(this.state.introduction);
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.introduction} {this.props.greeting}
                </h1>
                {/* original */}
                {/* <button onClick={() => this.handleClick()}></button> */}
                {/* bind on the handler */}
                {/* <button onClick={this.handleClick.bind(this)}> */}
                <button onClick={this.handleClick}>
                    {this.state.buttonText}
                </button>
            </div>
        )
    }
}

export default EventBinding;