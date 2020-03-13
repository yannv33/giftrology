import React from 'react';
import './Form.scss';
import logo from './../img/giftrology-logo.png'

class Form extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    state={
        signe:{},
        value: ""
    }
    
    handleChange = (event) =>{
        this.setState({value : event.target.value, signe:event.target.value},
        () =>{
            this.props.getSign(this.state.value)
        })
    }

    handleSubmit(event){
        alert('Ton signe astrologique est ' + this.state.value);
        event.preventDefault();
    }

    render(){
        //const signe = this.state.signe;
        return(
            <div className="Form">
                <div id="logo">
                    <img src={logo}/>
                </div>
            <form onSubmit={this.handleSubmit}>
                <label>
                    <select class="select-css" value={this.state.value} onChange={this.handleChange}>
                        <option value="-" selected>Choisissez votre signe</option>
                        <option value="aries">Bélier</option>
                        <option value="taurus">Taureau</option>
                        <option value="gemini">Gémeaux</option>
                        <option value="cancer">Cancer</option>
                        <option value="leo">Lion</option>
                        <option value="virgo">Vierge</option>
                        <option value="libra">Balance</option>
                        <option value="scorpio">Scorpion</option>
                        <option value="sagittarius">Sagittaire</option>
                        <option value="capricorn">Capricorne</option>
                        <option value="aquarius">Verseau</option>
                        <option value="pisces">Poissons</option>
                    </select>
                </label>
            </form>
            </div>
        );
    }
}

export default Form;