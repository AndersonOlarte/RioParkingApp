import React, { Component } from 'react'
import './CSSstyles/App.css'
import Header from './components/Header'
import Main from './components/Main'
import RightSidebar from './components/RightSidebar'
import LeftSidebar from './components/LeftSidebar'
import Footer from './components/Footer'

class App extends Component {
  render () {
    return (<>
    <Header/>
    <Main/>
    <RightSidebar/>
    <LeftSidebar/>
    <Footer/>
    </>
    )}
}

export default App
