{% method %}
## /accounts/{accountId}/dldas

Create DLDA order to associate the street address with the telephone number.
The key data elements in the submission are -
 <table style="text-align: left; width: 80%;"
 border="1" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
      <td>TelephoneNumbers</td>
      <td>A list of telephone numbers you need to bind information from payload.</td>
    </tr>
    <tr>
      <td>SubscriberType</td>
      <td>Can be RESIDENTIAL or BUSINESS.  The element is required.</td>
    </tr>
    <tr>
      <td>ListingType</td>
      <td>Can be LISTED, NON_LISTED or NON_PUBLISHED. The element is required</td>
    </tr>
    <tr>
      <td>ListingName</td>
      <td>This field is required. Inner fields: FirstName (this field is required in case RESIDENTIAL SubscriberType is chosen), FirstName2, LastName (this field is required), Designation, TitleOfLineage, TitleOfAddress, TitleOfAddress2, TitleOfLineageName2, TitleOfAddressName2, TitleOfAddress2Name2, and PlaceListingAs are optional<br>Please see the note below on sorting of Business Listings.</td>
    </tr>
    <tr>
      <td>ListAddress</td>
      <td>Can be true or false. The element is required.</td>
    </tr>
    <tr>
      <td>Address</td>
      <td>This field is required. Inner fields: HousePrefix, HouseNumber, HouseSuffix, PreDirectional, StreetName, StreetSuffix, PostDirectional, AddressLine2, City, StateCode, Zip, PlusFour and AddressType=DLDA.<br>City, HouseNumber, StreetName, City, State and Zipcode are required fields.</td>
    </tr>
  </tbody>
</table>
<b>Business Listings...</b> <br>Business Listings sort differently than Residential Listings, and must be submitted accordingly.  Since Business Listings sort starting at the beginning of the name, where Residential Listings sort on Last Name, the parts of the business name that will govern the sorting need to be entered in the LastName field.  For example, Joe's Pizza sorts starting with Joe, so the entire business name would be entered in the LastName field, and the Firstname could be left blank.  If there was a portion of the name that was not important from a sorting perspective (perhaps "the best pizza in town"), that portion could be placed in the FirstName field.<br>



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |





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
            <SubscriberType>
                RESIDENTIAL
            </SubscriberType>
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


## Example : Created <br> A 201 response indicates that an order has been created.
The <b>location</b> header points to /accounts/<account-id>/dldas/<order-id> and can be used to retrive the status of the DLDA order.<br>
Errors in processing the request will be articulated in the ErrorList component of the response.


* Response: 201

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<DldaOrderResponse>
    <DldaOrder>
        <CustomerOrderId>
            [String]
        </CustomerOrderId>
        <OrderCreateDate>
            2014-07-16T07:59:08.065Z
        </OrderCreateDate>
        <AccountId>
            14
        </AccountId>
        <CreatedByUser>
            team_ua
        </CreatedByUser>
        <OrderId>
            f2ac3343-5bff-424a-b8ca-975f5e7b159e
        </OrderId>
        <LastModifiedDate>
            2014-07-16T07:59:08.065Z
        </LastModifiedDate>
        <ErrorList/>
        <ProcessingStatus>
            RECEIVED
        </ProcessingStatus>
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

## Example : Bad Request <br> A 400 response Indicates that the order could not be created.
Error text and an error code will be provided in the ErrorList element.


* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<DldaOrderResponse>
    <ResponseStatus>
        <ErrorCode>
            16104
        </ErrorCode>
        <Description>
            No numbers for processing
        </Description>
    </ResponseStatus>
    <DldaOrder>
        <CustomerOrderId>
            REST Site
        </CustomerOrderId>
        <OrderCreateDate>
            2014-07-17T10:06:55.204Z
        </OrderCreateDate>
        <AccountId>
            14
        </AccountId>
        <CreatedByUser>
            team_ua
        </CreatedByUser>
        <LastModifiedDate>
            2014-07-17T10:06:55.204Z
        </LastModifiedDate>
        <ErrorList>
            <Error>
                <Code>
                    5070
                </Code>
                <Description>
                    Telephone number is invalid.
                </Description>
                <TelephoneNumber>
                </TelephoneNumber>
            </Error>
        </ErrorList>
        <ProcessingStatus>
            FAILED
        </ProcessingStatus>
        <DldaTnGroups>
            <DldaTnGroup>
                <TelephoneNumbers>
                    <TelephoneNumber>
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
                        DLDA
                    </AddressType>
                </Address>
            </DldaTnGroup>
        </DldaTnGroups>
    </DldaOrder>
</DldaOrderResponse>
```


{% endmethod %}