{% method %}
## /accounts/{accountId}/addresses

GET is used to retrieve all addresses.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `type` | string | true | Search criteria for addresses by their type. |




{% common %}


## Example : OK - the addresses retrieval request will return a list of all addresses having specified type.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<AddressesResponse>
    <TotalCount>
        1
    </TotalCount>
    <Links>
        <first>
            Link=&lt;http://admin.localhost:8080/api/accounts/8000259/addresses?type=e911&gt;;rel="first";
        </first>
    </Links>
    <Addresses>
        <Address>
            <HouseNumber>
                207
            </HouseNumber>
            <HouseSuffix>
            </HouseSuffix>
            <PreDirectional>
            </PreDirectional>
            <StreetName>
                Elmastar
            </StreetName>
            <StreetSuffix>
                AlternateStar
            </StreetSuffix>
            <PostDirectional>
            </PostDirectional>
            <AddressLine2>
            </AddressLine2>
            <City>
                Carpinteriaaly
            </City>
            <StateCode>
                NY
            </StateCode>
            <Zip>
                93019
            </Zip>
            <PlusFour>
            </PlusFour>
            <County>
            </County>
            <Country>
                United States
            </Country>
            <AddressType>
                E911
            </AddressType>
            <ValidationStatus>
                VALID
            </ValidationStatus>
        </Address>
    </Addresses>
</AddressesResponse>
```

## Example : Not Found - if the account specified does not exist or is locked or there are no addresses for specified search criteria it will result in a not found.


* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<AddressesResponse>
    <ResponseStatus>
        <Description>
            The resource does not exist
        </Description>
    </ResponseStatus>
</AddressesResponse>
```


{% endmethod %}