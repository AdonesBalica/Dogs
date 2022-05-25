import React from "react";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";
import useForm from "../../Hooks/useForm/useForm";
import { PASSWORD_RESET } from "../../Api";
import useFetch from "../../Hooks/useFetch/useFetch";
import { useNavigate } from "react-router-dom";
import Error from "../Helper/Error/Error";
import Head from "../Helper/Head/Head";

function LoginPasswordReset() {
  const [login, setLogin] = React.useState(null);
  const [key, setKey] = React.useState(null);

  const password = useForm();
  const { error, loading, request } = useFetch();
  const navigate = useNavigate();

  React.useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const key = params.get("key");
    const login = params.get("login");
    if (key) setKey(key);
    if (login) setLogin(login);
  }, []);

  async function handleSubmit(event) {
    event.preventDefault();
    if (password.validate) {
      const { url, options } = PASSWORD_RESET({
        login,
        key,
        password: password.value,
      });
      const { response } = await request(url, options);
      if (response.ok) navigate("/login");
    }
  }

  return (
    <section className="animeLeft">
      <Head
        title="Resete a senha "
        description="Nome do site dogs, resetar senha."
      />
      <h1 className="title">Resete a Senha:</h1>
      <form onSubmit={handleSubmit}>
        <Input
          label="Nova Senha"
          name="password"
          type="password"
          {...password}
        />
        {loading ? (
          <Button disabled>Resetando...</Button>
        ) : (
          <Button>Resetar</Button>
        )}
      </form>
      <Error error={error} />
    </section>
  );
}

export default LoginPasswordReset;
