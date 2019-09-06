import React, {useState} from 'react'
import styles from './Question.module.css'


const Question = ({link}) => {
  const[hidden, setHidden] = useState(true)
  const appear = () => {
    setHidden(!hidden)
  }
  return (
    <>
      <h1 onClick={appear} className={styles.question}>{link.question}</h1>
      <p className={hidden? styles.show : styles.hidden}>{link.reponse}</p>
    </>
  )
}

export default Question
