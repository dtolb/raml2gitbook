{% method %}
## /accounts/{accountId}/portins/totals

Retrieves the total count of port-ins.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `status` | string | true | The current status of the port-in. |
| `vendorId` | string | true | The vendor ID of the port-in. |




{% common %}


## Example : The total has been successfully calculated and displayed in the payload.

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