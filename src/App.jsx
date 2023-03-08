import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Portfolio from './components/Portfolio/Portfolio';
import ProjectOverview from './components/ProjectOverview/ProjectOverview';

import css from './styles/app.module.scss';

const App = () => {
  return (
    <div className={`bg-primary ${css.container}`}>
      <Header />
      <Hero />
      {/* <ProjectOverview /> */}
      <Portfolio />
    </div>
  );
};

export default App;
