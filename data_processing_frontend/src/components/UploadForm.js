import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './UploadForm.css'; // Import CSS file

const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [csrfToken, setCsrfToken] = useState('');

    useEffect(() => {
        // Fetch CSRF token when the component mounts
        const fetchCsrfToken = async () => {
            try {
                const response = await axios.get('http://localhost:8000/csrf-token/');
                setCsrfToken(response.data.csrfToken);
            } catch (error) {
                console.error('Error fetching CSRF token:', error);
            }
        };
        fetchCsrfToken();
    }, []); // Empty dependency array ensures this effect runs only once on mount

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('http://localhost:8000/process-data/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'X-CSRFToken': csrfToken,
                }
            });
            alert('File uploaded and processed successfully!');
        } catch (error) {
            alert('Error uploading file. Please try again.');
        }
    };

    return (
        <div className="upload-form-container">
            <form onSubmit={handleSubmit}>
                <input type="file" className="file-input" onChange={handleFileChange} />
                <button type="submit" className="upload-button">Upload</button>
            </form>
        </div>
    );
};

export default UploadForm;
