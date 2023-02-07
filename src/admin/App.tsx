import * as React from "react";
import { PrismaAdmin, dataProvider } from "ra-data-simple-prisma";
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