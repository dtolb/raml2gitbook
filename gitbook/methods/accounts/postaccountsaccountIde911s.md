{% method %}
## /accounts/{accountId}/e911s

Create E911 order to associate the address with the telephone number.
The key data elements in the submission are -
 <table style="text-align: left; width: 80%;"
 border="1" cellpadding="2" cellspacing="2">
  <tbody>
    <tr>
      <td>TelephoneNumbers</td>
      <td>A list of telephone numbers you need link to the street address.</td>
    </tr>
    <tr>
      <td>CallerName</td>
      <td>CallerName that will be linked to TNs. This field is required in the case of a new address assignment.</td>
    </tr>
    <tr>
      <td>Address</td>
      <td>This field is required in the case of a new address assignment.  Inner fields: HousePrefix, HouseNumber, HouseSuffix, PreDirectional, StreetName, StreetSuffix, PostDirectional, AddressLine2, City, StateCode, Zip, PlusFour.  Streetname, City, and State are required.  House Number is currently required, although this enforcement may be relaxed in the future.</td>
    </tr>
    <tr>
      <td>DeleteTNSpecificE911Address</td>
      <td>Can be true or false. If value is true then Address and CallerName should not be specified.</td>
    </tr>
    <tr>
      <td>AlternateEndUserIdentifiers</td>
      <td>A list of AEUIs acts as a replacement for the list of telephone numbers. It replaces the TelephoneNumbers and AdditionalAddress payload element. </td>
    </tr>
    <tr>
      <td>AdditionalAddresses</td>
      <td>A list of Address sections. This address information for all potential endpoints which will be provisioned to the Bandwidth 911 system. At call time, the customer will submit this address information within the SIP header and, if a match is determined, the call will be routed to the PSAP nearest to that address. Otherwise, the call will be routed to an ECC. These Address sections will be the same in format to the Address section in the top-level of the E911Order payload. It replaces the TelephoneNumbers and AlternateEndUserIdentifiers payload element. </td>
    </tr>
    <tr>
      <td>AddressesToDelete</td>
      <td>A list of e911 location ids tags which should be unprovisioned/deleted. </td>
    </tr>
    <tr>
      <td>EndpointsToEdit</td>
      <td>The list of endpoints supposed to be updated during order execution. </td>
    </tr>
    <tr>
      <td>AddressesToEdit</td>
      <td>The list of addresses supposed to be updated during order execution. </td>
    </tr>
  </tbody>
</table>
<br />Examples of POST requests:
<table>
    <tbody>
    <tr>
        <th>Description</th>
        <th>Example</th>
    </tr>
    <tr>
        <td width="20%">
            PIDF-LO AEUI endpoint provisioning order with additional Address provisioning with pre-defined location
            id. <b>AlternateEndUserIdentifiers</b>, <b>AlternateEndUserIdentifier</b>, <b>Address</b>, <b>Identifier</b>
            are required.
            <b>PIDFLOEnabled</b> is required and have to be 'true'. Default value of <b>PreferredLanguage</b> is 'en'.
        </td>
        <td width="80%">
        <pre>
&ltE911Order&gt;
    &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
    &lt;AlternateEndUserIdentifiers&gt;
        &lt;AlternateEndUserIdentifier&gt;
            &lt;CallerName&gt;OptionalCallerName&lt;/CallerName&gt;
            &lt;Address&gt;
                &lt;LocationId&gt;Some32CharacterOrLessString&lt;/LocationId&gt;
                &lt;HouseNumber&gt;901&lt;/HouseNumber&gt;
                &lt;StreetName&gt;MAIN CAMPUS&lt;/StreetName&gt;
                &lt;StreetSuffix&gt;DR&lt;/StreetSuffix&gt;
                &lt;City&gt;RALEIGH&lt;/City&gt;
                &lt;StateCode&gt;NC&lt;/StateCode&gt;
                &lt;Zip&gt;27606&lt;/Zip&gt;
                &lt;PlusFour&gt;5244&lt;/PlusFour&gt;
                &lt;Country&gt;United States&lt;/Country&gt;
                &lt;AddressType&gt;E911&lt;/AddressType&gt;
            &lt;/Address&gt;
            &lt;CallbackNumber&gt;9706542333&lt;/CallbackNumber&gt;
            &lt;Identifier&gt;alphanumeric_or.:-_@_6_32_chars&lt;/Identifier&gt;
            &lt;PIDFLOEnabled&gt;true&lt;/PIDFLOEnabled&gt;
            &lt;PreferredLanguage&gt;en&lt;/PreferredLanguage&gt;
        &lt;/AlternateEndUserIdentifier&gt;
    &lt;/AlternateEndUserIdentifiers&gt;
