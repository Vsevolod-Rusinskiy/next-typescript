import { AppProps } from "next/app";
import Layout from "../src/componens/layout/Layout";
import { Global } from "../src/styles/globalStyles";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Global />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};

export default MyApp;
