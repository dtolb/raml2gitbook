{% method %}
## /accounts/{accountId}/portins/{orderid}

It is possible to change ("SUPP" in LNP terms) an existing LNP order.  This is done via a PUT on the existing order-id.
Since many of the entries in an LNP Order cannot be changed after the initial order is placed (the list to TNs for example) the PUT on a porting order-id does *not* require that the full order payload is included.<br/>



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |





## Example Request
```xml
<?xml version="1.0" encoding="UTF-8"?>
<LnpOrderSupp>
    <CustomerOrderId>
        SJM00002
    </CustomerOrderId>
    <RequestedFocDate>
        2014-12-04T13:00:00.000Z
    </RequestedFocDate>
    <BillingTelephoneNumber>
        8045030092
    </BillingTelephoneNumber>
    <WirelessInfo>
        <AccountNumber>
            23453245
        </AccountNumber>
        <PinNumber>
            1111
        </PinNumber>
    </WirelessInfo>
    <TnAttributes>
        <TnAttribute>
            Protected
        </TnAttribute>
    </TnAttributes>
    <Subscriber>
        <SubscriberType>
            RESIDENTIAL
        </SubscriberType>
        <FirstName>
            Steve
        </FirstName>
        <LastName>
            McKinnon
        </LastName>
        <ServiceAddress>
            <!-- If true will overwrite all address fields,             those which should be required remain required.             Affect only supp. Default false. -->
            <ResetAddressFields>
                true
            </ResetAddressFields>
            <HouseNumber>
                115
            </HouseNumber>
            <StreetName>
                Monarch Way
            </StreetName>
            <City>
                Cary
            </City>
            <StateCode>
                NC
            </StateCode>
            <Zip>
                27518
            </Zip>
        </ServiceAddress>
    </Subscriber>
    <SiteId>
        743
    </SiteId>
    <PartialPort>
        true
    </PartialPort>
    <LoaAuthorizingPerson>
        Steve McKinnon
    </LoaAuthorizingPerson>
</LnpOrderSupp>
```


{% common %}


## Example : The information has been successfully retrieved and displayed in the payload.

* Response: 200

{% sample lang="xml" %}

```xml
<LnpOrderResponse>
    <OrderId>
        b6080e4c-7ddf-4faa-bbd8-328a72de9297
    </OrderId>
    <Status>
        <Code>
            200
        </Code>
        <Description>
            Supp request received. Please use the order id to check the status of your order later.
        </Description>
    </Status>
    <ProcessingStatus>
        REQUESTED_SUPP
    </ProcessingStatus>
    <RequestedFocDate>
        2014-12-04T13:00:00Z
    </RequestedFocDate>
    <BillingTelephoneNumber>
        8045030092
    </BillingTelephoneNumber>
    <Triggered>
        false
    </Triggered>
</LnpOrderResponse>
```


{% endmethod %}