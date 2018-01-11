{% method %}
## /accounts/{accountId}/numbersAssignment/{orderid}

Retrieve information about a TelephoneNumbersAssignment order with specified ID.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |






{% common %}


## Example : The descriptive payload for the TelephoneNumbersAssignment query provides a broad range of information about the TelephoneNumbersAssignment order identified in the URL.  Included amongst the information is...
<ul>
<li>ErrorList - the errors discovered with codes and explanations</li>
<li>ProcessingStatus(RECEIVED, PROCESSING, COMPLETE, PARTIAL, FAILED) - the overall status of the order</li>
</ul>


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TelephoneNumbersAssignmentOrderResponse>
    <OrderCreateDate>
        2016-01-15T11:36:52.727Z
    </OrderCreateDate>
    <AccountId>
        1
    </AccountId>
    <CreatedByUser>
        jbm
    </CreatedByUser>
    <OrderId>
        65e03a35-6b97-48a5-8126-f47bad02df2a
    </OrderId>
    <ProcessingStatus>
        PARTIAL
    </ProcessingStatus>
    <TotalQuantity>
        4
    </TotalQuantity>
    <FailedQuantity>
        1
    </FailedQuantity>
    <TelephoneNumbersAssignmentOrder>
        <CustomerOrderId>
            ICPA123ABC
        </CustomerOrderId>
        <Action>
            ASSIGN
        </Action>
        <TelephoneNumbers>
            <TelephoneNumber>
                9199918388
            </TelephoneNumber>
            <TelephoneNumber>
                4158714245
            </TelephoneNumber>
            <TelephoneNumber>
                4352154439
            </TelephoneNumber>
            <TelephoneNumber>
                4352154466
            </TelephoneNumber>
        </TelephoneNumbers>
    </TelephoneNumbersAssignmentOrder>
    <Errors>
        <Error>
            <Code>
                5076
            </Code>
            <Description>
                Number does not belong to this account.
            </Description>
            <TelephoneNumbers>
                <TelephoneNumber>
                    9199918388
                </TelephoneNumber>
            </TelephoneNumbers>
        </Error>
    </Errors>
</TelephoneNumbersAssignmentOrderResponse>
```

## Example : NOT FOUND - the order id does not exist in the system

* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TelephoneNumbersAssignmentOrderResponse>
    <ResponseStatus>
        <Description>
            The resource does not exist
        </Description>
    </ResponseStatus>
</TelephoneNumbersAssignmentOrderResponse>
```


{% endmethod %}