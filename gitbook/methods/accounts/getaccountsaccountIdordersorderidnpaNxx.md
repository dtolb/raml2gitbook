{% method %}
## /accounts/{accountId}/orders/{orderid}/npaNxx

Retrieves the Npa-Nxx of the phone numbers from the specified order.


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
<TelephoneDetailsReports>
    <TelephoneDetailsReport>
        <NPA-NXX>
            888424
        </NPA-NXX>
        <Count>
            1
        </Count>
    </TelephoneDetailsReport>
</TelephoneDetailsReports>
```


{% endmethod %}