import React from 'react'
import { Consumer as TranslationConsumer } from '../../contexts/translation'

function Loader() {
    return (
      <TranslationConsumer>
          {(context) => (
            <h3>{context.loading}</h3>
          )}
        
      </TranslationConsumer>
    )
}

export default Loader
