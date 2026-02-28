package com.brutosburguer.backend;

import com.brutosburguer.backend.repository.UsuariosRepository.UsuariosRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class StartApp implements CommandLineRunner {
    @Autowired
    private UsuariosRepository usuariosRepository;
    @Override
    public void run(String... args) throws Exception {

    }
}
