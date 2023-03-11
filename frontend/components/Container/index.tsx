import React from 'react'
import style from './styles.module.css'
import Link from 'next/link'

type ContainerProps = {
  title: string
  children: React.ReactNode[] | React.ReactNode
}

export default function Container({ title, children }: ContainerProps) {
  return (
    <>
      <nav className={'text-3xl font-bold underline decoration-2'}>
        <Link href="/">ENS Explorer</Link>
      </nav>
      <main className={style.mainContainer}>
        <section>
          <h2>{title}</h2>
          {children}
        </section>
      </main>
    </>
  )
}
