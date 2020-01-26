package com.id.a.posts.servico;

import java.util.ArrayList;
import java.util.List;

import com.id.a.posts.model.Post;

public class PostServiceImpl implements PostService {

	static List<Post> posts = new ArrayList<Post>();
	private static int incr = 0;

	
	@Override
	public List<Post> getAll() {
		return posts;
	}

	@Override
	public Post getById(int id) {
		for (Post post : posts) {
			if (post.getIdPostagem() == id) {
				return post;
			}
		}
		return null;
	}

	@Override
	public Post insert(Post post) {
		incr++;
		post.setIdPostagem(incr);
		posts.add(post);
		return post;
	}

	@Override
	public Post update(Post post) {
		Post aux = getById(post.getIdPostagem());
		if (aux != null) {
			aux.setTitulo(post.getTitulo());
			aux.setTexto(post.getTexto());
			aux.setLinkimg(post.getLinkimg());
			aux.setDataInclusao(post.getDataInclusao());
		}
		return null;
		
	}

}
