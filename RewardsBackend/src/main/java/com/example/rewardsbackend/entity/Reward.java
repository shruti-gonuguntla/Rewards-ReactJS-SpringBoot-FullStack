package com.example.rewardsbackend.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Reward {

    private Long id;
    private String customerName;
    private Long rewardPoints;

}
