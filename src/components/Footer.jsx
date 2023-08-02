import React from 'react'


const Footer = ({author}) => {
  return (
    <footer className='fountain'><h4>Fountain: {author.author}</h4></footer>
  )
}

export default Footer