import React, { Component } from 'react';

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
                <form onSubmit={this.handleSubmit}>
                    <label >
                        Title: <input type="text" name="title" onChange={this.handleChanges}/> 
                    </label>
                    <input type='submit' value="Submit" />

                    <br/> <br/>
                </form>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Search:  <input type="text" name="search"  onChange={this.handleChanges}/>
                    </label>
                    <input type='submit' value="Submit" />
                </form>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        Next:  <input type="text" name="next"  onChange={this.handleChanges}/>
                    </label>
                    <input type='submit' value="Submit" />
                </form>
            </div>
        )
    }
}

export default UpdateForm;