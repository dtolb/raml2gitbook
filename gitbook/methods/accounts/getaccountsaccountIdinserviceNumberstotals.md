{% method %}
## /accounts/{accountId}/inserviceNumbers/totals

Returns the total number of in-service numbers for the given account.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |






{% common %}


## Example : The request has been successfully retrieved and displayed in the payload.

* Response: 200

{% sample lang="xml" %}

```xml
<Quantity>
    <Count>
        62
    </Count>
</Quantity>
```


{% endmethod %}