{% method %}
## /accounts/{accountId}/portins

Creates a port-in request under the given site ID and sippeer ID as specified in the body.<br>
Upon a successfully-submitted payload, the order will have a status of "PENDING_DOCUMENTS".<br>
In order to have a successful POST, the payload will need to have a specific <strong>site ID</strong> and <strong>sippeer ID</strong>, according to the account.
<br><br>
<strong>TnAttributes</strong> - attributes to be assigned to the telephone number. Optional parameter. Possible values: "Protected"



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |





## Example Request
```xml
<LnpOrder>
    <RequestedFocDate>
        2016-03-25T21:15:00.000Z
    </RequestedFocDate>
    <!-- OPTIONAL -->
    <AlternateSpid>
        X455
    </AlternateSpid>
    <!-- OPTIONAL -->
    <BillingTelephoneNumber>
        9195551234
    </BillingTelephoneNumber>
    <SiteId>
            SITE ID     
    </SiteId>
    <PeerId>
          SIPPEER ID    
    </PeerId>
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
        </ServiceAddress>
    </Subscriber>
    <LoaAuthorizingPerson>
        The Authguy
    </LoaAuthorizingPerson>
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
    <ListOfPhoneNumbers>
        <PhoneNumber>
            9194809871
        </PhoneNumber>
    </ListOfPhoneNumbers>
    <Triggered>
        true
    </Triggered>
    <BillingType>
        PORTIN
    </BillingType>
</LnpOrder>
```


{% common %}


## Example : The order has been created and an order ID will be specified in the payload and in the header.

* Response: 201

{% sample lang="xml" %}

```xml
<LnpOrderResponse>
    <OrderId>
        03f194d5-3932-4e9f-8ba1-03ef767985e5
    </OrderId>
    <Status>
        <Code>
            201
        </Code>
        <Description>
            Order request received. Please use the order id to check the status of your order later.
        </Description>
    </Status>
    <ProcessingStatus>
        PENDING_DOCUMENTS
    </ProcessingStatus>
    <RequestedFocDate>
        2016-03-25T21:15:00.000Z
    </RequestedFocDate>
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
    <Triggered>
        true
    </Triggered>
    <BillingType>
        PORTIN
    </BillingType>
</LnpOrderResponse>
```

## Example : The order failed; one of the input parameters is invalid.

* Response: 400

{% sample lang="xml" %}

```xml
<LnpOrderResponse>
    <Status>
        <Code>
            400
        </Code>
        <Description>
            Validation Failed. Please check your input parameters.
        </Description>
    </Status>
    <Errors>
        <Code>
            7309
        </Code>
        <Description>
            The site id was not supplied or is invalid.
        </Description>
    </Errors>
    <Errors>
        <Code>
            7312
        </Code>
        <Description>
            The sippeer id is invalid.
        </Description>
    </Errors>
    <Errors>
        <Code>
            7398
        </Code>
        <Description>
            Protected status is not available for numbers in off-net rate centers.
        </Description>
    </Errors>
    <ProcessingStatus>
        EXCEPTION
    </ProcessingStatus>
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
    <Triggered>
        true
    </Triggered>
    <BillingType>
        PORTIN
    </BillingType>
</LnpOrderResponse>
```


{% endmethod %}