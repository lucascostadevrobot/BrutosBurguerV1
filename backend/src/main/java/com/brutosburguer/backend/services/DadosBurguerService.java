package com.brutosburguer.backend.services;

import com.brutosburguer.backend.entity.DadosBurguerEntity;
import com.brutosburguer.backend.repository.ExibirDadosBurguerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

import static org.springframework.http.ResponseEntity.status;

@Service
public class DadosBurguerService {
    @Autowired
    private ExibirDadosBurguerRepository exibirDadosBurguerRepository;



    //Salva nossos dados da Entidade DadosBurguer
    public ResponseEntity<DadosBurguerEntity> save(DadosBurguerEntity dadosBurguerEntity){
        if(dadosBurguerEntity != null){
            exibirDadosBurguerRepository.save(dadosBurguerEntity);
            return status(HttpStatus.OK).body(dadosBurguerEntity);
        }else {
            return status(HttpStatus.NOT_FOUND).body(null);
        }

    }

    //Lista nossos dados da Entidade DadosBurguer
    public List<DadosBurguerEntity> findAll(){
        return exibirDadosBurguerRepository.findAll();
    }

    //Metodo para atualizar as informações dos cards
    /*
     * Se no Dashboard de administração quiser atualizar os dados pelo front, basta criarmos um campo
     * passando os valores do banco de dados, esses valores seriam um input ou spinner com os Ids.
     * */
    public ResponseEntity<DadosBurguerEntity> putAll (@PathVariable Long id, @RequestBody DadosBurguerEntity dadosBurguerEntity){
        Optional<DadosBurguerEntity> dadosExistente = exibirDadosBurguerRepository.findById(id);
        if (dadosExistente.isPresent()){
            DadosBurguerEntity dadosAtualizado =  dadosExistente.get();
            dadosAtualizado.setTituloBurguer(dadosBurguerEntity.getTituloBurguer());
            dadosAtualizado.setDescricaoBurguer(dadosBurguerEntity.getDescricaoBurguer());
            exibirDadosBurguerRepository.save(dadosAtualizado);
            return status(HttpStatus.OK).body(dadosAtualizado);
        }else {
            return status(HttpStatus.NOT_FOUND).body(null);
        }

    }

    //Metodo para deletar um CardBurguer com base no id
    public ResponseEntity<DadosBurguerEntity> deleteId(@PathVariable Long id){
        Optional<DadosBurguerEntity> idEcontrado = exibirDadosBurguerRepository.findById(id);
        if (idEcontrado.isPresent()){
            DadosBurguerEntity dadosExcluidos = idEcontrado.get();
            exibirDadosBurguerRepository.deleteById(dadosExcluidos.getId());
            return status(HttpStatus.OK).body(dadosExcluidos);
        }else {
            //Id não encontrado
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
    }


}
