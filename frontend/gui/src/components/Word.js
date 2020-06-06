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
    synonim = (arrayOfBadWords, word) => {
        for (let index = 0; index < arrayOfBadWords.length; index++) {
            const element = arrayOfBadWords[index];
            if (element.badword === word) {
                return element.synonim;
            } else {

            }
        }
    }

    render() {

        let checkedWord = null;

        let isBadWord = this.searchOnArray(this.props.badWordsTriggered, this.props.word);

        let synonimOfBadWord = null;
        
        if(isBadWord){
            synonimOfBadWord = this.synonim(this.props.badWordsTriggered, this.props.word)
        }

        if (this.props.word !== "ENTER") {
            checkedWord = (
                <div style={{ flexGrow: '0', float: 'left' }}>
                    {isBadWord ?
                        <div>
                            <ContextMenuTrigger id={this.props.id+""}>
                                <h1 onClick={() => this.props.acceptOneSuggestion(this.props.id)} style={{ color: 'red', whiteSpace: 'pre' }}>{this.props.word} </h1>
                            </ContextMenuTrigger>
                            <ContextMenu className="contextMenu" id={this.props.id+""}>
                                <MenuItem onClick={() => this.props.acceptOneSuggestion(this.props.id)} className="itemStyle" data={{item: synonimOfBadWord}}>{synonimOfBadWord}</MenuItem>
                            </ContextMenu>
                        </div>
                        :
                        <h1 style={{ color: 'green', whiteSpace: 'pre' }}>{this.props.word} </h1>}
                </div>);
        } else {
            checkedWord = (
                <div >
                    <span style={{ width: '100%', height: '100%', display: 'flex' }}></span>
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