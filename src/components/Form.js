import React from 'react';

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''}

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event){
        this.setState({value : event.target.value});
    }

    handleSubmit(event){
        alert('Ton signe astrologique est ' + this.state.value);
        event.preventDefault();
    }

    render(){
        return(
            <div className="Form">
            <form onSubmit={this.handleSubmit}>
                <label>
                    Choisissez votre signe astrologique
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="belier">Bélier</option>
                        <option value="taureau">Taureau</option>
                        <option value="gemeaux">Gémeaux</option>
                        <option value="cancer">Cancer</option>
                        <option value="lion">Lion</option>
                        <option value="vierge">Vierge</option>
                        <option value="balance">Balance</option>
                        <option value="scorpion">Scorpion</option>
                        <option value="sagittaire">Sagittaire</option>
                        <option value="capricorne">capricorne</option>
                        <option value="verseau">Verseau</option>
                        <option value="poissons">Poissons</option>
                    </select>
                </label>
                <input type="submit" value="Submit"/>
            </form>
            </div>
        );
    }
}

export default Form;