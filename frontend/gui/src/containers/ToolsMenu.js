import React, { Component } from "react";
import ToolTile from '../components/ToolTile';
import Switch from '../components/Switch'



class ToolsMenu extends Component {

    state = {
        buttonName: 'I am an IAG Media Client',
        agencyOwnerShow: true,
        tools: [
            { id: 1, nameOfTool: 'Copy Checker', description: 'A tool that reads your copy, shows you how to make it better and compliant...', forOwner: true },
            { id: 2, nameOfTool: 'Ads Library', description: 'Proven ads that have made money, read some or submit yours', forOwner: true },
            { id: 3, nameOfTool: 'Agency Dashboard', description: 'All your clients, all your campaigns in one place', forOwner: false },
            { id: 4, nameOfTool: 'Oura Ring', description: 'Ready to compete? See yours and the community stats here', forOwner: true }
        ]
    }
    toolNameChangeHandler = (event, id) => {
        const tileIndex = this.state.tools.findIndex(t => {
            return t.id === id;
        });

        const tool = {
            ...this.state.tools[tileIndex]
        };

        tool.nameOfTool = event.target.value;

        const tools = [...this.state.tools];

        tools[tileIndex] = tool;

        this.setState({ tools: tools }
        )
    }
    toggleUserHandler = () => {
        const currrentIsAgencyOwner = this.state.agencyOwnerShow;
        if (currrentIsAgencyOwner) {
            this.setState({
                agencyOwnerShow: !currrentIsAgencyOwner,
                buttonName: "I am an agency owner"
            })
        } else {
            this.setState({
                agencyOwnerShow: !currrentIsAgencyOwner,
                buttonName: "I am an IAG Media Client"
            })
        }
    }
    render() {
        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer',
            textAlign: 'center',
            margin: 'auto',
            marginBottom: '10px'
        };

        const gridStyle = {
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gridGap: '30px',
            gridAutoRows: 'auto'
        };

        let activeTools = null;

        if (this.state.agencyOwnerShow) {

            let toolsToMap = this.state.tools.filter(t => t.forOwner);

            activeTools = (
                <div style={gridStyle}>
                    {toolsToMap.map((tool, index) => {
                        return (
                            <ToolTile nameOfTool={tool.nameOfTool} description={tool.description}
                                key={tool.id}
                                toolNameChangeHandler={(event) => this.toolNameChangeHandler(event, tool.id)} />
                        )
                    })}
                </div>
            )
        } else {

            let toolsToMap = this.state.tools.filter(t => !t.forOwner);

            activeTools = (
                <div>
                    {toolsToMap.map((tool, index) => {
                        return (
                            <ToolTile nameOfTool={tool.nameOfTool} description={tool.description}
                                key={tool.id}
                                toolNameChangeHandler={(event) => this.toolNameChangeHandler(event, tool.id)} />
                        )
                    })}
                </div>
            )
        }

        return (
            <div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Switch isOn={this.state.agencyOwnerShow}
                        onColor="#EF476F"
                        handleToggle={this.toggleUserHandler} />
                </div>
                <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <button style={style} onClick={this.toggleUserHandler}>{this.state.buttonName}</button>
                </div>
                {activeTools}
                <br></br>
            </div>
        )
    }
}

export default ToolsMenu;