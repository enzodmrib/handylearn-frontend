import { useEffect, useState, useReducer } from 'react'

function getSavedValue(key: string, initialValue: any) {
  const savedValue = localStorage.getItem(key)

  if (savedValue && savedValue !== "undefined") {
    return JSON.parse(savedValue)
  }

  if (initialValue instanceof Function) return initialValue()

  return initialValue
}

export function useLocalStorage(key: string, initialValue: any) {
  const [value, setValue] = useState<any>()

  useEffect(() => {
    setValue(getSavedValue(key, initialValue))
  }, [])

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}

export function useLocalStorageWithReducer(
  key: string,
  reducer: (state: any, action: any) => any,
  initialValue: any,
) {
  const [value, dispatch] = useReducer(
    reducer,
    getSavedValue(key, initialValue),
  )

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, dispatch]
}