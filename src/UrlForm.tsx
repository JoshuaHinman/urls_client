function UrlForm() {
  const handleSubmit = (e: any) => { //TODO - figure out why type FormEvent isnt recognized
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const body = {
      sourceUrl: formData.get('sourceUrl'),
      shortUrl: formData.get('shortUrl')
    }
    console.log(body);
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="sourceUrl">Source Url:</label>
        <input type="text" id="sourceUrl" name="sourceUrl"/>
      </div>
      <div>
        <label htmlFor="shortUrl">Short Url:</label>
        <input type="text" id="shortUrl" name="shortUrl"/>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default UrlForm;