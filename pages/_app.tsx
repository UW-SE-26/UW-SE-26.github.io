import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import colors from "../colors";
import NavSlider from "../components/primary/NavSlider";
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  return (
    <ChakraProvider>
      {
        router.pathname !== "/mobile" && <NavSlider />
      }
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
export default MyApp;
