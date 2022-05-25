import React from "react";
import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";
import Error from "../Helper/Error/Error";
import useForm from "../../Hooks/useForm/useForm";
import useFetch from "../../Hooks/useFetch/useFetch";
import { PASSWORD_LOST } from "../../Api";
import Head from "../Helper/Head/Head";

function LoginPasswordLost() {
  const login = useForm();
  const { data, loading, error, request } = useFetch();

  async function handleSubmit(event) {
    event.preventDefault();
    if (login.validate) {
      const { url, options } = PASSWORD_LOST({
        login: login.value,
        url: window.location.href.replace("perdeu", "resetar"),
      });
      await request(url, options);
    }
  }

  return (
    <section className="animeLeft">
      <Head
        title="Perdeu a senha"
        description="Nome do site dogs, perdeu a senha."
      />
      <h1 className="title">Perdeu a Senha?</h1>
      {data ? (
        <p style={{ color: "#4c1" }}>{data}</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <Input label="Email / Usuário" type="text" name="login" {...login} />

          {loading ? (
            <Button disabled>Enviando...</Button>
          ) : (
            <Button>Enviar Email</Button>
          )}
        </form>
      )}
      {<Error errro={error} />}
    </section>
  );
}

export default LoginPasswordLost;
