import React, { Component } from 'react';

class Word extends Component {

    state = {
        rightClicked: false
    }

    searchOnArray = (arrayOfBadWords, word) => {
        for (let index = 0; index < arrayOfBadWords.length; index++) {
            const element = arrayOfBadWords[index];
            if (element.badword === word) {
                return true;
            } else {

            }
        }
    }

    handleRightClick = () => {
        console.log('Right clicked')
        this.setState({
            rightClicked: true
        })
    }

    render() {

        let checkedWord = null;

        if (this.props.word !== "ENTER") {
            checkedWord = (
                <div style={{ flexGrow: '0', float: 'left' }}>
                    {this.searchOnArray(this.props.badWordsTriggered, this.props.word) ?
                        <h1 onContextMenu={() => this.handleRightClick()} onClick={() => this.props.acceptOneSuggestion(this.props.id)} style={{ color: 'red', whiteSpace: 'pre' }}>{this.props.word} </h1>
                        :
                        <h1 style={{ color: 'green', whiteSpace: 'pre' }}>{this.props.word} </h1>}
                </div>);
        } else {
            checkedWord = (
                <div >
                    <span style={{ width: '100%', height: '100%', display: 'flex' }}></span>
                </div>)
        }

        let suggestions = null;
        
        if(this.state.rightClicked){
            suggestions = (
                <div style={{position:"absolute"}}>
                    <h1>Sugerencia</h1>
                </div>
            )
        }else{

        }

        return (
            <div style={{position:'relative'}}>
                {checkedWord}
                {suggestions}
            </div>
        )
    }
};

export default Word;