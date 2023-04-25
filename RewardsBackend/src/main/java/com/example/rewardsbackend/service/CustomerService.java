package com.example.rewardsbackend.service;

import java.util.List;

import com.example.rewardsbackend.entity.Customer;
import com.example.rewardsbackend.entity.Reward;

public interface CustomerService {

    List<Customer> getAllCustomers();

    List<Reward> getAllCustomerRewards();

}
