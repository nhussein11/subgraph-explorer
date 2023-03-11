import React from 'react'
import style from './styles.module.css'
import Link from 'next/link'
import SwitchThemeButton from '@components/SwitchThemeButton'

type ContainerProps = {
  title: string
  children: React.ReactNode[] | React.ReactNode
}

export default function Container({ title, children }: ContainerProps) {
  return (
    <>
      <h1 className="text-3xl">hello</h1>
      <nav className={'text-3xl font-bold underline decoration-2'}>
        <Link href="/" className="text-3xl">
          {title}
        </Link>
      </nav>
      <main className={style.mainContainer}>
        <section>
          <SwitchThemeButton />
          {children}
        </section>
      </main>
    </>
  )
}
