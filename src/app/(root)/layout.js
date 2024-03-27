import Footer from '@/components/global/footer'
import Header from '@/components/global/header'

const layout = ({children}) => {
  return (
    <div className='relative'>
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default layout