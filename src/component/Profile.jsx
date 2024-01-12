import React from "react";

export default class Profile extends React.Component{
    constructor(props){
        super(props)
        console.log("CHILD constructor");

    }
    componentDidMount(){
        console.log("CHILD componentDidMount");
    }
    componentDidUpdate(prevProps,prevState){
        console.log("CHILD componentDidUpdate");
    }
    componentWillUnmount(){
        console.log("CHILD componentWillUnmount");
    }
    render(){
        console.log("CHILD render");

        return(
            <>
            <h2>Name : {this.props.name}</h2>
            <h2>Email : {this.props.email}</h2>
            </>
        )
    }
}
