import React, { useEffect } from 'react';
import { Modal } from 'antd';

const CustomModal = (props: {
  children: JSX.Element;
  handleOk: () => void;
  handleCancel: () => void;
  disableOkButton?: boolean;
  shouldDisplay: boolean;
}) => {
  return (
    <Modal
      closable={false}
      maskClosable={false}
      destroyOnClose={true}
      visible={props.shouldDisplay}
      title='Basic Modal'
      onOk={props.handleOk}
      onCancel={props.handleCancel}
      okButtonProps={{
        disabled: props.disableOkButton || false,
      }}
    >
      {props.children}
    </Modal>
  );
};

export default CustomModal;
