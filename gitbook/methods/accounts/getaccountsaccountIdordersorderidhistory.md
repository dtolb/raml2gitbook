{% method %}
## /accounts/{accountId}/orders/{orderid}/history

Retrieve the history information associated with an order



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |






{% common %}


## Example : The history payload is a set of history records, each of which contains:
<ul>
<li>the event date and time</li>
<li>a message describing the event</li>
<li>the user causing the event</li>
<li>the order status at the time of the event</li>
</ul>
In the case of an order with no events other than creation, the payload will be empty.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<OrderHistoryWrapper>
    <OrderHistory>
        <OrderDate>
            2014-05-20T14:21:43.937Z
        </OrderDate>
        <Note>
            Order backordered - awaiting additional numbers
        </Note>
        <Author>
            System
        </Author>
        <Status>
            BACKORDERED
        </Status>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>
            2014-05-20T14:24:43.428Z
        </OrderDate>
        <Note>
            Order backordered - awaiting additional numbers
        </Note>
        <Author>
            System
        </Author>
        <Status>
            BACKORDERED
        </Status>
        <Difference>
            CustomerOrderId : "" --&gt; hello
        </Difference>
    </OrderHistory>
</OrderHistoryWrapper>
```


{% endmethod %}