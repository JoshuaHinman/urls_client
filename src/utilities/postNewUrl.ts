const url: URL = new URL(`${import.meta.env.VITE_SERVER_URL}/newUrl` as string);

const postNewUrl = async (body: {longurl: string, shorturl: string}) => {
  console.log(url);
  const response = await fetch(url, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  });
  console.log(response);
}

export default postNewUrl;