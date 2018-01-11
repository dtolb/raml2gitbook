{% method %}
## /tns/{tn}

Retrieves the telephone number's information.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `tn` | string | true |






{% common %}


## Example : The information has been successfully retrieved and displayed.

* Response: 200

{% sample lang="xml" %}

```xml
<TelephoneNumberResponse>
    <TelephoneNumber>
        2012035013
    </TelephoneNumber>
    <Status>
        Inservice
    </Status>
    <LastModifiedDate>
        2014-03-25 12:55:11.0
    </LastModifiedDate>
    <OrderCreateDate>
        2014-03-25T12:55:11.810Z
    </OrderCreateDate>
    <OrderId>
        cf79d3c3-21b7-4db7-9867-273a1867f934
    </OrderId>
    <OrderType>
        NEW_NUMBER_ORDER
    </OrderType>
    <SiteId>
        2409
    </SiteId>
    <AccountId>
        8000273
    </AccountId>
</TelephoneNumberResponse>
```


{% endmethod %}