package com.example.rewardsbackend.rest;

import static org.hamcrest.CoreMatchers.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultHandlers.print;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.ArrayList;
import java.util.List;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.ResultActions;

import com.example.rewardsbackend.entity.Transaction;
import com.example.rewardsbackend.repo.TransactionRepository;
import com.example.rewardsbackend.service.TransactionService;

@WebMvcTest(TransactionController.class)
public class TransactionControllerTests {
	
	@Autowired private MockMvc mockMvc;
	
	@MockBean private TransactionService transactionService;
	@MockBean private TransactionRepository txnRepository;

    @Test
    public void testGetAllTxnsByCustomerId() throws Exception {

        //given
        List<Transaction> customerTxnList = new ArrayList<>();
        customerTxnList.add(Transaction.builder().id("61").price(120.00).description("Preschool Bill").dateTime("02-21-2023 10:07:55 AM").build());
        customerTxnList.add(Transaction.builder().id("62").price(150.00).description("Shnucks Misc").dateTime("03-24-2023 11:07:29 AM").build());
        customerTxnList.add(Transaction.builder().id("63").price(90.00).description("Paypal Bill pay").dateTime("04-22-2023 04:07:39 PM").build());

        given(transactionService.getCustomerTransactions(any()))
                .willReturn(customerTxnList);

        //when
        ResultActions response = mockMvc.perform(get("/api/customers/6/transactions"));

        //then
        response.andExpect(status().isOk())
                .andDo(print())
                .andExpect(jsonPath("$.size()",
                        is(customerTxnList.size())));
    }

}
