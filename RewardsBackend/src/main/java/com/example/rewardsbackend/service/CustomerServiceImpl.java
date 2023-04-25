package com.example.rewardsbackend.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.stereotype.Service;

import com.example.rewardsbackend.entity.Customer;
import com.example.rewardsbackend.entity.Reward;
import com.example.rewardsbackend.repo.CustomerRepository;

@Service
public class CustomerServiceImpl implements CustomerService {

    private final CustomerRepository customerRepository;

    public CustomerServiceImpl(CustomerRepository customerRepository) {
        this.customerRepository = customerRepository;
    }

    public List<Customer> getAllCustomers() {
    	return customerRepository.findAll();
    }

    public List<Reward> getAllCustomerRewards() {
        return new ArrayList<Reward>() {{
            add(Reward.builder().id(1L).customerName("John Smith").rewardPoints(164L).build());
            add(Reward.builder().id(2L).customerName("Lucky").rewardPoints(578L).build());
            add(Reward.builder().id(3L).customerName("Krishna").rewardPoints(125L).build());
            add(Reward.builder().id(4L).customerName("Raj").rewardPoints(25L).build());
            add(Reward.builder().id(5L).customerName("Pete").rewardPoints(588L).build());
            add(Reward.builder().id(6L).customerName("Tejas LLC").rewardPoints(280L).build());
        }};
    }

}
