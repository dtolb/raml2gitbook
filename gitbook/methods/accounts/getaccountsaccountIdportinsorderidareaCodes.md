{% method %}
## /accounts/{accountId}/portins/{orderid}/areaCodes

Retrieves a list of area codes associated with the specified port-in number and displays them in the payload.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |






{% common %}


## Example : The area codes have been successfully retrieved and displayed in the payload.

* Response: 200

{% sample lang="xml" %}

```xml
<TelephoneDetailsReports>
    <TelephoneDetailsReport>
        <AreaCode>
            919
        </AreaCode>
        <Count>
            1
        </Count>
    </TelephoneDetailsReport>
</TelephoneDetailsReports>
```


{% endmethod %}