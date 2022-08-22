
import {Layout} from "../components/Layout";
import { ThemeToggleProvider } from "../contexts/ThemeContext";

function MyApp({ Component, pageProps }) {

  return <ThemeToggleProvider>
   <Layout>
    <Component {...pageProps} />
  </Layout>
  </ThemeToggleProvider>


}

export default MyApp
