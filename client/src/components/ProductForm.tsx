import { Button, Form, Input } from 'antd';
import React, { useEffect } from 'react';

interface FormProps {
  initialValues?: { [key: string]: string | number };
  handleSubmit: (args: any) => void;
  displayModal: boolean;
}
const ProductForm = (props: FormProps) => {
  

  const onFinish = (values: any) => {
    props.handleSubmit(values);
  };
  return (
    <Form
      preserve={false}
      initialValues={props.initialValues}
      name='nest-messages'
      onFinish={onFinish}
    >
      <Form.Item
        name={'title'}
        label='Title'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        name={'price'}
        label='Price'
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input type='number' />
      </Form.Item>
      <Form.Item name={'description'} label='Description'>
        <Input />
      </Form.Item>
      <Form.Item rules={[{ type: 'url' }]} name={'imageUrl'} label='Image Url'>
        <Input />
      </Form.Item>
      <Form.Item>
        <Button type='primary' htmlType='submit'>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ProductForm;
