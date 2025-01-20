import React from 'react';
import {  Button } from 'antd';

const Header: React.FC = () => {
  return (
    <div className="flex justify-between items-center h-full">
      <div className="text-2xl font-semibold text-white">Email Builder</div>
      <div className="space-x-4">
        <Button type="primary" size="large">
          Save
        </Button>
        <Button type="default" size="large">
          Cancel
        </Button>
      </div>
    </div>
  );
};

export default Header;
