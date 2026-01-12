package com.mcintosh.mcintosh_digital_biz.controller;

import com.stripe.model.Event;
import com.stripe.net.Webhook;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/webhooks")
public class WebhookController {

    private static final Logger logger = LoggerFactory.getLogger(WebhookController.class);

    @Value("${STRIPE_WEBHOOK_SECRET:}")
    private String endpointSecret;

    @PostMapping("/stripe")
    public ResponseEntity<String> handleStripeWebhook(@RequestBody String payload, @RequestHeader("Stripe-Signature") String sigHeader) {
        Event event;

        try {
            // Verify the event came from Stripe using the signature
            event = Webhook.constructEvent(payload, sigHeader, endpointSecret);
        } catch (Exception e) {
            logger.error("WEBHOOK ERROR: Signature verification failed. Protocol breach?");
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Invalid Signature");
        }

        // Handle the specific event type
        if ("checkout.session.completed".equals(event.getType())) {
            logger.info("STRIPE PROTOCOL: Payment Confirmed. Ticket ID generated.");
            // Here you can trigger an automated email or update a database
        }

        return ResponseEntity.ok("Received");
    }
}