import { useRecoilValue } from 'recoil';
import TaskSection from './components/TaskSection';
import AllTasksDone from './components/AllTasksDone';
import styles from './App.module.scss';
import { tasksSelector } from './context';

function App() {

  const taskSections = useRecoilValue(tasksSelector);

  return (
      <div className={styles.app}>
        <main>
          <h1>My startup progress</h1>
          {taskSections.map((o, i) => (
            <TaskSection key={o.id} {...o} index={i}/>
          ))}
          <AllTasksDone />
        </main>
      </div>
  );
}

export default App;
