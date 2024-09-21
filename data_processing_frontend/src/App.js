import React from 'react';
import UploadForm from './components/UploadForm';
import DataDisplay from './components/DataDisplay'; // Import DataDisplay component
import './App.css'; // You can import CSS here if needed

const App = () => {
    return (
        <div className="App">
            <header>
                <div className="container">
                    <h1 className="logo">My Data Processing App</h1>
                </div>
            </header>

            <main className="main-content">
                <div className="container">
                    <h2>Upload Your File</h2>
                    <UploadForm />
                </div>
            </main>

            <section className="data-display-section">
                <div className="container">
                    <DataDisplay /> 
                </div>
            </section>

            <footer>
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} My Data Processing App. All rights reserved.</p>
                </div>
            </footer>
        </div>
    );
};

export default App;
