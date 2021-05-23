import { useState } from 'react'
import ToolBar from './components/Navigation/ToolBar/ToolBar'
import SideDrawer from './components/SideDrawer/SideDrawer'
import './App.css';
function App() {
  const [sideDrawerIsVisible, setSideDrawerIsVisible] = useState(false);

  const sideDrawerClosedHandler = () => {
    setSideDrawerIsVisible(false);
  }

  const sideDrawerToggleHandler = () => {
    setSideDrawerIsVisible(!sideDrawerIsVisible);
  }
  return (
    <div className="App">
      <ToolBar drawerToggleClicked={sideDrawerToggleHandler} />
      <SideDrawer
        open={sideDrawerIsVisible}
        closed={sideDrawerClosedHandler} />
    </div>
  );
}

export default App;
