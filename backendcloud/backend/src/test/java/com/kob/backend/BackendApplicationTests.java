package com.kob.backend;

import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class BackendApplicationTests {

    @Test
    void contextLoads() {
        System.out.println(new org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder().encode("pzms"));
    }

}
