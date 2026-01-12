package com.mcintosh.controller;

import com.mcintosh.model.Booking;
import com.mcintosh.service.StripeService;
import com.stripe.model.checkout.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/bookings")
@CrossOrigin(origins = "http://localhost:3000")
public class BookingController {

    @Autowired
    private StripeService stripeService;

    @PostMapping("/initiate")
    public String initiateBooking(@RequestBody Booking booking) throws Exception {
        // 1. Create the Stripe Session
        Session session = stripeService.createCheckoutSession(booking.getClientEmail());
        
        // 2. You would save the booking to your DB here with 'depositPaid = false'
        // booking.setStripeSessionId(session.getId());
        
        // 3. Return the URL for the user to go pay
        return session.getUrl();
    }
}