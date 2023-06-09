package com.example.rewardsbackend.repo;

import com.example.rewardsbackend.entity.Transaction;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
	
	List<Transaction> findByCustomerId(Long customerId);
	
}
