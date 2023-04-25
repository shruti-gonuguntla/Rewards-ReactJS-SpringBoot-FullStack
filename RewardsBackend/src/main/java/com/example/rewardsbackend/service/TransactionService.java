package com.example.rewardsbackend.service;

import java.util.List;

import com.example.rewardsbackend.entity.Transaction;

public interface TransactionService {
	
	List<Transaction> getCustomerTransactions(Long customerId);

}
