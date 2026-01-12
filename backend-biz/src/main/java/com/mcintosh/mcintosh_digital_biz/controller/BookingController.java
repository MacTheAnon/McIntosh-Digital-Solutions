package com.mcintosh.mcintosh_digital_biz.controller;

import com.mcintosh.mcintosh_digital_biz.model.Booking;
import com.mcintosh.mcintosh_digital_biz.service.StripeService;
import com.stripe.model.checkout.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/bookings")
// CRITICAL: This allows your React frontend to talk to this Java backend on Railway
@CrossOrigin(origins = "*") 
public class BookingController {

    @Autowired
    private StripeService stripeService;

    @PostMapping("/create-session")
    public ResponseEntity<?> createSession(@RequestBody Map<String, String> data) {
        try {
            String email = data.get("email");
            
            // 1. Call the service to create a Stripe session
            Session session = stripeService.createCheckoutSession(email);
            
            // 2. Wrap the Session ID in a JSON object to send back to React
            Map<String, String> response = new HashMap<>();
            response.put("sessionId", session.getId());
            response.put("url", session.getUrl()); // Optional: backup if direct redirect fails
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            // Log the error so you can see it in Railway Logs
            System.err.println("Stripe Session Error: " + e.getMessage());
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(500).body(errorResponse);
        }
    }
}