import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { getPlaces } from "../../api";

const List = () => {
  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["places"],
    queryFn: () => getPlaces(),
  });
  console.log(data);
  return <div>List</div>;
};

export default List;
