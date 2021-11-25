import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import colors from "../colors";
import NavSlider from "../components/primary/NavSlider";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <NavSlider />
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
