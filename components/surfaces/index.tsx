import styles from './styles.module.css'
import tokens from '../../tokens.json'
import React from 'react'

function Surfaces() {
  const { elevation } = tokens;
  const { surface } = elevation;


  function SquareWithBoxShadow({ boxShadow }) {
    return <div className={styles.surface} style={{ boxShadow }} />;
  }
  
  function surfaces() {
    return Object.values(surface).map(({ value }) => {
      return (
        <SquareWithBoxShadow key={value} boxShadow={value} />

      )
    });
  }

  return (
    <div className={styles.component}>
      {surfaces()}
    </div>
  )
}

export default Surfaces
