import { useMutation } from "@tanstack/react-query";
import { AXIOS } from "../services";

export const useCadastrarLead = () => {
    return useMutation({
        mutationFn: async (novoLead) => {
            const response = await AXIOS.post("/leads", novoLead);
            return response.data;
        }
    });
};
