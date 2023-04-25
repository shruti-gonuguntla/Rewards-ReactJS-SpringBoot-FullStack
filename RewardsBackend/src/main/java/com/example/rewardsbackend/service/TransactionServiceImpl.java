package com.example.rewardsbackend.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.rewardsbackend.entity.Transaction;
import com.example.rewardsbackend.repo.TransactionRepository;

@Service
public class TransactionServiceImpl implements TransactionService {

	private final TransactionRepository txnRepository;
	
    public TransactionServiceImpl(TransactionRepository txnRepository) {
        this.txnRepository = txnRepository;
    }

	@Override
	public List<Transaction> getCustomerTransactions(Long customerId) {
		return txnRepository.findByCustomerId(customerId);
	}	

}
