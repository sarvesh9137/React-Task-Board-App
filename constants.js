export const TASK_STATUS = {
  pending: 'pending',
  'in-progress': 'in-progress',
  'completed': 'completed',
  'deployed': 'deployed',
  'deffered': 'deffered'

};

export const GRID_COLUMNS_LIST = [
  'Pending',
  'In-Progress',
  'Completed',
  'Deployed',
  'Deffered'
];

export const GRID_LABEL_EMOJIS = {
  todo: '📌',
  'in-progress': '🚧',
  completed: '✅',
  'deployed': '🚀',
  'deffered': '↪️'
};

export const GRID_LABELS = [
  {
    label: GRID_COLUMNS_LIST[0],
    emoji: GRID_LABEL_EMOJIS.todo
  },
  {
    label: GRID_COLUMNS_LIST[1],
    emoji: GRID_LABEL_EMOJIS['in-progress']
  },
  {
    label: GRID_COLUMNS_LIST[2],
    emoji: GRID_LABEL_EMOJIS.completed
  },
  {
    label: GRID_COLUMNS_LIST[3],
    emoji: GRID_LABEL_EMOJIS['deployed']
  },
  {
    label: GRID_COLUMNS_LIST[4],
    emoji: GRID_LABEL_EMOJIS['deffered']
  },

 
];

export const ITEM_TYPE = {
  TASK: 'task',
  COLUMN: 'column',
}
