{% method %}
## /accounts/{accountId}/lsrorders

A POST creates a lsrorder request to initiate a port-out action.<br>
The payload fields are described below...<br>
<table style="text-align: left; width: 80%;"
     border="1" cellpadding="2" cellspacing="2">
      <tbody>
        <tr>
          <td>Pon</td>
          <td>The Pon is customer specified order indentifier field. Allowed alphanumeric and "#","-","_". Up to 25 characters long. (required).</td>
        </tr>
        <tr>
          <td>CustomerOrderId</td>
          <td>The CustomerOrderId is customer specified order indentifier field. Allowed alphanumeric, spaces and dashes. Up to 40 characters long. (optional).</td>
        </tr>
        <tr>
          <td>SPID</td>
          <td>Identifier used in porting process. If account is no multi-SPID option - default with account value, otherwise value is required. Up to 4 characters long. (required)</td>
        </tr>
        <tr>
          <td>BillingTelephoneNumber</td>
          <td>Non-tollfree 10 digit phone number (optional).</td>
        </tr>
        <tr>
          <td>RequestedFocDate</td>
          <td>optional (next day if not specified).</td>
        </tr>
        <tr>
          <td>SubscriberType</td>
          <td>Subscriber type. BUSINESS | RESEDENTIAL (optional) (RESEDENTIAL if not specified).</td>
        </tr>
        <tr>
          <td>BusinessName</td>
          <td>Subscriber business name for BUSINESS SubscriberType. Up to 25 characters long. (required BusinessName or LastName).</td>
        </tr>
        <tr>
          <td>LastName</td>
          <td>Subscriber last name for RESEDENTIAL SubscriberType. Up to 25 characters long. (required BusinessName or LastName).</td>
        </tr>
        <tr>
          <td>FirstName</td>
          <td>Subscriber first name for RESEDENTIAL SubscriberType. Up to 25 characters long. (optional).</td>
        </tr>
        <tr>
          <td>MiddleInitial</td>
          <td>Subscriber middle initial for RESEDENTIAL SubscriberType. 1 character (optional).</td>
        </tr>
        <tr>
          <td>AccountNumber</td>
          <td>AccountNumber.  Alphanumeric, up to 32 characters. (optional).</td>
        </tr>
        <tr>
          <td>PinNumber</td>
          <td>PinNumber. Alphanumeric, up to 10 characters. (optional).</td>
        </tr>
        <tr>
          <td>AuthorizingPerson</td>
          <td>AuthorizingPerson. Alphanumeric, up to 100 characters (required).</td>
        </tr>
        <tr>
          <td>HousePrefix</td>
          <td>HousePrefix. Alphanumeric, up to 6 characters.</td>
        </tr>
        <tr>
          <td>HouseNumber</td>
          <td>HouseNumber. Alphanumeric, up to 45 characters  (required).</td>
        </tr>
        <tr>
          <td>HouseSuffix</td>
          <td>HouseSuffix. Alphanumeric, up to 45 characters.</td>
        </tr>
        <tr>
          <td>PreDirectional</td>
          <td>PreDirectional. Alphanumeric, up to 2 characters.</td>
        </tr>
        <tr>
          <td>StreetName</td>
          <td>StreetName. Alphanumeric, up to 200 characters  (required).</td>
        </tr>
        <tr>
          <td>StreetSuffix</td>
          <td>StreetSuffix. Alphanumeric, up to 45 characters.</td>
        </tr>
        <tr>
          <td>PostDirectional</td>
          <td>PostDirectional. Alphanumeric, up to 2 characters.</td>
        </tr>
        <tr>
          <td>AddressLine2</td>
          <td>AddressLine2. Alphanumeric, up to 200 characters.</td>
        </tr>
        <tr>
          <td>County</td>
          <td>County. Alphanumeric, up to 45 characters.</td>
        </tr>
        <tr>
          <td>City</td>
          <td>City. Alphanumeric, up to 100 characters  (required).</td>
        </tr>
        <tr>
          <td>StateCode</td>
          <td>StateCode. Alphanumeric, 2 characters  (required).</td>
        </tr>
        <tr>
          <td>Zip</td>
          <td>Zip code. Allowed formats: 5 numbers, 5+4 or Canadian  (required).</td>
        </tr>
        <tr>
          <td>ListOfTelephoneNumbers</td>
          <td>List of tns to be processed  (required).</td>
        </tr>
      </tbody>
    </table>



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |





