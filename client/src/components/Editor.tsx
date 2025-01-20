import React, { useState } from 'react';
import { Button, Card, Input } from 'antd';

const { TextArea } = Input;

const Editor: React.FC = () => {
  const [content, setContent] = useState<string>("<p>Welcome to the Email Builder!</p>");

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  return (
    <Card
      title={<h2 style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>Email Layout Editor</h2>}
      bordered
      style={{
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
        overflow: 'hidden',
      }}
    >
      <TextArea
        value={content}
        onChange={handleChange}
        rows={12}
        style={{
          fontSize: '1rem',
          lineHeight: '1.5',
          padding: '12px',
          borderRadius: '8px',
        }}
        placeholder="Start typing your email layout here..."
      />
      <div
        style={{
          marginTop: '16px',
          textAlign: 'right',
        }}
      >
        <Button type="primary" size="large" style={{ borderRadius: '6px' }}>
          Save Changes
        </Button>
      </div>
    </Card>
  );
};

export default Editor;
