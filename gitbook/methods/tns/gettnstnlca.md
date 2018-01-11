{% method %}
## /tns/{tn}/lca

Retrieves the LCAs associated with that telephone number.


### URI Parameters
| Name | Type | Required |
|:-----|:-----|:---------|
| `tn` | string | true |






{% common %}


## Example : The LCAs have been successfully retrieved and displayed.

* Response: 200

{% sample lang="xml" %}

```xml
<SearchResult>
    <ListofNPANXX>
        <NPANXX>
            201202
        </NPANXX>
        <NPANXX>
            201203
        </NPANXX>
        <NPANXX>
            201206
        </NPANXX>
        <!--- SNIP --->
        <NPANXX>
            973930
        </NPANXX>
        <NPANXX>
            973931
        </NPANXX>
        <NPANXX>
            973955
        </NPANXX>
    </ListofNPANXX>
    <Location>
        <RateCenters>
            <State>
                NJ
            </State>
            <RCs>
                <RC>
                    CLIFFSIDE
                </RC>
                <RC>
                    DUMONT
                </RC>
                <!--- SNIP --->
                <RC>
                    UNION CITY
                </RC>
                <RC>
                    WESTWOOD
                </RC>
            </RCs>
        </RateCenters>
    </Location>
</SearchResult>
```


{% endmethod %}