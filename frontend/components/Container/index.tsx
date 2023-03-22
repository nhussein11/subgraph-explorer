import React from 'react'
import Link from 'next/link'
import SwitchThemeButton from '@components/SwitchThemeButton'

type ContainerProps = {
  title: string
  children: React.ReactNode[] | React.ReactNode
}

export default function Container({ title, children }: ContainerProps) {
  return (
    <div className="md: font-light lg:font-extrabold">
      <nav
        className={
          'grid grid-cols-6 gap-4 mb-6 pb-5 border-b-2 border-gray-300'
        }
      >
        <Link
          href="/"
          className=" col-start-1 col-end-3 text-3xl font-bold underline decoration-2"
        >
          {title}
        </Link>
        <SwitchThemeButton />
      </nav>
      <main>
        <section>{children}</section>
      </main>
    </div>
  )
}
