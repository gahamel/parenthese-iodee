import React, {useState} from 'react'
import styles from './Question.module.css'


const Question = ({link}) => {
  const[hidden, setHidden] = useState(false)
  const appear = () => {
    setHidden(!hidden)
  }
  return (
    <>
      <h3 onClick={appear} className={styles.question}>{link.question}</h3>
      <p className={hidden? styles.show : styles.hidden}>{link.reponse}</p>
    </>
  )
}

export default Question
