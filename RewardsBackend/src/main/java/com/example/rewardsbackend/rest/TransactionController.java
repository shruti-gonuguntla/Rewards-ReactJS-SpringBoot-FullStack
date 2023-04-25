package com.example.rewardsbackend.rest;

import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.rewardsbackend.entity.Transaction;
import com.example.rewardsbackend.service.TransactionService;

@RestController
@RequestMapping("/api")
@CrossOrigin
public class TransactionController {

    private final TransactionService transactionService;
    
    public TransactionController(TransactionService transactionService) {
        this.transactionService = transactionService;
    }

    @GetMapping("/customers/{id}/transactions")
    public List<Transaction> getAllTxnsByCustomerId(@PathVariable Long id) {
        return transactionService.getCustomerTransactions(id);
    }

}

