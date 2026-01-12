package com.mcintosh.mcintosh_digital_biz.config;

import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.CorsRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class WebConfig implements WebMvcConfigurer {

    @Override
    public void addCorsMappings(CorsRegistry registry) {
        registry.addMapping("/**")
                .allowedOrigins("https://mcintosh-digital-solutions.up.railway.app", "http://localhost:3000")
                .allowedMethods("GET", "POST", "PUT", "DELETE", "OPTIONS") // OPTIONS is critical!
                .allowedHeaders("*")
                .allowCredentials(true)
                .maxAge(3600); // Caches the handshake for 1 hour
    }
}