import React from 'react';
import DocumentationItem from './DocumentationItem';

const DocumentationList = ({ documents, deleteDocument }) => {
  return (
    <div>
      {documents.map((doc) => (
        <DocumentationItem key={doc.id} document={doc} deleteDocument={deleteDocument} />
      ))}
    </div>
  );
};

export default DocumentationList;
