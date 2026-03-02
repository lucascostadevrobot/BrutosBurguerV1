package com.brutosburguer.backend.entity.UsuariosEntity;

import jakarta.persistence.*;
import lombok.*;

import java.rmi.server.UID;
import java.util.Set;
import java.util.UUID;

@Entity
@Table(name = "tb_usuarios")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Usuarios {
    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(name = "id_usuario")
    private UUID id;
    @Column(unique = true, name = "nome_usuario")
    private String nomeUsuario;
    private String password;
    @ManyToMany(fetch = FetchType.EAGER)
    private Set<Role> roleSet;
}
