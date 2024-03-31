import { siteConfig } from "@/../config/site"
import Header from '@/components/global/header'

export const metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  }
}

const layout = ({children}) => {
  return (
    <div className='relative'>
      <Header />
      {children}
    </div>
  )
}

export default layout