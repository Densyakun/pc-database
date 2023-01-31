import { Admin, Resource } from "react-admin";
import { dataProvider } from "ra-data-simple-prisma";

const ReactAdmin = () => {
  return (
    <Admin dataProvider={dataProvider("/api")}>
      <Resource name="centralprocessingunits" />
      <Resource name="computers" />
      <Resource name="passmarks" />
    </Admin>
  );
};

export default ReactAdmin;