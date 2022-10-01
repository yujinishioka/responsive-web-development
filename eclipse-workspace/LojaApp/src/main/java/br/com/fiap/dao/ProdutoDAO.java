package br.com.fiap.dao;

import java.util.ArrayList;
import java.util.List;

import br.com.fiap.resource.ProdutoTO;

public class ProdutoDAO {
	public static List<ProdutoTO> produto;
	
	public ProdutoDAO() {
		if(produto== null) {
			produto = new ArrayList<ProdutoTO>();
			
			ProdutoTO pto = new ProdutoTO(0, null, 0, 0);
			pto.setCodigo(1);
			pto.setPreco(27.99);
			pto.setQuantidade(10);
			pto.setTitulo("Grampeador");
			produto.add(pto);
			
			//  mais 4 produtos
		}
	}
	
	public List<ProdutoTO> select() {
		return produto;
	}
	
	public ProdutoTO select(int id) {
		
		for(int i = 0; i < produto.size(); i++) {
			if(produto.get(i).getCodigo() == id) {
				return produto.get(i);
			}
		}
		return null;
	}
	
	public boolean insert(ProdutoTO pto) {
		pto.setCodigo(produto.size() + 1);
		return produto.add(pto);
	}
	
	public void update(ProdutoTO pto) {
		ProdutoTO p = select(pto.getCodigo());
		p.setPreco(pto.getPreco());
		p.setQuantidade(pto.getQuantidade());
		p.setTitulo(pto.getTitulo());
	}
	
	public void delete(int id) {
		produto.remove(select(id));
	}
}
