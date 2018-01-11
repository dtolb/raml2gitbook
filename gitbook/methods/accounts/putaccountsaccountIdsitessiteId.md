{% method %}
## /accounts/{accountId}/sites/{siteId}

updates the contents of a site id


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `siteId` | string | true |





## Example Request
```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Site>
    <Name>
        Raleigh
    </Name>
    <Description>
        SIP gateway
    </Description>
    <CustomerName>
        BW
    </CustomerName>
    <CustomerProvidedId>
        1234567890
    </CustomerProvidedId>
    <Address>
        <HouseNumber>
            900
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
        <AddressType>
            Service
        </AddressType>
    </Address>
    <!-- Following applies only to sites on UC Trunking accounts. -->
    <UcTrunkingConfiguration>
        <Type>
            Seats
        </Type>
        <UsageCategory>
            UC500
        </UsageCategory>
    </UcTrunkingConfiguration>
</Site>
```


{% common %}



{% endmethod %}