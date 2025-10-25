import Header from "./components/header"
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { ColorModeContext, useMode } from "./theme";
import Hero from "./components/hero/hero";
import FeatureSection from "./components/features";
import Products from "./components/products";
import Footer from "./components/footer";
import ScrollToTop from "./components/scrollingUp";

import { Provider } from 'react-redux'
import { store } from './store'


function App() {

  const [theme, colorMode] = useMode();
  return (

    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Provider store={store}>
          <div className="App">
            <Header />
            <Box className='page-body'
              sx={{
                bgcolor: theme.palette.mode === 'light' ? '#F6F6F6' : '#1D2021',
                py: 5,
                mt: 2,
              }}
            >
              <Hero />
              <FeatureSection />
              <Products />
            </Box>
            <Footer />

            <ScrollToTop />

          </div>
        </Provider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
