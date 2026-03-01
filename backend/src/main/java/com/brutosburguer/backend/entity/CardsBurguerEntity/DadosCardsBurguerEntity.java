package com.brutosburguer.backend.entity.CardsBurguerEntity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
@Table(name = "dados_cards_burguer_entity")
public class DadosCardsBurguerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //TODO configuar nome da coluna
    //@Column(name = "titulo_burguer")
    private String tituloBurguer;
   // @Column(name = "descricao_burguer")
    private String descricaoBurguer;
}
