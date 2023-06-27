import Header from '@/components/Header';

export default function DashRootLayout ({children}) {
  return (
      <div className="flex-container">
          <Header home/>
          {children}
      </div> 
  )
}