import postData from "src/utils/postData";

export default async function login(data) {
  // postData('/login', {phone: '+79892820000', password: '1234'});
  const result = await postData('/login', data);

  if (result.error) {
    throw new Error(result.error);
  }

  return result;
}
