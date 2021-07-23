import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Techs from './components/Techs';
import Init from './components/Init';

function App() {
  return (
    <Router>
      <Switch>
          <Route exact path="/" component={Init}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/projects" component={Projects}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Route exact path="/techs" component={Techs}></Route>
        </Switch>
    </Router>
  );
}

export default App;
