{% method %}
## /accounts/{accountId}/orders

<span>A POST creates a request for Telephone Numbers</span>
<br>
A POST on the /orders resource is used to request that the system provide one or more TNs for use by the account.  The post creates a new number order record to preserve the request, as well as the response of the Bandwidth Dashboard to the request.  A well-formed POST on the /orders resource will create an order record, and return an order-id string that can be used to uniquely identify the new number order request.  The details of success and failure of the request for TNs will be preserved and linked to the returned order id.<br><br>
The order-id is returned in the Location Header, allowing the API user immediate access to the order.<br><br>
There are multiple ways that new telephone numbers can be requested.  The various request payloads are documented below. <br><br>
Common values in <b>all</b> request payloads include: <br>
<table>
    <tr>
        <th>Parameter</th>
        <th>Description</th>
    </tr>
    <tr>
        <td>Quantity</td>
        <td>The desired quantity of requested numbers. values range from 1-5000. If no quantity is specified, the default of 5000 is returned.</td>
    </tr>
    <tr>
        <td>name</td>
        <td>The name of the order. Max length restricted to 50 characters.</td>
    </tr>
    <tr>
        <td>CustomerOrderId</td>
        <td>Optional value for Id set by customer</td>
    </tr>
    <tr>
        <td>SiteId</td>
        <td>The ID of the Site that the SIP Peer is to be associated with.</td>
    </tr>
    <tr>
        <td>PeerId</td><td>The ID of the SIP Peer that the telephone numbers are to be assigned to.</td>
    </tr>
    <tr>
        <td>PartialAllowed</td>
        <td>By default all order submissions are fulfilled partially. Setting the PartialAllowed to false would trigger the entire order to be fulfilled (any error ecnountered such as 1 TN not being available would fail all TNs in the order)<br>
            By default, this value is set to false</td>
    </tr>
    <tr>
        <td>BackOrderRequested</td>
        <td>BackOrderRequested will indicate to the system that if the entire quantity of numbers is not available on the first attempt to fill the new number order, the request will be repeated periodically until the request is successful or cancelled. Setting the parameter to true indeicated a desire to backorder numbers if the entire quantity is not available</td>
    </tr>
</table>
<p>
The following POST payload elements are not common to all orders.  They are specific to one or more types of orders:
<br>
<table>
    <tr>
        <th>Parameter</th><th>Description</th>
    </tr>
    <tr>
        <td>TelephoneNumberList</td><td>A list of telephone numbers to order</td>
    </tr>
    <tr>
        <td>AreaCode</td><td>Allowed ranged: [2-9] for the first digit and [0, 9] for both the second and third digits.</td>
    </tr>
    <tr>
        <td>RateCenter</td><td>A text Rate Center name.  Must be combined with State information</td>
    </tr>
    <tr>
        <td>State</td><td>The two-letter abbreviation of the state</td>
    </tr>
    <tr>
        <td>City</td><td>The name of the city that the Ordered telephone numbers should apply to</td>
    </tr>
    <tr>
        <td>Zip</td><td>A five-digit (XXXXX) or nine-digit (XXXXX-XXXX) format value.</td>
    </tr>
    <tr>
        <td>Lata</td><td>A maximum five-digit (XXXXX) numeric format.</td>
    </tr>
    <tr>
        <td>EnableLCA</td><td>If set to true, local calling access numbers will be returned for Rate Center, NPA-NXX and NPANXXX orders if numbers are not available for the given criteria. Default is true.</td>
    </tr>
    <tr>
        <td>Npa-Nxx or Npa-Nxxxx with EnableLCA</td><td>NpaNxx combination to be searched.<br>Valid Npa values:  [2-9] for the first digit, and [0-9] for both the second and third digits.<br>Valid Nxx values: [2-9] for the first digit, and [0-9] for both the second and third digits.<br>Valid Xxvalues [0-9].<br><br>if set to true, enables the ability to get local calling access numbers if numbers are not available for the given criteria.</td>
    </tr>
    <tr>
        <td>LocalVanity</td><td>A text string used to request a regular vanity number. Valid range is between 4 and 7 alphanumeric characters.</td>
    </tr>
    <tr>
        <td>EndsIn</td><td>Intended to use with LocalVanity only. The parameter value is true or false. If set to true, the search will look for only numbers which end in specified LocalVanity, otherwise LocalVanity sequence can be met anywhere in last 7 number digits. The default is false.</td>
    </tr>
    <tr>
        <td>TollFreeVanity</td><td>A text string used to request a toll free vanity number. Valid range is between 4 and 7 alphanumeric characters.</td>
    </tr>
    <tr>
        <td>TollFreeWildCardPattern</td><td>A 3-digit wild card pattern for specifying toll free prefixes, comprised of 8 followed by two stars, a digit and a star or two digits</td>
    </tr>
    <tr>
        <td>ReservationIdList</td><td>If a telephone number or numbers have been previously reserved, the ReservationIdList provides the IDs necessary to release the numbers.  This only applies to reserved numbers - if no reservation has been placed on the numbers this list is not required.</td>
    </tr>
    <tr>
        <td>TnAttributes</td>
        <td>Attributes to be assigned to the telephone number. Optional parameter. Possible values: "Protected"</td>
    </tr>
