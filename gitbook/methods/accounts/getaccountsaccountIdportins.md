{% method %}
## /accounts/{accountId}/portins

Retrieves the port-in requests for the given account ID.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `page` | string | true | The port-in ID of the first order of the page. "1" is used as a convention for the first port-in in the account ID. |
| `size` | integer | true | The number of port-ins retrieved. |
| `status` | string | true | Displays the port-ins with the given status. |
| `date` | date | true | The date of when the order was placed. |
| `startdate` | date | true | The earliest date that the order was last modified. <strong>NOTE: </strong> startdate and enddate must be simultaneously declared. |
| `enddate` | date | true | The latest date that the order was last modified. <strong>NOTE: </strong> startdate and enddate must be simultaneously declared. |
| `tn` | integer | true | The billing telephone number associated with the port-ins |
| `pon` | string | true | The port order number |




{% common %}


## Example : The port-ins have been successfully retrieved.

* Response: 200

{% sample lang="xml" %}

```xml
<LNPResponseWrapper>
    <TotalCount>
        3176
    </TotalCount>
    <Links>
        <first>
             -- link -- 
        </first>
        <next>
             -- link -- 
        </next>
    </Links>
    <lnpPortInfoForGivenStatus>
        <CountOfTNs>
            1
        </CountOfTNs>
        <userId>
            Neustar
        </userId>
        <lastModifiedDate>
            2014-11-21T14:00:33.836Z
        </lastModifiedDate>
        <OrderDate>
            2014-11-05T19:34:53.176Z
        </OrderDate>
        <OrderId>
            982e3c10-3840-4251-abdd-505cd8610788
        </OrderId>
        <OrderType>
            port_out
        </OrderType>
        <ErrorCode>
            200
        </ErrorCode>
        <ErrorMessage>
            Port out successful.
        </ErrorMessage>
        <FullNumber>
            9727717577
        </FullNumber>
        <ProcessingStatus>
            COMPLETE
        </ProcessingStatus>
        <RequestedFOCDate>
            2014-11-20T00:00:00.000Z
        </RequestedFOCDate>
        <VendorId>
            512E
        </VendorId>
    </lnpPortInfoForGivenStatus>
    <Snip>
           ---   
    </Snip>
    <lnpPortInfoForGivenStatus>
        <CountOfTNs>
            1
        </CountOfTNs>
        <userId>
            Neustar
        </userId>
        <lastModifiedDate>
            2015-03-30T14:01:59.049Z
        </lastModifiedDate>
        <OrderDate>
            2015-03-24T17:47:17.605Z
        </OrderDate>
        <OrderId>
            f8f02d0a-d1a4-42eb-8f45-ce8187cd73ff
        </OrderId>
        <OrderType>
            port_out
        </OrderType>
        <ErrorCode>
            200
        </ErrorCode>
        <ErrorMessage>
            Port out successful.
        </ErrorMessage>
        <FullNumber>
            2092660315
        </FullNumber>
        <ProcessingStatus>
            COMPLETE
        </ProcessingStatus>
        <RequestedFOCDate>
            2015-03-27T00:00:00.000Z
        </RequestedFOCDate>
        <VendorId>
            512E
        </VendorId>
    </lnpPortInfoForGivenStatus>
</LNPResponseWrapper>
```


{% endmethod %}