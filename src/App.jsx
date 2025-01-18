import React from 'react';
import { Layout } from 'antd';
import Navbar from './Component/Navbar';
import HomePage from './Pages/Homepage';
import Footer from './Component/Footer';

function App() {
  const [text, setText] = React.useState('');
  return (
    <React.Fragment>
      {/* <Navbar onSearch={t => setText(t)} /> */}
      <HomePage text={text} />
      <Footer />
    </React.Fragment>
  );
}

export default App;
