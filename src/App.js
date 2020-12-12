import './App.css'

import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Feed from './components/Feed/Feed';
import Widget from './components/Widget/Widget';
import Login from './components/auth/Login';

import { useStateValue } from './context/StateProvider';

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
          <>
            <Header />
            <div className="app__body">
              <SideBar />
              <Feed />
              <Widget />
            </div>
          </>
        )}
    </div>
  );
}

export default App;
