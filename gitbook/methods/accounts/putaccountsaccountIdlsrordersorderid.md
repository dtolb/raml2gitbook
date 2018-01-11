{% method %}
## /accounts/{accountId}/lsrorders/{orderid}

Updates the information associated with the specified LSR.  This is also used to cancel an order, by changing the order status field to canceled.  This is the only case where the status can be changed, and when this is done, all other fields are left as they were prior to the cancellation.  Please see the example below.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |





## Example Request
```xml
<LsrOrder>
    <CustomerOrderId>
        FineCustomerid
    </CustomerOrderId>
    <SPID>
        123C
    </SPID>
    <BillingTelephoneNumber>
        9192381468
    </BillingTelephoneNumber>
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
        <AccountNumber>
            123463
        </AccountNumber>
        <PinNumber>
            1231
        </PinNumber>
    </Subscriber>
</LsrOrder>
```


{% common %}


## Example : Lsr has been successfully updated.

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LsrOrderResponse>
    <LsrOrder>
        <CustomerOrderId>
            FineCustomerid
        </CustomerOrderId>
        <LastModifiedBy>
            team_ua
        </LastModifiedBy>
        <OrderCreateDate>
            2015-03-11T10:08:23.961Z
        </OrderCreateDate>
        <AccountId>
            9999999
        </AccountId>
        <OrderId>
            63fb728d-421b-46ce-8c32-da30b909934d
        </OrderId>
        <LastModifiedDate>
            2015-03-11T10:08:59.832Z
        </LastModifiedDate>
        <OrderStatus>
            PENDING
        </OrderStatus>
        <SPID>
            123C
        </SPID>
        <BillingTelephoneNumber>
            9192381468
        </BillingTelephoneNumber>
        <Pon>
            ATT-011515-324234
        </Pon>
        <PonVersion>
            8
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
                9192381468
            </TelephoneNumber>
        </ListOfTelephoneNumbers>
        <LsrOrderErrors/>
        <CountOfTNs>
            1
        </CountOfTNs>
    </LsrOrder>
</LsrOrderResponse>
```

## Example : Validation error occurred.

* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LsrOrderResponse>
    <ResponseStatus>
        <ErrorCode>
            400
        </ErrorCode>
        <Description>
            Lsr order doesn't pass validation. Please check your input parameters.
        </Description>
    </ResponseStatus>
    <LsrOrderErrors>
        <LsrOrderError>
            <Code>
                17023
            </Code>
            <Description>
                The authorizing person contact is required for lsr orders.
            </Description>
        </LsrOrderError>
        <LsrOrderError>
            <Code>
                17020
            </Code>
            <Description>
                Account SPID [1234] does not match with SPID specified in the Lsr order [123C].
            </Description>
        </LsrOrderError>
    </LsrOrderErrors>
    <LsrOrder>
        <CountOfTNs>
            1
        </CountOfTNs>
        <OrderId>
            63fb728d-421b-46ce-8c32-da30b909934d
        </OrderId>
        <OrderStatus>
            FAILED
        </OrderStatus>
        <AuthorizingPerson>
            Jim Hopkins
        </AuthorizingPerson>
        <SPID>
            123C
        </SPID>
        <BillingTelephoneNumber>
            9192381468
        </BillingTelephoneNumber>
        <Pon>
            ATT-011515-324234
        </Pon>
        <PonVersion>
            8
        </PonVersion>
        <RequestedFocDate>
            2015-11-15
        </RequestedFocDate>
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
                <Country>
                    United States
                </Country>
                <AddressType>
                    Service
                </AddressType>
            </ServiceAddress>
        </Subscriber>
        <ListOfTelephoneNumbers>
            <TelephoneNumber>
                9192381468
            </TelephoneNumber>
        </ListOfTelephoneNumbers>
        <LastModifiedBy>
            team_ua
        </LastModifiedBy>
        <OrderCreateDate>
            2015-03-11T10:08:23.961Z
        </OrderCreateDate>
        <AccountId>
            9999999
        </AccountId>
        <CreatedByUser>
            team_ua
        </CreatedByUser>
        <CustomerOrderId>
            FineCustomerid
        </CustomerOrderId>
        <LastModifiedDate>
            2015-03-11T10:08:59.832Z
        </LastModifiedDate>
    </LsrOrder>
</LsrOrderResponse>
```

## Example : Requested lsr not found.

* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<LsrOrderResponse>
    <ResponseStatus>
        <ErrorCode>
            5035
        </ErrorCode>
        <Description>
            lsr order 63fb728d-421b-46ce-8c32-da30b909934s not found.
        </Description>
    </ResponseStatus>
</LsrOrderResponse>
```


{% endmethod %}