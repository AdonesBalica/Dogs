import React from "react";
import { useParams } from "react-router-dom";
import { PHOTO_GET } from "../../Api";
import useFetch from "../../Hooks/useFetch/useFetch";
import Error from "../Helper/Error/Error";
import Loading from "../Helper/Loading/Loading";
import PhotoContent from "../PhotoContent/PhotoContent";
import Head from "../Helper/Head/Head";

function Photo() {
  const { data, loading, error, request } = useFetch();
  const { id } = useParams();

  React.useEffect(() => {
    const { url, options } = PHOTO_GET(id);
    request(url, options);
  }, [request, id]);

  if (error) <Error error={error} />;
  if (loading) <Loading />;
  if (data) {
    return (
      <section className="container mainContainer">
        <Head title={data.photo.title} description="Nome do site dogs, foto." />
        <PhotoContent single={true} data={data} />
      </section>
    );
  } else return null;
}

export default Photo;
