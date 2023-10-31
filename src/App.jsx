import React from 'react';
import { Layout } from 'antd';
import Navbar from './component/Navbar';
import HomePage from './pages/homepage';
import Footer from './Component/Footer';

function App() {
  const [text, setText] = React.useState('');
  return (
    <React.Fragment>
      <Navbar onSearch={t => setText(t)} />
      <HomePage text={text} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
