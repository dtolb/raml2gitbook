{% method %}
## /accounts/{accountId}/lsrorders

Retrieves a list of lsrorders.  Various query parameters can be used to filter the list of LSR Orders as documented below.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `status` | string | true | The status of the Lsr order being searched for. |
| `tn` | string | true | A Telephone Number (TN) that is referenced in the order. |
| `pon` | string | true | The PON that is referenced in the Lsr order. |
| `customerOrderId` | string | true | The Customer Order ID is an ID assigned by the account owner to provide a reference number for the Port. |
| `orderIdFragment` | string | true | This search parameter represents the internal Bandwidth Dashboard ID that has been assigned to the Lsr Order.  This parameter is the first few characters of the internal ID - the entire ID does not need to be specified. |
| `createdDateFrom` | date | true | Checks the order's creation date against this value. Orders that have a creation date after this date will be included. Format is yyyy-MM-dd |
| `createdDateTo` | date | true | Checks the order's creation date against this value. Orders that have a creation date before this date will be included. Format is yyyy-MM-dd |




{% common %}


## Example : the lsrorders have been successfully retrieved and displayed in the payload.

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LsrOrders>
    <TotalCount>
        5
    </TotalCount>
    <LsrOrderSummary>
        <accountId>
            9999999
        </accountId>
        <CountOfTNs>
            2
        </CountOfTNs>
        <CustomerOrderId>
            FineCustomerid
        </CustomerOrderId>
        <userId>
            team_ua
        </userId>
        <lastModifiedDate>
            2015-03-02T09:10:16.193Z
        </lastModifiedDate>
        <OrderType>
            lsr
        </OrderType>
        <OrderDate>
            2015-03-25T11:44:42.941Z
        </OrderDate>
        <OrderStatus>
            PENDING
        </OrderStatus>
        <ActualFocDate>
            2015-03-25
        </ActualFocDate>
        <BillingTelephoneNumber>
            2526795000
        </BillingTelephoneNumber>
        <CreatedByUser>
            lsrOnlyUser
        </CreatedByUser>
        <OrderId>
            7d644c88-ef23-4307-96ab-20253666d0c7
        </OrderId>
        <Pon>
            ATT-011515-324234
        </Pon>
        <PonVersion>
            0
        </PonVersion>
        <RequestedFocDate>
            2015-11-15
        </RequestedFocDate>
    </LsrOrderSummary>
    <!-- SNIP -->
    <LsrOrderSummary>
        <accountId>
            9999999
        </accountId>
        <CountOfTNs>
            2
        </CountOfTNs>
        <CustomerOrderId>
            MyId5
        </CustomerOrderId>
        <lastModifiedDate>
            2015-03-03T14:07:19.926Z
        </lastModifiedDate>
        <OrderType>
            lsr
        </OrderType>
        <OrderDate>
            2015-03-25T11:44:42.941Z
        </OrderDate>
        <OrderStatus>
            FAILED
        </OrderStatus>
        <Errors>
            <Error>
                <Code>
                    17008
                </Code>
                <Description>
                                        FOC date cannot fall on a holiday                
                </Description>
            </Error>
        </Errors>
        <ActualFocDate>
            2015-03-25
        </ActualFocDate>
        <BillingTelephoneNumber>
            2526795000
        </BillingTelephoneNumber>
        <CreatedByUser>
            lsrOnlyUser
        </CreatedByUser>
        <OrderId>
            00cf7e08-cab0-4515-9a77-2d0a7da09415
        </OrderId>
        <Pon>
            testpon1002
        </Pon>
        <PonVersion>
            0
        </PonVersion>
        <RequestedFocDate>
            2015-11-15
        </RequestedFocDate>
    </LsrOrderSummary>
</LsrOrders>
```


{% endmethod %}