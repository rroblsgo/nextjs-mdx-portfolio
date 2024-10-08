import Link from 'next/link'

import { ThemeToggle } from '@/components/theme-toggle'

// import {
//   Sheet,
//   SheetClose,
//   SheetContent,
//   SheetTrigger
// } from '@/components/ui/sheet'

// import { Menu } from 'lucide-react'

export default function Header() {
  return (
    <header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
      <nav className='container flex max-w-3xl items-center justify-between'>
        <div>
          <Link href='/' className='font-serif text-2xl font-bold'>
            HB
          </Link>
        </div>

        {/* <Sheet>
          <SheetTrigger className='sm:hidden'>
            <Menu className='h-6 w-6' />
          </SheetTrigger>
          <SheetContent side='left'>
            <ul className='flex flex-col gap-3 text-sm'>
              <li className='font-sans text-2xl'>
                <SheetClose asChild>
                  <Link href='/'>next</Link>
                </SheetClose>
              </li>
            </ul>
          </SheetContent>
        </Sheet> */}

        <ul className='flex items-center gap-6 text-sm font-light text-muted-foreground sm:gap-10'>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/posts'>Posts</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/projects'>Projects</Link>
          </li>
          <li className='transition-colors hover:text-foreground'>
            <Link href='/contact'>Contact</Link>
          </li>
        </ul>

        <div className='flex items-center justify-between gap-6'>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
