import { Component, useState } from 'react'
import '../styles/App.css'
import LinkList from './LinkList'
import CreateLink from './createLink'
class App extends Component{
  render(){
    return(
<CreateLink />
    )
  }
}

export default App