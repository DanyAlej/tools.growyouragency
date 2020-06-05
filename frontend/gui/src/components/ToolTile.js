import React from 'react';

import './styles/ToolTile.css'

const toolTile = (props) => {
    return (
        <div className="ToolTile">
            <a href={`/${props.nameOfTool.replace(" ", "")}`}>{props.nameOfTool}</a>
            <p>{props.description}</p>
            <input type="text" onChange={props.toolNameChangeHandler} value={props.nameOfTool}></input>
        </div>
    )
};

export default toolTile;