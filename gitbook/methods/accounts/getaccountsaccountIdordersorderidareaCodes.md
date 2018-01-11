{% method %}
## /accounts/{accountId}/orders/{orderid}/areaCodes

Retrieves the area codes of the phone numbers from the specified order.


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
        <AreaCode>
            888
        </AreaCode>
        <Count>
            1
        </Count>
    </TelephoneDetailsReport>
</TelephoneDetailsReports>
```


{% endmethod %}