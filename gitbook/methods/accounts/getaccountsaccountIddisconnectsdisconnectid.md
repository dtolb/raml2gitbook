{% method %}
## /accounts/{accountId}/disconnects/{disconnectid}

Retrieves the information associated with the disconnect order specified.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `disconnectid` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `tndetail` | string | true | If set to true, displays the disconnect order's telephone order information in greater detail |




{% common %}


## Example : The disconnect order's information has been successfully retrieved.

* Response: 200

{% sample lang="xml" %}

```xml
<DisconnectTelephoneNumberOrderResponse>
    <DisconnectedTelephoneNumberList>
        <TelephoneNumber>
            9199998830
        </TelephoneNumber>
    </DisconnectedTelephoneNumberList>
    <orderRequest>
        <id>
            4ffe9262-1965-4479-a1d5-b8584440667d
        </id>
        <OrderCreateDate>
            2013-12-04T21:59:32.243Z
        </OrderCreateDate>
        <DisconnectTelephoneNumberOrderType>
            <TelephoneNumberList>
                <TelephoneNumber>
                    9199998830
                </TelephoneNumber>
            </TelephoneNumberList>
            <DisconnectMode>
                normal
            </DisconnectMode>
            <Protected>
                UNCHANGED
            </Protected>
        </DisconnectTelephoneNumberOrderType>
    </orderRequest>
    <OrderStatus>
        COMPLETE
    </OrderStatus>
</DisconnectTelephoneNumberOrderResponse>
```


{% endmethod %}