import './App.css'

import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Feed from './components/Feed/Feed';
import Widget from './components/Widget/Widget';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <SideBar />
        <Feed />
        <Widget />
      </div>
    </div>
  );
}

export default App;
