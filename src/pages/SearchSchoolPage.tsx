import React from 'react';
import Entry from '@/components/Entry'
import InteractiveUniversityMap from '../components/InteractiveUniversityMap'

let data = [
  {
    "id": "AFG",
    "value": 65384
  },
  {
    "id": "AGO",
    "value": 240061
  },
  {
    "id": "ALB",
    "value": 259037
  },
  {
    "id": "ARE",
    "value": 646249
  },
  {
    "id": "ARG",
    "value": 243900
  },
  {
    "id": "ARM",
    "value": 557829
  },
  {
    "id": "ATA",
    "value": 423132
  },
  {
    "id": "ATF",
    "value": 315007
  },
  {
    "id": "AUT",
    "value": 989366
  },
  {
    "id": "AZE",
    "value": 189859
  },
  {
    "id": "BDI",
    "value": 293148
  },
  {
    "id": "BEL",
    "value": 739247
  },
  {
    "id": "BEN",
    "value": 938661
  },
  {
    "id": "BFA",
    "value": 638152
  },
  {
    "id": "BGD",
    "value": 835419
  },
  {
    "id": "BGR",
    "value": 201593
  },
  {
    "id": "BHS",
    "value": 355836
  },
  {
    "id": "BIH",
    "value": 377464
  },
  {
    "id": "BLR",
    "value": 195514
  },
  {
    "id": "BLZ",
    "value": 162649
  },
  {
    "id": "BOL",
    "value": 392799
  },
  {
    "id": "BRN",
    "value": 166302
  },
  {
    "id": "BTN",
    "value": 646550
  },
  {
    "id": "BWA",
    "value": 824203
  },
  {
    "id": "CAF",
    "value": 616536
  },
  {
    "id": "CAN",
    "value": 14938
  },
  {
    "id": "CHE",
    "value": 872320
  },
  {
    "id": "CHL",
    "value": 855653
  },
  {
    "id": "CHN",
    "value": 699910
  },
  {
    "id": "CIV",
    "value": 49870
  },
  {
    "id": "CMR",
    "value": 980456
  },
  {
    "id": "COG",
    "value": 825702
  },
  {
    "id": "COL",
    "value": 125339
  },
  {
    "id": "CRI",
    "value": 771379
  },
  {
    "id": "CUB",
    "value": 91470
  },
  {
    "id": "-99",
    "value": 269062
  },
  {
    "id": "CYP",
    "value": 841617
  },
  {
    "id": "CZE",
    "value": 986444
  },
  {
    "id": "DEU",
    "value": 509050
  },
  {
    "id": "DJI",
    "value": 989687
  },
  {
    "id": "DNK",
    "value": 909210
  },
  {
    "id": "DOM",
    "value": 506913
  },
  {
    "id": "DZA",
    "value": 708093
  },
  {
    "id": "ECU",
    "value": 879261
  },
  {
    "id": "EGY",
    "value": 621281
  },
  {
    "id": "ERI",
    "value": 825332
  },
  {
    "id": "ESP",
    "value": 660042
  },
  {
    "id": "EST",
    "value": 125628
  },
  {
    "id": "ETH",
    "value": 969161
  },
  {
    "id": "FIN",
    "value": 834759
  },
  {
    "id": "FJI",
    "value": 586626
  },
  {
    "id": "FLK",
    "value": 232658
  },
  {
    "id": "FRA",
    "value": 348999
  },
  {
    "id": "GAB",
    "value": 714308
  },
  {
    "id": "GBR",
    "value": 388093
  },
  {
    "id": "GEO",
    "value": 534151
  },
  {
    "id": "GHA",
    "value": 939606
  },
  {
    "id": "GIN",
    "value": 218708
  },
  {
    "id": "GMB",
    "value": 738938
  },
  {
    "id": "GNB",
    "value": 819765
  },
  {
    "id": "GNQ",
    "value": 698381
  },
  {
    "id": "GRC",
    "value": 764809
  },
  {
    "id": "GTM",
    "value": 901707
  },
  {
    "id": "GUY",
    "value": 800347
  },
  {
    "id": "HND",
    "value": 403167
  },
  {
    "id": "HRV",
    "value": 327236
  },
  {
    "id": "HTI",
    "value": 254908
  },
  {
    "id": "HUN",
    "value": 671920
  },
  {
    "id": "IDN",
    "value": 272119
  },
  {
    "id": "IND",
    "value": 447776
  },
  {
    "id": "IRL",
    "value": 67406
  },
  {
    "id": "IRN",
    "value": 755929
  },
  {
    "id": "IRQ",
    "value": 891316
  },
  {
    "id": "ISL",
    "value": 630706
  },
  {
    "id": "ISR",
    "value": 829598
  },
  {
    "id": "ITA",
    "value": 269264
  },
  {
    "id": "JAM",
    "value": 962053
  },
  {
    "id": "JOR",
    "value": 413613
  },
  {
    "id": "JPN",
    "value": 103889
  },
  {
    "id": "KAZ",
    "value": 505767
  },
  {
    "id": "KEN",
    "value": 933516
  },
  {
    "id": "KGZ",
    "value": 260510
  },
  {
    "id": "KHM",
    "value": 808487
  },
  {
    "id": "OSA",
    "value": 861455
  },
  {
    "id": "KWT",
    "value": 84223
  },
  {
    "id": "LAO",
    "value": 877737
  },
  {
    "id": "LBN",
    "value": 864669
  },
  {
    "id": "LBR",
    "value": 956550
  },
  {
    "id": "LBY",
    "value": 660506
  },
  {
    "id": "LKA",
    "value": 748345
  },
  {
    "id": "LSO",
    "value": 585136
  },
  {
    "id": "LTU",
    "value": 382666
  },
  {
    "id": "LUX",
    "value": 802399
  },
  {
    "id": "LVA",
    "value": 431088
  },
  {
    "id": "MAR",
    "value": 947840
  },
  {
    "id": "MDA",
    "value": 386226
  },
  {
    "id": "MDG",
    "value": 421403
  },
  {
    "id": "MEX",
    "value": 627346
  },
  {
    "id": "MKD",
    "value": 411379
  },
  {
    "id": "MLI",
    "value": 293365
  },
  {
    "id": "MMR",
    "value": 746685
  },
  {
    "id": "MNE",
    "value": 823244
  },
  {
    "id": "MNG",
    "value": 414418
  },
  {
    "id": "MOZ",
    "value": 115095
  },
  {
    "id": "MRT",
    "value": 739870
  },
  {
    "id": "MWI",
    "value": 386639
  },
  {
    "id": "MYS",
    "value": 553636
  },
  {
    "id": "NAM",
    "value": 373704
  },
  {
    "id": "NCL",
    "value": 568346
  },
  {
    "id": "NER",
    "value": 819598
  },
  {
    "id": "NGA",
    "value": 743229
  },
  {
    "id": "NIC",
    "value": 626778
  },
  {
    "id": "NLD",
    "value": 919544
  },
  {
    "id": "NOR",
    "value": 349543
  },
  {
    "id": "NPL",
    "value": 867790
  },
  {
    "id": "NZL",
    "value": 136355
  },
  {
    "id": "OMN",
    "value": 128450
  },
  {
    "id": "PAK",
    "value": 68261
  },
  {
    "id": "PAN",
    "value": 445589
  },
  {
    "id": "PER",
    "value": 611348
  },
  {
    "id": "PHL",
    "value": 143086
  },
  {
    "id": "PNG",
    "value": 205615
  },
  {
    "id": "POL",
    "value": 729657
  },
  {
    "id": "PRI",
    "value": 944622
  },
  {
    "id": "PRT",
    "value": 877926
  },
  {
    "id": "PRY",
    "value": 783470
  },
  {
    "id": "QAT",
    "value": 948280
  },
  {
    "id": "ROU",
    "value": 19245
  },
  {
    "id": "RUS",
    "value": 565528
  },
  {
    "id": "RWA",
    "value": 539073
  },
  {
    "id": "ESH",
    "value": 288990
  },
  {
    "id": "SAU",
    "value": 946173
  },
  {
    "id": "SDN",
    "value": 685344
  },
  {
    "id": "SDS",
    "value": 400645
  },
  {
    "id": "SEN",
    "value": 241595
  },
  {
    "id": "SLB",
    "value": 895280
  },
  {
    "id": "SLE",
    "value": 332953
  },
  {
    "id": "SLV",
    "value": 434535
  },
  {
    "id": "ABV",
    "value": 777824
  },
  {
    "id": "SOM",
    "value": 101105
  },
  {
    "id": "SRB",
    "value": 938511
  },
  {
    "id": "SUR",
    "value": 24446
  },
  {
    "id": "SVK",
    "value": 584106
  },
  {
    "id": "SVN",
    "value": 856069
  },
  {
    "id": "SWZ",
    "value": 945683
  },
  {
    "id": "SYR",
    "value": 180850
  },
  {
    "id": "TCD",
    "value": 568432
  },
  {
    "id": "TGO",
    "value": 65893
  },
  {
    "id": "THA",
    "value": 737409
  },
  {
    "id": "TJK",
    "value": 312228
  },
  {
    "id": "TKM",
    "value": 81185
  },
  {
    "id": "TLS",
    "value": 350343
  },
  {
    "id": "TTO",
    "value": 65356
  },
  {
    "id": "TUN",
    "value": 610232
  },
  {
    "id": "TUR",
    "value": 135855
  },
  {
    "id": "TWN",
    "value": 804906
  },
  {
    "id": "TZA",
    "value": 980946
  },
  {
    "id": "UGA",
    "value": 969364
  },
  {
    "id": "UKR",
    "value": 549892
  },
  {
    "id": "URY",
    "value": 449829
  },
  {
    "id": "USA",
    "value": 395408
  },
  {
    "id": "UZB",
    "value": 885839
  },
  {
    "id": "VEN",
    "value": 72919
  },
  {
    "id": "VNM",
    "value": 970600
  },
  {
    "id": "VUT",
    "value": 472702
  },
  {
    "id": "PSE",
    "value": 459623
  },
  {
    "id": "YEM",
    "value": 542612
  },
  {
    "id": "ZAF",
    "value": 19225
  },
  {
    "id": "ZMB",
    "value": 172861
  },
  {
    "id": "ZWE",
    "value": 77598
  },
  {
    "id": "KOR",
    "value": 227049
  }
]

export default function SearchSchoolPage() {
  const divStyle = {
    width: '500px', // 设置宽度
    height: '500px', // 设置高度
    backgroundColor: 'red' // 设置背景颜色为红色
  };
  return (
    <>
      <Entry>this is the SearchSchoolPage</Entry>
      <div style={divStyle}>
        <InteractiveUniversityMap data={data} />
      </div>
    </>
  )
}
