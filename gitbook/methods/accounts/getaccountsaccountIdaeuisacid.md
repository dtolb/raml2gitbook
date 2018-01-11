{% method %}
## /accounts/{accountId}/aeuis/{acid}

GET is used to retrieve a detailed information of Alternate end user identifier by acid.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `acid` | string | true |






{% common %}


## Example : OK - will return full information about AEUI for the specified acid.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<AlternateEndUserIdentifierResponse>
    <AlternateEndUserIdentifier>
        <Identifier>
            DavidAcid
        </Identifier>
        <CallbackNumber>
            8042105760
        </CallbackNumber>
        <E911>
            <CallerName>
                David
            </CallerName>
            <Address>
                <HouseNumber>
                    900
                </HouseNumber>
                <HouseSuffix>
                </HouseSuffix>
                <PreDirectional>
                </PreDirectional>
                <StreetName>
                    MAIN CAMPUS
                </StreetName>
                <StreetSuffix>
                    DR
                </StreetSuffix>
                <AddressLine2>
                </AddressLine2>
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
                    5214
                </PlusFour>
                <Country>
                    United States
                </Country>
                <AddressType>
                    Billing
                </AddressType>
            </Address>
        </E911>
    </AlternateEndUserIdentifier>
</AlternateEndUserIdentifierResponse>
```

## Example : Not Found - if the account specified does not exist or is locked or there are no AEUI that corresponds to specified acid it will result in a "NOT FOUND" response.


* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<AlternateEndUserIdentifierResponse>
    <ResponseStatus>
        <Description>
            The resource does not exist
        </Description>
    </ResponseStatus>
</AlternateEndUserIdentifierResponse>
```


{% endmethod %}