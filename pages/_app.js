import "@/styles/globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Layout from "@/components/Layout";
import { store } from "@/app/store";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
config.autoAddCss = false;
export default function App({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(
      <Provider store={store}>
        <Component {...pageProps} />;
      </Provider>
    );
  }
  return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
        <ToastContainer />
      </Layout>
    </Provider>
  );
}
