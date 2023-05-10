import { List, Datagrid, TextField } from 'react';

export const listProducts = (props) => {
  <List>
    <Datagrid>
      <TextField source="id" />
      <TextField source="title" />
      <TextField source="city" />
      <TextField source="distance" />
      <TextField source="address" />
      <TextField source="price" />
      <TextField source="maxGroupSize" />
      <TextField source="photo" />
    </Datagrid>
  </List>;
};
