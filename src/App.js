import React, { useState, useEffect } from 'react';
import DocumentationList from './components/DocumentationList';
import DocumentationForm from './components/DocumentationForm';
import './styles.css';

const App = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    // Fetch initial documents from local storage or API
    const storedDocuments = JSON.parse(localStorage.getItem('documents')) || [];
    setDocuments(storedDocuments);
  }, []);

  const addDocument = (doc) => {
    const newDocuments = [...documents, doc];
    setDocuments(newDocuments);
    localStorage.setItem('documents', JSON.stringify(newDocuments));
  };

  const deleteDocument = (id) => {
    const newDocuments = documents.filter(doc => doc.id !== id);
    setDocuments(newDocuments);
    localStorage.setItem('documents', JSON.stringify(newDocuments));
  };

  return (
    <div className="App">
      <h1>Documentation Manager</h1>
      <DocumentationForm addDocument={addDocument} />
      <DocumentationList documents={documents} deleteDocument={deleteDocument} />
    </div>
  );
};

export default App;

