import React from 'react';

import AppMobile from './components/Mobile/App_Mobile.js'
import AppDesktop from './components/Desktop/App_Desktop.js'

const App = () => {
  let isMobile = false;

  if(window.innerWidth <= 800) isMobile = true;

  if (isMobile) return <AppMobile/>
  else return <AppDesktop/>
}

export default App;
