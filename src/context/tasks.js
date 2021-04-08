import { atom, selector } from 'recoil';
import { tasksSeed } from './seed';


const localStorageEffect = key => ({setSelf, onSet}) => {
  const savedValue = localStorage.getItem(key)
  if (savedValue != null) {
    setSelf(JSON.parse(savedValue));
  }

  onSet(newValue => {
    localStorage.setItem(key, JSON.stringify(newValue));
  });
};


export const tasksAtom = atom({
  key: "tasksAtom",
  default: tasksSeed,
  effects_UNSTABLE: [
    localStorageEffect('tasks'),
  ]
});

export const tasksSelector = selector({
  key: "tasksSelector",
  get: ({ get }) => {
    const taskSections = get(tasksAtom);

    let previousSectionsDone = true;

    return taskSections.map(taskSection => {

      const isDisabled = !previousSectionsDone;
      const isNotCompleted = taskSection.tasks.some(o => !o.done);
      if(isNotCompleted) previousSectionsDone = false;

      return {
        ...taskSection,
        isDisabled,
        isCompleted: taskSection.tasks.length > 0 && !isNotCompleted,
      }
    })
  },
});