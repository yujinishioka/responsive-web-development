package br.com.fiap.dao;

public class ProdutoDAO {
	public static List<ProdutoTO> produto;
	
	public ProdutoDAO() {
		if(produto== null) {
			produto = new ArrayList<ProdutoTO>();
			
			ProdutoTO pto = new ProdutoTO();
			pto.setCodigo(1);
			pto.setPreco(27.99);
			pto.setQuantidade(10);
			pto.setTitulo("Grampeador");
			produto.add(pto);
			
			//  mais 4 produtos
		}
	}
}
