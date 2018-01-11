{% method %}
## /accounts/{accountId}/portins/{orderid}/totals

Retrieves a total count of telephone numbers associated with the specified port-in number and displays them in the payload.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |






{% common %}


## Example : The total count of telephone numbers have been successfully retrieved and displayed in the payload.

* Response: 200

{% sample lang="xml" %}

```xml
<Quantity>
    <Count>
        1
    </Count>
</Quantity>
```


{% endmethod %}