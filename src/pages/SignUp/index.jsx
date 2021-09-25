import { useState } from 'react';
import { user } from 'apis';

const SignUp = () => {
  const [form, setForm] = useState({});

  const onSubmitClick = async () => {
    console.log(
      await user.join(
        form?.name,
        form?.email,
        form?.password,
        Number(form?.annualSaving),
        Number(form?.annualExpense),
        form?.description,
      ),
    );
  };

  return (
    <div>
      <input
        name="name"
        placeholder="name"
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
      />
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
      <input
        name="annualSaving"
        placeholder="annualSaving"
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
      />
      <input
        name="annualExpense"
        placeholder="annualExpense"
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
      />
      <input
        name="description"
        placeholder="description"
        onChange={(e) => setForm({ ...form, [e.target.name]: e.target.value })}
      />
      <button onClick={onSubmitClick}> 제출 </button>
    </div>
  );
};

export default SignUp;
