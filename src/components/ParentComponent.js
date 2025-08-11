import React, { useState } from 'react';
import DocumentationItem from './DocumentationItem';

const ParentComponent = () => {
  const [documents, setDocuments] = useState([
    { id: 1, title: 'Document 1', content: 'Content of Document 1' },
    { id: 2, title: 'Document 2', content: 'Content of Document 2' },
    // other documents
  ]);

  const deleteDocument = (id) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  const updateDocument = (id, title, content) => {
    setDocuments(
      documents.map(doc => 
        doc.id === id ? { ...doc, title, content } : doc
      )
    );
  };

  return (
    <div>
      {documents.map(document => (
        <DocumentationItem
          key={document.id}
          document={document}
          deleteDocument={deleteDocument}
          updateDocument={updateDocument} // Ensure this is passed correctly
        />
      ))}
    </div>
  );
};

export default ParentComponent;
