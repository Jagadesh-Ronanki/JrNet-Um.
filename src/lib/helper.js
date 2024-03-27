import { usePathname } from 'next/navigation'

export function useActivePath(path) {
  const pathname = usePathname()

  const checkActivePath = (path) => {
    return path === pathname
  }

  return checkActivePath
}