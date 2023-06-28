import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function DashRootLayout ({children}) {
  return (
      <div>
          <Header home/>
          {children}
          <Footer />
      </div> 
  )
}