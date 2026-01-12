package com.mcintosh.mcintosh_digital_biz.service;

import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import jakarta.annotation.PostConstruct; // <--- CRITICAL FIX FOR SPRING BOOT 3

@Service
public class StripeService {

    @Value("${stripe.api.key}")
    private String apiKey;

    // Initialize Stripe API Key on startup
    @PostConstruct
    public void init() {
        Stripe.apiKey = apiKey;
    }

    public Session createCheckoutSession(String clientEmail) throws Exception {
        // Use localhost for testing so the redirect works on your machine
        String baseUrl = "http://localhost:3000"; 

        SessionCreateParams params = SessionCreateParams.builder()
            .setMode(SessionCreateParams.Mode.PAYMENT)
            .setSuccessUrl(baseUrl + "/success")
            .setCancelUrl(baseUrl + "/")
            .setCustomerEmail(clientEmail)
            .addLineItem(SessionCreateParams.LineItem.builder()
                .setQuantity(1L)
                .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                    .setCurrency("usd")
                    .setUnitAmount(10000L) // $100.00
                    .setProductData(SessionCreateParams.LineItem.PriceData.ProductData.builder()
                        .setName("Project Deposit - McIntosh Digital Solutions")
                        .setDescription("Secure initiation fee for development services.")
                        .build())
                    .build())
                .build())
            .build();

        return Session.create(params);
    }
}