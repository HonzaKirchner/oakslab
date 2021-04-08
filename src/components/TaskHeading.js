import Done from '@material-ui/icons/Done';

import styles from './Components.module.scss';

const TaskHeading = ({
  heading,
  index,
}) => {

  return (
    <div className={styles.section_heading}>
      <span className={styles.section_index}>{index + 1}</span>
      <h1>{heading}</h1>
      <Done className={styles.section_done_icon} fontSize='large'/>
    </div>
  )
}

export default TaskHeading;