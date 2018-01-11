{% method %}
## /accounts/{accountId}/orders

GET is used to retrieve order ids and order details for previously attempted Telephone Number orders.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `page` | string | true | All Order retrievals must be paginated, using page and size indicators.  The page parameter contains the order-id that is to start the page, or "1" in the case of the first page. |
| `size` | integer | true | The size parameter indicates the number of orders to return in the payload |
| `customerOrderId` | string | true | The order ID that the Customer / Account assigned to the Order |
| `status` | string | true | the status of the orders that should be in the returned set |
| `userid` | string | true | The userid of the user that submitted the new number order |
| `startdate` | date | true | The first day of the search date range for a date-range-limited search of net number orders.  The format is YY-MM-DD. |
| `enddate` | date | true | The last day of the search date range for a date-range-limited search of net number orders.  The format is YY-MM-DD. |




{% common %}


## Example : The Order retrieval request will return a list of the orders that match the criteria imposed by the provided query parameters.  The orders list contains a detailed description of the order.  Notice that the first elements of the payload provide link information that can be used to page through a paginated list of orders.  Pagination can be controlled by use of the size and page query parameters.

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0"?>
<ResponseSelectWrapper>
    <ListOrderIdUserIdDate>
        <TotalCount>
            122
        </TotalCount>
        <Links>
            <first>
                <!-- Link=<https //api.inetwork.com 443/v1.0/accounts/9900012/orders?page=1&size=3>;rel="first"; -->
            </first>
            <next>
                <!-- Link=<https //api.inetwork.com 443/v1.0/accounts/9900012/orders?page=cbdcfc94-81b1-4ce9-8b6d-f8d6b85381ba&size=3>;rel="next"; -->
            </next>
        </Links>
        <OrderIdUserIdDate>
            <CountOfTNs>
                1
            </CountOfTNs>
            <lastModifiedDate>
                2013-12-20T06
            </lastModifiedDate>
            <OrderDate>
                2013-12-20T06
            </OrderDate>
            <orderId>
                c5d8d076-345c-45d7-87b3-803a35cca89b
            </orderId>
            <OrderStatus>
                COMPLETE
            </OrderStatus>
            <TelephoneNumberDetails>
                <States>
                    <StateWithCount>
                        <State>
                            VA
                        </State>
                        <Count>
                            1
                        </Count>
                    </StateWithCount>
                </States>
                <RateCenters>
                    <RateCenterWithCount>
                        <Count>
                            1
                        </Count>
                        <RateCenter>
                            LADYSMITH
                        </RateCenter>
                    </RateCenterWithCount>
                </RateCenters>
                <Cities>
                    <CityWithCount>
                        <City>
                            LADYSMITH
                        </City>
                        <Count>
                            1
                        </Count>
                    </CityWithCount>
                </Cities>
                <Tiers>
                    <TierWithCount>
                        <Tier>
                            0
                        </Tier>
                        <Count>
                            1
                        </Count>
                    </TierWithCount>
                </Tiers>
                <Vendors>
                    <VendorWithCount>
                        <VendorId>
                            49
                        </VendorId>
                        <VendorName>
                            Bandwidth CLEC
                        </VendorName>
                        <Count>
                            1
                        </Count>
                    </VendorWithCount>
                </Vendors>
            </TelephoneNumberDetails>
            <userId>
                bwc_user
            </userId>
        </OrderIdUserIdDate>
        <OrderIdUserIdDate>
            <CountOfTNs>
                0
            </CountOfTNs>
            <lastModifiedDate>
                2013-11-05T17
            </lastModifiedDate>
            <OrderDate>
                2013-11-05T17
            </OrderDate>
            <orderId>
                27da9f39-81f3-44ed-80ce-05ddf2db612d
            </orderId>
            <OrderStatus>
                FAILED
            </OrderStatus>
            <userId>
                wandedemo_user
            </userId>
        </OrderIdUserIdDate>
        <OrderIdUserIdDate>
            <CountOfTNs>
                1
            </CountOfTNs>
            <lastModifiedDate>
                2013-12-11T20
            </lastModifiedDate>
            <OrderDate>
                2013-12-11T20
            </OrderDate>
            <orderId>
                2bab589e-2cda-453b-9999-8f35441d4a1a
            </orderId>
            <OrderStatus>
                COMPLETE
            </OrderStatus>
            <TelephoneNumberDetails>
            </TelephoneNumberDetails>
        </OrderIdUserIdDate>
    </ListOrderIdUserIdDate>
</ResponseSelectWrapper>
```


{% endmethod %}