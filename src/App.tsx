import React from 'react';
import { ConfigProvider } from 'antd';

// import colors from 'tailwindcss/colors';
import './global.css';
import './App.css';
import { Header } from './components/header';

function App() {

  return (
    <ConfigProvider theme={{
      // algorithm: theme.darkAlgorithm,
      components: {
        Slider: {
          // railBg: colors.gray[700],
        },
      }, token: { colorPrimary: '#000000', }
    }}>
      <div className='flex flex-col h-screen w-screen bg-gray-100'>
        <Header />
      </div>
    </ConfigProvider>

  );
}

export default App;
