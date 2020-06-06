import React, { Component } from 'react';
import { ContextMenu, MenuItem, ContextMenuTrigger } from "react-contextmenu";
import "./styles/ContextMenu.css"


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

    render() {

        let checkedWord = null;

        if (this.props.word !== "ENTER") {
            checkedWord = (
                <div style={{ flexGrow: '0', float: 'left' }}>
                    {this.searchOnArray(this.props.badWordsTriggered, this.props.word) ?
                        <div>
                            <ContextMenuTrigger class="contextMenu" id={this.props.id + ""}>
                                <h1 onClick={() => this.props.acceptOneSuggestion(this.props.id)} style={{ color: 'red', whiteSpace: 'pre' }}>{this.props.word} </h1>
                            </ContextMenuTrigger>
                            <ContextMenu className="contextMenu" id={this.props.id+""}>
                                <MenuItem className="menuItem" dara={{item: "Hola"}}>Hola</MenuItem>
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