import { Navbar } from "./_components/navbar"
import { Sidebar } from "./_components/sidebar"



export default function MainLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className='h-full flex'>
      <Sidebar />
      <Navbar />
        <main className="flex-1 h-full overflow-auto">
          y

        {children}
        </main>
        
    </div>
  )
}
