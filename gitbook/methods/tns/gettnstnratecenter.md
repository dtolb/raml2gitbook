{% method %}
## /tns/{tn}/ratecenter

Retrieves the rate centers associated with that telephone number.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `tn` | string | true |






{% common %}


## Example : The rate centers have been successfully retrieved and displayed.

* Response: 200

{% sample lang="xml" %}

```xml
<TelephoneNumberResponse>
    <TelephoneNumberDetails>
        <State>
            NJ
        </State>
        <RateCenter>
            HACKENSACK
        </RateCenter>
    </TelephoneNumberDetails>
</TelephoneNumberResponse>
```


{% endmethod %}