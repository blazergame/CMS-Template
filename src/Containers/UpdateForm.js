import React, { Component } from 'react';
import Header from '../Components/Header.js';

class UpdateForm extends Component {

    constructor(props) {
        super(props);

        this.state = {value: ''}

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChanges = this.handleChanges.bind(this);
    }

    handleChanges(event){
        this.setState({value: event.target.value})
    }

    handleSubmit(event){
        alert("Data is: " + this.state.value)
        event.preventDefault();
    }

    render(){
        return (
            <div>

                <Header />
                <form onSubmit={this.handleSubmit}>
                    <label >
                        Header Button: <input type="text" name="title" onChange={this.handleChanges}/> 
                    </label>
                    <input type='submit' value="Submit" />

                </form>
                <br/> <br/>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        First Paragraph Button:  <input type="text" name="search"  onChange={this.handleChanges}/>
                    </label>
                    <input type='submit' value="Submit" />
                </form>
                <br/> <br/>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Second Paragraph Button:  <input type="text" name="next"  onChange={this.handleChanges}/>
                    </label>
                    <input type='submit' value="Submit" />
                </form>

                <br/> <br/>
            </div>
        )
    }
}

export default UpdateForm;