{% method %}
## /accounts/{accountId}/lsrorders/{orderid}/history

Retrieves the history of the specified lsr order.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |






{% common %}


## Example : The history has been successfully retrieved and displayed in the payload.

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<OrderHistoryWrapper>
    <OrderHistory>
        <OrderDate>
            2015-03-02T15:36:31.835Z
        </OrderDate>
        <Note>
            LSR has been received by the system and is being processed
        </Note>
        <Author>
            lsrOnly
        </Author>
        <Status>
            PENDING
        </Status>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>
            2015-03-02T15:37:33.457Z
        </OrderDate>
        <Note>
            Port-out date has been set
        </Note>
        <Status>
            FOC
        </Status>
        <Difference>
            ActualFocDate : "" --&gt; 2015-06-27
        </Difference>
    </OrderHistory>
</OrderHistoryWrapper>
```


{% endmethod %}