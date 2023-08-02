import Footer from './Footer'
import './styles/QuoteBox.css'
import React from 'react'

const QuoteBox = ({handleChangePhrase, phrase}) => {
  

  return (
    <section className='phraseBox'>
        <h1>Space Curiosity</h1>

        <section className='phraseInfo'>
          <button onClick={handleChangePhrase}>another curiosity</button>

          <article>
              <p>{phrase.phrase}</p>
          </article>
        </section>

        <Footer author={phrase}/>

    </section>
  )
}

export default QuoteBox