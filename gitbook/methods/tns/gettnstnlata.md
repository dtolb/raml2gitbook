{% method %}
## /tns/{tn}/lata

Retrieves the lata associated with that telephone number.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `tn` | string | true |






{% common %}


## Example : The lata have been successfully retrieved.

* Response: 200

{% sample lang="xml" %}

```xml
<TelephoneNumberResponse>
    <TelephoneNumberDetails>
        <Lata>
            224
        </Lata>
    </TelephoneNumberDetails>
</TelephoneNumberResponse>
```


{% endmethod %}