</table>
<br><br>
<b>Putting it all together</b>
<br><br>
The request to order numbers is performed via a POST to the /orders resource.  As indicated above, the payload of this POST varies depending on the type of search that is to be performed for the numbers, with a unique payload element used to indicate each different order type. <br><br>
The unique components of the payload are described in the table below.  These are combined with the common payload elements in the first table above to create a full order payload.  Some complete payloads are captured in the examples. <br><br>
<table style="text-align: left; width: 100%;" border="1"
 cellpadding="2" cellspacing="0">
  <tbody>
    <tr>
      <th>Payload segment</th>
      <th>Description</th>
    </tr>
    <tr>
      <td>
      <pre>
&lt;ExistingTelephoneNumberOrderType&gt;
    &lt;TelephoneNumberList&gt;
        &lt;TelephoneNumber&gt;9193752369&lt;/TelephoneNumber&gt;
        &lt;TelephoneNumber&gt;9193752720&lt;/TelephoneNumber&gt;
        &lt;TelephoneNumber&gt;9193752648&lt;/TelephoneNumber&gt;
    &lt;/TelephoneNumberList&gt;
    &lt;ReservationIdList&gt;
        &lt;ReservationId&gt;[GUID]&lt;/ReservationId&gt;
        &lt;ReservationId&gt;[GUID]&lt;/ReservationId&gt;
    &lt;/ReservationIdList&gt;
&lt;/ExistingTelephoneNumberOrderType&gt;</pre>
      </td>
      <td>Order a set of numbers known to be available. <br>
      This often results if the numbers have been<br>
      found using a separate <b>availableNumbers</b> search<br>
        If the numbers have previously been reserved, <br>
        a reservation id must be included</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;AreaCodeSearchAndOrderType&gt;
    &lt;AreaCode&gt;617&lt;/AreaCode&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
&lt;/AreaCodeSearchAndOrderType&gt;</pre>
      </td>
      <td>Allowed ranges ~ <br>
      [2-9] for the first digit and <br>
      [0, 9] for both the second and <br>
      third digits.</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;RateCenterSearchAndOrderType&gt;
    &lt;RateCenter&gt;RALEIGH&lt;/RateCenter&gt;
    &lt;State&gt;NC&lt;/State&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
&lt;/RateCenterSearchAndOrderType&gt;</pre>
      </td>
      <td>Specify the Rate Center and <br> the State</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;NPANXXSearchAndOrderType&gt;
    &lt;NpaNxx&gt;919439&lt;/NpaNxx&gt;
    &lt;EnableTNDetail&gt;true&lt;/EnableTNDetail&gt;
    &lt;EnableLCA&gt;false&lt;/EnableLCA&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
&lt;/NPANXXSearchAndOrderType&gt;</pre>
      </td>
      <td>Specify the NpaNxx combination to be ordered.<br>
      Valid Npa values ~ [2-9] for the first digit,<br>
      and [0-9] for both the second and third digits.<br>
      Valid Nxx values ~ [2-9] for the first digit, <br>
      and [0-9] for both the second and third digits.<br>
      A similar approach is viable for NPANXXXX.<br>
      The EnableLCA flag turns LCA search on or off.
      </td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;TollFreeVanitySearchAndOrderType&gt;
   &lt;Quantity&gt;1&lt;/Quantity&gt;
   &lt;TollFreeVanity&gt;newcars&lt;/TollFreeVanity&gt;
&lt;/TollFreeVanitySearchAndOrderType&gt;</pre>
      </td>
      <td>
      Specify a Toll Free Vanity search, where the <br>
      numbers ordered match a specific alphanumeric <br>
      pattern between 4 and 7 characters long</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;TollFreeWildCharSearchAndOrderType&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
    &lt;TollFreeWildCardPattern&gt;8**&lt;/TollFreeWildCardPattern&gt;
&lt;/TollFreeWildCharSearchAndOrderType&gt;</pre>
      </td>
      <td>Specify the Toll Free wild card pattern.<br>
      to be ordered, comprised of 3 digits beginning with '8'.<br>
      Examples are 8**, 87*, etc.</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;StateSearchAndOrderType&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
    &lt;State&gt;NC&lt;/State&gt;
&lt;/StateSearchAndOrderType&gt;</pre>
      </td>
      <td>Specify the State to be searched<br>for telephone numbers</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;CitySearchAndOrderType&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
    &lt;City&gt;RALEIGH&lt;/City&gt;
    &lt;State&gt;NC&lt;/State&gt;
&lt;/CitySearchAndOrderType&gt;</pre>
      </td>
      <td>Specify the City and State to be ordered from.</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;ZIPSearchAndOrderType&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
    &lt;Zip&gt;27606&lt;/Zip&gt;
&lt;/ZIPSearchAndOrderType&gt;</pre>
      </td>
      <td>Specify the Zip Code to be ordered from.</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;LATASearchAndOrderType&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
    &lt;Lata&gt;224&lt;/Lata&gt;
