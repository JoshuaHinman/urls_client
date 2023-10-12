import nodeFetch from 'node-fetch';

const postNewUrl = async (body: {longurl: string, shorturl: string}) => {
  const dbUrl: URL = new URL(`${process.env.REACT_APP_SERVER_URL}/newUrl` as string);
  console.log(dbUrl);
  const response = await fetch(dbUrl, {
    method: 'post',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
  });
  console.log(response);
}

function UrlForm() {

  const handleSubmit = (e: any) => { //TODO - figure out why type FormEvent isnt recognized
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const body = {
      longurl: formData.get('longurl') as string,
      shorturl: formData.get('shorturl') as string,
    }
    console.log(body);
    postNewUrl(body);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>{process.env.REACT_APP_SERVER_URL}</h2>
      <div>
        <label htmlFor="longurl">Source Url:</label>
        <input type="text" id="longurl" name="longurl"/>
      </div>
      <div>
        <label htmlFor="shorturl">Short Url:</label>
        <input type="text" id="shorturl" name="shorturl"/>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default UrlForm;