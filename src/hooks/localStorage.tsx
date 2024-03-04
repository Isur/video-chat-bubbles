import { useEffect, useState } from "react";

type LocalStorageValue = string | object;

function getLocalStorage<T extends LocalStorageValue>(
  key: string,
  initValue: T
): T {
  const value = localStorage.getItem(key);
  if (value) {
    return JSON.parse(value);
  }
  return initValue;
}

function setLocalStorage<T extends LocalStorageValue>(key: string, value: T) {
  localStorage.setItem(key, JSON.stringify(value));
}

export const useLocalStorage = <T extends LocalStorageValue>(
  key: string,
  initValue: T
) => {
  const [value, setValue] = useState<T>(getLocalStorage(key, initValue));

  useEffect(() => {
    setLocalStorage(key, value);
  }, [key, value]);

  return [value, setValue] as const;
};
