interface IProductState {
  products: [],
  isSaved: boolean
}

const initialState = {
  products: [],
  isSaved: false, // true - идёт процесс сохранения
};

const product = (state: IProductState = initialState, action) => {
  return state;
};

export default product;