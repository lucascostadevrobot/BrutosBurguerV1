package com.brutosburguer.backend.repository.UsuariosRepository;

import com.brutosburguer.backend.entity.UsuariosEntity.Role;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepository extends JpaRepository<Role, Long> {
}
