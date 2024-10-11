import React from 'react'
// import Header from '../Components/Header'
// import Footer from './Footer/Footer'
import Center from './CenterPart/Center'
import Contact_bar from './Contact_Bar/Contact_bar'
import useScrollTop from '../Hooks/useScrollTop'
// import Sample from './Services/sample'


export default function Home() {
  useScrollTop();
  return (
    <div>
      {/* <Header/> */}
      <Contact_bar></Contact_bar>
      <Center/>
      {/* <Footer/> */}
    {/* <Sample></Sample> */}
      
    </div>
  )
}
