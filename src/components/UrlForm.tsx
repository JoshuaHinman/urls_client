import postNewUrl from '../utilities/postNewUrl';

function UrlForm() {

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
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
      <h2>Create a new Url alias:</h2>
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