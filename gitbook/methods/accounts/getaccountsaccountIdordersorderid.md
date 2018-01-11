{% method %}
## /accounts/{accountId}/orders/{orderid}

GET all of the details associated with an identified order


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `tndetail` | boolean | true | if true, and extended payload describing details about the ordered telephone numbers will be provided |




{% common %}


## Example : 

* Response: 200

{% sample lang="xml" %}

```xml
<OrderResponse>
    <CompletedQuantity>
        1
    </CompletedQuantity>
    <CreatedByUser>
        jbm
    </CreatedByUser>
    <LastModifiedDate>
        2014-01-06T19:09:44.027Z
    </LastModifiedDate>
    <OrderCompleteDate>
        2014-01-06T19:09:44.041Z
    </OrderCompleteDate>
    <Order>
        <CustomerOrderId>
            123456789
        </CustomerOrderId>
        <Name>
            Area Code Order
        </Name>
        <OrderCreateDate>
            2014-01-06T19:09:43.695Z
        </OrderCreateDate>
        <PeerId>
            303716
        </PeerId>
        <BackOrderRequested>
            false
        </BackOrderRequested>
        <AreaCodeSearchAndOrderType>
            <AreaCode>
                804
            </AreaCode>
            <Quantity>
                1
            </Quantity>
        </AreaCodeSearchAndOrderType>
        <TnAttributes>
            <TnAttribute>
                Protected
            </TnAttribute>
        </TnAttributes>
        <PartialAllowed>
            true
        </PartialAllowed>
        <SiteId>
            743
        </SiteId>
    </Order>
    <OrderStatus>
        COMPLETE
    </OrderStatus>
    <CompletedNumbers>
        <TelephoneNumber>
            <FullNumber>
                8042105666
            </FullNumber>
        </TelephoneNumber>
    </CompletedNumbers>
    <FailedQuantity>
        0
    </FailedQuantity>
</OrderResponse>
```


{% endmethod %}