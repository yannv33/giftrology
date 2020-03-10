import React from 'react';

class Gif extends React.Component {

    state={
        gif1:{},
        gif2:{},
        gif3:{},
        mood:{},
        keyword1:{},
        keyword2:{}
    }

    componentDidMount(){

        fetch("http://sandipbgt.com/theastrologer/api/horoscope/leo/today")
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

    }

        render(){
            return(
                <div className="gif">
                    <img src={this.state.gif1} />
                    <img src={this.state.gif2} />
                    <img src={this.state.gif3} />
                </div>
            )
        }

}

export default Gif;