import styles from './counters.module.css'
import tokens from '../tokens.json'
import React from 'react'

function MyButton() {
  const { colors } = tokens;
  const groupColorsBySection = (colors: Record<string, unknown>) => {
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

export default function MyApp() {
  return <MyButton />
}
