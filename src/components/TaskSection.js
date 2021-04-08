import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TaskHeading from './TaskHeading';
import { useSetRecoilState } from 'recoil'
import { tasksAtom } from '../context';
import cx from 'classnames';

import styles from './Components.module.scss';

const TaskSection = ({
  id,
  heading,
  isCompleted,
  isDisabled,
  tasks,
  index,
}) => {

  const setTasks = useSetRecoilState(tasksAtom);

  const handleChange = (taskId, checked) => {
    setTasks(taskSections => taskSections.map(taskSection => taskSection.id === id ? ({
      ...taskSection,
      tasks: taskSection.tasks.map(task => task.id === taskId ? ({
        ...task,
        done: checked,
      }) : task)
    }) : taskSection))
  }

  console.log()

  return (
    <div className={cx(styles.tasks_section, {[styles.section_completed]: isCompleted, [styles.section_disabled]: isDisabled})}>
      <TaskHeading heading={heading} index={index}/>
      <div className={styles.task_list}>
        {tasks.map(o => (
          <FormControlLabel
            key={o.id}
            control={
              <Checkbox
                checked={o.done}
                onChange={e => handleChange(o.id, e.target.checked)}
                disabled={isDisabled}
              />
            }
            label={o.label}
          />
        ))}
      </div>
    </div>
  )
}

export default TaskSection;