import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getPlaces } from "../../api";
import Loader from "../../components/loader";
import Error from "../../components/error";
import { Place } from "../../types";
import Card from "../../components/card";

const List = () => {
  const { isLoading, error, data, refetch } = useQuery<Place[]>({
    queryKey: ["places"],
    queryFn: () => getPlaces(),
  });
  console.log(data);
  return (
    <div className="mt-10">
      <h1 className="font-bold text-2xl">Yakınınızdaki Lokasyonlar</h1>

      <div>
        {isLoading ? (
          <Loader />
        ) : error ? (
          <Error />
        ) : (
          <div className="grid gap-5 mt-5">
            {data?.map((place) => (
              <Card key={place.id} place={place} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default List;
