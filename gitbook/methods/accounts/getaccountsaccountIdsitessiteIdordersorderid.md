{% method %}
## /accounts/{accountId}/sites/{siteId}/orders/{orderid}




### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |
| `orderid` | string | true |






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
        <siteId>
            743
        </siteId>
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