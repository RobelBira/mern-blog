import { BrowserRouter as Router,Route,Routes} from 'react-router-dom';

// pages
import Home from './pages/Home';
import About from './pages/About';
import ArticlesList from './pages/ArticlesList';
import Article from './pages/Article';
import NotFound from './pages/NotFound';
// components
import NavBar from './components/NavBar';



function App() {
  return (
    <Router>    
<NavBar/>
      <div className="max-w-screen-lg mx-auto pt-20">
        <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/article/:name' element={<Article/>}/>
      <Route path='/articles-list' element={<ArticlesList/>}/>
      <Route path='*' element={<NotFound/>}/>
        
        </Routes>
    </div>
    </Router>

  );
}

export default App;
