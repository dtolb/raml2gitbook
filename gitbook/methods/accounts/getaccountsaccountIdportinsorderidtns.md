{% method %}
## /accounts/{accountId}/portins/{orderid}/tns

Retrieves a list of telephone numbers associated with the specified port-in number and displays them in the payload.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |






{% common %}


## Example : The telephone numbers have been successfully retrieved and displayed in the payload.

* Response: 200

{% sample lang="xml" %}

```xml
<TelephoneNumbers>
    <Count>
        1
    </Count>
    <TelephoneNumber>
        9192809870
    </TelephoneNumber>
</TelephoneNumbers>
```


{% endmethod %}