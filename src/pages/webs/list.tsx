import { IResourceComponentsProps } from '@pankod/refine-core';

import { List, Table, useTable, Space, EditButton, ShowButton, DeleteButton, ImageField, UrlField } from '@pankod/refine-antd';

export const WebsList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable();

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="Title" title="Title" />
        <Table.Column
          dataIndex="Cover"
          title="Cover"
          render={(value) => (
            <ImageField
              value={value[0]?.thumbnails?.small?.url}
              imageTitle={value[0]?.filename}
              style={{
                width: '50px',
                height: '50px',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                borderRadius: '100%',
              }}
            />
          )}
        />
        <Table.Column dataIndex="Url" title="Url" render={(value) => <UrlField value={value} target="_blank" />} />
        <Table.Column<any>
          title="Actions"
          dataIndex="actions"
          render={(_, record) => (
            <Space>
              <EditButton hideText size="small" recordItemId={record.id} />
              <ShowButton hideText size="small" recordItemId={record.id} />
              <DeleteButton hideText size="small" recordItemId={record.id} />
            </Space>
          )}
        />
      </Table>
    </List>
  );
};
