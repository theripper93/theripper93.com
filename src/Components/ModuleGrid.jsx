import { moduleData } from '../moduledata';
import ModuleCard from './ModuleCard';

const ModuleGrid = (props) => {
  const { buttonState, searchTerm } = props;

  return (
    <main className='module-grid'>
      {moduleData.filter((module) => {
        return module.name.toLowerCase().includes(searchTerm.toLowerCase());
      }).filter((module) => {
        if (buttonState === 0) {
          return true;
        } else if (buttonState === 1) {
          return module.status === 'paid' || module.status === 'paidea';
        } else if (buttonState === 2) {
          return module.status === 'free';
        }
      }).map((module, index) => <ModuleCard module={module} key={index}></ModuleCard>)}
    </main>
  )
}

export default ModuleGrid;