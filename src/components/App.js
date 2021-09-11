import React, { useState } from 'react';
import 'semantic-ui-css/semantic.min.css';

import Authentication from './Authentication';
import Timecard from './Timecard';
import '../styles/Authentication.css';

function App() {
  const [auth, setAuth] = useState(false);
  const [user, setUser] = useState('');

  return (
    !auth ? 
    <Authentication user={user} setUser={setUser} setAuth={setAuth} /> :
    <Timecard user={user} />
  );
}

export default App;
