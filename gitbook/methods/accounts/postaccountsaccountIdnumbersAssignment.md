{% method %}
## /accounts/{accountId}/numbersAssignment

Create a TelephoneNumbersAssignment order to register the assignment status of a list of telephone numbers.  The telephone numbers can be declared to be either ASSIGNED or UNASSIGNED.
The key data elements in the submission are -
 <table style="text-align: left; width: 80%;" border="1" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
      <td>CustomerOrderID</td>
      <td>An order ID created by the customer for their tracking purposes</td>
    </tr>
    <tr>
      <td>Action</td>
      <td>(Required) Declare whether the listed Telephone Numbers are to be ASSIGNED or UNASSIGNED</td>
    </tr>
  </tbody>
</table>



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |





## Example Request
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TelephoneNumbersAssignmentOrder>
    <CustomerOrderId>
        ICPA123ABC
    </CustomerOrderId>
    <Action>
        [ ASSIGN | UNASSIGN ]
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
```


{% common %}


## Example : Created <br>A 201 response indicates that an order has been created.


* Response: 201

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

## Example : Bad Request <br> A 400 response Indicates that the order could not be created.
Error text and an error code will be provided in the ErrorList element.


* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TelephoneNumbersAssignmentOrderResponse>
    <ResponseStatus>
        <ErrorCode>
            13554
        </ErrorCode>
        <Description>
            Assignment action is invalid. Valid values ASSIGN, UNASSIGN
        </Description>
    </ResponseStatus>
</TelephoneNumbersAssignmentOrderResponse>
```


{% endmethod %}