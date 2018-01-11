{% method %}
## /accounts/{accountId}/lnpchecker

Request portability information on a set of TNs



### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `accountId` | string | true |


### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `fullCheck` | string | false | <table>    <tr>        <th>parameter value</th>        <th>description</th>    </tr>    <tr>        <td>true</td>        <td>additional information will be provided on the losing carriers associated with the listed numbers</td>    </tr>    <tr>        <td>false</td>        <td>return only rate center information</td>    </tr>    <tr>        <td>onnetportability</td>        <td>identical in meaning to <i>&quot;true&quot;</i> value</td>    </tr>    <tr>        <td>offnetportability</td>        <td>in addition to on-net information return off-net port information in <i>&lt;PartnerSupportedRateCenters&gt;</i> element with Partner/Vendor that the port will be supported on.        Contains a list of the TNs that are supported in partner rate centers, and for which we will manually execute a port if requested        </td>    </tr></table> |



## Example Request
```xml
<NumberPortabilityRequest>
    <TnList>
        <!-- the list of the TNs to check for Portability -->
        <Tn>
            4109255199
        </Tn>
        <Tn>
            4109235436
        </Tn>
        <Tn>
            4104685864
        </Tn>
        <Tn>
            4103431313
        </Tn>
        <Tn>
            4103154313
        </Tn>
        <Tn>
            4103431561
        </Tn>
    </TnList>
</NumberPortabilityRequest>
```


{% common %}


## Example : A successful check has been performed.

* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<NumberPortabilityResponse>
    <PortType>
        AUTOMATED
    </PortType>
    <SupportedRateCenters/>
    <UnsupportedRateCenters>
        <RateCenterGroup>
            <RateCenter>
                BALTIMORE
            </RateCenter>
            <City>
                BALTIMORE
            </City>
            <State>
                MD
            </State>
            <LATA>
                238
            </LATA>
            <TnList>
                <Tn>
                    4109255199
                </Tn>
                <Tn>
                    4104685864
                </Tn>
            </TnList>
        </RateCenterGroup>
        <RateCenterGroup>
            <RateCenter>
                SPARKSGLNC
            </RateCenter>
            <City>
                SPARKS GLENCOE
            </City>
            <State>
                MD
            </State>
            <LATA>
                238
            </LATA>
            <TnList>
                <Tn>
                    4103431313
                </Tn>
                <Tn>
                    4103431561
                </Tn>
            </TnList>
        </RateCenterGroup>
    </UnsupportedRateCenters>
    <PartnerSupportedRateCenters>
        <!-- Only available for fullCheck=offnetportability -->
        <RateCenterGroup>
            <RateCenter>
                FT COLLINS
            </RateCenter>
            <City>
                FORT COLLINS
            </City>
            <State>
                CO
            </State>
            <LATA>
                656
            </LATA>
            <Tiers>
                <Tier>
                    1
                </Tier>
            </Tiers>
            <TnList>
                <Tn>
                    4109235436
                </Tn>
            </TnList>
        </RateCenterGroup>
    </PartnerSupportedRateCenters>
    <SupportedLosingCarriers>
        <LosingCarrierTnList>
            <LosingCarrierSPID>
                9998
            </LosingCarrierSPID>
            <LosingCarrierName>
                Test Losing Carrier L3
            </LosingCarrierName>
            <LosingCarrierIsWireless>
                false
            </LosingCarrierIsWireless>
            <LosingCarrierAccountNumberRequired>
                false
            </LosingCarrierAccountNumberRequired>
            <LosingCarrierMinimumPortingInterval>
                5
            </LosingCarrierMinimumPortingInterval>
            <TnList>
                <Tn>
                    4109255199
                </Tn>
                <Tn>
                    4104685864
                </Tn>
                <Tn>
                    4103431313
                </Tn>
                <Tn>
                    4103431561
                </Tn>
            </TnList>
        </LosingCarrierTnList>
    </SupportedLosingCarriers>
    <UnsupportedLosingCarriers/>
</NumberPortabilityResponse>
```

## Example : Bad Response - there were errors in evaluating the body of the request
Potential errors include: <ul>
<li> Un-supported losing carrier.
<li> Unable to provide coverage.
<li> Telephone number is already being processed on another order.
<li> Rate Center Not Present in Bandwidth Dashboard.
<li> Account not enabled for LNP
</ul>


* Response: 400

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<NumberPortabilityResponse>
    <Errors>
        <Code>
            7201
        </Code>
        <Description>
            61746052083 is not a valid NANPA telephone number.
        </Description>
    </Errors>
    <Errors>
        <Code>
            7201
        </Code>
        <Description>
            61746052082 is not a valid NANPA telephone number.
        </Description>
    </Errors>
</NumberPortabilityResponse>
```


{% endmethod %}