import { useEffect } from 'react';
import { tasksSelector } from '../context';
import { useRecoilValue } from 'recoil';
import { useSnackbar } from 'notistack';
import { getRandomInfo } from '../services';


const AllTasksDone = () => {
  const taskSections = useRecoilValue(tasksSelector);
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  useEffect(() => {
    const displayRandomInfo = async () => {
      try{
        const randomInfo = await getRandomInfo();
        enqueueSnackbar(randomInfo?.text);
      } catch(e){
        console.error('Fetching random info failed');
      }
    }

    if(!taskSections.some(o => !o.isCompleted)){
      displayRandomInfo()
    } else {
      closeSnackbar();
    }
  }, [taskSections, closeSnackbar, enqueueSnackbar])

  return null;
}

export default AllTasksDone;