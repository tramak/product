interface IProductState {
  products: [],
  isSaved: boolean
}

const defaultState = {
  products: [],
  isSaved: false, // true - идёт процесс сохранения
};

const product = (state: IProductState = defaultState, action) => {
  return state;
};

export default product;