package com.brutosburguer.backend.services;

import com.brutosburguer.backend.entity.DadosBurguerEntity;
import com.brutosburguer.backend.repository.ExibirDadosBurguerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import java.util.List;
import java.util.Optional;

@Service
public class DadosBurguerService {
    @Autowired
    private ExibirDadosBurguerRepository exibirDadosBurguerRepository;



    //Salva nossos dados da Entidade DadosBurguer
    public DadosBurguerEntity save(DadosBurguerEntity dadosBurguerEntity){
        return exibirDadosBurguerRepository.save(dadosBurguerEntity);
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
            return ResponseEntity.status(HttpStatus.OK).body(dadosAtualizado);
        }else {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

    }


}
