{% method %}
## /accounts/{accountId}/dldas/{orderid}

Retrieve information about a DLDA Order with specified ID.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |
| `orderid` | string | true |






{% common %}


## Example : The descriptive payload for the Lidb Orders query provides a broad range of information about the DLDA Order identified in the URL.  Included amongst the information is:
<ul>
<li>ErrorList - the errors discovered with codes and explanations</li>
<li>various dates</li>
<li>ProcessingStatus(RECEIVED, PROCESSING, COMPLETE, PARTIAL, FAILED, CANCELLED) - the overall status of the order</li>
<li>DldaTnGroups - list of DldaTnGroup elements that contains list of TNs with Directory Listing and Directory Assistance information, AccountType(RESIDENCE or BUSINESS), ListingType(LISTED, NON_LISTED or NON_PUBLISHED)</li>
</ul>


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<DldaOrderResponse>
    <DldaOrder>
        <CustomerOrderId>
            5a88d16d-f8a9-45c5-a5db-137d700c6a22
        </CustomerOrderId>
        <OrderCreateDate>
            2014-07-10T12:38:11.833Z
        </OrderCreateDate>
        <AccountId>
            14
        </AccountId>
        <CreatedByUser>
            jbm
        </CreatedByUser>
        <OrderId>
            ea9e90c2-77a4-4f82-ac47-e1c5bb1311f4
        </OrderId>
        <LastModifiedDate>
            2014-07-10T12:38:11.833Z
        </LastModifiedDate>
        <ErrorList>
            <Error>
                <Code>
                    16103
                </Code>
                <Description>
                    DL/DA information cannot be changed because the number is already being processed 
                </Description>
                <TelephoneNumber>
                    2053778335
                </TelephoneNumber>
            </Error>
        </ErrorList>
        <ProcessingStatus>
            RECEIVED
        </ProcessingStatus>
        <DldaTnGroups>
            <DldaTnGroup>
                <TelephoneNumbers>
                    <TelephoneNumber>
                        2053778335
                    </TelephoneNumber>
                    <TelephoneNumber>
                        2053865784
                    </TelephoneNumber>
                </TelephoneNumbers>
                <AccountType>
                    BUSINESS
                </AccountType>
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
            </DldaTnGroup>
        </DldaTnGroups>
    </DldaOrder>
</DldaOrderResponse>
```

## Example : NOT FOUND - the order id does not exist in the system

* Response: 404

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<DldaOrderResponse>
    <ResponseStatus>
        <Description>
            The resource does not exist
        </Description>
    </ResponseStatus>
</DldaOrderResponse>
```


{% endmethod %}