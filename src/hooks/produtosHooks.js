import { useQuery } from "@tanstack/react-query"
import { AXIOS } from "../services"

export const useBuscarProdutos = () => {
    return useQuery({
        queryKey: ["produtos"],
        queryFn: async () => {
            const res = await AXIOS.get("/produtos");
            return res.data;
        },
        retry: 3
    })
}