import React from 'react';
import ReactDOM from 'react-dom/client';

// Define a placeholder App component if one does not exist
const App = () => {
    return <h1>Hello, World!</h1>;
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);