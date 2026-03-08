package com.brutosburguer.backend.configuration.Security;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.Customizer;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.web.SecurityFilterChain;

@Configuration
@EnableWebSecurity
public class SecurityConfig {

    /**
     * Aqui estão as quatro funções principais do nosso método SecurityFilterChain:
     * -Filtragem de Requisições: Ele decide quais URLs são públicas (como a página de login ou /public/**) e quais exigem que o usuário esteja logado.
     * -Autenticação: Verifica a identidade do usuário (via formulário de login, tokens JWT, OAuth2, etc.).
     * -Autorização: Após saber quem é o usuário, ele verifica se esse usuário tem permissão (Role) para acessar aquele recurso específico.
     * -Proteção contra Ataques: Já vem configurado para barrar ataques comuns, como CSRF (Cross-Site Request Forgery) e adicionar headers de segurança (como o CORS).
     *
     * ->Após essa configuração macro do JWT, precisa-se definir o conceito de chave-publica e chave-privada
     */
    @Bean
    private SecurityFilterChain securityFilterChain(HttpSecurity httpSecurity) throws Exception {
        httpSecurity.authorizeHttpRequests(authorizationManagerRequestMatcherRegistry ->  authorizationManagerRequestMatcherRegistry
                .anyRequest().authenticated())
                .csrf(AbstractHttpConfigurer::disable) //Desabilitar apenas localmente
                .oauth2ResourceServer(httpSecurityOAuth2ResourceServerConfigurer -> httpSecurityOAuth2ResourceServerConfigurer.jwt(Customizer.withDefaults()))
                //TODO finalizar metodo SecurityFilterChain nao esta em produto, portanto não quebra
                .sessionManagement(httpSecuritySessionManagementConfigurer -> httpSecuritySessionManagementConfigurer.sessionCreationPolicy(SessionCreationPolicy.STATELESS));


        return httpSecurity.build();
    }
}
