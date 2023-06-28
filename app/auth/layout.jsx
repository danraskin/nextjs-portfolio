import Header from '@/components/Header';

export default function AuthRootLayout ({children}) {
  return (
      <div>
          <Header/>
          {children}
      </div> 
  )
}