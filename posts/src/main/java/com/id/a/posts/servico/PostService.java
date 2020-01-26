package com.id.a.posts.servico;

import java.util.List;

import com.id.a.posts.model.Post;

public interface PostService {

	List<Post> getAll();
	
	Post getById(int id);
	
	Post insert(Post post);
	
	Post update(Post post);
	
}
