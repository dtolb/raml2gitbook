{% method %}
## /tns/{tn}/history

Retrieves the history associated with that telephone number.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `tn` | string | true |






{% common %}


## Example : OK - the history has been successfully retrieved and displayed.

* Response: 200

{% sample lang="xml" %}

```xml
<TelephoneNumberResponse>
    <TelephoneNumberStatuses>
        <TelephoneNumberStatus>
            <AccountId>
                753
            </AccountId>
            <LastModifiedDate>
                2014-07-29T13:42:49.789Z
            </LastModifiedDate>
            <OrderCreateDate>
                2014-07-29T13:42:33.000Z
            </OrderCreateDate>
            <OrderId>
                58ee5da9-6357-4626-86fd-6faf4bf819b3
            </OrderId>
            <Status>
                Available
            </Status>
            <UserId>
                jbm
            </UserId>
            <OrderType>
                IMPORT_AVAILABLE_ORDER
            </OrderType>
        </TelephoneNumberStatus>
        <TelephoneNumberStatus>
            <AccountId>
                14
            </AccountId>
            <LastModifiedDate>
                2014-07-30T11:07:10.585Z
            </LastModifiedDate>
            <OrderCreateDate>
                2014-07-30T11:07:10.537Z
            </OrderCreateDate>
            <OrderId>
                90d7f38d-03fc-43f4-85f6-ed2608411775
            </OrderId>
            <Status>
                Inservice
            </Status>
            <UserId>
                jbm
            </UserId>
            <OrderType>
                NEW_NUMBER_ORDER
            </OrderType>
        </TelephoneNumberStatus>
        <TelephoneNumberStatus>
            <AccountId>
                14
            </AccountId>
            <LastModifiedDate>
                2014-07-30T11:24:17.834Z
            </LastModifiedDate>
            <OrderCreateDate>
                2014-07-30T11:24:17.834Z
            </OrderCreateDate>
            <OrderId>
                9c0d22f0-6cd6-42d8-b3e4-8a3e0dd18b6c
            </OrderId>
            <Status>
                Inservice
            </Status>
            <UserId>
                jbm
            </UserId>
            <OrderType>
                DLDA_ORDER
            </OrderType>
            <OrderStatus>
                RECEIVED
            </OrderStatus>
        </TelephoneNumberStatus>
        <TelephoneNumberStatus>
            <AccountId>
                14
            </AccountId>
            <LastModifiedDate>
                2014-07-30T11:24:18.842Z
            </LastModifiedDate>
            <OrderCreateDate>
                2014-07-30T11:24:17.834Z
            </OrderCreateDate>
            <OrderId>
                9c0d22f0-6cd6-42d8-b3e4-8a3e0dd18b6c
            </OrderId>
            <Status>
                Inservice
            </Status>
            <UserId>
                jbm
            </UserId>
            <OrderType>
                DLDA_ORDER
            </OrderType>
            <OrderStatus>
                PROCESSING
            </OrderStatus>
        </TelephoneNumberStatus>
        <TelephoneNumberStatus>
            <AccountId>
                14
            </AccountId>
            <LastModifiedDate>
                2014-07-30T11:24:22.224Z
            </LastModifiedDate>
            <OrderCreateDate>
                2014-07-30T11:24:17.834Z
            </OrderCreateDate>
            <OrderId>
                9c0d22f0-6cd6-42d8-b3e4-8a3e0dd18b6c
            </OrderId>
            <Status>
                Inservice
            </Status>
            <UserId>
                jbm
            </UserId>
            <OrderType>
                DLDA_ORDER
            </OrderType>
            <OrderStatus>
                PARTIAL
            </OrderStatus>
        </TelephoneNumberStatus>
    </TelephoneNumberStatuses>
    <TelephoneNumber>
        2018981023
    </TelephoneNumber>
</TelephoneNumberResponse>
```


{% endmethod %}