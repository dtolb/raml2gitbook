{% method %}
## /accounts/{accountId}/disconnects

Create a Disconnect order, and disconnect the numbers listed in the disconnect order.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |





## Example Request
```xml
<?xml version="1.0"?>
<DisconnectTelephoneNumberOrder>
    <name>
        training run
    </name>
    <DisconnectTelephoneNumberOrderType>
        <TelephoneNumberList>
            <TelephoneNumber>
                4158714245
            </TelephoneNumber>
            <TelephoneNumber>
                4352154439
            </TelephoneNumber>
            <TelephoneNumber>
                4352154466
            </TelephoneNumber>
        </TelephoneNumberList>
        <Protected>
            UNCHANGED
        </Protected>
    </DisconnectTelephoneNumberOrderType>
</DisconnectTelephoneNumberOrder>
```


{% common %}


## Example : The order has been created as described in the payload <br>
The Location header contains the url of the disconnect order that has been created.


* Response: 201

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<DisconnectTelephoneNumberOrderResponse>
    <orderRequest>
        <CustomerOrderId>
        </CustomerOrderId>
        <id>
            ba05e04b-192a-47cb-b182-b1bf6cfef0d7
        </id>
        <OrderCreateDate>
            2014-07-03T14-12-57.840Z
        </OrderCreateDate>
        <DisconnectTelephoneNumberOrderType>
            <TelephoneNumberList>
                <TelephoneNumber>
                    4158714245
                </TelephoneNumber>
                <TelephoneNumber>
                    4352154439
                </TelephoneNumber>
                <TelephoneNumber>
                    4352154466
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
</DisconnectTelephoneNumberOrderResponse>
```


{% endmethod %}