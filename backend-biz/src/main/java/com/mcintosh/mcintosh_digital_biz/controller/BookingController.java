package com.mcintosh.mcintosh_digital_biz.controller; // FIXED PACKAGE

// FIXED IMPORTS to match your folder structure
import com.mcintosh.mcintosh_digital_biz.model.Booking;
import com.mcintosh.mcintosh_digital_biz.service.StripeService;

import com.stripe.model.checkout.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
// Ensure this matches your React frontend URL exactly
@CrossOrigin(origins = "https://mcintosh-digital-solutions.up.railway.app")
public class BookingController {

    @Autowired
    private StripeService stripeService;

    @PostMapping("/initiate")
    public String initiateBooking(@RequestBody Booking booking) throws Exception {
        // 1. Create the Stripe Session
        Session session = stripeService.createCheckoutSession(booking.getClientEmail());
        
        // 2. Return the URL for the user to go pay
        return session.getUrl();
    }
}