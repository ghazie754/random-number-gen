import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import variables from '../styles/variables.module.scss'
import type { ReactElement } from 'react'
import Layout from './ components/layout'

export default function Page() {
  return <div>About</div>
}

Page.getLayout = function getLayout(page: ReactElement) {
  return (
    <Layout>
      {page}
    </Layout>
  )
}
