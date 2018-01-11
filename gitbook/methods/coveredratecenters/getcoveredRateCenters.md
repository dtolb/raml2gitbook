{% method %}
## /coveredRateCenters

The Covered Rate Centers API Call return information about the Bandwidth CLEC Network, including coverage data, indicating both the extent of on-net and off-net coverage, as well as number availability. The various query parameters are summarized in the following table ... <table border="0" cellpadding="0" cellspacing="0"> <tbody> <tr> <td valign="top" width="114"> <p><strong>Query Parameter</strong> </p> </td> <td valign="top"> <p><strong>Description</strong> </p> </td> </tr> <tr> <td valign="top" width="114"> <p>page </p> </td> <td valign="top"> <p>The starting value for a paginated response. The default is ‘1’ indicating the first page of results. </p> </td> </tr> <tr> <td valign="top" width="114"> <p>size </p> </td> <td valign="top"> <p>The number of rate centers to include in a paginated result payload. </p> </td> </tr> <tr> <td valign="top" width="114"> <p>state </p> </td> <td valign="top"> <p>A 2 character State code </p> </td> </tr> <tr> <td valign="top" width="114"> <p>abbreviation </p> </td> <td valign="top"> <p>A rate center abbreviation </p> </td> </tr> <tr> <td valign="top" width="114"> <p>name </p> </td> <td valign="top"> <p>A rate center name </p> </td> </tr> <tr> <td valign="top" width="114"> <p>zip </p> </td> <td valign="top"> <p>A 5 digit zip code </p> </td> </tr> <tr> <td valign="top" width="114"> <p>city </p> </td> <td valign="top"> <p>A City name </p> </td> </tr> <tr> <td valign="top" width="114"> <p>lata </p> </td> <td valign="top"> <p>A 3 or 5 digit LATA </p> </td> </tr> <tr> <td valign="top" width="114"> <p>tier </p> </td> <td valign="top"> <p>A bandwidth coverage tier; a value from 0 to 5. </p> </td> </tr> <tr> <td valign="top" width="114"> <p>npa </p> </td> <td valign="top"> <p>A 3 digit NPA or Area Code </p> </td> </tr> <tr> <td valign="top" width="114"> <p>npaNxx </p> </td> <td valign="top"> <p>6 digits NPA and NXX values </p> </td> </tr> <tr> <td valign="top" width="114"> <p>npaNxxX </p> </td> <td valign="top"> <p>7 digits of NPA, NXX and thousands block values. </p> </td> </tr> <tr> <td valign="top" width="114"> <p>embed </p> </td> <td valign="top"> <p>One of the values [ZipCodes, Cities, NpaNxxX, AvailableNumberCount, LocalRateCenters]. <br> This repeatable query parameter will force a list (or multiple lists) of the indicated data to be provided in the response. For example if the payload should contain a list of the Cities covered by the Rate Centers then embed=cities would be included as a query parameter.<br> No filter parameters are supported if <q>LocalRateCenters</q> is specified. In this case only <q>size</q>, <q>page</q> and any other <q>embed</q> parameters are supported. </p> </td> </tr> </tbody> </table>




### Query Paramters

| Name | Type | Required | Description |
|:-----|:-----|:---------|:------------|
| `page` | number | true | the unique identifier of first rate center on the page.Value for the first page: <i>1</i> |
| `size` | number | true | a number of rate centers on the page |
| `embed` | string | true | a set of fields that needs to be included in response.A lists of zip codes, cities, vendors, NpaNxxXs and count of available TNs are not included for each rate center by default.A list of vendors is available only for admin users. LocalRateCenters can't be combined with any filter parameter. |
| `state` | string | false | 2 character state code. |
| `abbreviation` | string | false | a rate center's abbreviation |
| `name` | string | false | a name of rate center |
| `zip` | string | false | a zip code of the area covered by rate center |
| `city` | string | false | a name of city covered by rate center |
| `lata` | number | false | a rate center's LATA |
| `tier` | number | false | the tier associated with covered rate center |
| `npa` | number | false | the Area Code covered by rate center |
| `npaNxx` | number | false | the NPA-NXX covered by rate center |
| `npaNxxX` | number | false | the NPA-NXX-X covered by rate center |




{% common %}


## Example : This response returns the list of Covered Rate Centers.
<i><b>TotalCount</b></i> element's value represents the total number of rate centers for specified query parameters starting from the current page and included in response only if more rate centers available.


* Response: 200

{% sample lang="xml" %}

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<CoveredRateCenters>
    <TotalCount>
        18
    </TotalCount>
    <Links>
        <first>
            Link=&lt;https://api.inetwork.com:443/v1.0/coveredRateCenters?npa=310&amp;size=10&amp;embed=Cities&amp;embed=ZipCodes&amp;embed=NpaNxxX&amp;embed=Vendors&amp;page=1&gt;;rel="first";
        </first>
        <next>
            Link=&lt;https://api.inetwork.com:443/v1.0/coveredRateCenters?npa=310&amp;size=10&amp;embed=Cities&amp;embed=ZipCodes&amp;embed=NpaNxxX&amp;embed=Vendors&amp;page=5&gt;;rel="next";
        </next>
    </Links>
    <CoveredRateCenter>
        <Name>
            AVALON
        </Name>
        <Abbreviation>
            AVALON
        </Abbreviation>
        <State>
            CA
        </State>
        <Lata>
            730
        </Lata>
        <AvailableNumberCount>
            1
        </AvailableNumberCount>
        <ZipCodes>
            <ZipCode>
                90731
            </ZipCode>
        </ZipCodes>
        <Cities>
            <City>
                SAN PEDRO
            </City>
        </Cities>
    </CoveredRateCenter>
    <Tiers>
        <Tier>
            0
        </Tier>
    </Tiers>
    <NpaNxxXs>
        <NpaNxxX>
            3105100
        </NpaNxxX>
        <NpaNxxX>
            3105101
        </NpaNxxX>
        <NpaNxxX>
            3109498
        </NpaNxxX>
        <NpaNxxX>
            3109499
        </NpaNxxX>
        <NpaNxxX>
            4242260
        </NpaNxxX>
    </NpaNxxXs>
    <Id>
        3151
    </Id>
    <LocalRateCenters>
        <RateCenterId>
            369
        </RateCenterId>
        <RateCenterId>
            7843
        </RateCenterId>
        <RateCenterId>
            7945
        </RateCenterId>
        <RateCenterId>
            2461
        </RateCenterId>
        <RateCenterId>
            10741
        </RateCenterId>
        <RateCenterId>
            7059
        </RateCenterId>
    </LocalRateCenters>
</CoveredRateCenters>
```


{% endmethod %}