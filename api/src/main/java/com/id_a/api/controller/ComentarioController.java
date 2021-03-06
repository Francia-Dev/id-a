package com.id_a.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.id_a.api.entity.Comentario;
import com.id_a.api.service.ComentarioService;

@CrossOrigin("*")
@RestController
public class ComentarioController {

	@Autowired
	private ComentarioService service;
	

	@PostMapping("/comentario")
	public ResponseEntity<Comentario> post(@RequestBody Comentario entity){
		try {
			if(entity.getIdComentario() != 0) {
				return ResponseEntity.badRequest().body(null);
			}
			Comentario comentario = this.service.createOrUpdate(entity);
			return ResponseEntity.ok(comentario);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}
	
	@PutMapping("/comentario")
	public ResponseEntity<Comentario> put(@RequestBody Comentario entity){
		try {
			Comentario comentarioAchado = this.service.getById(entity.getIdComentario());
			if(comentarioAchado == null) {
				return ResponseEntity.notFound().build();
			}
			Comentario comentario = this.service.createOrUpdate(entity);
			return ResponseEntity.ok(comentario);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}
	
	@DeleteMapping("/comentario/{id}")
	public void delete(@PathVariable int id){
			this.service.delete(id);
	}
	
	@GetMapping("/comentario")
	public ResponseEntity<List<Comentario>> getAll(){
		return ResponseEntity.ok(this.service.getAll());
	}
	
	@GetMapping("/comentario/{id}")
	public ResponseEntity<Comentario> getById(@PathVariable int id){
		Comentario comentario = this.service.getById(id);
		if(comentario == null) 
			return ResponseEntity.notFound().build();
		return ResponseEntity.ok(comentario);
	}
}
