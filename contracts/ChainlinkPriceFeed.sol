// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceConsumerV3 {
    AggregatorV3Interface internal priceFeed;

    /**
     * Network: Goerli
     * Aggregator: UTC/USD
     * Decimals: 8
     * Address: 0xA39434A63A52E749F02807ae27335515BA4b07F7
     */
    constructor() {
        priceFeed = AggregatorV3Interface(
            0xA39434A63A52E749F02807ae27335515BA4b07F7
        );
    }

    /**
     * Returns the latest price
     */
    function getLatestPrice() public view returns (int256) {
        (
            ,
            /*uint80 roundID*/
            int256 price,
            ,
            ,

        ) = /*uint startedAt*/
            /*uint timeStamp*/
            /*uint80 answeredInRound*/
            priceFeed.latestRoundData();
        return price;
    }
}
