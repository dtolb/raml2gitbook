{% method %}
## /accounts/{accountId}/sites/{siteId}/orders/{orderid}/tns

Retrieves the Telephone Numbers associated by the given order ID


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
<TelephoneNumbers>
    <Count>
        1
    </Count>
    <TelephoneNumber>
        8042105666
    </TelephoneNumber>
</TelephoneNumbers>
```


{% endmethod %}