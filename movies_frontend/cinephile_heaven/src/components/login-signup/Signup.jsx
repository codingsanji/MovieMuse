import './SignUp.css';

const SignUp = () => {
  return (
    <div className="signup-container">
      <i class="fa-regular fa-building"></i>
      <h1>Register</h1>
      <h2>Signup now and get full access to our app!</h2>
      <form>
        <label for="Full Name" className=''>Full Name: </label>
        <input type='text' id="fname" placeholder='Full Name'></input>

        <label for="Username" className=''>Last Name: </label>
        <input type='text' id="fname" placeholder='Username'></input>

        <label for="Email" className=''>Email: </label>
        <input type='text' id="fname" placeholder='Username'></input>

        <label for="Date of Birth" className=''>Date of Birth: </label>
        <input type='date' id="fname" placeholder='Date of Birth'></input>

        <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
};

export default SignUp;
