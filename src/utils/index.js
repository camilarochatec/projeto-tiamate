
import { useBuscarProdutos } from "../hooks/produtosHooks.js";
import { useBuscarCategorias } from "../hooks/categoriasHooks.js";

export let mapaDeBebidass = {};

export function listagem() {

  const { data: listadeProdutos } = useBuscarProdutos();
  const { data: listadeCategorias } = useBuscarCategorias();

  if (listadeCategorias && Array.isArray(listadeCategorias)) {
    labels = listadeCategorias.map(categoria => categoria.categoria_nome);
  }

  if (!listadeCategorias || !listadeProdutos) return;

  // Criar o mapa associando nome da categoria aos produtos correspondentes
  listadeCategorias.forEach((categoria) => {
    mapaDeBebidass[categoria.categoria_nome] = listadeProdutos.filter(
      (produto) => produto.categoria_id === categoria.categoria_id
    );
  });


  return mapaDeBebidass;
}

export let labels = [
];



