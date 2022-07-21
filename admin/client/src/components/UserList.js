import React from "react";
import {
  List,
  Datagrid,
  TextField,
  EmailField,
  TextInput,
  EditButton,
  DeleteButton,
} from "react-admin";

const postFilters = [
  <TextInput source="q" label="Search by name or email" alwaysOn />,
];

const UserList = (props) => {
  return (
    <List {...props} filters={postFilters}>
      <Datagrid>
        <TextField source="name" />
        <EmailField source="email" />
        <TextField source="role" />
        <EditButton source="Action" basePath="/users" />
        <DeleteButton basePath="/users" />
      </Datagrid>
    </List>
  );
};

export default UserList;
