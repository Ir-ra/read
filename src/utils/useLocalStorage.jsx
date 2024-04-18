"use client";
// import { useState } from "react";

// export const useLocalStorage = (key, defaultValue) => {
//   const [localStorageValue, setLocalStorageValue] = useState(() => {
//     const storedValue = localStorage.getItem(key);

//     if (storedValue !== null && storedValue !== undefined) {
//       return JSON.parse(storedValue);
//     } else {
//       localStorage.setItem(key, JSON.stringify(defaultValue));
//       return defaultValue;
//     }
//   });

//   const setLocalStorageStateValue = (value) => {
//     const newValue = value;

//     localStorage.setItem(key, JSON.stringify(newValue));
//     setLocalStorageValue(newValue);
//   };

//   return [localStorageValue, setLocalStorageStateValue];
// };
//__________________________________________
// import { useEffect, useState } from "react";

// export function useLocalStorage(key, initialValue) {
//   const [localStorageValue, setLocalStorageValue] = useState(() => {
//     if (typeof localStorage !== "undefined") {
//       const jsonValue = localStorage.getItem(key);
//       if (jsonValue != null) return JSON.parse(jsonValue);
//     }

//     if (typeof initialValue === "function") {
//       return initialValue();
//     } else {
//       return initialValue;
//     }
//   });

//   useEffect(() => {
//     localStorage.setItem(key, JSON.stringify(localStorageValue));
//   }, [key, localStorageValue]);

//   return [localStorageValue, setLocalStorageValue];
// }

//_____________________________

// import { useState } from "react";

// export const useLocalStorage = (key, initialValue) => {
//   const [localStorageValue, setLocalStorageValue] = useState(() => {
//     // Initialize the state
//     try {
//       const value = window.localStorage.getItem(key);
//       // Check if the local storage already has any values,
//       // otherwise initialize it with the passed initialValue
//       return value ? JSON.parse(value) : initialValue;
//     } catch (error) {
//       console.log(error);
//     }
//   });

//   const setLocalStorageStateValue = (value) => {
//     try {
//       // If the passed value is a callback function,
//       //  then call it with the existing state.
//       const valueToStore =
//         value instanceof Function ? value(localStorageValue) : value;
//       window.localStorage.setItem(key, JSON.stringify(valueToStore))
//       setLocalStorageValue(value);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return [localStorageValue, setLocalStorageStateValue];
// };

//___________________________________
import { useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [localStorageValue, setLocalStorageValue] = useState(() => {
    if (typeof window !== "undefined") {
      const storedValue = window.localStorage.getItem(key);

      if (storedValue !== null && storedValue !== undefined) {
        return JSON.parse(storedValue);
      } else {
        localStorage.setItem(key, JSON.stringify(defaultValue));
        return defaultValue;
      }
    } else {
      return defaultValue;
    }
  });

  const setLocalStorageStateValue = (value) => {
    if (typeof window !== "undefined") {
      const newValue = value;
      localStorage.setItem(key, JSON.stringify(newValue));
      setLocalStorageValue(newValue);
    }
  };

  return [localStorageValue, setLocalStorageStateValue];
};
