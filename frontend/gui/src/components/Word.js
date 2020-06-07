import React, { Component } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import "./styles/ContextMenu.css"


class Word extends Component {

    searchOnArray = (arrayOfBadWords, word) => {
        for (let index = 0; index < arrayOfBadWords.length; index++) {
            const element = arrayOfBadWords[index];
            if (element.badword === word) {
                return true;
            } else {

            }
        }
    }
    badWord = (arrayOfBadWords, word) => {
        for (let index = 0; index < arrayOfBadWords.length; index++) {
            const element = arrayOfBadWords[index];
            if (element.badword === word) {
                return element;
            } else {

            }
        }
    }

    render() {

        let checkedWord = null;

        let isBadWord = this.searchOnArray(this.props.badWordsTriggered, this.props.word);

        let badWord = null;
        
        if(isBadWord){
            badWord = this.badWord(this.props.badWordsTriggered, this.props.word)
        }

        if (this.props.word !== "ENTER") {
            checkedWord = (
                <div style={{  float: 'left' }}>
                    {isBadWord ?
                        <div>
                            <ContextMenuTrigger id={this.props.id+""}>
                                <h1 style={{marginTop:"-25px", color: '#F92772', whiteSpace: 'pre' }}>{this.props.word} </h1>
                            </ContextMenuTrigger>
                            <ContextMenu className="contextMenuWord" id={this.props.id+""}>
                                <MenuItem onClick={() => this.props.acceptOneSuggestion(this.props.id, badWord.synonim)} className="itemStyleWord" data={{item: badWord.synonim}}>{badWord.synonim}</MenuItem>
                                <MenuItem onClick={() => this.props.acceptOneSuggestion(this.props.id, badWord.synonim2)} className="itemStyleWord" data={{item: badWord.synonim2}}>{badWord.synonim2}</MenuItem>
                                <MenuItem onClick={() => this.props.acceptOneSuggestion(this.props.id, badWord.synonim3)} className="itemStyleWord" data={{item: badWord.synonim3}}>{badWord.synonim3}</MenuItem>
                                <MenuItem onClick={() => this.props.acceptOneSuggestion(this.props.id, badWord.synonim4)} className="itemStyleWord" data={{item: badWord.synonim4}}>{badWord.synonim4}</MenuItem>
                            </ContextMenu>
                        </div>
                        :
                        <h1 style={{ marginTop:"-25px", color: '#A5E22E', whiteSpace: 'pre' }}>{this.props.word} </h1>}
                </div>);
        } else {
            checkedWord = (
                <div>
                    <span style={{height:"1px", width: '100%', display:"flex"}}></span>
                </div>)
        }

        return (
            <div>
                {checkedWord}
            </div>
        )
    }
};

export default Word;