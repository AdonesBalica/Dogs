import React from "react";
import styles from "./UserPhotoPost.module.css";

import Input from "../Forms/Input/Input";
import Button from "../Forms/Button/Button";
import useForm from "../../Hooks/useForm/useForm";
import useFetch from "../../Hooks/useFetch/useFetch";
import Error from "../Helper/Error/Error";
import { PHOTO_POST } from "../../Api";
import { useNavigate } from "react-router-dom";
import Head from "../Helper/Head/Head";

function UserPhotoPost() {
  const nome = useForm();
  const peso = useForm("number");
  const idade = useForm("number");
  const [img, setImg] = React.useState({});

  const { data, error, loading, request } = useFetch();
  const navigate = useNavigate();

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData();
    formData.append("img", img.raw);
    formData.append("nome", nome.value);
    formData.append("peso", peso.value);
    formData.append("idade", idade.value);

    const token = window.localStorage.getItem("token");
    const { url, options } = PHOTO_POST(formData, token);
    request(url, options);
  }

  function handleImgChange({ target }) {
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0],
    });
  }

  React.useEffect(() => {
    if (data) navigate("/conta");
  }, [data, navigate]);

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <Head title="Post" description="Nome do site dogs, fotos do usuário." />
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome} />
        <Input label="Peso" type="number" name="peso" {...peso} />
        <Input label="Idade" type="number" name="idade" {...idade} />
        <input
          type="file"
          className={styles.file}
          name="img"
          id="img"
          onChange={handleImgChange}
        />
        {loading ? (
          <Button disabled>Enviando...</Button>
        ) : (
          <Button>Enviar</Button>
        )}
        {<Error error={error} />}
      </form>
      <div>
        {img.preview && (
          <div
            className={styles.preview}
            style={{ backgroundImage: `url('${img.preview}')` }}
          ></div>
        )}
      </div>
    </section>
  );
}

export default UserPhotoPost;
