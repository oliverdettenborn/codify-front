import React, { useState } from 'react';

import {
  BoxBackground,
  Title,
  FormBox,
  Input,
  Button,
  TextLink,
} from '../../components';

export default function ForgetPassword() {
  const [value, setValue] = useState('');
  const [loading] = useState(false);

  return (
    <BoxBackground>
      <Title />
      <FormBox>
        <Input
          placeholder="digite seu e-mail"
          onChange={(e) => setValue(e.target.value)}
          value={value}
          type="email"
        />

        <Button type="submit" disabledButton={loading}>
          recuperar senha
        </Button>

        <TextLink
          to="/"
          text="voltar para login"
        />
      </FormBox>
    </BoxBackground>
  );
}
