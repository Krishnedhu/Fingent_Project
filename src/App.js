import './App.css';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home'
function App() {
  return (
   <Router>
     <Routes>
       <Route path="/" element={<Home/>}></Route>
     </Routes>
   </Router>
  );
}

export default App;
