import * as React from "react";
import { Admin, Resource, ListGuesser } from 'react-admin';
import { dataProvider } from "ra-data-simple-prisma";
import { Prisma } from '@prisma/client';

const App = () => (
  <Admin dataProvider={dataProvider("/api", {})}>
    {Object.keys(Prisma.ModelName).map(model =>
      <Resource name={model} />
    )}
  </Admin>
);

export default App;