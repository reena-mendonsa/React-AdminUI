import React from "react";
import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import UserIcon from "@material-ui/icons/Group";
import UserList from "./components/UserList";
import UserEdit from "./components/UserEdit";

function App() {
  return (
    <Admin dataProvider={jsonServerProvider("http://localhost:3000")}>
      <Resource name="users" icon={UserIcon} list={UserList} edit={UserEdit} />
    </Admin>
  );
}

export default App;
