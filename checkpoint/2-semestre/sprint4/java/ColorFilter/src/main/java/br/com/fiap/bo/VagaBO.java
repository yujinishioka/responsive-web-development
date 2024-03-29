package br.com.fiap.bo;

import java.util.List;

import br.com.fiap.dao.VagaDAO;
import br.com.fiap.to.VagaTO;

public class VagaBO {
	
	private VagaDAO pd;
	
	public List<VagaTO> listar(){
		pd = new VagaDAO();
		//REGRA DE NEGOCIO
		return pd.select();
	}
	
	public VagaTO listar(int id) {
		pd = new VagaDAO();
		return pd.select(id);
	}
	
	public boolean cadastrar(VagaTO pto) {
		pd = new VagaDAO();
		return pd.insert(pto);
	}
	
	public void atualiza(VagaTO pto) {
		pd= new VagaDAO();
		pd.update(pto);}

	public void remover(int id) {
		pd= new VagaDAO();
		pd.delete(id);}



}
