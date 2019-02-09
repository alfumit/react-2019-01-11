import { createContext } from 'react'
import translations from '../translations'

const { Provider, Consumer } = createContext(translations.en);

export {Provider, Consumer};
