import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { useMedia } from 'react-use-media'
import { ThemeProvider } from 'styled-components'
import { dark, light } from 'themes'
import store from 'store'
import GlobalStyle from 'styled'

import App from 'App'

const Main: React.FC = () => {
  const preferredTheme = useMedia('(prefers-color-scheme: dark)') ? dark : light

  return (
    <Provider store={store}>
      <ThemeProvider theme={preferredTheme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  )
}

ReactDOM.render(<Main />, document.getElementById('root'))
