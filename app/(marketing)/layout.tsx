import MainNav from "@/components/main-nav"
import SiteFooter from "@/components/site-footer"
import { buttonVariants } from "@/components/ui/button"
import { marketnigConfig } from "@/config/marketing"
import { cn } from "@/lib/utils"
import Link from "next/link"

const MarketingLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <header className="container z-40 bg-background">
        <div className="h-20 py-6 flex items-center justify-between">
          <MainNav items={marketnigConfig.mainNav} />
          <nav>
            <Link href={'/login'} className={cn(buttonVariants({variant: 'secondary', size: 'sm'}))}>ログイン</Link>
          </nav>
        </div>
      </header>
      <main>
        {children}
      </main>
      <SiteFooter />
    </div>
  )
}

export default MarketingLayout