import React from 'react'
import {FancyButton} from "./fancyButton"

type Props={
    firstName:string
    userId:string
}

type State = {
    isLoading:boolean
}

class SignupForm extends React.Component<Props,State>{
    state={
        isLoading: false
    }
    private signUp = async () => {
        this.setState({isLoading:true})
        try{
            await fetch('/api/signup?userid='+this.props.userId)
        }finally{
            this.setState({isLoading:false})
        }
    }
    render(){
        return (
            <>
                <h2>Sign up for a 7-day supply of Our tasty
                    tasty toothpaste now, {this.props.firstName}
                </h2>   
                <FancyButton 
                    isDisabled={this.state.isLoading}  
                    size="Big"
                    text="Sign Up Now"
                    onClick={this.signUp}
                />
            </>
        )
    }
}

let form  = <SignupForm firstName="Albert" userId="13ab9g3" />
