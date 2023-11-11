import passwordEncrypt from "../utilities/passwordEncrypt";
import loginRequest from "../utilities/loginRequest";

const loginForm = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const encryptedPassword = await passwordEncrypt(formData.get('password') as string);
    const body = {
      name: formData.get('username') as string,
      password: encryptedPassword,
    }
    console.log(body);
    loginRequest(body);
  }
  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <div>
        <label htmlFor="username">User Name:</label>
        <input type="text" id="username" name="username"/>
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="text" id="password" name="password"/>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}

export default loginForm;