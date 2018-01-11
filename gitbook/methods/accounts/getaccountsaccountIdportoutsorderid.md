{% method %}
## /accounts/{accountId}/portouts/{orderid}

Retrieves the information associated with the specified port-out ID number.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |






{% common %}


## Example : The information has been successfully retrieved and displayed out to the payload.

* Response: 200

{% sample lang="xml" %}

```xml
<LnpOrderResponse>
    <RequestedFocDate>
        2014-08-02T12:34:37Z
    </RequestedFocDate>
    <ActualFocDate>
        2014-08-02T12:34:37Z
    </ActualFocDate>
    <PON>
        8a89dea8-a145-4796-8e73-0d859fc74cad
    </PON>
    <AccountId>
        20
    </AccountId>
    <OrderCreateDate>
        2014-07-31T16:34:37.480Z
    </OrderCreateDate>
    <LastModifiedDate>
        2014-07-31T16:34:37.530Z
    </LastModifiedDate>
    <userId>
        System
    </userId>
    <PortOutStatus>
        NEW
    </PortOutStatus>
    <SPID>
        512E
    </SPID>
</LnpOrderResponse>
```


{% endmethod %}