## Example Request
```xml
<LsrOrder>
    <!-- By customer. Alphanumeric and "#","-","_". Up to 25 character long. (required) -->
    <Pon>
        ATT-011515-324234
    </Pon>
    <!-- By customer. Alphanumeric and " ","-". Up to 40 character long. (optional) -->
    <CustomerOrderId>
        FineCustomerid
    </CustomerOrderId>
    <!-- By customer. Alphanumeric. Up to 4 character long. (required if account value "mult") -->
    <SPID>
        123C
    </SPID>
    <!-- Non-toll-free btn (optional) -->
    <BillingTelephoneNumber>
        9192381468
    </BillingTelephoneNumber>
    <!-- Requested date (not past, optional, default next day) -->
    <RequestedFocDate>
        2015-11-15
    </RequestedFocDate>
    <AuthorizingPerson>
        Jim Hopkins
    </AuthorizingPerson>
    <Subscriber>
        <!--Type of the subscriber. BUSINESS | RESEDENTIAL (optional) (RESEDENTIAL if not specified)-->
        <SubscriberType>
            BUSINESS
        </SubscriberType>
        <!-- Up to 25 character long (required) -->
        <BusinessName>
            BusinessName
        </BusinessName>
        <ServiceAddress>
            <!-- HouseNumber up to 45 characters (required) -->
            <HouseNumber>
                11
            </HouseNumber>
            <!-- StreetName up to 200 characters (required) -->
            <StreetName>
                Park
            </StreetName>
            <!-- StreetSuffix  up to 45 characters (optional) -->
            <StreetSuffix>
                Ave
            </StreetSuffix>
            <!-- City  up to 100 characters (required) -->
            <City>
                New York
            </City>
            <!-- StateCode 2 characters (required) -->
            <StateCode>
                NY
            </StateCode>
            <!-- ZipCode 5 num or 5+4 num (required) -->
            <Zip>
                90025
            </Zip>
        </ServiceAddress>
        <!-- Alphanumeric up to 32 character long (optional) -->
        <AccountNumber>
            123463
        </AccountNumber>
        <!-- Alphanumeric up to 10 character long (optional) -->
        <PinNumber>
            1231
        </PinNumber>
    </Subscriber>
    <!-- Toll-free number not allowed -->
    <ListOfTelephoneNumbers>
        <TelephoneNumber>
            9192381468
        </TelephoneNumber>
        <TelephoneNumber>
            9192381467
        </TelephoneNumber>
    </ListOfTelephoneNumbers>
</LsrOrder>
```


{% common %}


## Example : The 201 response indicates that lsrorder request has been successfully created.

* Response: 201

{% sample lang="xml" %}

```xml
<LsrOrderResponse>
    <LsrOrder>
        <OrderId>
            afce454a-4e89-4753-9f58-a442ebc7b142
        </OrderId>
        <CustomerOrderId>
            FineCustomerid
        </CustomerOrderId>
        <LastModifiedBy>
            team_ua
        </LastModifiedBy>
        <OrderCreateDate>
            2015-02-06T12:57:45.607Z
        </OrderCreateDate>
        <PeerId>
            0
        </PeerId>
        <AccountId>
            9999999
        </AccountId>
        <SPID>
            123C
        </SPID>
        <LastModifiedDate>
            2015-02-09T13:07:57.286Z
        </LastModifiedDate>
        <SiteId>
            0
        </SiteId>
        <CreatedByUser>
            team_ua
        </CreatedByUser>
        <OrderStatus>
            PENDING
        </OrderStatus>
        <BillingTelephoneNumber>
            9192381468
        </BillingTelephoneNumber>
        <Pon>
            ATT-011515-324234
        </Pon>
        <PonVersion>
            8
        </PonVersion>
        <RequestedFocDate>
            2015-02-25 00:00:00
        </RequestedFocDate>
        <AuthorizingPerson>
            Jim Hopkins
        </AuthorizingPerson>
        <Subscriber>
            <SubscriberType>
                BUSINESS
            </SubscriberType>
            <BusinessName>
                BusinessName
            </BusinessName>
            <AccountNumber>
                123463
            </AccountNumber>
            <PinNumber>
                1231
            </PinNumber>
            <ServiceAddress>
                <HouseNumber>
                    11
                </HouseNumber>
                <StreetName>
                    Park
                </StreetName>
                <StreetSuffix>
                    Ave
                </StreetSuffix>
                <City>
                    New York
                </City>
                <StateCode>
                    NY
                </StateCode>
                <Zip>
                    90025
                </Zip>
                <Country>
                    United States
                </Country>
            </ServiceAddress>
        </Subscriber>
        <ListOfTelephoneNumbers>
            <TelephoneNumber>
                9192381468
            </TelephoneNumber>
            <TelephoneNumber>
                9192381467
            </TelephoneNumber>
            <TelephoneNumber>
                9192381469
            </TelephoneNumber>
        </ListOfTelephoneNumbers>
    </LsrOrder>
</LsrOrderResponse>
```

