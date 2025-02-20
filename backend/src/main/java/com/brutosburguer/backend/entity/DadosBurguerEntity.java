package com.brutosburguer.backend.entity;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "DadosBurguer")
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class DadosBurguerEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    //TODO configuar nome da coluna
    @JsonProperty("titulo_burguer")
    private String tituloBurguer;
    @JsonProperty("descricao_burguer")
    private String descricaoBurguer;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTituloBurguer() {
        return tituloBurguer;
    }

    public void setTituloBurguer(String tituloBurguer) {
        this.tituloBurguer = tituloBurguer;
    }

    public String getDescricaoBurguer() {
        return descricaoBurguer;
    }

    public void setDescricaoBurguer(String descricaoBurguer) {
        this.descricaoBurguer = descricaoBurguer;
    }
}
