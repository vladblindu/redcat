import React from 'react'
import {Redirect} from 'react-router-dom'

class ErrorBoundary extends React.Component{

    constructor(props) {
        super(props)
        this.state = {}
    }

    componentDidCatch(error, errorInfo) {
        this.setState({...this.state, error, errorInfo})
    }

    render() {
        if(this.state.error) return <Redirect to="/fatal-error"/>
        else return this.props.children
    }
}

export default ErrorBoundary