&lt;/E911Order&gt;
        </pre>
        </td>
    </tr>
    <tr>
        <td>
            PIDF-LO AEUI endpoint provisioning with additional Address provisioning without pre-defined location
            id. <b>AlternateEndUserIdentifiers</b>, <b>AlternateEndUserIdentifier</b>, <b>Address</b>, <b>Identifier</b>
            are
            required.
            <b>PIDFLOEnabled</b> is required and have to be 'true'. Default value of <b>PreferredLanguage</b> is 'en'.
        </td>
        <td>
            <pre>
&lt;E911Order&gt;
    &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
    &lt;AlternateEndUserIdentifiers&gt;
      &lt;AlternateEndUserIdentifier&gt;
        &lt;CallerName&gt;OptionalCallerName&lt;/CallerName&gt;
        &lt;Address&gt;
          &lt;HouseNumber&gt;901&lt;/HouseNumber&gt;
          &lt;StreetName&gt;MAIN CAMPUS&lt;/StreetName&gt;
          &lt;StreetSuffix&gt;DR&lt;/StreetSuffix&gt;
          &lt;City&gt;RALEIGH&lt;/City&gt;
          &lt;StateCode&gt;NC&lt;/StateCode&gt;
          &lt;Zip&gt;27606&lt;/Zip&gt;
          &lt;PlusFour&gt;5244&lt;/PlusFour&gt;
          &lt;Country&gt;United States&lt;/Country&gt;
          &lt;AddressType&gt;E911&lt;/AddressType&gt;
        &lt;/Address&gt;
        &lt;CallbackNumber&gt;9706542333&lt;/CallbackNumber&gt;
        &lt;Identifier&gt;alphanumeric_or.:-_@_6_32_chars&lt;/Identifier&gt;
        &lt;PIDFLOEnabled&gt;true&lt;/PIDFLOEnabled&gt;
        &lt;PreferredLanguage&gt;en&lt;/PreferredLanguage&gt;
      &lt;/AlternateEndUserIdentifier&gt;
    &lt;/AlternateEndUserIdentifiers&gt;
&lt;/E911Order&gt;
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            PIDF-LO AEUI endpoint provisioning order with provisioned location id. <b>AlternateEndUserIdentifiers</b>, <b>AlternateEndUserIdentifier</b>,
            <b>LocationId</b>, <b>Identifier</b> are required.
            <b>PIDFLOEnabled</b> is required and have to be 'true'. Default value of <b>PreferredLanguage</b> is 'en'.
        </td>
        <td>
            <pre>
&lt;E911Order&gt;
    &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
    &lt;AlternateEndUserIdentifiers&gt;
      &lt;AlternateEndUserIdentifier&gt;
        &lt;CallerName&gt;OptionalCallerName&lt;/CallerName&gt;
        &lt;LocationId&gt;Some32CharacterOrLessString&lt;/LocationId&gt;
        &lt;CallbackNumber&gt;9706542333&lt;/CallbackNumber&gt;
        &lt;Identifier&gt;alphanumeric_or.:-_@_6_32_chars&lt;/Identifier&gt;
        &lt;PIDFLOEnabled&gt;true&lt;/PIDFLOEnabled&gt;
        &lt;PreferredLanguage&gt;en&lt;/PreferredLanguage&gt;
      &lt;/AlternateEndUserIdentifier&gt;
    &lt;/AlternateEndUserIdentifiers&gt;
&lt;/E911Order&gt;
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            Mixed PIDF-LO AEUI and Non-PIDF-LO AEUI endpoint provisioning order.
            <b>AlternateEndUserIdentifiers</b>, <b>AlternateEndUserIdentifier</b>, <b>Address</b>, <b>Identifier</b> are
            required.
            For non-PIDF-LO <b>CallbackNumber</b> is required.
            For PIDF-LO <b>PIDFLOEnabled</b> is required and have to be 'true'. Default value of
            <b>PreferredLanguage</b> is 'en'.
        </td>
        <td>
            <pre>
