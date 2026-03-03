package com.brutosburguer.backend.entity.UsuariosEntity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tb_roles")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "role_id")
    private Long roleId;
    private String nome;


    /*Enuns para Roles/Perfis*/
    public enum Values{
        ADMIN(1L),
        GERENTE(2L),
        ATENDENTE(3L);

        long roleId;

        Values(long roleId) {
            this.roleId = roleId;
        }

        public long getRoleId() {
            return roleId;
        }

        public void setRoleId(long roleId) {
            this.roleId = roleId;
        }
    }
}
