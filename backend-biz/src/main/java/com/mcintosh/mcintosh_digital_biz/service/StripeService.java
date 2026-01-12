package com.mcintosh.service;

import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class StripeService {

    @Value("${stripe.api.key}")
    private String apiKey;

    public Session createCheckoutSession(String clientEmail) throws Exception {
        Stripe.apiKey = apiKey;

        SessionCreateParams params = SessionCreateParams.builder()
            .setMode(SessionCreateParams.Mode.PAYMENT)
            .setSuccessUrl("https://mcintoshdigital.com/success")
            .setCancelUrl("https://mcintoshdigital.com/cancel")
            .setCustomerEmail(clientEmail)
            .addLineItem(SessionCreateParams.LineItem.builder()
                .setQuantity(1L)
                .setPriceData(SessionCreateParams.LineItem.PriceData.builder()
                    .setCurrency("usd")
                    .setUnitAmount(10000L) // $100.00 in cents
                    .setProductData(SessionCreateParams.LineItem.PriceData.ProductData.builder()
                        .setName("Project Deposit - McIntosh Digital Solutions")
                        .build())
                    .build())
                .build())
            .build();

        return Session.create(params);
    }
}