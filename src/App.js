import './App.less';
import './assets/css/base.css'
import { renderRoutes } from 'react-router-config'
import { HashRouter } from "react-router-dom";
import routes from './router'
import AppFooter from './components/App-footer';
import AppHeader from './components/App-header';


function App() {
  return (
    <HashRouter>
      <AppHeader></AppHeader>
      {renderRoutes(routes)}
      <AppFooter></AppFooter>
    </HashRouter>
  );
}

export default App;
