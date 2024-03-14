import { useRef } from 'react';
import { useOnMount } from './useOnMount';
// noop
export const useOutsideClick = (cb = () => {}) => {
  const ref = useRef()

  const handler = e => {
    if(ref.current && !ref.current.contains(e.target)) {
      cb()
    }
  }

  useOnMount(() => {
    document.addEventListener('mousedown', handler)
    return () => {
      document.removeEventListener('mousedown', handler)
    }
  })

  return node => ref.current = node
}
