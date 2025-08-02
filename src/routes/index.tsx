import React from 'react'
import { BrowserRouter, Route,Routes } from 'react-router-dom'

import { GithubIcon } from '@/components/icons/Github'
import Navbar from '@/components/navbar'
import Home from '@/pages/home'
import {
  FloatButton,
  NubankInnerLayout,
} from '@/theme/global-styles'

const Router: React.FC = () => {
  const redirect = (): void => {
    window.open('https://github.com/glhrmoura/nubank-web', '_blank')
  }

  return (
    <BrowserRouter>
      <Navbar />
      <NubankInnerLayout>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </NubankInnerLayout>
      <FloatButton onClick={redirect}>
        <GithubIcon />
      </FloatButton>
    </BrowserRouter>
  )
}

export default Router 