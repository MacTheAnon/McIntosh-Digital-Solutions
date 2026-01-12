package com.mcintosh.mcintosh_digital_biz.controller;

import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins = "*") // For development; replace with your specific URL for production
public class PaymentController {

    @Value("${STRIPE_SECRET_KEY}")
    private String stripeSecretKey;

    @PostMapping("/create-session")
    public Map<String, String> createCheckoutSession() {
        // Use the key injected from Railway environment variables
        Stripe.apiKey = stripeSecretKey;
        
        Map<String, String> responseData = new HashMap<>();

        try {
            SessionCreateParams params = SessionCreateParams.builder()
                .addAllowedPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD)
                .setMode(SessionCreateParams.Mode.PAYMENT)
                .setSuccessUrl("https://mcintosh-digital-solutions.up.railway.app/?success=true")
                .setCancelUrl("https://mcintosh-digital-solutions.up.railway.app/?canceled=true")
                .addLineItem(
                    SessionCreateParams.LineItem.builder()
                        .setQuantity(1L)
                        .setPriceData(
                            SessionCreateParams.LineItem.PriceData.builder()
                                .setCurrency("usd")
                                .setUnitAmount(5000L) // $50.00
                                .setProductData(
                                    SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                        .setName("System Architecture Consultation")
                                        .build()
                                )
                                .build()
                        )
                        .build()
                )
                .build();

            Session session = Session.create(params);
            responseData.put("id", session.getId());
            return responseData;

        } catch (Exception e) {
            responseData.put("error", e.getMessage());
            return responseData;
        }
    }
}