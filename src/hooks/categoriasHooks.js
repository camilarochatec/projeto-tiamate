import { useQuery } from "@tanstack/react-query"
import { AXIOS } from "../services"

export const useBuscarCategorias = () => {
    return useQuery({
        queryKey: ["categorias"],
        queryFn: async () => {
            const res = await AXIOS.get("/categorias");
            return res.data;
        },
         retry: 3
    })
}