package com.example.rewardsbackend.rest;

import com.example.rewardsbackend.entity.Customer;
import com.example.rewardsbackend.entity.Reward;
import com.example.rewardsbackend.repo.CustomerRepository;
import com.example.rewardsbackend.repo.TransactionRepository;
import com.example.rewardsbackend.service.CustomerService;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import java.util.ArrayList;
import java.util.List;

import static org.mockito.BDDMockito.given;
import static org.hamcrest.CoreMatchers.is;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@WebMvcTest(CustomerController.class)
public class CustomerControllerTests {

	@Autowired
	private MockMvc mockMvc;

	@MockBean
	private CustomerService customerService;
	@MockBean
	private CustomerRepository customerRepository;
	@MockBean
	private TransactionRepository txnRepository;

	@Test
	public void testGetAllCustomers() throws Exception {

		// given - list of Customers
		List<Customer> customerList = new ArrayList<>();
		customerList.add(Customer.builder().id(1L).name("John Smith").build());
		customerList.add(Customer.builder().id(2L).name("Lucky").build());
		customerList.add(Customer.builder().id(3L).name("Krishna").build());
		customerList.add(Customer.builder().id(4L).name("Raj").build());
		customerList.add(Customer.builder().id(5L).name("Pete").build());
		customerList.add(Customer.builder().id(6L).name("Tejas LLC").build());
		given(customerService.getAllCustomers()).willReturn(customerList);

		// when - get all Customers
		ResultActions response = mockMvc.perform(get("/api/customers"));

		// then - return Customer List
		response.andExpect(status().isOk()).andDo(print()).andExpect(jsonPath("$.size()", is(customerList.size())));
	}

	@Test
	public void testGetAllCustomerRewards() throws Exception {

		// given
		List<Reward> custRewardsList = new ArrayList<Reward>() {
			{
				add(Reward.builder().id(1L).customerName("John Smith").rewardPoints(500L).build());
				add(Reward.builder().id(2L).customerName("Lucky").rewardPoints(400L).build());
				add(Reward.builder().id(3L).customerName("Krishna").rewardPoints(600L).build());
				add(Reward.builder().id(4L).customerName("Raj").rewardPoints(300L).build());
				add(Reward.builder().id(5L).customerName("Pete").rewardPoints(450L).build());
				add(Reward.builder().id(6L).customerName("Tejas LLC").rewardPoints(800L).build());
			}
		};
		given(customerService.getAllCustomerRewards()).willReturn(custRewardsList);

		// when
		ResultActions response = mockMvc.perform(get("/api/rewards"));

		// then
		response.andExpect(status().isOk()).andDo(print()).andExpect(jsonPath("$.size()", is(custRewardsList.size())));
	}

}
