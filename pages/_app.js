import { ChakraProvider } from "@chakra-ui/react";
import Layouts from "../components/Layouts";
import Navigator from "../components/Navigator";
import { Flex } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Flex h="100vh">
        <Navigator position="fixed" />
        <Layouts ml={200}>
          <Component {...pageProps} />
        </Layouts>
      </Flex>
    </ChakraProvider>
  );
}

export default MyApp;
