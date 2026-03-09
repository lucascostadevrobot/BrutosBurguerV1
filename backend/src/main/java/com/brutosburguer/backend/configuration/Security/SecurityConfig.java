package com.brutosburguer.backend.configuration.Security;

import com.nimbusds.jose.jwk.JWK;
import com.nimbusds.jose.jwk.JWKSet;
import com.nimbusds.jose.jwk.RSAKey;
import com.nimbusds.jose.jwk.source.ImmutableJWKSet;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.oauth2.jwt.JwtDecoder;
import org.springframework.security.oauth2.jwt.JwtEncoder;
import org.springframework.security.oauth2.jwt.NimbusJwtDecoder;
import org.springframework.security.oauth2.jwt.NimbusJwtEncoder;
import org.springframework.security.web.SecurityFilterChain;

import java.security.interfaces.RSAPrivateKey;
import java.security.interfaces.RSAPublicKey;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    @Value("${jwt.public.key}")
    private RSAPublicKey publicKey;

    @Value("${jwt.private.key}")
    private RSAPrivateKey privateKey;

    /**
     * Aqui estão as quatro funções principais do nosso método SecurityFilterChain:
     * -Filtragem de Requisições: Ele decide quais URLs são públicas (como a página de login ou /public/**) e quais exigem que o usuário esteja logado.
     * -Autenticação: Verifica a identidade do usuário (via formulário de login, tokens JWT, OAuth2, etc.).
     * -Autorização: Após saber quem é o usuário, ele verifica se esse usuário tem permissão (Role) para acessar aquele recurso específico.
     * -Proteção contra Ataques: Já vem configurado para barrar ataques comuns, como CSRF (Cross-Site Request Forgery) e adicionar headers de segurança (como o CORS).
     * <p>
     * ->Após essa configuração macro do JWT, precisa-se definir o conceito de chave-publica e chave-privada
     */
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.authorizeHttpRequests(authorizationManagerRequestMatcherRegistry -> authorizationManagerRequestMatcherRegistry
                        .anyRequest().authenticated())
                .csrf(AbstractHttpConfigurer::disable) //Desabilitar apenas localmente
                .oauth2ResourceServer(httpSecurityOAuth2ResourceServerConfigurer -> httpSecurityOAuth2ResourceServerConfigurer.jwt(Customizer.withDefaults()))
                //TODO finalizar metodo SecurityFilterChain nao esta em produto, portanto não quebra
                .sessionManagement(httpSecuritySessionManagementConfigurer -> httpSecuritySessionManagementConfigurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS));


        return httpSecurity.build();
    }

    /**
     * Configuração dos Encoderes e Decoders
     *Encoder → transforma uma informação em outro formato
     * Decoder → reconstrói a informação original
     *
     * No contexto do SpringSecurity + JWT os encoders e decoders estão relacionados a assinatura dos tokens
     *
     * Enconder -> Cria o token (gera o JWT) | Assina com uma chave privada
     * Decoder -> Verifica o token recebido | JwtDecoder valida assinatura
     */

    @Bean
    public JwtDecoder jwtDecoder (){
        return NimbusJwtDecoder.withPublicKey(publicKey).build();
    }

    @Bean
    public JwtEncoder jwtEncoder(){
        JWK jwk = new RSAKey.Builder(this.publicKey).privateKey(privateKey).build();
        var jwks =  new ImmutableJWKSet<>(new JWKSet(jwk));
        return new NimbusJwtEncoder(jwks);
    }
}
