import React from 'react';
import { Route } from 'react-router-dom';

import PieceOfCopyList from './containers/PieceOfCopyListView';
import CopyChecker from './containers/CopyChecker';
import ToolsMenu from './containers/ToolsMenu';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={ToolsMenu} /> {" "}
        <Route exact path='/CopyChecker/' component={CopyChecker} /> {" "}
        <Route exact path='/AdsLibrary/' component={PieceOfCopyList} /> {" "}
    </div>
);

export default BaseRouter;