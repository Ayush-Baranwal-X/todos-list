import React from 'react'
import './footer.css'

const Footer = () => {
  let footerStyle = {
    position : 'relative',
    // top : '150vh',
    width : '100%',
    height : '50px',
  }
  return (
    // Non inline css
    <footer style={footerStyle} className='bg-dark text-light'>
      <p className='text-center' style={{margin : 0, padding : 0}}>Copyright &copy; MyTodosList.com</p>
      <p className='sylex' style={{textAlign : 'center'}}>TradeMark</p>
    </footer>
    
    // Inline css
    // <footer style={{position : 'fixed', bottom : 0, width : '100%', height : '10%', marginBottom : '0px'}} className='bg-dark text-light'>
    //   <p className='text-center'>Copyright &copy; MyTodosList.com</p>
    // </footer>
  )
}

export default Footer
