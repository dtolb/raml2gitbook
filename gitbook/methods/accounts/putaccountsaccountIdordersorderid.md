{% method %}
## /accounts/{accountId}/orders/{orderid}

With the introduction of Backorder capabilities, new number orders may stay in backordered state while the order is filled.   While in this state it is possible to update the modifiable fields in the record, as well as to request that backorder processing of the order be ended.
The fields that can be updated are...
<ul>
<li>The order name</li>
<li>The customer order id</li>
<li>The backordered state.</li>
</ul>
Specifying a &lt;CloseOrder&gt; value of true will cancel the backorder request, leaving the currently ordered numbers on the account.  No further numbers will be added to the account as a result of the order.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |





## Example Request
```xml
<?xml version="1.0" encoding="UTF-8"?>
<Order>
    <Name>
        Available Telephone Number order
    </Name>
    <CustomerOrderId>
        123456789
    </CustomerOrderId>
    <CloseOrder>
        true
    </CloseOrder>
</Order>
```


{% common %}


## Example : The order has been successfully updated.   The payload contains no content, but a 200 OK indicates success.

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<OrderResponse/>
```


{% endmethod %}