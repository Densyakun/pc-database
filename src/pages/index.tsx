import type { GetStaticProps, InferGetStaticPropsType, NextPage } from "next";
import dynamic from "next/dynamic";
import { Prisma } from "@prisma/client";

const App = dynamic(() => import("../admin/App"), { ssr: false });

type Props = InferGetStaticPropsType<typeof getStaticProps>;

export const getStaticProps: GetStaticProps = async () => {
  const models = Prisma.dmmf.datamodel.models;

  return {
    props: { models }
  };
};

const Home: NextPage<Props> = ({ models }: Props) => {
  return <App models={models} />;
};

export default Home;