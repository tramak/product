import ruLocal from './ru.json';

const l = (text: string): string => {
  return ruLocal[text] || text;
};

export default l;