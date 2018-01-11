{% method %}
## /accounts/{accountId}/sites/{siteId}/orders

The GET method retrieves all the orders associated with the given site.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `size` | integer | true | Sets the amount of responses per page. |
| `page` | integer | true | The first orders ID to show on the page. "1" is used as a convention for the first page. |




{% common %}


## Example : 

* Response: 200

{% sample lang="xml" %}

```xml
<ResponseSelectWrapper>
    <ListOrderIdUserIdDate>
        <TotalCount>
            47
        </TotalCount>
        <Links>
            <first>
                                Link=
                <http: page="fa7bc01a" size="30" rel="first" e="30">
                    ;rel="next";            
                </http:>
            </first>
            <OrderIdUserIdDate>
                <CountOfTNs>
                    1
                </CountOfTNs>
                <userId>
                    jbm
                </userId>
                <lastModifiedDate>
                    2014-01-06T19:09:44.027Z
                </lastModifiedDate>
                <OrderType>
                    new_number
                </OrderType>
                <OrderDate>
                    2014-01-06T19:09:43.695Z
                </OrderDate>
                <orderId>
                    13c97416-9eee-4da3-aff8-ba85d1297ef2
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
                                GLOUCESTER
                            </RateCenter>
                        </RateCenterWithCount>
                    </RateCenters>
                    <Cities>
                        <CityWithCount>
                            <City>
                                GLOUCESTER
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
            </OrderIdUserIdDate>
        </Links>
    </ListOrderIdUserIdDate>
</ResponseSelectWrapper>
```

## Example : Orders cannot be found for that site. Possible explanations:
<ul>
    <li>There are no orders associated with that site.</li>
    <li>The given parameters are invalid.</li>
</ul>


* Response: 404

{% sample lang="xml" %}

```xml
<Links>
    <first>
         Link=
        <http: page="1" e="1" size="300" rel="first">
        </http:>
        st"; 
    </first>
</Links>
```


{% endmethod %}