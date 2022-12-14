import React from 'react';
import { IResourceComponentsProps } from '@pankod/refine-core';

import { Edit, Form, Input, Select, useForm, useSelect } from '@pankod/refine-antd';

export const WebsEdit: React.FC<IResourceComponentsProps> = () => {
  const { formProps, saveButtonProps, queryResult } = useForm();

  const postData = queryResult?.data?.data;
  const { selectProps: categorySelectProps } = useSelect({
    resource: 'categories',
    defaultValue: postData?.category,
  });

  return (
    <Edit saveButtonProps={saveButtonProps}>
      <Form {...formProps} layout="vertical">
        <Form.Item
          label="Title"
          name="title"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Category"
          name="category"
          normalize={(value) => [value]}
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select {...categorySelectProps} />
        </Form.Item>
        <Form.Item
          label="Status"
          name="status"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Select
            options={[
              {
                label: 'Published',
                value: 'published',
              },
              {
                label: 'Draft',
                value: 'draft',
              },
              {
                label: 'Rejected',
                value: 'rejected',
              },
            ]}
          />
        </Form.Item>
      </Form>
    </Edit>
  );
};
