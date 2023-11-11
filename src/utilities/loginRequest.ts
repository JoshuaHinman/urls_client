const url: URL = new URL(`${import.meta.env.VITE_SERVER_URL}/user/login` as string);

const loginRequest = async (body: {name: string, password: string}) => {
  console.log(url, body);
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  });
  console.log(response);
}

export default loginRequest;