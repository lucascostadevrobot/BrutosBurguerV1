package com.brutosburguer.backend.controller.CardsBurguerController;

import com.brutosburguer.backend.entity.CardsBurguerEntity.DadosCardsBurguerEntity;
import com.brutosburguer.backend.repository.CardsBurguerRepository.ExibirDadosCardsBurguerRepository;
import com.brutosburguer.backend.services.CardsBurguerService.DadosCardsBurguerService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/dadosCardsBurguer")
public class ExibirDadosBurguerController {
    @Autowired
    private ExibirDadosCardsBurguerRepository exibirDadosCardsBurguerRepository;
    @Autowired
    private DadosCardsBurguerService dadosCardsBurguerService;

    //Metodo para cadastro de lanches
    @CrossOrigin("/**")
    @RequestMapping(value = "/cadastrarCardsBurguer", method = RequestMethod.POST)
    public ResponseEntity<DadosCardsBurguerEntity> saveAll (@RequestBody DadosCardsBurguerEntity dadosCardsBurguerEntity){
        return ResponseEntity.status(HttpStatus.CREATED).body(dadosCardsBurguerService.save(dadosCardsBurguerEntity).getBody());


    }

    //Metodo que lista as informações dos Hamburguers
    @GetMapping("/listarDadosCardsBurguer")
    public ResponseEntity<List<DadosCardsBurguerEntity>> findAll (){
        return ResponseEntity.status(HttpStatus.OK).body(dadosCardsBurguerService.findAll());
    }

    //Metodo para atualizar as informações do Burguer
    @RequestMapping(value = "/atualizarCardsBurguer/{id}", method = RequestMethod.PUT)
    public  ResponseEntity<DadosCardsBurguerEntity> putAll (@PathVariable Long id, @RequestBody DadosCardsBurguerEntity dadosCardsBurguerEntity){
        DadosCardsBurguerEntity dadosAtualizados = dadosCardsBurguerService.putAll(id, dadosCardsBurguerEntity).getBody();
        return ResponseEntity.status(HttpStatus.OK).body(dadosAtualizados);
    }

    @DeleteMapping(value = "deletarCardsBurguer/{id}")
    public ResponseEntity<DadosCardsBurguerEntity> deleteId(@PathVariable Long id){
        return dadosCardsBurguerService.deleteId(id);
    }

    //Metodo Controller para testes inciais retornando uma String
    @GetMapping("/exibirDadosCardsBurguer")
    public String exibindoDadosBurguer(){
        return "Hello Word";
    }
}