## Example : Bad request shows that lsrorder request does not pass validation. Fror more info see LsrOrderErrors section in response.

* Response: 400

{% sample lang="xml" %}

```xml
<LsrOrderResponse>
    <ResponseStatus>
        <ErrorCode>
            400
        </ErrorCode>
        <Description>
            Lsr order doesn't pass validation. Please check your input parameters.
        </Description>
    </ResponseStatus>
    <LsrOrderErrors>
        <LsrOrderError>
            <Code>
                7324
            </Code>
            <Description>
                The business name is too long. The business name should not be longer than 25 characters.
            </Description>
        </LsrOrderError>
        <LsrOrderError>
            <Code>
                7318
            </Code>
            <Description>
                Customer order ID is invalid. Only alphanumeric values, dashes and spaces are allowed. Max length is 40 characters.
            </Description>
        </LsrOrderError>
        <LsrOrderError>
            <Code>
                7203
            </Code>
            <Description>
                The billing telephone number (BTN) is invalid
            </Description>
        </LsrOrderError>
        <LsrOrderError>
            <Code>
                16005
            </Code>
            <Description>
                Toll-free telephone numbers can be present in the lsr order.
            </Description>
        </LsrOrderError>
        <LsrOrderError>
            <Code>
                16009
            </Code>
            <Description>
                Lsr order contain duplicate telephone numbers: [9192381468, 9192381468]
            </Description>
        </LsrOrderError>
        <LsrOrderError>
            <Code>
                16002
            </Code>
            <Description>
                Order contains invalid tns: [8882381468].
            </Description>
        </LsrOrderError>
    </LsrOrderErrors>
    <LsrOrder>
        <CustomerOrderId>
            WrongCustomerOrderIdLogerThan40AndContains$%SpecSimbols
        </CustomerOrderId>
        <LastModifiedBy>
            team_ua
        </LastModifiedBy>
        <OrderCreateDate>
            2015-02-06T12:57:45.607Z
        </OrderCreateDate>
        <AccountId>
            0
        </AccountId>
        <CreatedByUser>
            team_ua
        </CreatedByUser>
        <OrderStatus>
            FAILED
        </OrderStatus>
        <BillingTelephoneNumber>
            919238466
        </BillingTelephoneNumber>
        <Pon>
            ATT-011515-324234%$
        </Pon>
        <AuthorizingPerson>
            Jim Hopkins
        </AuthorizingPerson>
        <Subscriber>
            <SubscriberType>
                BUSINESS
            </SubscriberType>
            <BusinessName>
                LongerThan25CharacterBusinessName
            </BusinessName>
            <AccountNumber>
                123463
            </AccountNumber>
            <PinNumber>
                1231
            </PinNumber>
            <ServiceAddress>
                <HouseNumber>
                    11
                </HouseNumber>
                <StreetName>
                    Park
                </StreetName>
                <StreetSuffix>
                    Ave
                </StreetSuffix>
                <City>
                    New York
                </City>
                <StateCode>
                    NY
                </StateCode>
                <Zip>
                    90025
                </Zip>
                <Country>
                    United States
                </Country>
            </ServiceAddress>
        </Subscriber>
        <ListOfTelephoneNumbers>
            <TelephoneNumber>
                9192381468
            </TelephoneNumber>
            <TelephoneNumber>
                9192381468
            </TelephoneNumber>
            <TelephoneNumber>
                9192381468
            </TelephoneNumber>
        </ListOfTelephoneNumbers>
    </LsrOrder>
</LsrOrderResponse>
```


{% endmethod %}