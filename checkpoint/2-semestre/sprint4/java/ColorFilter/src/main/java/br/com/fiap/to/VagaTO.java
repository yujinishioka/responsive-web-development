package br.com.fiap.to;

import javax.xml.bind.annotation.XmlRootElement;

@XmlRootElement
public class VagaTO {
	
	private int codigo;
    private String titulo;
    private int numeroDeVagas;
    private String descricao;

	public VagaTO() {
		// TODO Auto-generated constructor stub
	}
	
	

	public VagaTO(int codigo, String titulo, int numeroDeVagas, String descricao) {
		super();
		this.codigo = codigo;
		this.titulo = titulo;
		this.numeroDeVagas = numeroDeVagas;
		this.descricao = descricao;
	}



	public int getCodigo() {
		return codigo;
	}

	public void setCodigo(int codigo) {
		this.codigo = codigo;
	}

	public String getTitulo() {
		return titulo;
	}

	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}

	public int getNumeroDeVagas() {
		return numeroDeVagas;
	}

	public void setNumeroDeVagas(int numeroDeVagas) {
		this.numeroDeVagas = numeroDeVagas;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	
	
}
