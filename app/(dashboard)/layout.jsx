import Header from '@/components/Header';

export default function DashRootLayout ({children}) {
  return (
      <div>
          <Header home/>
          {children}
      </div> 
  )
}