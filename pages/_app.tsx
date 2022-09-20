import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { store } from '../app/store';
import {Provider} from "react-redux";
import { ChakraProvider } from '@chakra-ui/react'
//Import the extendTheme function
import { extendTheme } from '@chakra-ui/react'
//Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: '#1a365d',
    800: '#153e75',
    700: '#2a69ac',
  },
}
const theme = extendTheme({ colors })

function MyApp({ Component, pageProps }: AppProps) {
  return<Provider store={store}>
      <ChakraProvider theme={theme}>
          <Component {...pageProps} />
      </ChakraProvider>
      </Provider>

}

export default MyApp
