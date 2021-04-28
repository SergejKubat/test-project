import Header from '../Header/Header';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import About from '../About/About';
import Footer from '../Footer/Footer';
import NotFound from '../NotFound/NotFound';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {

  return (
    <div>
      <Router>
          
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/about" component={About} />
          <Route exact path="*" component={NotFound} />
        </Switch>
        <Footer />

      </Router>
    </div>
  );
}

export default App;