import baseStyles from './DressCode.module.css';
import adminStyles from './DressCode.admin.module.css';
import { useState } from 'react';

export default function DressCode({ colors, isAdmin = false }) {
  const styles = isAdmin ? { ...baseStyles, ...adminStyles } : baseStyles;
  const [localColors, setLocalColors] = useState([...colors]);
  
  const handleColorChange = (index, newColor) => {
    if (isAdmin) {
      const updatedColors = [...localColors];
      updatedColors[index] = newColor;
      setLocalColors(updatedColors);
    }
  };

  const handleDeleteColor = (index) => {
    if (isAdmin) {
      const updatedColors = [...localColors];
      updatedColors[index] = '';
      setLocalColors(updatedColors);
    }
  };

  return (
    <div className={styles.DressCode}>
      <h1 className={styles.headers}>Дресс-код</h1>
      <div className={styles.content}>
        <p className={styles.dress}>
          Для нас самое главное ваше присутствие, но мы будем очень благодарны, 
          если вы поддержите цветовую гамму нашей свадьбы!
        </p>
        <div className={styles.circleDressCode}>
          {localColors.map((color, index) => (
            <div key={index} className={styles.colorItem}>
              {isAdmin ? (
                <>
                  <div className={styles.colorControl}>
                    <input
                      type="color"
                      value={color}
                      onChange={(e) => handleColorChange(index, e.target.value)}
                      className={styles.inputColorEvent}
                    />
                    {color && (
                      <button 
                        className={styles.deleteColorDress}
                        onClick={() => handleDeleteColor(index)}>×</button>
                    )}
                  </div>
                  {color ? (
                    <div className={styles.circleColor} 
                      style={{ backgroundColor: color }}
                    />
                  ) : (
                    <button className={styles.noneColor}>+</button>
                  )}
                </>
              ) : (
                color && (
                  <div className={styles.circleColor} 
                    style={{ backgroundColor: color }}
                  />
                )
              )}
            </div>
          ))}
        </div>
      </div>
      <hr className={styles.border} />
    </div>
  );
}