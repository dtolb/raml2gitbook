{% method %}
## /cities

The Rate Centers and Cities API Calls return information about the Bandwidth CLEC Network, including coverage data, indicating both the extent of on-net and off-net coverage, as well as number availability, again from an on-net and off-net perspective. The rules are as follows- <ul><li>If supported=true is specified, then the coverage or availability is reported for the Bandwidth CLEC only. </li><li>If supported is omitted or false, then the coverage or availability is reported for the combination of the Bandwidth CLEC and our partners </li><li>If available=true is specified, then only Rate Centers in which we have available numbers are reported. </li><li>If available is omitted or false, then all Rate Centers within the scope defined by supported will be returned. </li></ul>These rules apply for both the /rateCenters and /cities API calls. <table border="1" cellpadding="0" cellspacing="0"> <tbody> <tr> <td valign="top" > </td> <td valign="top" > Supported = true </td> <td valign="top" > Supported is missing </td> </tr> <tr> <td valign="top" > available = true </td> <td valign="top" > Available numbers within the Bandwidth CLEC network </td> <td valign="top" > Available numbers within the Bandwidth CLEC network combined with our partner networks </td> </tr> <tr> <td valign="top" > available is missing </td> <td valign="top" > Coverage in the Bandwidth CLEC </td> <td valign="top" > Coverage of the combined Bandwidth CLEC + Partner networks </td> </tr> </tbody> </table>




### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `state` | string | true | 2 character state code. |
| `available` | boolean | false | If available is set as true then the result includes the quantity of the available telephone numbers in that City. |
| `supported` | boolean | false | If supported is set to true the payload will show those Rate Centers that Bandwidth serves directly. |




{% common %}


## Example : This response returns the list of cities, along with the Rate Centers that serve those Cities.  If 'available' is specified then the number of TNs available in that city / RC combination is also included.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0"?>
<CityResponse>
    <ResultCount>
        449
    </ResultCount>
    <Cities>
        <City>
            <RcAbbreviation>
                DOUGLAS
            </RcAbbreviation>
            <Name>
                ADAMS
            </Name>
        </City>
        <City>
            <RcAbbreviation>
                FILLEY
            </RcAbbreviation>
            <Name>
                ADAMS
            </Name>
        </City>
        <City>
            <RcAbbreviation>
                AINSWORTH
            </RcAbbreviation>
            <Name>
                AINSWORTH
            </Name>
        </City>
        <!-- ... SNIP ... -->
        <City>
            <RcAbbreviation>
                LONG PINE
            </RcAbbreviation>
            <Name>
                AINSWORTH
            </Name>
        </City>
        <City>
            <RcAbbreviation>
                ODELL
            </RcAbbreviation>
            <Name>
                WYMORE
            </Name>
        </City>
        <City>
            <RcAbbreviation>
                BRADSHAW
            </RcAbbreviation>
            <Name>
                YORK
            </Name>
        </City>
        <City>
            <RcAbbreviation>
                YORK
            </RcAbbreviation>
            <Name>
                YORK
            </Name>
        </City>
        <City>
            <RcAbbreviation>
                WACO
            </RcAbbreviation>
            <Name>
                YORK
            </Name>
        </City>
    </Cities>
</CityResponse>
```


{% endmethod %}