package com.brutosburguer.backend.entity.CardsBurguerEntity;


import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "tb_dadosCardsBurguers")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@EqualsAndHashCode
public class DadosCardsBurguerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_dados_cards_burguer")
    private Long id;
    //TODO configuar nome da coluna
    @Column(name = "titulo_burguer")
    private String tituloBurguer;
    @Column(name = "descricao_burguer")
    private String descricaoBurguer;

}
