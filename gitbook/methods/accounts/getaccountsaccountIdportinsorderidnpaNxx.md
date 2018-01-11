{% method %}
## /accounts/{accountId}/portins/{orderid}/npaNxx

Retrieves a list of Npa-Nxx associated with the specified port-in number and displays them in the payload.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |






{% common %}


## Example : The Npa-Nxx have been successfully retrieved and displayed in the payload.

* Response: 200

{% sample lang="xml" %}

```xml
<TelephoneDetailsReports>
    <TelephoneDetailsReport>
        <NPA-NXX>
            919280
        </NPA-NXX>
        <Count>
            1
        </Count>
    </TelephoneDetailsReport>
</TelephoneDetailsReports>
```


{% endmethod %}