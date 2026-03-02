package com.brutosburguer.backend.entity.UsuariosEntity;

import jakarta.persistence.*;

@Entity
@Table(name = "tb_roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column("role_id")
    private Long roleId;
    private String nome;
}
