import { IResourceComponentsProps } from '@pankod/refine-core';

import { List, Table, useTable, Space, EditButton, ShowButton, DeleteButton, UrlField, BooleanField, ImageField } from '@pankod/refine-antd';

export const GamesList: React.FC<IResourceComponentsProps> = () => {
  const { tableProps } = useTable();

  return (
    <List>
      <Table {...tableProps} rowKey="id">
        <Table.Column dataIndex="id" title="ID" />
        <Table.Column dataIndex="Title" title="Title" />
        <Table.Column
          dataIndex="Cover"
          title="Cover"
          render={(value) => <ImageField value={value[0]?.thumbnails?.small?.url} imageTitle={value[0]?.filename} />}
        />
        <Table.Column dataIndex="isPlayStore" title="Play Store" render={(value) => <BooleanField value={value} color="green" />} />
        <Table.Column dataIndex="isAppStore" title="App Store" render={(value) => <BooleanField value={value} color="blue" />} />
        <Table.Column dataIndex="Privacy" title="Privacy" render={(value) => <BooleanField value={value} color="red" />} />
        <Table.Column dataIndex="PlayStore_Url" title="PlayStore Url" render={(value) => <UrlField value={value} target="_blank" />} />
        <Table.Column dataIndex="AppStore_Url" title="AppStore Url" render={(value) => <UrlField value={value} target="_blank" />} />
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
