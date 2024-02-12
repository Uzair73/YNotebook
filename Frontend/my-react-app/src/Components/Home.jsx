import React from 'react'
import Form from './Form'

const Home = (props) => {
  
  //Addding Background color
  const containerStyle = {
    background: 'rgb(34,193,195)',
    backgroundImage: 'linear-gradient(0deg, rgba(34,193,195,1) 0%, rgba(253,187,45,1) 100%)'
  }
  const {showAlert} = props
  return (
    <>
      <div style={containerStyle} className="container my-3">
      <Form showAlert={showAlert}/>
      </div>
    </>
  )
}

export default Home
