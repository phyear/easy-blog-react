import React,{Suspense} from 'react';
import './App.css';
import {BrowserRouter as Router , Route, Switch} from 'react-router-dom';
import { Routers } from './router'

interface Props {
   name: String
}
const App:React.FC<Props> = (props) => (
  <Router>
     <Suspense fallback = {<div>aa</div>}>
        <Switch>
            {
              Routers.map(router => (
                <Route
                  key={router.key}
                  path={router.path}
                  component={router.component}
                >
                </Route>
              ))
            }
        </Switch>
     </Suspense>
  </Router>
)

export default App;
