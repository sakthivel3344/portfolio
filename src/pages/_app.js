import store from "@/redux/store";
import "@/styles/globals.scss";
import "@/styles/index.scss";
import { updateSiteTheme } from "@/utils/sharedFunctions";
import { useEffect } from "react";
import { Provider } from "react-redux";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    updateSiteTheme();
  }, []);
  const getLayout = Component.getLayout || ((page) => page);
  return <Provider store={store}>{getLayout(<Component {...pageProps} />)}</Provider>;
}
