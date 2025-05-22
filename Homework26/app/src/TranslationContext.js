import { createContext, useContext } from 'react';

export const TranslationContext = createContext();

export const useTranslation = () => useContext(TranslationContext);
