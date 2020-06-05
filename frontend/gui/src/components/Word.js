import React, { Component } from 'react';

class Word extends Component {

    state = {
        tieneEnter: false,
        word: null,
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

    componentDidUpdate(previousProps, previousState) {
        if (previousProps.word !== this.props.word) {
            if (/\n/.test(this.props.word)) {
                if (this.props.word.split(/\n/).length === 1) {
                    this.setState({
                        tieneEnter: true,
                        word: this.props.word.replace(/\n/, '')
                    })
                }
                else {
                    console.log('splitting happening')
                    this.setState({
                        tieneEnter: true,
                        word: this.props.word.split(/\n/)
                    })
                }
            }
            else {
                this.setState({
                    word: this.props.word
                })
            }
        }
    }

    render() {

        let checkedWord = null;

        if (!this.state.tieneEnter) {
            checkedWord = (
                <div>
                    {this.searchOnArray(this.props.badWordsTriggered, this.props.word) ?
                        <div style={{ float: 'left' }}>
                            <h1 onClick={() => this.props.acceptOneSuggestion(this.props.id)} style={{ color: 'red', whiteSpace: 'pre' }}>{this.state.word} </h1>
                        </div>
                        : <div style={{ float: 'left' }}>
                            <h1 style={{ color: 'green', whiteSpace: 'pre' }}>{this.state.word} </h1>
                        </div>}
                </div>);
        } else if (this.state.word.length > 1 && !this.searchOnArray(this.props.badWordsTriggered, this.state.word[0]) && !this.searchOnArray(this.props.badWordsTriggered, this.state.word[1])) {
            console.log('ambas buenas');
            console.log(this.state.word.length)
            checkedWord = (
                <div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ float: 'left' }}>
                            <h1 style={{ color: 'green', whiteSpace: 'pre' }}>{this.state.word[0]} </h1>
                        </div>
                        <span style={{ width: '100%', height: '100%', flexGrow: '1' }}></span>
                    </div>
                    <div style={{ float: 'left' }}>
                        <h1 style={{ color: 'green', whiteSpace: 'pre' }}>{this.state.word[1]} </h1>
                    </div>
                </div>);
        } else if (this.state.word.length > 1 && this.searchOnArray(this.props.badWordsTriggered, this.state.word[0]) && !this.searchOnArray(this.props.badWordsTriggered, this.state.word[1])) {
            console.log('primera mala segunda buena');
            checkedWord = (
                <div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ float: 'left' }}>
                            <h1 onClick={() => this.props.acceptOneSuggestion(this.props.id)} style={{ color: 'red', whiteSpace: 'pre' }}>{this.state.word[0]}</h1>
                        </div>
                        <span style={{ width: '100%', height: '100%', flexGrow: '1' }}></span>
                    </div>
                    <div style={{ float: 'left' }}>
                        <h1 style={{ color: 'green', whiteSpace: 'pre' }}>{this.state.word[1]} </h1>
                    </div>
                </div>);
        } else if (this.state.word.length > 1 && !this.searchOnArray(this.props.badWordsTriggered, this.state.word[0]) && this.searchOnArray(this.props.badWordsTriggered, this.state.word[1])) {
            console.log('primera buena segunda mala');
            checkedWord = (
                <div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ float: 'left' }}>
                            <h1 style={{ color: 'green', whiteSpace: 'pre' }}>{this.state.word[0]} </h1>
                        </div>
                        <span style={{ width: '100%', height: '100%', flexGrow: '1' }}></span>
                    </div>
                    <div style={{ float: 'left' }}>
                        <h1 onClick={() => this.props.acceptOneSuggestion(this.props.id)} style={{ color: 'red', whiteSpace: 'pre' }}>{this.state.word[1]}</h1>
                    </div>
                </div>);
        } else if (this.state.word.length > 1 && this.searchOnArray(this.props.badWordsTriggered, this.state.word[0]) && this.searchOnArray(this.props.badWordsTriggered, this.state.word[1])) {
            console.log('ambas malas');
            checkedWord = (
                <div>
                    <div style={{ display: 'flex' }}>
                        <div style={{ float: 'left' }}>
                            <h1 onClick={() => this.props.acceptOneSuggestion(this.props.id)} style={{ color: 'red', whiteSpace: 'pre' }}>{this.state.word[0]}</h1>
                        </div>
                        <span style={{ width: '100%', height: '100%', flexGrow: '1' }}></span>
                    </div>
                    <div style={{ float: 'left' }}>
                        <h1 onClick={() => this.props.acceptOneSuggestion(this.props.id)} style={{ color: 'red', whiteSpace: 'pre' }}>{this.state.word[1]}</h1>
                    </div>
                </div>);
        }
        else {
            checkedWord = (
                <div>
                    {this.searchOnArray(this.props.badWordsTriggered, this.props.word) ?
                        <div style={{ display: 'flex' }}>
                            <div style={{ float: 'left' }}>
                                <h1 onClick={() => this.props.acceptOneSuggestion(this.props.id)} style={{ color: 'red', whiteSpace: 'pre' }}>{this.state.word}</h1>
                            </div>
                            <span style={{ width: '100%', height: '100%', flexGrow: '1' }}></span>
                        </div>
                        :
                        <div style={{ display: 'flex' }}>
                            <div style={{ float: 'left' }}>
                                <h1 style={{ color: 'green', whiteSpace: 'pre' }}>{this.state.word} </h1>
                            </div>
                            <span style={{ width: '100%', height: '100%', flexGrow: '1' }}></span>
                        </div>}
                </div>);
        }

        return (
            <div>
                {checkedWord}
            </div>
        )
    }
};

export default Word;