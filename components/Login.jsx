'use client';
import { useState } from 'react';

import Input from '@/components/Input';
import Card from '@/components/Card';

const Login = () => {
  const [password, setPassword] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password);

    // api password submit
    // redirect etc

  }

  return (
    <Card>
      <form onSubmit={handleSubmit}>
        <Input
          required
          placeholder="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      </form>
    </Card>
  );
};

export default Login;