import { AXIOS } from "../services"
import { useQuery } from "@tanstack/react-query";


export function useBuscarDepoimentos(){
    return useQuery({
        queryKey: ["depoimentosTipos"],
        queryFn: async () => {
            const request = await AXIOS.get("/depoimentos");
            return request.data;
        }
    })
}