import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';
import reportWebVitals from './reportWebVitals';

const page = (
  <div>
    <Header />
    <MainContent />
    <Footer />
  </div>
)

// JS Function
function pageFunction() {
  return page;
}

// React Component
function PageRC() {
  return page;
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* {page} */}
    {/* {pageFunction()} */}
    <PageRC />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
