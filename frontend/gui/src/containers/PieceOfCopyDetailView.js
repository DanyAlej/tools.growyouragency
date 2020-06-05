import React from 'react';
import axios from 'axios';
import { Card } from 'antd';


class PieceOfCopyDetail extends React.Component {

    state = {
        pieceofcopy: {}   
    }

    componentDidMount() {
        const pieceofcopyId = this.props.match.params.pieceofcopyId;
        axios.get(`http://127.0.0.1:8000/api/pieceOfCopy/${pieceofcopyId}`)
            .then(res => {
                this.setState({
                    pieceofcopy: res.data
                });
            })
    }

    render() {
        return (
            <Card title={this.state.pieceofcopy.headline}>

            </Card>
        )
    }
}
export default PieceOfCopyDetail;