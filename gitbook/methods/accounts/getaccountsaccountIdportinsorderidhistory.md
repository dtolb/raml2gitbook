{% method %}
## /accounts/{accountId}/portins/{orderid}/history

Retrieves the history of the specified port-in order.


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
<OrderHistoryWrapper>
    <OrderHistory>
        <OrderDate>
            2014-07-29T17:12:29.495Z
        </OrderDate>
        <Note>
            LOA required
        </Note>
        <Author>
            jbm
        </Author>
        <Status>
            PENDING_DOCUMENTS
        </Status>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>
            2014-07-29T17:12:32.121Z
        </OrderDate>
        <Note>
            Order has been created
        </Note>
        <Author>
            System
        </Author>
        <Status>
            SUBMITTED
        </Status>
        <Difference>
            LoaDate : "" --&gt; Tue Jul 29 17:12:29 UTC 2014
        </Difference>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>
            2014-07-29T17:15:31.241Z
        </OrderDate>
        <Note>
            7999: E37 TN not found in PPS (PPS)
        </Note>
        <Author>
            System
        </Author>
        <Status>
            EXCEPTION
        </Status>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>
            2014-07-29T17:15:40.836Z
        </OrderDate>
        <Note>
            Order waiting for activation
        </Note>
        <Author>
            System
        </Author>
        <Status>
            FOC
        </Status>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>
            2014-07-29T17:16:20.347Z
        </OrderDate>
        <Note>
            Order is complete
        </Note>
        <Author>
            System
        </Author>
        <Status>
            COMPLETE
        </Status>
    </OrderHistory>
</OrderHistoryWrapper>
```


{% endmethod %}