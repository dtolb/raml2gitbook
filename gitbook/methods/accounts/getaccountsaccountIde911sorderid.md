{% method %}
## /accounts/{accountId}/e911s/{orderid}

Retrieve information about a E911 Order with specified ID.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |






{% common %}


## Example : The descriptive payload for the E911 Orders query provides a broad range of information about the E911 Order identified in the URL.  Included amongst the information is:
<ul>
<li>ErrorList - the errors discovered with codes and explanations</li>
<li>ProcessingStatus(RECEIVED, PROCESSING, COMPLETE, PARTIAL, FAILED) - the overall status of the order</li>
</ul>


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<E911Order>
    <OrderCreateDate>
        2015-06-16T14:03:10.199Z
    </OrderCreateDate>
    <AccountId>
        111
    </AccountId>
    <CreatedByUser>
        admin
    </CreatedByUser>
    <OrderId>
        8578086b-f73d-4a0f-bba6-d20399c7de31
    </OrderId>
    <LastModifiedDate>
        2015-06-16T14:03:10.789Z
    </LastModifiedDate>
    <Address>
        <HouseNumber>
            901
        </HouseNumber>
        <StreetName>
            Main Campus Drive
        </StreetName>
        <City>
            Raleigh
        </City>
        <StateCode>
            NC
        </StateCode>
        <Zip>
            27606
        </Zip>
        <Country>
            United States
        </Country>
    </Address>
    <CallerName>
        testName111111
    </CallerName>
    <CustomerOrderId>
        test
    </CustomerOrderId>
    <ProcessingStatus>
        PARTIAL
    </ProcessingStatus>
    <TelephoneNumbers>
        <TelephoneNumber>
            3172000218
        </TelephoneNumber>
        <TelephoneNumber>
            3172000000
        </TelephoneNumber>
    </TelephoneNumbers>
    <ErrorList>
        <Error>
            <Code>
                8003
            </Code>
            <Description>
                Telephone numbers does not belong to this account.
            </Description>
            <TelephoneNumbers>
                <TelephoneNumber>
                    3172000000
                </TelephoneNumber>
            </TelephoneNumbers>
        </Error>
        <Error>
            <Code>
                8009
            </Code>
            <Description>
                Telephone numbers not in 'Inservice'
            </Description>
            <TelephoneNumbers>
                <TelephoneNumber>
                    3172000000
                </TelephoneNumber>
            </TelephoneNumbers>
        </Error>
    </ErrorList>
    <!-- or, instead of TelephoneNumbers, a list of Alternative identifiers can be returned -->
    <AlternateEndUserIdentifiers>
        <AlternateEndUserIdentifier>
            <PIDFLOEnabled>
                true
            </PIDFLOEnabled>
            <Identifier>
                alphanumeric_or.:-_@_6_32_chars
            </Identifier>
            <CallbackNumber>
                9706542332
            </CallbackNumber>
            <CallerName>
                Eli
            </CallerName>
            <PreferredLanguage>
                en
            </PreferredLanguage>
            <LocationId>
                Some32CharacterOrLessString
            </LocationId>
            <Address>
                <LocationId>
                    Some32CharacterOrLessString
                </LocationId>
                <HouseNumber>
                    915
                </HouseNumber>
                <HouseSuffix/>
                <PreDirectional/>
                <StreetName>
                    Elm
                </StreetName>
                <StreetSuffix>
                    Ave
                </StreetSuffix>
                <PostDirectional/>
                <AddressLine2/>
                <City>
                    Carpinteria
                </City>
                <StateCode>
                    CA
                </StateCode>
                <Zip>
                    93013
                </Zip>
                <PlusFour/>
                <County/>
                <Country>
                    United States
                </Country>
            </Address>
        </AlternateEndUserIdentifier>
        <AlternateEndUserIdentifier>
            <PIDFLOEnabled>
                true
            </PIDFLOEnabled>
            <Identifier>
                alphanumeric_or.:-_@_6_32_chars
            </Identifier>
            <CallbackNumber>
                9706542333
            </CallbackNumber>
            <CallerName>
                Ethan
            </CallerName>
            <PreferredLanguage>
                en
            </PreferredLanguage>
        </AlternateEndUserIdentifier>
    </AlternateEndUserIdentifiers>
    <!-- or, instead of the TelephoneNumbers and Alternative identifiers, a list of Additional Addresses can be returned -->
    <AdditionalAddresses>
        <Address>
            <LocationId>
                Some32CharacterOrLessString
            </LocationId>
            <HouseNumber>
                915
            </HouseNumber>
            <HouseSuffix/>
            <PreDirectional/>
            <StreetName>
                Elm
            </StreetName>
            <StreetSuffix>
                Ave
            </StreetSuffix>
            <PostDirectional/>
            <AddressLine2/>
            <City>
                Carpinteria
            </City>
            <StateCode>
                CA
            </StateCode>
            <Zip>
                93013
            </Zip>
            <PlusFour/>
            <County/>
            <Country>
                United States
            </Country>
        </Address>
    </AdditionalAddresses>
</E911Order>
```

## Example : NOT FOUND - the order id does not exist in the system

* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<E911OrderReportResponse>
    <ResponseStatus>
        <Description>
            The resource does not exist
        </Description>
    </ResponseStatus>
</E911OrderReportResponse>
```


{% endmethod %}