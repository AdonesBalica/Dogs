import React from "react";
import Head from "../Helper/Head/Head";
import useFetch from "../../Hooks/useFetch/useFetch";
import { STATS_GET } from "../../Api";
import Loading from "../Helper/Loading/Loading";
import Error from "../Helper/Error/Error";
const UserStatsGraphs = React.lazy(() =>
  import("../UserStatsGraphs/UserStatsGraphs")
);

function UserStats() {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error erro={error} />;
  if (data)
    return (
      <React.Suspense fallback={<div></div>}>
        <Head
          title="Estatísticas"
          description="Nome do site dogs, estastísticas do usuário."
        />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
}

export default UserStats;
