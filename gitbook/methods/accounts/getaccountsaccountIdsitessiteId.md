{% method %}
## /accounts/{accountId}/sites/{siteId}

retrieves the information associated with the site id


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |






{% common %}


## Example : site id successfully retrieved

* Response: 200

{% sample lang="xml" %}

```xml
<SiteResponse>
    <Site>
        <Id>
            3013
        </Id>
        <Name>
            Raleigh
        </Name>
        <Description>
            Test Gateway
        </Description>
        <CustomerName>
            BW
        </CustomerName>
        <Address>
            <HouseNumber>
                6300
            </HouseNumber>
            <StreetName>
                Example Street
            </StreetName>
            <City>
                Raleigh
            </City>
            <StateCode>
                NC
            </StateCode>
            <Country>
                United States
            </Country>
            <AddressType>
                Service
            </AddressType>
        </Address>
        <!-- Following appears only for sites on UC Trunking accounts. -->
        <UcTrunkingConfiguration>
            <Type>
                Seats
            </Type>
            <UsageCategory>
                UC500
            </UsageCategory>
        </UcTrunkingConfiguration>
    </Site>
</SiteResponse>
```

## Example : the site id entered does not exist

* Response: 404

{% sample lang="xml" %}

```xml
<SiteResponse>
    <ResponseStatus>
        <ErrorCode>
            12016
        </ErrorCode>
        <Description>
            Site '3014' does not exist
        </Description>
    </ResponseStatus>
</SiteResponse>
```


{% endmethod %}