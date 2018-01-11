{% method %}
## /accounts/{accountId}/portouts

Retrieves a list of port-out requests for the given account ID.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `page` | string | true | The port-out ID of the first order of the page. "1" is used as a convention for the first port-out in the account ID. |
| `size` | integer | true | The number of port-outs retrieved. |
| `status` | string | true | Displays the port-outs with the given status. |
| `date` | date | true | The date of when the order was placed. |
| `startdate` | date | true | The earliest date that the order was last modified. <strong>NOTE: </strong> startdate and enddate must be simultaneously declared. |
| `enddate` | date | true | The latest date that the order was last modified. <strong>NOTE: </strong> startdate and enddate must be simultaneously declared. |




{% common %}


## Example : the port-outs have been successfully retrieved and displayed in the payload.

* Response: 200

{% sample lang="xml" %}

```xml
<LNPResponseWrapper>
    <TotalCount>
        3
    </TotalCount>
    <Links/>
    <lnpPortInfoForGivenStatus>
        <CountOfTNs>
            0
        </CountOfTNs>
        <userId>
            System
        </userId>
        <OrderId>
            4299b1ad-aa08-433e-a316-f9219b3450d2
        </OrderId>
        <OrderType>
            port_out
        </OrderType>
        <lastModifiedDate>
            2014-07-31T16:34:37.530Z
        </lastModifiedDate>
        <ErrorCode>
            201
        </ErrorCode>
        <ErrorMessage>
            Order request received. Please use the order id to check the status of your order later.
        </ErrorMessage>
        <OrderDate>
            2014-07-31T16:34:37.480Z
        </OrderDate>
        <ProcessingStatus>
            NEW
        </ProcessingStatus>
        <RequestedFOCDate>
            2014-08-02T12:34:37.000Z
        </RequestedFOCDate>
        <VendorId>
            512E
        </VendorId>
    </lnpPortInfoForGivenStatus>
</LNPResponseWrapper>
```


{% endmethod %}