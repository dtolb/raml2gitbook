{% method %}
## /accounts/{accountId}/orders/{orderid}/tns

returns a list of phone numbers associated with the ID of a given account.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
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