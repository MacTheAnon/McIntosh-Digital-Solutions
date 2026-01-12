package com.mcintosh.mcintosh_digital_biz.controller;

import com.mcintosh.mcintosh_digital_biz.service.StripeService;
import com.stripe.model.checkout.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/payments")
@CrossOrigin(origins = "*") // Allows your frontend to communicate with this API
public class PaymentController {

    @Autowired
    private StripeService stripeService;

    /**
     * Endpoint to initiate the Secure Payment Protocol
     * Receives a request from React and returns a Stripe Session ID
     */
    @PostMapping("/create-session")
    public Map<String, String> createSession(@RequestBody Map<String, String> request) {
        Map<String, String> response = new HashMap<>();
        
        try {
            // Extracts the client email sent from your BookingForm.jsx
            String email = request.get("email");
            if (email == null || email.isEmpty()) {
                email = "client@mcintosh-digital.com"; // Default fallback
            }

            // Delegating the heavy lifting to the StripeService
            Session session = stripeService.createCheckoutSession(email);
            
            // Return only the session ID to the frontend
            response.put("id", session.getId());
            return response;

        } catch (Exception e) {
            response.put("error", e.getMessage());
            return response;
        }
    }

    @GetMapping("/health")
    public String checkIntegrity() {
        return "Backend System Integrity: 100%";
    }
}
                    