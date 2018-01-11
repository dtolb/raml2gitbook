{% method %}
## /accounts/{accountId}

This API call retrieves information about the account indicated by the Account ID.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |






{% common %}


## Example : 

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<AccountResponse>
    <Account>
        <AccountId>
            14
        </AccountId>
        <AssociatedCatapultAccount>
            u-ertyhgfd12dcvdhnboklk
        </AssociatedCatapultAccount>
        <GlobalAccountNumber>
            globalAccount
        </GlobalAccountNumber>
        <CompanyName>
            CWI Hosting
        </CompanyName>
        <AccountType>
            Business
        </AccountType>
        <NenaId>
        </NenaId>
        <Tiers>
            <Tier>
                0
            </Tier>
        </Tiers>
        <Address>
            <HouseNumber>
                60
            </HouseNumber>
            <HouseSuffix>
            </HouseSuffix>
            <PreDirectional>
            </PreDirectional>
            <StreetName>
                Pine
            </StreetName>
            <StreetSuffix>
                St
            </StreetSuffix>
            <PostDirectional>
            </PostDirectional>
            <AddressLine2>
            </AddressLine2>
            <City>
                Denver
            </City>
            <StateCode>
                CO
            </StateCode>
            <Zip>
                80016
            </Zip>
            <PlusFour>
            </PlusFour>
            <County>
            </County>
            <Country>
                United States
            </Country>
            <AddressType>
                Service
            </AddressType>
        </Address>
        <Contact>
            <FirstName>
                Sanjay
            </FirstName>
            <LastName>
                Rao
            </LastName>
            <Phone>
                9195441234
            </Phone>
            <Email>
                srao@bandwidth.com
            </Email>
        </Contact>
        <ReservationAllowed>
            true
        </ReservationAllowed>
        <LnpEnabled>
            true
        </LnpEnabled>
        <AltSpid>
            X455
        </AltSpid>
        <SPID>
            9999
        </SPID>
        <PortCarrierType>
            WIRELINE
        </PortCarrierType>
    </Account>
</AccountResponse>
```


{% endmethod %}