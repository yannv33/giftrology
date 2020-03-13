import React from 'react';
import './Gif.scss';
import logo from './../img/giftrology-logo.png'

class Gif extends React.Component {

    state={
        gif1:{},
        gif2:{},
        gif3:{},
        mood:{},
        keyword1:{},
        keyword2:{},
        sign:{},
        signTrad:""
    }

    componentDidMount(){
        this.setState({sign:this.props.dataFromParent},
        () =>{
            if (this.state.sign == 'aries'){
                this.setState({signTrad:'Bélier'})
            } else if (this.state.sign == 'taurus'){
                this.setState({signTrad:'Taureau'})
            } else if (this.state.sign == 'gemini'){
                this.setState({signTrad:'Gémeaux'})
            } else if (this.state.sign == 'cancer'){
                this.setState({signTrad:'Cancer'})
            } else if (this.state.sign == 'leo'){
                this.setState({signTrad:'Lion'})
            } else if (this.state.sign == 'virgo'){
                this.setState({signTrad:'Vierge'})
            } else if (this.state.sign == 'libra'){
                this.setState({signTrad:'Balance'})
            } else if (this.state.sign == 'scorpio'){
                this.setState({signTrad:'Scorpion'})
            } else if (this.state.sign == 'sagittarius'){
                this.setState({signTrad:'Sagittaire'})
            } else if (this.state.sign == 'capricorn'){
                this.setState({signTrad:'Capricorne'})
            } else if (this.state.sign == 'aquarius'){
                this.setState({signTrad:'Verseau'})
            } else if (this.state.sign == 'pisces'){
                this.setState({signTrad:'Poisson'})
            } else {
                console.log('error')
            }


            fetch(`http://sandipbgt.com/theastrologer/api/horoscope/${this.state.sign}/today`)
            .then(res => res.json())
            .then(result => {
                console.log(result)
                let mood = result.meta.mood
                let keywords = result.meta.keywords
                let keywordsplit = keywords.split(',')
                let random = Math.floor(Math.random() * 11);
                this.setState({
                    mood:mood,
                    keyword1: keywordsplit[0],
                    keyword2: keywordsplit[1]
                })
            fetch(`https://api.giphy.com/v1/gifs/translate?api_key=QpZnbNnvPoI8r0XPRRvMCY80JbSK5pmm&s=${this.state.mood}$weirdness=${random}`)
                .then(resp => resp.json())
                .then(resd => {
                    let gif1 = resd.data.images.downsized_large.url
                    this.setState({
                        gif1
                    })
                })
            fetch(`https://api.giphy.com/v1/gifs/translate?api_key=QpZnbNnvPoI8r0XPRRvMCY80JbSK5pmm&s=${this.state.keyword1}$weirdness=${random}`)
                .then(resp => resp.json())
                .then(resd => {
                    let gif2 = resd.data.images.downsized_large.url
                    this.setState({
                        gif2
                    })
                })
            fetch(`https://api.giphy.com/v1/gifs/translate?api_key=QpZnbNnvPoI8r0XPRRvMCY80JbSK5pmm&s=${this.state.keyword2}$weirdness=${random}`)
                .then(resp => resp.json())
                .then(resd => {
                    let gif3 = resd.data.images.downsized_large.url
                    this.setState({
                        gif3
                    })
                })
            })
        })

    }

        render(){
            let signe = this.state.signTrad
            return(
                <div className="gif">
                    <img id="logo2" src={logo} alt=""/>
                    <h1>{signe}</h1>
                    <div id="gifContain">
                        <div>
                        <img id="gif1" src={this.state.gif1} />
                        <p class="title">Amour</p>
                        </div>
                        <div>
                        <img id="gif2" src={this.state.gif2} />
                        <p class="title">Santé</p>
                        </div>
                        <div>
                        <img id="gif3" src={this.state.gif3} />
                        <p class="title">Travail</p>
                        </div>
                    </div>
                </div>
            )
        }
}

export default Gif;