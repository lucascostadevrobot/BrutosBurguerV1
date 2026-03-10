package com.brutosburguer.backend.controller.dtos.TokenDTO;

public record LoginResponse(String acessToken, Long expiresIn) {
}
