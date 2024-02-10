import React from 'react'
import './footer.css'

const Footer = () => {
  let footerStyle = {
    position: 'fixed',
    backgroundColor: 'black',
    color: 'white',
    bottom: '0',
    height: '60px',
    width: '100%',
    textAlign: 'center',
    paddingTop: '0.2%'
  }
  return (
    // Non inline css
    <>
      <div style={{ height: '80px' }}></div>
      <footer style={footerStyle}>
        Copyright &copy; listxtodo.web.app
        <br></br>
        TradeMark
      </footer>
    </>
    // Inline css
    // <footer style={{position : 'fixed', bottom : 0, width : '100%', height : '10%', marginBottom : '0px'}} className='bg-dark text-light'>
    //   <p className='text-center'>Copyright &copy; MyTodosList.com</p>
    // </footer>
  )
}

export default Footer
