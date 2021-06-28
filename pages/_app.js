import { useState } from 'react'

import '../styles/globals.css'
import '../styles/veriable.css'

import bmiStore from '../store/storeBmi'

function MyApp({ Component, pageProps }) {

  const [bmi, setBmi] = useState()

  return <bmiStore.Provider value={{bmi, setBmi}}>
      <Component {...pageProps} />
    </bmiStore.Provider>
}

export default MyApp
