// hooks/picturesHooks.js
import { useQuery } from "@tanstack/react-query";
import { AXIOS } from "../services"; 

export function useBuscarPictures() {
  return useQuery({
    queryKey: ["pictures"],
    queryFn: async () => {
      const response = await AXIOS.get("/pictures");
      return response.data;
    }
  });
}
