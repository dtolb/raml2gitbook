{% method %}
## /accounts/{accountId}/dldas/{orderid}/history

Retrieve the history information associated with a named DLDA order.  This indicates the various states that the order has passed through, as well as the current state of the order as the last entry.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |






{% common %}


## Example : The history payload is a set of history records, each of which contains:
    <table style="text-align: left; width: 80%;" border="1" cellpadding="2" cellspacing="2">
        <tbody>
            <tr>
                <td>OrderDate</td>
                <td>The date that the order history event happened</td>
            </tr>
            <tr>
                <td>Status</td>
                <td>The new state of the DLDA order - RECEIVED, PROCESSING, COMPLETE, PARTIAL, FAILED</td>
            </tr>
            <tr>
                <td>Note</td>
                <td>A Note or additional information included with the state change </td>
           </tr>
           <tr>
                <td>Author</td>
                <td>The user id that implemented the state change</td>
            </tr>
        </tbody>
    </table>


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0"?>
<OrderHistoryWrapper>
    <OrderHistory>
        <OrderDate>
            2014-09-04T16:28:11.320Z
        </OrderDate>
        <Note>
            The DL/DA request has been received
        </Note>
        <Author>
            jbm
        </Author>
        <Status>
            RECEIVED
        </Status>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>
            2014-09-04T16:28:18.742Z
        </OrderDate>
        <Note>
                        The DL/DA request is being processed by our 3rd party supplier        
        </Note>
        <Author>
            jbm
        </Author>
        <Status>
            PROCESSING
        </Status>
    </OrderHistory>
    <OrderHistory>
        <OrderDate>
            2014-09-05T19:00:17.968Z
        </OrderDate>
        <Note>
            The DL/DA request is complete for all TNs
        </Note>
        <Author>
            jbm
        </Author>
        <Status>
            COMPLETE
        </Status>
    </OrderHistory>
</OrderHistoryWrapper>
```


{% endmethod %}