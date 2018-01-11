{% method %}
## /accounts/{accountId}/lsrorders/{orderid}

Retrieves the information associated with the specified lsr ID number.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |






{% common %}


## Example : The information has been successfully retrieved and displayed in the payload.

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LsrOrder>
    <CustomerOrderId>
        MyId5
    </CustomerOrderId>
    <LastModifiedBy>
        System
    </LastModifiedBy>
    <OrderCreateDate>
        2015-03-03T13:54:00.450Z
    </OrderCreateDate>
    <AccountId>
        9999999
    </AccountId>
    <OrderId>
        00cf7e08-cab0-4515-9a77-2d0a7da09415
    </OrderId>
    <LastModifiedDate>
        2015-03-03T14:07:19.926Z
    </LastModifiedDate>
    <OrderStatus>
        FAILED
    </OrderStatus>
    <SPID>
        123C
    </SPID>
    <BillingTelephoneNumber>
        9192381468
    </BillingTelephoneNumber>
    <Pon>
        testpon1002
    </Pon>
    <PonVersion>
        0
    </PonVersion>
    <RequestedFocDate>
        2015-11-15
    </RequestedFocDate>
    <AuthorizingPerson>
        Jim Hopkins
    </AuthorizingPerson>
    <Subscriber>
        <SubscriberType>
            BUSINESS
        </SubscriberType>
        <BusinessName>
            BusinessName
        </BusinessName>
        <AccountNumber>
            123463
        </AccountNumber>
        <PinNumber>
            1231
        </PinNumber>
        <ServiceAddress>
            <HouseNumber>
                11
            </HouseNumber>
            <StreetName>
                Park
            </StreetName>
            <StreetSuffix>
                Ave
            </StreetSuffix>
            <City>
                New York
            </City>
            <StateCode>
                NY
            </StateCode>
            <Zip>
                90025
            </Zip>
        </ServiceAddress>
    </Subscriber>
    <ListOfTelephoneNumbers>
        <TelephoneNumber>
            9192381467
        </TelephoneNumber>
        <TelephoneNumber>
            9192381468
        </TelephoneNumber>
    </ListOfTelephoneNumbers>
    <LsrOrderErrors>
        <LsrOrderError>
            <Code>
                17008
            </Code>
            <Description>
                                FOC date cannot fall on a holiday            
            </Description>
        </LsrOrderError>
    </LsrOrderErrors>
    <CountOfTNs>
        2
    </CountOfTNs>
</LsrOrder>
```


{% endmethod %}