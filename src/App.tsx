import { Refine } from '@pankod/refine-core';
import { AndroidOutlined, GlobalOutlined } from '@ant-design/icons';
import { notificationProvider, ReadyPage, ErrorComponent, LoginPage } from '@pankod/refine-antd';
import routerProvider from '@pankod/refine-react-router-v6';
import dataProvider from '@pankod/refine-airtable';
import { RefineKbarProvider } from '@pankod/refine-kbar';
import 'styles/antd.less';
import { Title, Header, Sider, Footer, Layout, OffLayoutArea } from 'components/layout';
import { authProvider } from './authProvider';
import { GamesCreate, GamesEdit, GamesList, GamesShow } from 'pages/games';
import { WebsCreate, WebsEdit, WebsList, WebsShow } from 'pages/webs';

function App() {
  const API_TOKEN: string = process.env.REACT_APP_AIRTABLE_TOKEN ? process.env.REACT_APP_AIRTABLE_TOKEN : '';
  const BASE_ID: string = process.env.REACT_APP_AIRTABLE_BASEID ? process.env.REACT_APP_AIRTABLE_BASEID : '';

  return (
    <RefineKbarProvider>
      <Refine
        notificationProvider={notificationProvider}
        ReadyPage={ReadyPage}
        catchAll={<ErrorComponent />}
        routerProvider={routerProvider}
        dataProvider={dataProvider(API_TOKEN, BASE_ID)}
        authProvider={authProvider}
        LoginPage={LoginPage}
        Title={Title}
        Header={Header}
        Sider={Sider}
        Footer={Footer}
        Layout={Layout}
        OffLayoutArea={OffLayoutArea}
        resources={[
          {
            name: 'games',
            icon: <AndroidOutlined />,
            list: GamesList,
            create: GamesCreate,
            edit: GamesEdit,
            show: GamesShow,
          },
          {
            name: 'webs',
            icon: <GlobalOutlined />,
            list: WebsList,
            create: WebsCreate,
            edit: WebsEdit,
            show: WebsShow,
          },
        ]}
      />
    </RefineKbarProvider>
  );
}

export default App;