&lt;E911Order&gt;
    &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
    &lt;CallerName&gt;OptionalCallerName&lt;/CallerName&gt;
    &lt;Address&gt;
      &lt;LocationId&gt;Some32CharacterOrLessString&lt;/LocationId&gt;
      &lt;HouseNumber&gt;901&lt;/HouseNumber&gt;
      &lt;StreetName&gt;MAIN CAMPUS&lt;/StreetName&gt;
      &lt;StreetSuffix&gt;DR&lt;/StreetSuffix&gt;
      &lt;City&gt;RALEIGH&lt;/City&gt;
      &lt;StateCode&gt;NC&lt;/StateCode&gt;
      &lt;Zip&gt;27606&lt;/Zip&gt;
      &lt;PlusFour&gt;5244&lt;/PlusFour&gt;
      &lt;Country&gt;United States&lt;/Country&gt;
      &lt;AddressType&gt;E911&lt;/AddressType&gt;
    &lt;/Address&gt;
    &lt;AlternateEndUserIdentifiers&gt;
      &lt;AlternateEndUserIdentifier&gt;
        &lt;CallerName&gt;OptionalCallerName&lt;/CallerName&gt;
        &lt;LocationId&gt;Some32CharacterOrLessString&lt;/LocationId&gt;
        &lt;CallbackNumber&gt;9706542333&lt;/CallbackNumber&gt;
        &lt;Identifier&gt;alphanumeric_or.:-_@_6_32_chars&lt;/Identifier&gt;
        &lt;PIDFLOEnabled&gt;true&lt;/PIDFLOEnabled&gt;
        &lt;PreferredLanguage&gt;en&lt;/PreferredLanguage&gt;
      &lt;/AlternateEndUserIdentifier&gt;
      &lt;AlternateEndUserIdentifier&gt;
        &lt;CallbackNumber&gt;9706542334&lt;/CallbackNumber&gt;
        &lt;Identifier&gt;alphanumeric&lt;/Identifier&gt;
        &lt;PIDFLOEnabled&gt;false&lt;/PIDFLOEnabled&gt;
      &lt;/AlternateEndUserIdentifier&gt;
    &lt;/AlternateEndUserIdentifiers&gt;
&lt;/E911Order&gt;
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            PIDF-LO endpoint editing order.
            <b>EndpointsToEdit</b>, <b>AlternateEndUserIdentifier</b>, <b>Identifier</b> are required.
        </td>
        <td>
            <pre>
&lt;E911Order&gt;
    &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
    &lt;EndpointsToEdit&gt;
      &lt;AlternateEndUserIdentifier&gt;
        &lt;LocationId&gt;Some32CharacterOrLessString&lt;/LocationId&gt;
        &lt;CallerName&gt;OptionalCallerName&lt;/CallerName&gt;
        &lt;CallbackNumber&gt;9706542333&lt;/CallbackNumber&gt;
        &lt;Identifier&gt;alphanumeric_or.:-_@_6_32_chars&lt;/Identifier&gt;
        &lt;PreferredLanguage&gt;fr&lt;/PreferredLanguage&gt;
      &lt;/AlternateEndUserIdentifier&gt;
    &lt;/EndpointsToEdit&gt;
&lt;/E911Order&gt;
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            PIDF-LO and Non-PIDF-LO endpoint deletion order.
            <b>AlternateEndUserIdentifiers</b>, <b>AlternateEndUserIdentifier</b> are required/. <b>DeleteTNSpecificE911Address</b>
            is required and have to be 'true'.
            <b>Identifier</b> is required.
        </td>
        <td>
            <pre>
&lt;E911Order&gt;
    &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
    &lt;AlternateEndUserIdentifiers&gt;
      &lt;AlternateEndUserIdentifier&gt;
        &lt;Identifier&gt;alphanumeric_or.:-_@_6_32_chars&lt;/Identifier&gt;
      &lt;/AlternateEndUserIdentifier&gt;
    &lt;/AlternateEndUserIdentifiers&gt;
    &lt;DeleteTNSpecificE911Address&gt;true&lt;/DeleteTNSpecificE911Address&gt;
&lt;/E911Order&gt;
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            PIDF-LO address provisioning order.
            <b>AdditionalAddresses</b>, <b>Address</b> are required.
        </td>
        <td>
            <pre>
