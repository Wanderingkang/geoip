{
  "input": [
    {
      "type": "maxmindGeoLite2CountryCSV",
      "action": "add",
      "args": {
        "country": "./geolite2/GeoLite2-Country-Locations-en.csv",
        "ipv4": "./geolite2/GeoLite2-Country-Blocks-IPv4.csv",
        "ipv6": "./geolite2/GeoLite2-Country-Blocks-IPv6.csv"
      }
    },
    {
      "type": "cutter",
      "action": "remove",
      "args": {
        "wantedList": [
          "cn"
        ],
        "onlyIPType": "ipv4"
      }
    },
    {
      "type": "cutter",
      "action": "remove",
      "args": {
        "wantedList": [
          "cn"
        ],
        "onlyIPType": "ipv6"
      }
    },
    {
      "type": "text",
      "action": "add",
      "args": {
        "name": "cn",
        "mark": "苍狼山庄v4",
        "uri": "https://ispip.clang.cn/all_cn.txt",
        "onlyIPType": "ipv4"
      }
    },
    {
      "type": "text",
      "action": "add",
      "args": {
        "name": "cn",
        "mark": "纯真IP",
        "uri": "https://raw.githubusercontent.com/metowolf/iplist/master/data/special/china.txt",
        "onlyIPType": "ipv4"
      }
    },
    {
      "type": "text",
      "action": "add",
      "args": {
        "name": "cn",
        "mark": "IPIP.NET",
        "uri": "https://raw.githubusercontent.com/17mon/china_ip_list/master/china_ip_list.txt",
        "onlyIPType": "ipv4"
      }
    },
    {
      "type": "text",
      "action": "add",
      "args": {
        "name": "cn",
        "mark": "USTC高一凡v4",
        "uri": "https://raw.githubusercontent.com/gaoyifan/china-operator-ip/ip-lists/china.txt",
        "onlyIPType": "ipv4"
      }
    },
    {
      "type": "text",
      "action": "add",
      "args": {
        "name": "cn",
        "mark": "苍狼山庄v6",
        "uri": "https://ispip.clang.cn/all_cn_ipv6.txt",
        "onlyIPType": "ipv6"
      }
    },
    {
      "type": "text",
      "action": "add",
      "args": {
        "name": "cn",
        "mark": "USTC高一凡v6",
        "uri": "https://raw.githubusercontent.com/gaoyifan/china-operator-ip/ip-lists/china6.txt",
        "onlyIPType": "ipv6"
      }
    }
  ],
  "output": [
    {
      "type": "maxmindMMDB",
      "action": "output",
      "args": {
        "outputName": "Private-GeoIP-CN.mmdb",
        "wantedList": [
          "cn"
        ]
      }
    },
    {
      "type": "maxmindMMDB",
      "action": "output",
      "args": {
        "outputName": "Private-GeoIP.mmdb"
      }
    },
    {
      "type": "text",
      "action": "output"
    }
  ]
}
