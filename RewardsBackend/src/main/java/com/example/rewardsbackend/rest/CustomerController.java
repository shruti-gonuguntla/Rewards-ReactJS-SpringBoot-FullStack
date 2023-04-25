package com.example.rewardsbackend.rest;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.rewardsbackend.entity.Customer;
import com.example.rewardsbackend.entity.Reward;
import com.example.rewardsbackend.service.CustomerService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class CustomerController {

    private final CustomerService customerService;

    public CustomerController(CustomerService customerService) {
        this.customerService = customerService;
    }

    @GetMapping("/customers")
    public List<Customer> getAllCustomers() {
        return customerService.getAllCustomers();
    }

    @GetMapping("/rewards")
    public List<Reward> getAllCustomerRewards() {
        return customerService.getAllCustomerRewards();
    }

}
