package com.mcintosh.model;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Data
public class Booking {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    
    private String clientName;
    private String clientEmail;
    
    @Column(length = 1000)
    private String taskDescription;
    
    private boolean depositPaid = false;
    private String stripeSessionId;
}