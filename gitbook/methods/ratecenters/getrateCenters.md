{% method %}
## /rateCenters

The Rate Centers API Call returns information about the Bandwidth CLEC Network, including coverage data, indicating both the extent of on-net and off-net coverage, as well as number availability, again from an on-net and off-net perspective. The rules are as follows- <ul><li>If supported=true is specified, then the coverage or availability is reported for the Bandwidth CLEC only. </li><li>If supported=true is omitted or false, then the coverage or availability is reported for the combination of the Bandwidth CLEC and our partners </li><li>If available=true is specified, then only Rate Centers in which we have available numbers are reported. </li><li>If available is omitted or false then all Rate Centers within the scope defined by supported will be returned. </li></ul>These rules apply for both the /rateCenters and /cities API calls. <table border="1" cellpadding="0" cellspacing="0"> <tbody> <tr> <td valign="top" > </td> <td valign="top" > Supported = true </td> <td valign="top" > Supported is missing </td> </tr> <tr> <td valign="top" > available = true </td> <td valign="top" > Available numbers within the Bandwidth CLEC network </td> <td valign="top" > Available numbers within the Bandwidth CLEC network combined with our partner networks </td> </tr> <tr> <td valign="top" > available is missing </td> <td valign="top" > Coverage in the Bandwidth CLEC </td> <td valign="top" > Coverage of the combined Bandwidth CLEC + Partner networks </td> </tr> </tbody> </table>




### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `state` | string | true | 2 character state code. |
| `available` | boolean | false | If available is set as true then the result includes the quantity of the available telephone numbers in that Rate Center. |
| `supported` | boolean | false | If supported is set to true the payload will show those Rate Centers that Bandwidth serves directly. |




{% common %}


## Example : This response returns the list of Rate Center names and abbreviations.  If 'available' is specified then the number of TNs available in that Rate Center is also included.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0"?>
<RateCenterResponse>
    <ResultCount>
        450
    </ResultCount>
    <RateCenters>
        <RateCenter>
            <Abbreviation>
                ADAMS
            </Abbreviation>
            <Name>
                ADAMS
            </Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>
                AINSWORTH
            </Abbreviation>
            <Name>
                AINSWORTH
            </Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>
                ALBION
            </Abbreviation>
            <Name>
                ALBION
            </Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>
                ALEXANDRIA
            </Abbreviation>
            <Name>
                ALEXANDRIA
            </Name>
        </RateCenter>
        <!-- ... SNIP ... -->
        <RateCenter>
            <Abbreviation>
                WOOD RIVER
            </Abbreviation>
            <Name>
                WOOD RIVER
            </Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>
                WYMORE
            </Abbreviation>
            <Name>
                WYMORE
            </Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>
                WYFRYCSTHL
            </Abbreviation>
            <Name>
                WYNOT FORDYCE SAINT HELENA
            </Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>
                YORK
            </Abbreviation>
            <Name>
                YORK
            </Name>
        </RateCenter>
        <RateCenter>
            <Abbreviation>
                YUTAN
            </Abbreviation>
            <Name>
                YUTAN
            </Name>
        </RateCenter>
    </RateCenters>
</RateCenterResponse>
<!-- .....OR.....In the case that the query parameter available is set to true ,we will include the quantity of numbers that are availablein the indicated Rate Center -->
```


{% endmethod %}