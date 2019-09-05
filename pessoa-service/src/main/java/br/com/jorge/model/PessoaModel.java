package br.com.jorge.model;

 

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
 
@Table(name="tb_pessoa")
@Entity
public class PessoaModel {
 
	@Id
	@GeneratedValue(strategy= GenerationType.AUTO)
	@Column(name="id_pessoa")
	private Integer codigo;
 
	@Column(name="ds_nome")
	private String  nome;	
	
	@Column(name="titulo")
	private String  titulo;
	
	@Column(name="descricao")
	private String  descricao;
	
	@Column(name="dataPublicacao")
	private String  dataPublicacao;
	
	@Column(name="dataVisualizacao")
	private String  dataVisualizacao;
	

	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getDescricao() {
		return descricao;
	}
	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}
	public String getDataPublicacao() {
		return dataPublicacao;
	}
	public void setDataPublicacao(String dataPublicacao) {
		this.dataPublicacao = dataPublicacao;
	}
	public String getDataVisualizacao() {
		return dataVisualizacao;
	}
	public void setDataVisualizacao(String dataVisualizacao) {
		this.dataVisualizacao = dataVisualizacao;
	}
	@Column(name="fl_ativo", columnDefinition="BIT")
	private boolean ativo;
 
	public Integer getCodigo() {
		return codigo;
	}
	public void setCodigo(Integer codigo) {
		this.codigo = codigo;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
	public boolean isAtivo() {
		return ativo;
	}
	public void setAtivo(boolean ativo) {
		this.ativo = ativo;
	}	
 
}