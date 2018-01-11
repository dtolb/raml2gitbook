{% method %}
## /accounts/{accountId}/dldas/{orderid}

Update DLDA order to associate the street address with the telephone number.
The key data elements in the submission are -
     <table style="text-align: left; width: 80%;"
     border="1" cellpadding="2" cellspacing="2">
      <tbody>
        <tr>
          <td>TelephoneNumbers</td>
          <td>A list of telephone numbers you need to bind information from payload.</td>
        </tr>
        <tr>
          <td>AccountType</td>
          <td>Can be RESIDENTIAL or BUSINESS.  The element is required.</td>
        </tr>
        <tr>
          <td>ListingType</td>
          <td>Can be LISTED, NON_LISTED or NON_PUBLISHED. The element is required</td>
        </tr>
        <tr>
          <td>ListingName</td>
          <td>Inner fields: FirstName, FirstName2, LastName, Designation, TitleOfLineage, TitleOfAddress, TitleOfAddress2, TitleOfLineageName2, TitleOfAddressName2, TitleOfAddress2Name2, PlaceListingAs.</td>
        </tr>
        <tr>
          <td>ListAddress</td>
          <td>Can be true or false. The element is required.</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>This field is required. Inner fields: HousePrefix, HouseNumber, HouseSuffix, PreDirectional, StreetName, StreetSuffix, PostDirectional, AddressLine2, City, StateCode, Zip, PlusFour, AddressType</td>
        </tr>
      </tbody>
    </table>



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |





## Example Request
```xml
<DldaOrder>
    <CustomerOrderId>
        [String]
    </CustomerOrderId>
    <DldaTnGroups>
        <DldaTnGroup>
            <TelephoneNumbers>
                <TelephoneNumber>
                    5202217754
                </TelephoneNumber>
            </TelephoneNumbers>
            <AccountType>
                RESIDENCE
            </AccountType>
            <ListingType>
                LISTED
            </ListingType>
            <ListingName>
                <FirstName>
                    John
                </FirstName>
                <FirstName2/>
                <LastName>
                    Smith
                </LastName>
                <Designation/>
                <TitleOfLineage/>
                <TitleOfAddress/>
                <TitleOfAddress2/>
                <TitleOfLineageName2/>
                <TitleOfAddressName2/>
                <TitleOfAddress2Name2/>
                <PlaceListingAs/>
            </ListingName>
            <ListAddress>
                true
            </ListAddress>
            <Address>
                <HousePrefix/>
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
                <AddressType>
                    DLDA
                </AddressType>
            </Address>
        </DldaTnGroup>
    </DldaTnGroups>
</DldaOrder>
```


{% common %}


## Example : OK <br> A 200 response indicates that an order has been updated.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<DldaOrderResponse>
    <DldaOrder>
        <CustomerOrderId>
            [String]
        </CustomerOrderId>
        <OrderCreateDate>
            2014-07-10T12:38:11.833Z
        </OrderCreateDate>
        <AccountId>
            14
        </AccountId>
        <CreatedByUser>
            team_ua
        </CreatedByUser>
        <OrderId>
            f179237b-c1cb-449d-9590-aaa9d0bf3ca4
        </OrderId>
        <LastModifiedDate>
            2014-07-17T12:21:02.644Z
        </LastModifiedDate>
        <ErrorList/>
        <ProcessingStatus>
            RECEIVED
        </ProcessingStatus>
        <DldaTnGroups>
            <DldaTnGroup>
                <TelephoneNumbers>
                    <TelephoneNumber>
                        2199347436
                    </TelephoneNumber>
                </TelephoneNumbers>
                <AccountType>
                    RESIDENCE
                </AccountType>
                <ListingType>
                    NON_LISTED
                </ListingType>
                <ListingName>
                    <FirstName>
                        John
                    </FirstName>
                    <FirstName2>
                    </FirstName2>
                    <LastName>
                        Smith
                    </LastName>
                    <Designation>
                    </Designation>
                    <TitleOfLineage>
                    </TitleOfLineage>
                    <TitleOfAddress>
                    </TitleOfAddress>
                    <TitleOfAddress2>
                    </TitleOfAddress2>
                    <TitleOfLineageName2>
                    </TitleOfLineageName2>
                    <TitleOfAddressName2>
                    </TitleOfAddressName2>
                    <TitleOfAddress2Name2>
                    </TitleOfAddress2Name2>
                    <PlaceListingAs>
                    </PlaceListingAs>
                </ListingName>
                <ListAddress>
                    true
                </ListAddress>
                <Address>
                    <HousePrefix>
                    </HousePrefix>
                    <HouseNumber>
                        915
                    </HouseNumber>
                    <HouseSuffix>
                    </HouseSuffix>
                    <PreDirectional>
                    </PreDirectional>
                    <StreetName>
                        Elm
                    </StreetName>
                    <StreetSuffix>
                        Ave
                    </StreetSuffix>
                    <PostDirectional>
                    </PostDirectional>
                    <AddressLine2>
                    </AddressLine2>
                    <City>
                        Carpinteria
                    </City>
                    <StateCode>
                        CA
                    </StateCode>
                    <Zip>
                        93013
                    </Zip>
                    <PlusFour>
                    </PlusFour>
                    <County>
                    </County>
                    <Country>
                        United States
                    </Country>
                    <AddressType>
                        Dlda
                    </AddressType>
                </Address>
            </DldaTnGroup>
        </DldaTnGroups>
    </DldaOrder>
</DldaOrderResponse>
```

## Example : Bad Request <br> A 400 response Indicates that the order could not be modified. The payload is echoed with the Errors identified.


* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<DldaOrderResponse>
    <ResponseStatus>
        <ErrorCode>
            16105
        </ErrorCode>
        <Description>
            Order cannot be changed or cancelled because it is already being processed
        </Description>
    </ResponseStatus>
</DldaOrderResponse>
```


{% endmethod %}