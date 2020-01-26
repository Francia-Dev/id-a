package com.id.a.posts.model;

public class Post {
	private int idPostagem;
	private String titulo;
	private String texto;
	private String linkimg;
	private String dataInclusao;
	
	public Post() {
		super();
	}
	public Post(String titulo, String texto, String linkimg, String dataInclusao) {
		super();
		this.titulo = titulo;
		this.texto = texto;
		this.linkimg = linkimg;
		this.dataInclusao = dataInclusao;
	}
	
	public int getIdPostagem() {
		return idPostagem;
	}
	public void setIdPostagem(int idPostagem) {
		this.idPostagem = idPostagem;
	}
	public String getTitulo() {
		return titulo;
	}
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	public String getTexto() {
		return texto;
	}
	public void setTexto(String texto) {
		this.texto = texto;
	}
	public String getLinkimg() {
		return linkimg;
	}
	public void setLinkimg(String linkimg) {
		this.linkimg = linkimg;
	}
	public String getDataInclusao() {
		return dataInclusao;
	}
	public void setDataInclusao(String dataInclusao) {
		this.dataInclusao = dataInclusao;
	}
	
	
}
