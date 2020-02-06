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

import com.id_a.api.entity.Usuario;
import com.id_a.api.service.UsuarioService;

@CrossOrigin("*")
@RestController
public class UsuarioController {

	@Autowired
	private UsuarioService service;
	

	@PostMapping("/usuario")
	public ResponseEntity<Usuario> post(@RequestBody Usuario entity){
		try {
			if(entity.getIdUsuario() != 0) {
				return ResponseEntity.badRequest().body(null);
			}
			Usuario usuario = this.service.createOrUpdate(entity);
			return ResponseEntity.ok(usuario);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}
	
	@PutMapping("/usuario")
	public ResponseEntity<Usuario> put(@RequestBody Usuario entity){
		try {
			Usuario usuarioAchado = this.service.getById(entity.getIdUsuario());
			if(usuarioAchado == null) {
				return ResponseEntity.notFound().build();
			}
			Usuario usuario = this.service.createOrUpdate(entity);
			return ResponseEntity.ok(usuario);
		} catch (Exception e) {
			return ResponseEntity.badRequest().body(null);
		}
	}
	
	@DeleteMapping("/usuario/{id}")
	public void delete(@PathVariable int id){
			this.service.delete(id);
	}
	
	@GetMapping("/usuario")
	public ResponseEntity<List<Usuario>> getAll(){
		return ResponseEntity.ok(this.service.getAll());
	}
	
	@GetMapping("/usuario/{id}")
	public ResponseEntity<Usuario> getById(@PathVariable int id){
		Usuario usuario = this.service.getById(id);
		if(usuario == null) 
			return ResponseEntity.notFound().build();
		return ResponseEntity.ok(usuario);
	}
	
	@GetMapping("/usuario/nome/{nome}")
	public ResponseEntity<List<Usuario>> getAllByName(@PathVariable String nome){
		List<Usuario> usuario = this.service.getAllByNome(nome);
		if(usuario.size() == 0)
			return ResponseEntity.notFound().build();
		return ResponseEntity.ok(usuario);
	}
	
	@PostMapping("/usuario/login")
	public ResponseEntity<Usuario> getUsuarioByEmailAndSenha(@RequestBody Usuario entity){
		Usuario usuario = this.service.getUsuarioByEmailAndSenha(entity.getEmail(), entity.getSenha());
		if(usuario == null)
			return ResponseEntity.notFound().build();
		return ResponseEntity.ok(usuario);
	}
}