&lt;E911Order&gt;
    &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
    &lt;AdditionalAddresses&gt;
      &lt;Address&gt;
        &lt;LocationId&gt;Some32CharacterOrLessString&lt;/LocationId&gt;
        &lt;HouseNumber&gt;901&lt;/HouseNumber&gt;
        &lt;StreetName&gt;MAIN CAMPUS&lt;/StreetName&gt;
        &lt;StreetSuffix&gt;DR&lt;/StreetSuffix&gt;
        &lt;City&gt;RALEIGH&lt;/City&gt;
        &lt;StateCode&gt;NC&lt;/StateCode&gt;
        &lt;Zip&gt;27606&lt;/Zip&gt;
        &lt;PlusFour&gt;5244&lt;/PlusFour&gt;
        &lt;Country&gt;United States&lt;/Country&gt;
        &lt;AddressType&gt;E911&lt;/AddressType&gt;
      &lt;/Address&gt;
      &lt;Address&gt;
        &lt;LocationId&gt;Some32CharacterOrLessString&lt;/LocationId&gt;
        &lt;HouseNumber&gt;645&lt;/HouseNumber&gt;
        &lt;PreDirectional&gt;E&lt;/PreDirectional&gt;
        &lt;StreetName&gt;MANCHESTER&lt;/StreetName&gt;
            &lt;StreetSuffix&gt;AVE&lt;/StreetSuffix&gt;
        &lt;City&gt;LOS ANGELES&lt;/City&gt;
        &lt;StateCode&gt;United States&lt;/StateCode&gt;
        &lt;Zip&gt;90001&lt;/Zip&gt;
        &lt;Country&gt;United States&lt;/Country&gt;
      &lt;/Address&gt;
    &lt;/AdditionalAddresses&gt;
&lt;/E911Order&gt;
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            PIDF-LO address editing order.
            <b>AddressesToEdit</b>, <b>Address</b>, <b>LocationId</b> are required.
            Allows to update all address path except <b>PlusFour</b> and <b>Country</b>
        </td>
        <td>
            <pre>
&lt;E911Order&gt;
    &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
    &lt;AddressesToEdit&gt;
      &lt;Address&gt;
        &lt;LocationId&gt;Some32CharacterOrLessString1&lt;/LocationId&gt;
        &lt;HouseNumber&gt;646&lt;/HouseNumber&gt;
        &lt;PreDirectional&gt;W&lt;/PreDirectional&gt;
      &lt;/Address&gt;
      &lt;Address&gt;
        &lt;LocationId&gt;Some32CharacterOrLessString2&lt;/LocationId&gt;
        &lt;Zip&gt;90002&lt;/Zip&gt;
      &lt;/Address&gt;
    &lt;/AddressesToEdit&gt;
&lt;/E911Order&gt;
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            PIDF-LO address deletion order.
            <b>AddressesToDelete</b>, <b>E911LocationId</b> are required.
        </td>
        <td>
            <pre>
&lt;E911Order&gt;
    &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
    &lt;AddressesToDelete&gt;
      &lt;E911LocationId&gt;Some32CharacterOrLessString1&lt;/E911LocationId&gt;
      &lt;E911LocationId&gt;Some32CharacterOrLessString2&lt;/E911LocationId&gt;
    &lt;/AddressesToDelete&gt;
&lt;/E911Order&gt;
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            Non-PIDF-LO endpoint provisioning order.
            <b>AlternateEndUserIdentifiers</b>, <b>AlternateEndUserIdentifier</b>, <b>Address</b>, <b>CallbackNumber</b>
            <b>Identifier</b> is required.
        </td>
        <td>
            <pre>
&lt;E911Order&gt;
    &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
    &lt;CallerName&gt;OptionalCallerName&lt;/CallerName&gt;
    &lt;Address&gt;
      &lt;LocationId&gt;Some32CharacterOrLessString&lt;/LocationId&gt;
      &lt;HouseNumber&gt;901&lt;/HouseNumber&gt;
      &lt;StreetName&gt;MAIN CAMPUS&lt;/StreetName&gt;
      &lt;StreetSuffix&gt;DR&lt;/StreetSuffix&gt;
      &lt;City&gt;RALEIGH&lt;/City&gt;
      &lt;StateCode&gt;NC&lt;/StateCode&gt;
      &lt;Zip&gt;27606&lt;/Zip&gt;
      &lt;PlusFour&gt;5244&lt;/PlusFour&gt;
      &lt;Country&gt;United States&lt;/Country&gt;
      &lt;AddressType&gt;E911&lt;/AddressType&gt;
    &lt;/Address&gt;
    &lt;AlternateEndUserIdentifiers&gt;
      &lt;AlternateEndUserIdentifier&gt;
        &lt;CallbackNumber&gt;9706542333&lt;/CallbackNumber&gt;
        &lt;Identifier&gt;alphanumeric&lt;/Identifier&gt;
        &lt;PIDFLOEnabled&gt;false&lt;/PIDFLOEnabled&gt;
      &lt;/AlternateEndUserIdentifier&gt;
    &lt;/AlternateEndUserIdentifiers&gt;
