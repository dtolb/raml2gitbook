{% method %}
## /accounts/{accountId}/availableNumbers

Retrieves the phone numbers according to the input parameters


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `quantity` | integer | true | The desired quantity of requested numbers. Values range from 1-5000. |
| `enableTNDetail` | boolean | true | If set to true, a list of details associated with the telephone number (rate center, abbreviation, city, state, and LATA) will be displayed along with the TN. |
| `LCA` | boolean | true | Values are true or false. |
| `endsIn` | boolean | true | Intended to use with <i>localVanity</i> only. If set to true, the search will look for only numbers which end in specified <i>localVanity</i>, otherwise <i>localVanity</i> sequence can be met anywhere in last 7 number digits. The default is false. |
| `areaCode` | integer | true | The 3-digit area code associated with the TN. Allowed number ranges are [2-9] for the first digit and [0-9] for both the second and third digits. |
| `npaNxx` | integer | true | The 6 prefix associated with the TN.<br>Allowed number ranges for NPA are [2-9] for the first digit and [0-9] for both the second and third digits.<br>Allowed number ranges for NXX are [2-9] for the first digit and [0-9] for both the second and third digits.<br> |
| `npaNxxx` | integer | true | The 7-digit prefix associated with the TN.<br>Allowed number ranges for NPA are [2-9] for the first digit and [0-9] for both the second and third digits.<br>Allowed number ranges for NXXX are [2-9] for the first digit and [0-9] the rest of the (X) digits.<br> |
| `lata` | integer | true | A maximum five digit (XXXXX) numeric format |
| `rateCenter` | string | true | The abbreviation for the rateCenter |
| `city` | string | true | The name of the city. |
| `state` | string | true | The two-letter abbreviation of the state the RateCenter is in |
| `tollFreeVanity` | string | true | The Toll Free requested vanity number. Valid range is 7+ digits alphanumeric. |
| `tollFreeWildCardPattern` | string | true | The Toll Free requested wild card pattern. valid range is 3 digits. |
| `localVanity` | string | true | Requested vanity number. Valid range is from 4 to 7 alphanumeric characters. |
| `zip` | integer | true | A five-digit (XXXXX) or nine-digit (XXXXX-XXXX) format value. |
| `orderBy` | string | true | The field by which the results should be sorted |




{% common %}


## Example : A list of available numbers is provided.  Additional information is available if the queryParameter enableTNDetail is true.
If no numbers are available an empty SearchResult element is returned.


* Response: 200

{% sample lang="xml" %}

```xml
<SearchResult>
    <ResultCount>
        384
    </ResultCount>
    <TelephoneNumberList>
        <TelephoneNumber>
            4354776112
        </TelephoneNumber>
        <!---- SNIP ---->
        <TelephoneNumber>
            4357095160
        </TelephoneNumber>
    </TelephoneNumberList>
</SearchResult>
```

## Example : Invalid/missing input parameter

* Response: 400

{% sample lang="xml" %}

```xml
<SearchResult>
    <Error>
        <Code>
            4010
        </Code>
        <Description>
            One of more required search parameters are null or empty, please refer to the api documentation
        </Description>
    </Error>
</SearchResult>
```


{% endmethod %}