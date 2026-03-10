package com.brutosburguer.backend.controller.SecurityController;


import com.brutosburguer.backend.controller.dtos.TokenDTO.LoginRequest;
import com.brutosburguer.backend.controller.dtos.TokenDTO.LoginResponse;
import com.brutosburguer.backend.repository.UsuariosRepository.UsuariosRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class TokenController {

    private final JwtEncoder jwtEncoder;
    private UsuariosRepository usuariosRepository;


    public TokenController(JwtEncoder jwtEncoder, UsuariosRepository usuariosRepository) {
        this.jwtEncoder = jwtEncoder;
        this.usuariosRepository = usuariosRepository;

    }

    /**
     * - Recebe uma requisicao do usuario LoginRequest
     * - Responde para o usuario se os dados de login existe
     * */
    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login (@RequestBody LoginRequest loginRequest){
           var verificaUsuario =  usuariosRepository.findByUserName(loginRequest.nomeUsuario());
            if (verificaUsuario.isPresent()){
                //TODO FINALIZAR ARQUITETURA
            }
    }
}
