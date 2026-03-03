package com.brutosburguer.backend.entity.Funcionarios;

import com.brutosburguer.backend.entity.UsuariosEntity.Usuarios;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

@Entity
@Table(name = "tb_gerentes")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Gerente extends Usuarios {
    private String cpf;
    private boolean ativo;
}
