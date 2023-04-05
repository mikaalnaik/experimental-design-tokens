import styles from './counters.module.css'
import tokens from '../tokens.json'

function MyButton() {
  const categories = Object.entries(tokens)

  return (
    <>
      {categories.map(item => {
        return (
          <div>
            <h1>
              {item[0]}
            </h1>
            {item[0] === 'colors' &&
              <>
            {Object.entries(item[1]).map(val => {
              const nestedColours = Object.entries(val[1])
              return (
                <div >
                  {val[0]}
                  {nestedColours.map((value: any) => {
                    return (
                    <div style={{backgroundColor: value[1]}} className={styles.counter}>
                      {value[1]}  
                      </div>

                    )
                  })}
                </div>
              )
            })}
              </>
            }
          </div>
        )
      })}
    </>
  )
}

export default function MyApp() {
  return <MyButton />
}
