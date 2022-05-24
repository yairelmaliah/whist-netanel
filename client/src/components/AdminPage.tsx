import React, { useState } from 'react';
import CustomTable from './Table';
import { createNewProduct, deleteProduct, updateProduct } from '../api';
import CustomModal from './Modal';
import { Button, Space } from 'antd';
import ProductForm from './ProductForm';
import { useProducts } from '../hooks/useProducts';

const AdminPage = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [modalType, setModalType] = useState<'edit' | 'delete' | 'add' | null>(
    null
  );
  const [selectedModal, setSelectedModal] = useState<{ id: number } | null>(
    null
  );

  const [products, reloadProducts] = useProducts();

  const resetData = () => {
    setModalType(null);
    setSelectedModal(null);
    setModalVisible(false);
  };
  const handleClick = (record: any, type: 'edit' | 'delete') => {
    setModalType(type);
    setSelectedModal(record);
    setModalVisible(true);
  };

  const handleSubmit = async (data: any) => {
    

    data.price = Number(data.price);

    if (modalType === 'edit' && selectedModal) {
      await updateProduct(selectedModal.id, data);
    } else {
      await createNewProduct(data);
    }

    reloadProducts();
    resetData();
  };

  const getModalContent = () => {
    if (modalType === 'add') {
      return (
        <ProductForm displayModal={modalVisible} handleSubmit={handleSubmit} />
      );
    }

    if (!selectedModal) {
      return <div></div>;
    }

    if (modalType === 'edit') {
      return (
        <ProductForm
          initialValues={selectedModal}
          handleSubmit={handleSubmit}
          displayModal={modalVisible}
        />
      );
    } else {
      return (
        <div>
          Are you sure you want to delete this product? number{' '}
          {selectedModal.id}
        </div>
      );
    }
  };

  const handleOk = async () => {
    if (modalType === 'delete' && selectedModal) {
      deleteProduct(selectedModal.id).then((res) => {
        reloadProducts();
      });
    }
    resetData();
  };

  const handleCancel = () => {
    resetData();
  };

  const handleAddClick = () => {
    setModalType('add');
    setModalVisible(true);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '2rem',
      }}
    >
      <CustomModal
        handleOk={handleOk}
        handleCancel={handleCancel}
        shouldDisplay={modalVisible}
        disableOkButton={modalType !== 'delete'}
      >
        {getModalContent()}
      </CustomModal>
      <div>
        <button onClick={handleAddClick}>Add</button>
      </div>

      <div style={{ width: '80vw' }}>
        <CustomTable
          columns={[
            {
              title: 'Title',
              dataIndex: 'title',
              key: 'title',
            },
            {
              title: 'Price',
              dataIndex: 'price',
              key: 'price',
            },
            {
              title: 'Option',
              key: 'option',
              render: (_: any, record: any) => (
                <Space size='middle'>
                  <Button onClick={() => handleClick(record, 'edit')}>
                    Edit
                  </Button>
                  <Button onClick={() => handleClick(record, 'delete')}>
                    Delete
                  </Button>
                </Space>
              ),
            },
          ]}
          data={products}
        />
      </div>
    </div>
  );
};

export default AdminPage;
