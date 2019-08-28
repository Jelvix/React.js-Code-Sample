import { LOG_TASK_ADDED } from 'constants/logs';

const initialState: ILog = {
  tasks: [
    {
      id: 1,
      taskName: 'Working on creating time tracking application',
      projectName: 'timer',
      startDate: '2019-08-22T09:44:11.304Z',
      spentTime: 518531,
      endDate: '2019-08-28T09:46:22.304Z',
      inProcess: false,
    },
    {
      id: 2,
      taskName: 'Setup the basic react with task runners',
      projectName: 'timer',
      startDate: '2019-08-22T08:20:15.000Z',
      spentTime: 3062,
      endDate: '2019-08-22T09:11:17.000Z',
      inProcess: false,
    },
    {
      id: 3,
      taskName: 'Configure the github repository',
      projectName: 'timer',
      startDate: '2019-08-22T10:12:15.000Z',
      spentTime: 186,
      endDate: '2019-08-22T10:15:21.000Z',
      inProcess: false,
    },
  ],
};

const log = (state: ILog = initialState, action: IAction): any => {
  switch (action.type) {
    case LOG_TASK_ADDED:
      return {
        tasks: [...state.tasks, action.payload],
      };
    default:
      return state;
  }
};

export default log;
