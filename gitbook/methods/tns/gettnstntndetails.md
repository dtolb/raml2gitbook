{% method %}
## /tns/{tn}/tndetails

Retrieves detailed information about the phone number.
TnAttributes - Does this telephone number is protected or not.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `tn` | string | true |






{% common %}


## Example : OK - the detailed information about the phone number has been successfully retrieved and displayed.<br>
TnAttributes is not required in the response.


* Response: 200

{% sample lang="xml" %}

```xml
<TelephoneNumberResponse>
    <TelephoneNumberDetails>
        <City>
            JERSEY CITY
        </City>
        <Lata>
            224
        </Lata>
        <State>
            NJ
        </State>
        <FullNumber>
            2018981023
        </FullNumber>
        <Tier>
            0
        </Tier>
        <VendorId>
            49
        </VendorId>
        <VendorName>
            Bandwidth CLEC
        </VendorName>
        <RateCenter>
            JERSEYCITY
        </RateCenter>
        <Status>
            Inservice
        </Status>
        <AccountId>
            14
        </AccountId>
        <Site>
            <Id>
                479
            </Id>
            <Name>
                site_9b08f
            </Name>
        </Site>
        <SipPeer>
            <PeerId>
                500014
            </PeerId>
            <PeerName>
                a2750fad-3
            </PeerName>
        </SipPeer>
        <LastModified>
            2014-07-30T11:29:37.000Z
        </LastModified>
        <Features>
            <E911>
                <LastE911OrderOutcome>
                    SUCCESS
                </LastE911OrderOutcome>
                <SipPeerAddress>
                    false
                </SipPeerAddress>
                <CallerName>
                    Test CallerName
                </CallerName>
                <Address>
                    <HouseNumber>
                        901
                    </HouseNumber>
                    <StreetName>
                        MAIN CAMPUS
                    </StreetName>
                    <StreetSuffix>
                        DR
                    </StreetSuffix>
                    <City>
                        RALEIGH
                    </City>
                    <StateCode>
                        NC
                    </StateCode>
                    <Zip>
                        27606
                    </Zip>
                    <PlusFour>
                        5244
                    </PlusFour>
                    <Country>
                        United States
                    </Country>
                </Address>
            </E911>
            <Lidb>
                <Status>
                    Pending
                </Status>
                <SubscriberInformation>
                    Fred
                </SubscriberInformation>
                <UseType>
                    BUSINESS
                </UseType>
                <Visibility>
                    PUBLIC
                </Visibility>
            </Lidb>
            <Dlda>
                <Status>
                    Success
                </Status>
                <SubscriberType>
                    BUSINESS
                </SubscriberType>
                <ListingType>
                    LISTED
                </ListingType>
                <ListingName>
                    <FirstName>
                        Joe
                    </FirstName>
                    <LastName>
                        Smith
                    </LastName>
                </ListingName>
                <ListAddress>
                    true
                </ListAddress>
                <Address>
                    <HouseNumber>
                        12
                    </HouseNumber>
                    <StreetName>
                        ELM
                    </StreetName>
                    <City>
                        New York
                    </City>
                    <StateCode>
                        NY
                    </StateCode>
                    <Zip>
                        10007
                    </Zip>
                    <Country>
                        United States
                    </Country>
                    <AddressType>
                        Dlda
                    </AddressType>
                </Address>
            </Dlda>
        </Features>
        <MessagingSettings>
            <SmsEnabled>
                true
            </SmsEnabled>
        </MessagingSettings>
        <TnAttributes>
            <TnAttribute>
                Protected
            </TnAttribute>
        </TnAttributes>
    </TelephoneNumberDetails>
</TelephoneNumberResponse>
```

## Example : Bad Request - failed to get detailed information about the current phone number.

* Response: 400

{% sample lang="xml" %}

```xml
<TelephoneNumberResponse>
    <ResponseStatus>
        <ErrorCode>
            12512
        </ErrorCode>
        <Description>
            Telephone number '123456789' is not valid
        </Description>
    </ResponseStatus>
</TelephoneNumberResponse>
```


{% endmethod %}