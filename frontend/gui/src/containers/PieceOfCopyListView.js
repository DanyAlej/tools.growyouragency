import React from 'react';
import axios from 'axios';

import PieceOfCopys from '../components/PieceOfCopy';
import PieceOfCopyForm from '../components/PieceOfCopyForm'

class PieceOfCopyList extends React.Component {

    state = {
        piecesofcopy: []   
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/api/pieceOfCopy/')
            .then(res => {
                this.setState({
                    piecesofcopy: res.data
                });
                console.log(res.data);
            })
    }

    render() {
        return (
            <div>
                <PieceOfCopys data={this.state.piecesofcopy} />
                <br />
                <h2>Submit your piece of copy</h2>
                <PieceOfCopyForm />
            </div>
        )
    }
}
export default PieceOfCopyList;