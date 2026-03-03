package com.brutosburguer.backend.repository.FuncionariosRepository;

import com.brutosburguer.backend.entity.Funcionarios.Gerente;
import org.springframework.data.jpa.repository.JpaRepository;

//TODO Verificar o ID que não existe na Entity Gerente
public interface GerenteRepository extends JpaRepository<Gerente, Long> {
}
