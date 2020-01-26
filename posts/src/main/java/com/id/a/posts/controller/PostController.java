package com.id.a.posts.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.id.a.posts.model.Post;
import com.id.a.posts.servico.PostService;
import com.id.a.posts.servico.PostServiceImpl;

@CrossOrigin("*")
@RestController
public class PostController {
	PostService servico = new PostServiceImpl();
	
	@GetMapping("/post")
	public List<Post> getAll(){
		return servico.getAll();
	}
	
	@GetMapping("/post/{id}")
	public ResponseEntity<Post> getById(@PathVariable int id) {
		Post post = servico.getById(id);
		if (post == null)
			ResponseEntity.notFound();
		return ResponseEntity.ok(post);
	}
	
	@PostMapping("/post")
	public ResponseEntity<Post> insert(@RequestBody Post post) {
		if (post.getIdPostagem() != 0) {
			return ResponseEntity.badRequest().body(null);
		}
		servico.insert(post);
		return ResponseEntity.ok(post);
	}
	
	@PutMapping("/post")
	public Post update(@RequestBody Post post) {
		servico.update(post);
		return post;
	}
}
