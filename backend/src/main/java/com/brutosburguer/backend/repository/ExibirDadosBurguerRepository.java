package com.brutosburguer.backend.repository;

import com.brutosburguer.backend.entity.DadosBurguerEntity;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExibirDadosBurguerRepository extends JpaRepository<DadosBurguerEntity, Long> {

}
