package com.brutosburguer.backend.repository.UsuariosRepository;

import com.brutosburguer.backend.entity.UsuariosEntity.Usuarios;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuariosRepository  extends JpaRepository <Usuarios, Long> {

}
