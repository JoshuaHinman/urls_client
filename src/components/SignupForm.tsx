import postSignup from '../utilities/postSignup';
import passwordEncrypt from '../utilities/passwordEncrypt';

function SignupForm() {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const encryptedPassword = await passwordEncrypt(formData.get('password') as string);
    console.log(encryptedPassword);
    const body = {
      name: formData.get('name') as string,
      password: encryptedPassword,
      email: formData.get('email') as string,
    }
    console.log(body);
    postSignup(body);
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <h2>Signup</h2>
      <div>
        <label htmlFor="name">User Name:</label>
        <input type="text" id="name" name="name"/>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password"/>
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input type="text" id="email" name="email"/>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default SignupForm;