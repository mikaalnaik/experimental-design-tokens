import styles from './counters.module.css'
import tokens from '../tokens.json'
import React from 'react'

function MyButton() {
  const categories = Object.entries(tokens)

  const { colors } = tokens;
  const circleStyle = {
    display: 'inline-block',
    width: '75px',
    height: '75px',
    border: '1px solid grey',
    borderRadius: '50%',
    margin: '5px',
  };
  const colorComponents = Object.entries(colors)
  const groupColorsBySection = (colors) => {
    const sections = {};
    Object.keys(colors).forEach((key) => {
      const colorObj = colors[key];
      const sectionName = key.split('.')[0];
      if (!sections[sectionName]) {
        sections[sectionName] = {};
      }
      sections[sectionName][key] = colorObj;
    });
    return sections;
  };

  const renderColorCircles = (colors) => {
    return Object.keys(colors).map((key) => {
      const colorObj = colors[key];
      if (colorObj.type === 'color') {
        console.log({colorObj, key});
        return (
          <span key={key} className={styles['circle-container']}>
            <div className={styles.counter} style={{ backgroundColor: colorObj.value}} />
            {key}
          </span>
        );
      } else if (typeof colorObj === 'object') {
        return (
          <React.Fragment key={key}>
            {renderColorCircles(colorObj)}
          </React.Fragment>
        );
      } else {
        return null;
      }
    });
  };

  const renderColorSections = () => {
    const sections = groupColorsBySection(colors);
    return Object.keys(sections).map((sectionName) => {
      const sectionColors = sections[sectionName];
      return (
        <div key={sectionName}>
          <h2>{sectionName}</h2>
          {renderColorCircles(sectionColors)}
        </div>
      );
    });
  };

  return (
    <>
      {renderColorSections()}
    </>
  )
}
// {categories.map(item => {
//   return (
//     <div>
//       <h1>
//         {item[0]}
//       </h1>
//       {item[0] === 'colors' &&
//         <>
//       {Object.entries(item[1]).map(val => {
//         const nestedColours = Object.entries(val[1])
//         console.log({nestedColours});
//         return (
//           <div >
//             {val[0]}
//             {nestedColours.map((value: any) => {
//               if (value[1]) 
//               return (
//               <div style={{backgroundColor: value[1]}} className={styles.counter}>
//                 {value.value}  
//                 </div>

//               )
//             })}
//           </div>
//         )
//       })}
//         </>
//       }
//     </div>
//   )
// })}

export default function MyApp() {
  return <MyButton />
}
