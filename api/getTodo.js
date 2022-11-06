export const getTodo = async () => {
  const rawResponse = await fetch('https://jsonplaceholder.typicode.com/users/1/todos');
  return rawResponse.json();
};
