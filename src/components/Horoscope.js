import React from 'react';

class Horoscope extends React.Component {

    state = {
        horoscope: {}
    }

    componentDidMount(){
        fetch("http://sandipbgt.com/theastrologer/api/horoscope/leo/today")
        .then(res => res.json())
        .then(result => {
            console.log(result)
            let horoscope = result
            this.setState({
                horoscope
            })
        })
    }

    render() {
        return(
            <div className="Horoscope">
                <p>{this.state.horoscope.horoscope}</p>

            </div>
        )
    }

}

export default Horoscope;