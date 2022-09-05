import { Refine } from "@pankod/refine-core";
import {
  notificationProvider,
  ReadyPage,
  ErrorComponent,
  LoginPage,
} from "@pankod/refine-antd";
import routerProvider from "@pankod/refine-react-router-v6";
import dataProvider from "@pankod/refine-airtable";
import { RefineKbarProvider } from "@pankod/refine-kbar";
import "styles/antd.less";
import {
  Title,
  Header,
  Sider,
  Footer,
  Layout,
  OffLayoutArea,
} from "components/layout";
import { authProvider } from "./authProvider";

function App() {
  const API_TOKEN = "your-airtable-api-token";
  const BASE_ID = "your-airtable-base-id";

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
      />
    </RefineKbarProvider>
  );
}

export default App;
