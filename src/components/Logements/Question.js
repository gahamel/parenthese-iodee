import React, {useState} from 'react'
import styles from './Question.module.css'


const Question = ({link}) => {
  const[hidden, setHidden] = useState(false)
  const appear = () => {
    setHidden(!hidden)
  }
  return (
    <>
      <h2 onClick={appear} className={styles.question}>{link.question}</h2>
      <h3 className={hidden? styles.show : styles.hidden}>{link.reponse}</h3>
    </>
  )
}

export default Question
