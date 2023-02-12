import * as React from "react";
import { dataProvider } from "ra-data-simple-prisma";
import { PrismaAdmin } from "ra-data-simple-prisma/packages/ra-data-simple-prisma/src";
import { Prisma } from "@prisma/client";

const App = ({ models }: { models: Prisma.DMMF.Model[] }) => (
  <PrismaAdmin
    adminProps={{
      dataProvider: dataProvider("/api"),
    }}
    models={models}
  />
);

export default App;