import React, { Component } from 'react';
import './styles/CopyChecker.css'
import Word from '../components/Word';
import axios from 'axios';


class CopyChecker extends Component {

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/badWords/')
            .then((response) => {
                this.setState({ badWords: response.data })
            })
    }

    state = {
        body: "",
        badWords: [],
        badWordsTriggered: [],
        wordByWordComponents: [],
        badWordsOcurrences: []
    };

    onChangeBodyOfAd = (event) => {
        const bodyTemp = event.target.value;

        const wordByWord = bodyTemp.replace(/[\r\n]+/g, " ENTER ").split(" ");

        this.compareTheArrays(wordByWord, bodyTemp)

    };

    compareTheArrays = (wordByWord, bodyToSet) => {

        const triggeredWords = [];

        let newWordByWord = [];

        for (let index = 0; index < wordByWord.length; index++) {
            const element = wordByWord[index];
            newWordByWord.push({ word: element, id: index })
            this.state.badWords.forEach(element2 => {
                if (element === element2.badword) {
                    triggeredWords.push({ badword: element2.badword, synonim: element2.synonim, synonim2: element2.synonim2, synonim3: element2.synonim3, synonim4: element2.synonim4, id: index })
                }
            })
        }

        const newOcurrences = this.countOcurrences(triggeredWords);

        this.setState({
            body: bodyToSet,
            badWordsTriggered: triggeredWords,
            wordByWordComponents: newWordByWord,
            badWordsOcurrences: newOcurrences
        });
    };

    countOcurrences = (newBadWordsTriggered) => {
        let newOcurrences = [];

        let flag = false;

        for (let element of newBadWordsTriggered) {
            flag = false;
            for (let element2 of newOcurrences) {
                if (element.badword === element2.badword) {
                    let ocurrences = element2.ocurrences + 1;
                    newOcurrences = newOcurrences.filter((e) => e.badword !== element2.badword)
                    newOcurrences.push({ badword: element2.badword, synonim: element2.synonim, ocurrences: ocurrences })
                    flag = true;
                }
            }
            if (!flag) { newOcurrences.push({ badword: element.badword, synonim: element.synonim, ocurrences: 1 }) }
        }

        return newOcurrences.reverse();
    }

    acceptAllSuggestions = (badWord) => {
        let currentBody = this.state.wordByWordComponents;

        let badWordElement = null;

        this.state.badWords.forEach((element) => {
            if (element.badword === badWord) {
                badWordElement = element;
            }
        });

        for (let i = 0; i < currentBody.length; i++) {
            const element = currentBody[i];
            if (element.word === badWordElement.badword) {
                currentBody[i] = { word: badWordElement.synonim, id: i };
            }
        };
        let editedBody = [];
        currentBody.forEach((element) => {
            editedBody.push(element.word)
        });
        editedBody = editedBody.join(" ");

        const newBadWordsTriggered = this.state.badWordsTriggered.filter(element => element.badword !== badWordElement.badword)

        const newOcurrences = this.countOcurrences(newBadWordsTriggered);

        this.setNewcopyChecker(editedBody, newBadWordsTriggered, currentBody, newOcurrences);

    };

    acceptOneSuggestion = (index, synonim) => {

        let currentBody = this.state.wordByWordComponents;

        currentBody[index] = { word: synonim, id: index };

        let editedBody = [];

        currentBody.forEach((element) => {
            editedBody.push(element.word)
        });

        const newBadWordsTriggered = this.state.badWordsTriggered.filter(element => element.id !== index)

        const newOcurrences = this.countOcurrences(newBadWordsTriggered);

        this.setNewcopyChecker(editedBody.join(" "), newBadWordsTriggered, currentBody, newOcurrences)
    };



    setNewcopyChecker = (newBody, newBadWordsTriggered, newBodyWordByWord, newOcurrences) => {

        newBody = newBody.replace(" ENTER ", "\n")

        this.setState({
            body: newBody,
            badWordsTriggered: newBadWordsTriggered,
            wordByWordComponents: newBodyWordByWord,
            badWordsOcurrences: newOcurrences
        });
    }

    compareOcurrences = (e1, e2) => {
        if (e1.ocurrences > e2.ocurrences) {
            return -1;
        }
        if (e1.ocurrences < e2.ocurrences) {
            return 1;
        }
        return 0;
    }


    render() {
        let badWordsAndSynonimsTriggered = null;

        badWordsAndSynonimsTriggered = (
            <div>
                {this.state.badWordsOcurrences.sort(this.compareOcurrences).map((element, index) => {
                    return (
                        <div style={{ clear: 'both' }} key={index}>
                            <h3 style={{ float: 'left', whiteSpace: 'pre' }}>({element.ocurrences}) {element.badword}  --> {element.synonim}  </h3>
                            <button onClick={() => this.acceptAllSuggestions(element.badword)}>Accept ALL suggestions</button>
                        </div>
                    )
                })
                }
            </div>
        );

        let wordByWordComponents = null;

        wordByWordComponents = (
            <div>
                {this.state.wordByWordComponents.map((element, index) => {
                    return (
                        <div key={index}>
                            <Word key={index} id={element.id} word={element.word} badWordsTriggered={this.state.badWordsTriggered} acceptOneSuggestion={this.acceptOneSuggestion} />
                        </div>
                    )
                })}
            </div>
        );

        return (
            <div className="CopyCheckerBigContainer">
                <div className='CopyCheckerRow'>
                    <div className='CopyCheckerColumn' style={{ width: '40%' }}>
                        <form>
                            <input type="text" name="name" className="question" id="nme" required autocomplete="off" />
                            <label htmlFor="nme"><span>Headline</span></label>
                            <h2>Body of your ad</h2>
                            <textarea name="message" rows="18" className="question" id="msg" required autocomplete="off" value={this.state.body} onChange={(event) => this.onChangeBodyOfAd(event)}></textarea>
                            <input type="submit" value="Send For Revision!" />
                        </form>
                    </div>
                    <div className='CopyChecker2Column' style={{ width: '60%' }}>
                        <h2 style={{ marginBottom: '25px' }}>Revised Copy</h2>
                        <div style={{ width: '95%', backgroundColor: "#2F313D", overflow: "auto", marginTop: "-15px" }}>
                            <span style={{ height: "1px", width: '100%', display: "flex" }}></span>
                            {wordByWordComponents}
                        </div>
                        <div style={{ clear: 'both' }}>
                            <h2>Bad words triggered</h2>
                        </div>
                        {badWordsAndSynonimsTriggered}
                    </div>
                </div>
            </div>
        );
    }
}

export default CopyChecker;

// {/* <textarea name="message" className="question" rows="2" value={this.state.body} onChange={(event) => this.onChangeBodyOfAd(event)} /> */}
