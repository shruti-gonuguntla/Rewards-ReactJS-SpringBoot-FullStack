package com.example.rewardsbackend.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.rewardsbackend.entity.Transaction;
import com.example.rewardsbackend.repo.TransactionRepository;

public class TransactionServiceImplTest {

	@Test
	public void givenCustId_when_getAllCustTxns_then_successResponse() {
		new TestSpec()
			.given_customer_id()
			.given_txnRepository_findByCustomerId()
			.when_getCustomerTransactions()
			.then_verify_customerTxnList();
	}

	static class TestSpec {

		@Mock
		TransactionRepository txnRepository;
		@InjectMocks
		TransactionServiceImpl transactionServiceImpl;

		Long customerId;
		List<Transaction> expectedOutput;
		List<Transaction> actualOutput;

		TestSpec() {
			MockitoAnnotations.openMocks(this);
		}

		TestSpec given_customer_id() {
			customerId = 3L;
			return this;
		}

		TestSpec given_txnRepository_findByCustomerId() {
			expectedOutput = new ArrayList<Transaction>() {
				{
					add(Transaction.builder().id("21").price(200.00).description("Training Subscription")
							.dateTime("03-01-2023 10:07:44 AM").build());
					add(Transaction.builder().id("22").price(1.00).description("Verify card")
							.dateTime("02-09-2023 06:19:07 PM").build());
					add(Transaction.builder().id("23").price(80.00).description("Kris Foods")
							.dateTime("02-11-2023 07:08:10 PM").build());
					add(Transaction.builder().id("24").price(224.00).description("Pan at Walmart")
							.dateTime("03-27-2023 08:06:16 PM").build());
				}
			};
			given(txnRepository.findByCustomerId(any())).willReturn(expectedOutput);
			return this;
		}

		TestSpec when_getCustomerTransactions() {
			actualOutput = transactionServiceImpl.getCustomerTransactions(customerId);
			return this;
		}

		TestSpec then_verify_customerTxnList() {
			assertThat(actualOutput).isNotNull();
			assertThat(actualOutput.size()).isEqualTo(expectedOutput.size());
			return this;
		}

	}

}
