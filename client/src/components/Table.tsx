import { Space, Table } from 'antd';
import React from 'react';

interface TableProps {
  data: any[];
  columns: any[];
  
}

const CustomTable: React.FC<TableProps> = (props) => {
  return (
    <Table
      size='large'
      bordered={true}
      pagination={false}
      columns={props.columns}
      dataSource={props.data}
    />
  );
};

export default CustomTable;
