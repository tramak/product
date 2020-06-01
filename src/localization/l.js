import ruLocal from './ru';

const l = (text) => {
  return ruLocal[text] || text;
};

export default l;