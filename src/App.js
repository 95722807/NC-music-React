import React, { memo } from 'react'
import { renderRoutes } from "react-router-config";

import routes from './router';

import WJAppHeader from './components/app-header/'
import WJAppFooter from './components/app-footer/'
import { HashRouter} from 'react-router-dom';

const App = memo(() => {
  return (
    <HashRouter>
      <WJAppHeader/>
      {renderRoutes(routes)}
      <WJAppFooter/>
    </HashRouter>
  )
})

export default App