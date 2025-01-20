import React, { useState } from 'react';
import { Menu, Button, Upload, message } from 'antd';
import { BoldOutlined, ItalicOutlined, UnderlineOutlined, UploadOutlined } from '@ant-design/icons';

const Toolbar: React.FC = () => {
  const [fileList, setFileList] = useState<any[]>([]);

  const handleUpload = (info: any) => {
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`);
      setFileList([...fileList, info.file]);
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  };

  return (
    <div className="h-full p-4">
      <Menu mode="inline" theme="light">
        <Menu.Item key="1" icon={<BoldOutlined />}>
          Bold
        </Menu.Item>
        <Menu.Item key="2" icon={<ItalicOutlined />}>
          Italic
        </Menu.Item>
        <Menu.Item key="3" icon={<UnderlineOutlined />}>
          Underline
        </Menu.Item>
        <Menu.Item key="4">
          <Upload
            name="image"
            listType="picture"
            action="/uploadImage" // Replace with your backend endpoint
            onChange={handleUpload}
          >
            <Button type="default" icon={<UploadOutlined />}>
              Upload Image
            </Button>
          </Upload>
        </Menu.Item>
      </Menu>
    </div>
  );
};

export default Toolbar;
