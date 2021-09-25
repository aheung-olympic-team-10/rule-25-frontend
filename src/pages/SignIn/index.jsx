import { useState } from 'react';
import { user } from 'apis';

const SignIn = () => {
  const [form, setForm] = useState({});

  const onSubmitClick = async () => {
    const token = (await user.login(form?.email, form?.password)).data;
    localStorage.setItem('jwt', token);
  };

  return (
    <div>
      <input
        name="email"
        placeholder="email"
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
      />
      <input
        name="password"
        placeholder="password"
        type="password"
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
      />
      <button onClick={onSubmitClick}> 제출 </button>
    </div>
  );
};

export default SignIn;
