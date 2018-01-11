{% method %}
## /tns

Retrieve information about one or more Telephone Numbers (TNs), where the TNs are chosen based on the search parameters provided in the API Call.





### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `page` | string | true | An ID of the first element in a page.  This value will indicate the first value, not the count, of the initial entry in the page being requested.  Note in the example that the page is the TN that begins the page. The initial page is tagged with the ID '1' |
| `size` | integer | true | The number of items to include in a page |
| `accountId` | integer | true | The internal account id assigned to the customer that "owns" the TN |
| `fullNumber` | string | true | A 10 Digit TN |
| `tier` | integer | true | A service tier indicating the the vendor class that the TN is associated with.  Tier indicates whether the TN is on-net, domestic offnet, Canadian, etc. |
| `lata` | integer | true | The LATA (Local Access Transport Area) that the TN is served from, typically 3 digits (5 in FLA) |
| `rateCenter` | string | true | The Rate Center designation that the number is served from.  If not combined with a State search the results will span states. |
| `npa` | string | true | The first 3 digits of a 10 Digit NA Telephone Number, the Area Code. |
| `npaNxx` | string | true | The first 6 digits of a 10 Digit NA Telephone Number. |
| `npaNxxX` | string | true | The first 7 digits of a 10 Digit NA Telephone Number. |
| `state` | string | true | A 2 character State or Province designation - TX for Texas for example |
| `city` | string | true | The geographic city most likely to serve the Telephone Number.  City and other geographic data is determined statistically, and is not as reliable as Rate Center information for pinpointing the service location of a TN |
| `host` | string | true | An IP address or subnet (CIDR format) associated with the TN. Filter for subnet applies by exact match. |




{% common %}


## Example : The descriptive payload for the TNs query provides information about the TN(s) that were found in the Query. Information about the City, State, LATA, Rate Center, Tier, Vendor, Status, Owning Account and Last Modified Date is provided for each TN in the payload.
Links to assist in pagination are also provided.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0"?>
<TelephoneNumbersResponse>
    <TelephoneNumberCount>
        5
    </TelephoneNumberCount>
    <Links>
        <first>
            Link=&lt;https://dashboard.bandwidth.com:443/v1.0/tns?account=9500012&amp;page=1&amp;size=500&gt;;rel="first";
        </first>
        <next>
            Link=&lt;https://dashboard.bandwidth.com:443/v1.0/tns?account=9500012&amp;page=2012082912&amp;size=500&gt;;rel="next";
        </next>
    </Links>
    <TelephoneNumbers>
        <TelephoneNumber>
            <City>
                CARY
            </City>
            <Lata>
                426
            </Lata>
            <State>
                NC
            </State>
            <FullNumber>
                9192381138
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
                CARY
            </RateCenter>
            <Status>
                Inservice
            </Status>
            <AccountId>
                9900008
            </AccountId>
            <LastModified>
                2013-12-05T05:58:27.000Z
            </LastModified>
        </TelephoneNumber>
        <TelephoneNumber>
            <City>
                CARY
            </City>
            <Lata>
                426
            </Lata>
            <State>
                NC
            </State>
            <FullNumber>
                9192381139
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
                CARY
            </RateCenter>
            <Status>
                Inservice
            </Status>
            <AccountId>
                9900000
            </AccountId>
            <LastModified>
                2013-12-05T05:58:27.000Z
            </LastModified>
        </TelephoneNumber>
        <TelephoneNumber>
            <City>
                CARY
            </City>
            <Lata>
                426
            </Lata>
            <State>
                NC
            </State>
            <FullNumber>
                9192381141
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
                CARY
            </RateCenter>
            <Status>
                Inservice
            </Status>
            <AccountId>
                9900000
            </AccountId>
            <LastModified>
                2013-12-05T05:58:27.000Z
            </LastModified>
        </TelephoneNumber>
        <TelephoneNumber>
            <City>
                CARY
            </City>
            <Lata>
                426
            </Lata>
            <State>
                NC
            </State>
            <FullNumber>
                9192381142
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
                CARY
            </RateCenter>
            <Status>
                Inservice
            </Status>
            <AccountId>
                9900000
            </AccountId>
            <LastModified>
                2013-12-05T05:58:27.000Z
            </LastModified>
        </TelephoneNumber>
        <TelephoneNumber>
            <City>
                CARY
            </City>
            <Lata>
                426
            </Lata>
            <State>
                NC
            </State>
            <FullNumber>
                9192381144
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
                CARY
            </RateCenter>
            <Status>
                Aging
            </Status>
            <AccountId>
                753
            </AccountId>
            <LastModified>
                2013-12-05T05:58:27.000Z
            </LastModified>
        </TelephoneNumber>
    </TelephoneNumbers>
</TelephoneNumbersResponse>
```

## Example : Bad Request - any syntax error in the parameters will cause a 400 error with a payload similar to the payload in the example, with an error code and text description.


* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<TelephoneNumbersResponse>
    <ResponseStatus>
        <ErrorCode>
            15511
        </ErrorCode>
        <Description>
            The NPA_NXX '9192384' is invalid
        </Description>
    </ResponseStatus>
</TelephoneNumbersResponse>
```


{% endmethod %}