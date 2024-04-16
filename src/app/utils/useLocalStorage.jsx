'use client'
import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    const storedValue = localStorage.getItem(key);


    if (storedValue !== null && storedValue !== undefined) {
      return JSON.parse(storedValue)
    } else {
      localStorage.setItem(key, JSON.stringify(defaultValue));
      return defaultValue
    }
    
  });


  const setLocalStorageStateValue = (value) => {
    const newValue = value

    localStorage.setItem(key, JSON.stringify(newValue));
    setLocalStorageValue(newValue)
  }

  return [localStorageValue, setLocalStorageStateValue]
}
