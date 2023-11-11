const url: URL = new URL(`${import.meta.env.VITE_SERVER_URL}/user/signup` as string);

const postSignup = async (body: {name: string, password: string, email: string}) => {
  console.log(url);
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  });
  console.log(response);
}

export default postSignup;