&lt;/E911Order&gt;
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            TN/address combination provisioning order.
            <b>TelephoneNumbers</b>, <b>TelephoneNumber</b>, <b>Address</b> are required.
        </td>
        <td>
            <pre>
&lt;E911Order&gt;
    &lt;TelephoneNumbers&gt;
      &lt;TelephoneNumber&gt;9706542332&lt;/TelephoneNumber&gt;
      &lt;TelephoneNumber&gt;9706542333&lt;/TelephoneNumber&gt;
    &lt;/TelephoneNumbers&gt;
    &lt;CallerName&gt;OptionalCallerName&lt;/CallerName&gt;
    &lt;Address&gt;
      &lt;HouseNumber&gt;915&lt;/HouseNumber&gt;
      &lt;HouseSuffix/&gt;
      &lt;PreDirectional/&gt;
      &lt;StreetName&gt;Elm&lt;/StreetName&gt;
      &lt;StreetSuffix&gt;Ave&lt;/StreetSuffix&gt;
      &lt;PostDirectional/&gt;
      &lt;AddressLine2/&gt;
      &lt;City&gt;Carpinteria&lt;/City&gt;
      &lt;StateCode&gt;CA&lt;/StateCode&gt;
      &lt;Zip&gt;93013&lt;/Zip&gt;
      &lt;PlusFour/&gt;
      &lt;County/&gt;
      &lt;Country&gt;United States&lt;/Country&gt;
    &lt;/Address&gt;
&lt;/E911Order&gt;
            </pre>
        </td>
    </tr>
    <tr>
        <td>
            TN/address combination deletion.
            <b>TelephoneNumbers</b>, <b>TelephoneNumber</b> are required. <b>DeleteTNSpecificE911Address</b> is
            required and have to be 'true'.
        </td>
        <td>
            <pre>
&lt;E911Order&gt;
    &lt;CustomerOrderId&gt;CustomOrderId1&lt;/CustomerOrderId&gt;
    &lt;TelephoneNumbers&gt;
      &lt;TelephoneNumber&gt;9706542332&lt;/TelephoneNumber&gt;
      &lt;TelephoneNumber&gt;9706542333&lt;/TelephoneNumber&gt;
    &lt;/TelephoneNumbers&gt;
    &lt;DeleteTNSpecificE911Address&gt;true&lt;/DeleteTNSpecificE911Address&gt;
&lt;/E911Order&gt;
            </pre>
        </td>
    </tr>
    </tbody>
</table>
<br /><b>Error Codes.</b>
<br />For all possible error codes that can be returned in an E911 order, refer to section 6.4 of the Error Code Reference.



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |






{% common %}


## Example : Created <br> A 201 response indicates that an order has been created.


* Response: 201

{% sample lang="xml" %}

```xml
<?xml version="1.0"?>
<E911OrderResponse>
    <E911Order>
        <CustomerOrderId>
            CustomOrderId1
        </CustomerOrderId>
        <orderId>
            1d863522-c9bf-430c-8e79-cc63cad04a1d
        </orderId>
        <ProcessingStatus>
            RECEIVED
        </ProcessingStatus>
        <TelephoneNumbers>
            <TelephoneNumber>
                9706542332
            </TelephoneNumber>
            <TelephoneNumber>
                9706542333
            </TelephoneNumber>
        </TelephoneNumbers>
        <CallerName>
            CustomCallerName
        </CallerName>
        <Address>
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
            <Country/>
        </Address>
    </E911Order>
</E911OrderResponse>
```

## Example : Bad Request <br> A 400 response Indicates that the order could not be created.
Error text and an error code will be provided in the ErrorList element.


* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0"?>
<E911OrderResponse>
    <ErrorList>
        <Error>
            <TelephoneNumber>
                9706542332
            </TelephoneNumber>
            <Code>
                12345
            </Code>
            <Description>
                e911 information cannot be changed because the number is provisioned to another account
            </Description>
        </Error>
    </ErrorList>
    <E911Order>
        <CustomerOrderId>
            CustomOrderId1
        </CustomerOrderId>
        <ProcessingStatus>
            RECEIVED
        </ProcessingStatus>
        <TelephoneNumbers>
            <TelephoneNumber>
                9706542332
            </TelephoneNumber>
            <TelephoneNumber>
                9706542333
            </TelephoneNumber>
        </TelephoneNumbers>
        <CallerName>
            CustomCallerName
        </CallerName>
        <Address>
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
            <Country/>
        </Address>
    </E911Order>
</E911OrderResponse>
```


{% endmethod %}