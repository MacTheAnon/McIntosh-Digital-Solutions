package com.mcintosh.mcintosh_digital_biz.controller;

import com.mcintosh.mcintosh_digital_biz.service.StripeService;
import com.stripe.model.checkout.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("/api/bookings")
// @CrossOrigin removed to allow WebConfig to handle security globally
public class BookingController {

    @Autowired
    private StripeService stripeService;

    @PostMapping("/create-session")
    public ResponseEntity<?> createSession(@RequestBody Map<String, String> data) {
        try {
            String email = data.get("email");
            Session session = stripeService.createCheckoutSession(email);
            
            Map<String, String> response = new HashMap<>();
            response.put("sessionId", session.getId());
            response.put("url", session.getUrl());
            
            return ResponseEntity.ok(response);
            
        } catch (Exception e) {
            Map<String, String> errorResponse = new HashMap<>();
            errorResponse.put("error", e.getMessage());
            return ResponseEntity.status(500).body(errorResponse);
        }
    }
}