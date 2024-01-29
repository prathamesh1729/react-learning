import React from 'react';
import './App.css';
// import Navbar from './components/Navbar';
// import Main from './components/Main';
import NavbarRemix from './components/NavbarRemix';
import MainRemix from './components/MainRemix';


export default function App() {

    const [darkMode, setDarkMode] = React.useState(false);

    function toggleDarkMode() {
        setDarkMode(!darkMode);
    };

    return (
        <div className='container'>
            <NavbarRemix darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
            <MainRemix darkMode={darkMode} />
        </div>
    )
}
