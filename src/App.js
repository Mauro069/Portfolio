import Techs from './components/Techs';
import About from './components/About';
import LastVideos from './components/LastVideos';
import Contact from './components/Contact';

import styles from './App.scss';

function App () {
  return (
    <div className={styles.container}>
      <Techs />
      <About />
      <LastVideos />
      <Contact />
    </div>
  );
}

export default App;
