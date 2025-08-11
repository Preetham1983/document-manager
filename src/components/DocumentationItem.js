// import React from 'react';

// const DocumentationItem = ({ document, deleteDocument }) => {
//   return (
//     <div className="document-item">
//       <h2>{document.title}</h2>
//       <p>{document.content}</p>
//       <button onClick={() => deleteDocument(document.id)}>Delete</button>
//     </div>
//   );
// };

// export default DocumentationItem;
import React, { useState } from 'react';

const DocumentationItem = ({ document, deleteDocument, updateDocument }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTitle, setEditedTitle] = useState(document.title);
  const [editedContent, setEditedContent] = useState(document.content);

  const handleSave = () => {
    updateDocument(document.id, editedTitle, editedContent);
    setIsEditing(false);
  };

  return (
    <div className="document-item">
      {isEditing ? (
        <>
          <input
            type="text"
            value={editedTitle}
            onChange={(e) => setEditedTitle(e.target.value)}
          />
          <textarea
            value={editedContent}
            onChange={(e) => setEditedContent(e.target.value)}
          />
          <button onClick={handleSave}>Save</button>
        </>
      ) : (
        <>
          <h2>{document.title}</h2>
          <p>{document.content}</p>
          <button onClick={() => setIsEditing(true)}>Edit</button>
        </>
      )}
      <button onClick={() => deleteDocument(document.id)}>Delete</button>
    </div>
  );
};

export default DocumentationItem;
