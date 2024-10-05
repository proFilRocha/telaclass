import styles from './style.module.css';

const Sidebar = ( {modulos, onSelectLesson, selectedLesson} ) => {
    return (
      <aside className={styles.sidebar}>
        <h1>Conteúdo</h1>      
        <ul>
          {modulos.map((aula, index) => (
            <li 
              key={index} 
              className={selectedLesson == index ? styles.selected: ''}
            >
              <button 
                onClick={() => onSelectLesson(index)} 
                className={selectedLesson == index ? styles.selected: ''}
              >
                {aula.titulo}
              </button>
            </li>
          ))}
        </ul>
      </aside>
    );
  }

  export default Sidebar