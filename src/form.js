import React from 'react';

export default class Form extends React.Component {
    state = {
        name: '',
        email: '',
        phone: '',
        message: '',
    }
    
    change = e =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    onSubmit = (e) =>{
        e.preventDefault();
        this.props.onSubmit(this.state)
        this.setState({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
    }

    render(){
        return (
            <div className="forms">
                <form >
                    <input required type="text" name="name" placeholder="Enter your name" value={this.state.name} onChange={e => this.change(e)} />
                    <br/><br/>
                    <input required type="email" name="email" placeholder="Enter your email" value={this.state.email} onChange={e => this.change(e)} />
                    <br/><br/>
                    <input required type="text" name="phone" placeholder="Enter your phone" value={this.state.phone} onChange={e => this.change(e)} />
                    <br/><br/>
                    <input required type="text" name="message" placeholder="Enter your message" value={this.state.message} onChange={e => this.change(e)} />
                    <br/><br/>
                    <button onClick={(e) => this.onSubmit(e)}>Post</button>
                </form>
            </div>
        );
    }
}