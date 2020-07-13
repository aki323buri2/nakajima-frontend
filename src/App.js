import React from 'react';
import Dashboard from './containers/Dashboard'; 
import Logo from './components/Logo';
import RoutersLinkList from './routers/RoutersLinkList';
import RoutersSwitch from './routers/RoutersSwitch';

const TITLE = '中島　亮三';
const GIT_URL = 'https://github.com/aki323buri2';

const App = () => {
  const header = (
    <Logo to="/">{TITLE}</Logo>
  );
  const drawer = ({ onClose }) => (
    <RoutersLinkList listClick={onClose} />
  )
  const main = (
    <RoutersSwitch />
  );
  const footer = 'footer';
  return (
    <Dashboard 
      header={header}
      drawer={drawer}
      footer={footer}
      gitUrl={GIT_URL}
    >
      {main}
    </Dashboard>
  )
}

export default App
