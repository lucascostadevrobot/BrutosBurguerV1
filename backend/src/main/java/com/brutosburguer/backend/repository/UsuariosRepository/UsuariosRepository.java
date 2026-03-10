package com.brutosburguer.backend.repository.UsuariosRepository;

import com.brutosburguer.backend.entity.UsuariosEntity.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface UsuariosRepository  extends JpaRepository <Usuarios, UUID> {

    //Implementacao do JPA criando query buscando pelo nome
    Optional<Usuarios> findByUserName(String nomeUsuario);
}
