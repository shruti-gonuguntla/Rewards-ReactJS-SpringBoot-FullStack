package com.example.rewardsbackend.service;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.BDDMockito.given;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.MockitoAnnotations;

import com.example.rewardsbackend.entity.Customer;
import com.example.rewardsbackend.entity.Reward;
import com.example.rewardsbackend.repo.CustomerRepository;

public class CustomerServiceImplTest {
	
	@Test
	public void givenCustRepo_findAll_when_getAllCusts_then_successResponse() {
		new TestSpec()
			.given_custRepository_findAll()
			.when_custService_getAllCustomers()
			.then_verify_customerList();
	}
	
	@Test
	public void givenCustList_when_getAllCustRewards_then_successResponse() {
		new TestSpec()
			.given_customersList()
			.when_custService_getAllCustomerRewards()
			.then_verify_customerRewards();
	}
	
	static class TestSpec {
		
		@Mock
		CustomerRepository customerRepository;
		@InjectMocks
		CustomerServiceImpl customerServiceImpl;
		
		List<Customer> expectedOutput;
		List<Customer> actualOutput;
		
		List<Reward> expectedCustRewards;
		List<Reward> actualCustRewards;
		
		TestSpec() {
			MockitoAnnotations.openMocks(this);
		}
		
		TestSpec given_custRepository_findAll() {
			expectedOutput = new ArrayList<Customer>() {
				{
					add(Customer.builder().id(1L).name("John Smith").build());
					add(Customer.builder().id(2L).name("Lucky").build());
					add(Customer.builder().id(3L).name("Krishna").build());
					add(Customer.builder().id(4L).name("Raj").build());
					add(Customer.builder().id(5L).name("Pete").build());
					add(Customer.builder().id(6L).name("Tej LLC").build());
				}
			};
			given(customerRepository.findAll()).willReturn(expectedOutput);
			return this;
		}

		TestSpec when_custService_getAllCustomers() {
			actualOutput = customerServiceImpl.getAllCustomers();
			return this;
		}

		TestSpec then_verify_customerList() {
			assertThat(actualOutput).isNotNull();
			assertThat(actualOutput.size()).isEqualTo(expectedOutput.size());
			return this;
		}
		
		TestSpec given_customersList() {
			expectedCustRewards = new ArrayList<Reward>() {
				{
		            add(Reward.builder().id(1L).customerName("John Smith").rewardPoints(500L).build());
		            add(Reward.builder().id(2L).customerName("Lucky").rewardPoints(400L).build());
		            add(Reward.builder().id(3L).customerName("Krishna").rewardPoints(600L).build());
		            add(Reward.builder().id(4L).customerName("Raj").rewardPoints(300L).build());
		            add(Reward.builder().id(5L).customerName("Pete").rewardPoints(450L).build());
		            add(Reward.builder().id(6L).customerName("Tejas LLC").rewardPoints(800L).build());
				}
			};
			return this;
		}
		
		TestSpec when_custService_getAllCustomerRewards() {
			actualCustRewards = customerServiceImpl.getAllCustomerRewards();
			return this;
		}
		
		TestSpec then_verify_customerRewards() {
			assertThat(expectedCustRewards).isNotNull();
			assertThat(actualCustRewards.size()).isEqualTo(expectedCustRewards.size());
			return this;
		}
		
	}

}
