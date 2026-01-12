package com.mcintosh.mcintosh_digital_biz.service;

import com.stripe.Stripe;
import com.stripe.model.checkout.Session;
import com.stripe.param.checkout.SessionCreateParams;
import jakarta.annotation.PostConstruct;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

@Service
public class StripeService {

    private static final Logger logger = LoggerFactory.getLogger(StripeService.class);

    // Fail-safe: Defaults to empty string if variable is missing
    @Value("${STRIPE_SECRET_KEY:}")
    private String stripeSecretKey;

    @PostConstruct
    public void init() {
        if (stripeSecretKey == null || stripeSecretKey.isEmpty()) {
            logger.error("SYSTEM CRITICAL: Stripe Secret Key is missing from Environment Variables.");
            logger.warn("Payment modules will remain in STANDBY mode.");
        } else {
            Stripe.apiKey = stripeSecretKey;
            logger.info("STRIPE PROTOCOL: Initialized successfully.");
        }
    }

    public Session createCheckoutSession(String clientEmail) throws Exception {
        // Ensure the key is set before attempting to call Stripe
        if (Stripe.apiKey == null || Stripe.apiKey.isEmpty()) {
            throw new IllegalStateException("Stripe API Key is not configured. Protocol aborted.");
        }

        // Executive Redirect: Points to your React Router /success path
        String baseUrl = "https://mcintosh-digital-solutions.up.railway.app"; 

        SessionCreateParams params = SessionCreateParams.builder()
            .setMode(SessionCreateParams.Mode.PAYMENT)
            .setSuccessUrl(baseUrl + "/success")
            .setCancelUrl(baseUrl + "/")
            .setCustomerEmail(clientEmail)
            .addPaymentMethodType(SessionCreateParams.PaymentMethodType.CARD) 
            .addLineItem(
                SessionCreateParams.LineItem.builder()
                    .setQuantity(1L)
                    .setPriceData(
                        SessionCreateParams.LineItem.PriceData.builder()
                            .setCurrency("usd")
                            .setUnitAmount(10000L) // $100.00 represented in cents
                            .setProductData(
                                SessionCreateParams.LineItem.PriceData.ProductData.builder()
                                    .setName("Project Deposit - McIntosh Digital Solutions")
                                    .setDescription("Secure initiation fee for development services.")
                                    .build()
                            )
                            .build()
                    )
                    .build()
            )
            .build();

        return Session.create(params);
    }

    public String getApiKey() {
        return stripeSecretKey;
    }
}