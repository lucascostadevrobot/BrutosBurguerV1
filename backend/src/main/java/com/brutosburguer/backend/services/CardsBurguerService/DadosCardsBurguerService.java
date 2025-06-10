package com.brutosburguer.backend.services.CardsBurguerService;

import com.brutosburguer.backend.entity.CardsBurguerEntity.DadosCardsBurguerEntity;
import com.brutosburguer.backend.repository.CardsBurguerRepository.ExibirDadosCardsBurguerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.status;

@Service
public class DadosCardsBurguerService {
    @Autowired
    private ExibirDadosCardsBurguerRepository exibirDadosCardsBurguerRepository;


    /**
     * Salva os dados: Entity DddosCardBurguer...
     * */
    public ResponseEntity<DadosCardsBurguerEntity> save(DadosCardsBurguerEntity dadosCardsBurguerEntity){
        if(dadosCardsBurguerEntity != null){
            exibirDadosCardsBurguerRepository.save(dadosCardsBurguerEntity);
            return status(HttpStatus.OK).body(dadosCardsBurguerEntity);
        }else {
            return status(HttpStatus.NOT_FOUND).body(null);
        }

    }


    /**
     * Lista todos CardsBurguer...
     * */
    public List<DadosCardsBurguerEntity> findAll(){
        return exibirDadosCardsBurguerRepository.findAll();
    }


    /**
     * Metodo para atualizar as informações dos cards
     * Se no Dashboard de administração quiser atualizar os dados pelo front, basta criarmos um campo
     * passando os valores do banco de dados, esses valores seriam um input ou spinner com os Ids.
     * */
    public ResponseEntity<DadosCardsBurguerEntity> putAll (@PathVariable Long id, @RequestBody DadosCardsBurguerEntity dadosCardsBurguerEntity){
        Optional<DadosCardsBurguerEntity> dadosExistente = exibirDadosCardsBurguerRepository.findById(id);
        if (dadosExistente.isPresent()){
            DadosCardsBurguerEntity dadosAtualizado =  dadosExistente.get();
            dadosAtualizado.setTituloBurguer(dadosCardsBurguerEntity.getTituloBurguer());
            dadosAtualizado.setDescricaoBurguer(dadosCardsBurguerEntity.getDescricaoBurguer());
            exibirDadosCardsBurguerRepository.save(dadosAtualizado);
            return status(HttpStatus.OK).body(dadosAtualizado);
        }else {
            return status(HttpStatus.NOT_FOUND).body(null);
        }

    }


    /**
     * Deleta um CardBurguer com base no Id
     * */
    public ResponseEntity<DadosCardsBurguerEntity> deleteId(@PathVariable Long id){
        Optional<DadosCardsBurguerEntity> idEcontrado = exibirDadosCardsBurguerRepository.findById(id);
        if (idEcontrado.isPresent()){
            DadosCardsBurguerEntity dadosExcluidos = idEcontrado.get();
            exibirDadosCardsBurguerRepository.deleteById(dadosExcluidos.getId());
            return status(HttpStatus.OK).body(dadosExcluidos);
        }else {
            //Id não encontrado
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }


}