&lt;/LATASearchAndOrderType&gt;</pre>
      </td>
      <td>Specify the LATA to order <br> telephone numbers from.</td>
    </tr>
    <tr>
      <td>
      <pre>
&lt;CombinedSearchAndOrderType&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
    &lt;AreaCode&gt;617&lt;/AreaCode&gt;
    &lt;RateCenter&gt;RALEIGH&lt;/RateCenter&gt;
    &lt;State&gt;NC&lt;/State&gt;
    &lt;NpaNxx&gt;919439&lt;/NpaNxx&gt;
    &lt;NpaNxxX&gt;9194391&lt;/NpaNxxX&gt;
    &lt;Lata&gt;224&lt;/Lata&gt;
    &lt;City&gt;RALEIGH&lt;/City&gt;
    &lt;Zip&gt;27606&lt;/Zip&gt;
    &lt;EnableLCA&gt;false&lt;/EnableLCA&gt;
&lt;/CombinedSearchAndOrderType&gt;</pre>
      </td>
      <td>Specify the any combination of:<br>
      <ul><li>AreaCode</li><li>RateCenter</li><li>State</li><li>NpaNxx</li><li>NpaNxxX</li><li>Lata</li><li>City</li><li>Zip</li></ul>
      <br>
But with following limitations:
<ul>
    <li>Parameters AreaCode, NpaNxx and NpaNxxX<br>are mutually exclusive</li>
    <li>LCA search is supported only for<br>one of the following criteria:<ul><ul><li>NpaNxx</li><li>NpaNxxX</li><li>RateCenter and State</li></ul></li>
    <li>If City or RateCenter is specified<br>then State is required</li>
</ul>
      </td>
<tr><td>
<pre>
&lt;CombinedSearchAndOrderType&gt;
    &lt;Quantity&gt;1&lt;/Quantity&gt;
    &lt;AreaCode&gt;617&lt;/AreaCode&gt;
    &lt;LocalVanity&gt;newcars&lt;/LocalVanity&gt;
    &lt;EndsIn&gt;false&lt;/EndsIn&gt;
&lt;/CombinedSearchAndOrderType&gt;
</pre>
</td>
<td>
    Specify AreaCode and LocalVanity to order telephone numbers matching a specific alphanumeric pattern between 4 and 7 characters long.<br>
    <br>
    Limitations:
    <ul>
    <li>AreaCode is always required</li>
    <li>No parameter combinations are allowed here</li>
    <li>This order type is unsupported with BackOrderRequested=true</li>
    </ul>
</td>
</tr>
<tr>
<td><pre>
 &lt;TnAttributes&gt;
    &lt;TnAttribute&gt;Protected&lt;/TnAttribute&gt;
    &lt;/TnAttributes&gt;</pre>
        </td>
        <td>Specify TnAttribute to be assigned to the ordered telephone numbers.</td>
      </tr>
    </tr>
  </tbody>
</table>
<br> <br> Some examples of POST payloads for some orders are below...



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |





## Example Request
```xml
<!--    an example of an area code search and order type-->
```


{% common %}


## Example : An Order has been successfully placed.

* Response: 201

{% sample lang="xml" %}

```xml
<OrderResponse>
    <Order>
        <CustomerOrderId>
            123456789
        </CustomerOrderId>
        <id>
            34adcd9f-2c4a-4631-9dae-d1f318ed57bc
        </id>
        <Name>
            Zip Order
        </Name>
        <OrderCreateDate>
            2014-07-11T17:13:57.788Z
        </OrderCreateDate>
        <BackOrderRequested>
            false
        </BackOrderRequested>
        <ZIPSearchAndOrderType>
            <Quantity>
                1
            </Quantity>
            <Zip>
                27606
            </Zip>
        </ZIPSearchAndOrderType>
        <TnAttributes>
            <TnAttribute>
                Protected
            </TnAttribute>
        </TnAttributes>
        <PartialAllowed>
            true
        </PartialAllowed>
        <SiteId>
            3013
        </SiteId>
    </Order>
</OrderResponse>
```

## Example : One or more of the input parameters are invalid.

* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<OrderResponse>
    <ErrorList>
        <Error>
            <Code>
                5016
            </Code>
            <Description>
                The SiteId submitted is invalid.
            </Description>
        </Error>
    </ErrorList>
    <Order>
        <CustomerOrderId>
            123456789
        </CustomerOrderId>
        <Name>
            Area Code Order
        </Name>
        <OrderCreateDate>
            2014-07-08T14:29:13.174Z
        </OrderCreateDate>
        <BackOrderRequested>
            false
        </BackOrderRequested>
        <AreaCodeSearchAndOrderType>
            <AreaCode>
                435
            </AreaCode>
            <Quantity>
                1
            </Quantity>
        </AreaCodeSearchAndOrderType>
        <TnAttributes>
            <TnAttribute>
                Protected
            </TnAttribute>
        </TnAttributes>
        <PartialAllowed>
            true
        </PartialAllowed>
        <SiteId>
            763
        </SiteId>
    </Order>
</OrderResponse>
```


{% endmethod %}