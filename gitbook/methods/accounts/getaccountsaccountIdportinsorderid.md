{% method %}
## /accounts/{accountId}/portins/{orderid}

Retrieves the information associated with the specified port-in ID number.


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
<LnpOrderResponse>
    <Errors>
        <Code>
            7205
        </Code>
        <Description>
            Telephone number is already being processed on another order
        </Description>
    </Errors>
    <ProcessingStatus>
        CANCELLED
    </ProcessingStatus>
    <CustomerOrderId>
        SJM00002
    </CustomerOrderId>
    <LoaAuthorizingPerson>
        The Authguy
    </LoaAuthorizingPerson>
    <Subscriber>
        <SubscriberType>
            BUSINESS
        </SubscriberType>
        <FirstName>
            First
        </FirstName>
        <LastName>
            Last
        </LastName>
        <ServiceAddress>
            <HouseNumber>
                11235
            </HouseNumber>
            <StreetName>
                Back
            </StreetName>
            <City>
                Denver
            </City>
            <StateCode>
                CO
            </StateCode>
            <Zip>
                27541
            </Zip>
            <County>
                Canyon
            </County>
            <Country>
                United States
            </Country>
            <AddressType>
                Service
            </AddressType>
        </ServiceAddress>
    </Subscriber>
    <WirelessInfo>
        <AccountNumber>
            771297665AABC
        </AccountNumber>
        <PinNumber>
            1234
        </PinNumber>
    </WirelessInfo>
    <TnAttributes>
        <TnAttribute>
            Protected
        </TnAttribute>
    </TnAttributes>
    <BillingTelephoneNumber>
        9195551234
    </BillingTelephoneNumber>
    <ListOfPhoneNumbers>
        <PhoneNumber>
            9194809871
        </PhoneNumber>
    </ListOfPhoneNumbers>
    <AccountId>
        20
    </AccountId>
    <SiteId>
        2857
    </SiteId>
    <PeerId>
        317771
    </PeerId>
    <LosingCarrierName>
        Mock Carrier
    </LosingCarrierName>
    <VendorName>
        Bandwidth CLEC
    </VendorName>
    <OrderCreateDate>
        2014-08-04T13:37:06.323Z
    </OrderCreateDate>
    <LastModifiedDate>
        2014-08-04T13:37:08.676Z
    </LastModifiedDate>
    <userId>
        jbm
    </userId>
    <LastModifiedBy>
        jbm
    </LastModifiedBy>
    <PartialPort>
        false
    </PartialPort>
    <Triggered>
        false
    </Triggered>
    <PortType>
        AUTOMATED
    </PortType>
    <!-- [ AUTOMATED | INTERNAL | MANUALOFFNET ] -->
</LnpOrderResponse>
```


{% endmethod %}