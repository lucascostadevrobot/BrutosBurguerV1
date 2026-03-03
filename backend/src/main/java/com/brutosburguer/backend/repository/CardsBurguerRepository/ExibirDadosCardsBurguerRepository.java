package com.brutosburguer.backend.repository.CardsBurguerRepository;

import com.brutosburguer.backend.entity.CardsBurguerEntity.DadosCardsBurguerEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ExibirDadosCardsBurguerRepository extends JpaRepository<DadosCardsBurguerEntity, Long> {

}
