import React, {Component} from 'react'
import Footer from './Footer'
import LeftSidebar from './LeftSidebar'
import RightSidebar from './RightSidebar'
import Main from './Main'

export default class Home extends Component {
    render () {
        return (
            <>
            <LeftSidebar/>
            <Main/>
            <RightSidebar/>
            <Footer/>
            </>

        )
    }
}