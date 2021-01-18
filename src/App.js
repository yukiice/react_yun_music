import './App.less';
import './assets/css/base.css'
import AppFooter from './components/App-footer';
import AppHeader from './components/App-header';


function App() {
  return (
    <div>
      <AppHeader></AppHeader>
      <div>Content</div>
      <AppFooter></AppFooter>
    </div>
  );
}

export default App;
