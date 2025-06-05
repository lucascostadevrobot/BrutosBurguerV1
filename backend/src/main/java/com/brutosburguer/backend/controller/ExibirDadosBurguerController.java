package com.brutosburguer.backend.controller;

import com.brutosburguer.backend.entity.DadosBurguerEntity;
import com.brutosburguer.backend.repository.ExibirDadosBurguerRepository;
import com.brutosburguer.backend.services.DadosBurguerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/dadosBurguer")
public class ExibirDadosBurguerController {
    @Autowired
    private ExibirDadosBurguerRepository exibirDadosBurguerRepository;
    @Autowired
    private  DadosBurguerService dadosBurguerService;

    //Metodo para cadastro de lanches
    @CrossOrigin("/**")
    @RequestMapping(value = "/cadastrarBurguer", method = RequestMethod.POST)
    public ResponseEntity<DadosBurguerEntity> saveAll (@RequestBody  DadosBurguerEntity dadosBurguerEntity){
        return ResponseEntity.status(HttpStatus.CREATED).body(dadosBurguerService.save(dadosBurguerEntity).getBody());


    }

    //Metodo que lista as informações dos Hamburguers
    @GetMapping("/listarDadosBurguer")
    public ResponseEntity<List<DadosBurguerEntity>> findAll (){
        return ResponseEntity.status(HttpStatus.OK).body(dadosBurguerService.findAll());
    }

    //Metodo para atualizar as informações do Burguer
    @RequestMapping(value = "/atualizarBurguer/{id}", method = RequestMethod.PUT)
    public  ResponseEntity<DadosBurguerEntity> putAll (@PathVariable Long id,  @RequestBody DadosBurguerEntity dadosBurguerEntity){
        DadosBurguerEntity dadosAtualizados = dadosBurguerService.putAll(id, dadosBurguerEntity).getBody();
        return ResponseEntity.status(HttpStatus.OK).body(dadosAtualizados);
    }

    @DeleteMapping(value = "deletarBurguer/{id}")
    public ResponseEntity<DadosBurguerEntity> deleteId(@PathVariable Long id){
        return dadosBurguerService.deleteId(id);
    }

    //Metodo Controller para testes inciais retornando uma String
    @GetMapping("/exibirDadosBurguer")
    public String exibindoDadosBurguer(){
        return "Hello Word";
    }
}
