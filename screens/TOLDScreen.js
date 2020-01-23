import React, { Component, useState } from 'react';
import { ScrollView, 
  RefreshControl,
  StyleSheet, 
  Image,
  Platform,
  Text,
  TouchableOpacity,
  View } from 'react-native';
import Constants from 'expo-constants';


class Metar extends Component {

  state = {
    k_metar : "",
    m_metar : "",
    refreshing: false,
    
    k_temp : -50,
    k_rpm: 0,
    k_line_normal_half: 0,
    k_line_normal_full: 0,
    k_line_section_half: 0,
    k_TO_normal_half: 0,
    k_TO_normal_full:0,
    k_TO_section: 0,
    k_abort_dry_half: 0,
    k_abort_dry_full: 0,
    k_abort_wet_half: 0,
    k_abort_dry_full: 0,

    m_temp : -50,
    m_rpm: 0,
    m_line_normal_half: 0,
    m_line_normal_full: 0,
    m_line_section_half: 0,
    m_TO_normal_half: 0,
    m_TO_normal_full: 0,
    m_TO_section: 0,
    m_abort_dry_half: 0,
    m_abort_dry_full: 0,
    m_abort_wet_half: 0,
    m_abort_wet_full: 0,

    c_temp : -50,
    c_rpm: 0,
    c_line_normal_half: 0,
    c_line_normal_full: 0,
    c_line_section_half: 0,
    c_TO_normal_half: 0,
    c_TO_normal_full: 0,
    c_TO_section: 0,
    c_abort_dry_half: 0,
    c_abort_dry_full: 0,
    c_abort_wet_half: 0,
    c_abort_wet_full: 0,
    
    temp : -50,
    ratio: 0,
    dew_point: 0,
    altimeter:0,
    loading: 0
  };

  getRPM(temp) {
    if(temp == -30) return 52;
    if(temp == -29) return 52.2;
    if(temp == -28) return 52.25;
    if(temp == -27) return 52.35;
    if(temp == -26) return 52.6;
    if(temp == -25) return 52.7;
    if(temp == -24) return 52.75;
    if(temp == -23) return 52.9;
    if(temp == -22) return 53.0;
    if(temp == -21) return 53.15;
    if(temp == -20) return 53.25;
    if(temp == -19) return 53.4;
    if(temp == -18) return 53.5;
    if(temp == -17) return 53.55;
    if(temp == -16) return 53.65;
    if(temp == -15) return 53.75;
    if(temp == -14) return 53.85;
    if(temp == -13) return 54;
    if(temp == -12) return 54.1;
    if(temp == -11) return 54.2;
    if(temp == -10) return 54.25;
    if(temp == -9) return 54.4;
    if(temp == -8) return 54.5;
    if(temp == -7) return 54.6;
    if(temp == -6) return 54.75;
    if(temp == -5) return 54.85;
    if(temp == -4) return 54.9;
    if(temp == -3) return 55;
    if(temp == -2) return 55.1;
    if(temp == -1) return 55.25;
    if(temp == 0) return 55.3;
    if(temp == 1) return 55.4;
    if(temp == 2) return 55.5;
    if(temp == 3) return 55.6;
    if(temp == 4) return 55.7;
    if(temp == 5) return 55.8;
    if(temp == 6) return 55.9;
    if(temp == 7) return 55.95;
    if(temp == 8) return 56;
    if(temp == 9) return 56.1;
    if(temp == 10) return 56.2;
    if(temp == 11) return 56.25;
    if(temp == 12) return 56.3;
    if(temp == 13) return 56.4;
    if(temp == 14) return 56.5;
    if(temp == 15) return 56.6;
    if(temp == 16) return 56.7;
    if(temp == 17) return 56.75;
    if(temp == 18) return 56.8;
    if(temp == 19) return 56.9;
    if(temp == 20) return 57;
    if(temp == 21) return 57.1;
    if(temp == 22) return 57.2;
    if(temp == 23) return 57.25;
    if(temp == 24) return 57.3;
    if(temp == 25) return 57.4;
    if(temp == 26) return 57.5;
    if(temp == 27) return 57.6;
    if(temp == 28) return 57.7;
    if(temp == 29) return 57.75;
    if(temp == 30) return 57.8;
    if(temp == 31) return 57.9;
    if(temp == 32) return 57.95;
    if(temp == 33) return 58;
    if(temp == 34) return 58.1;
    if(temp == 35) return 58.2;
    if(temp == 36) return 58.25;
    if(temp == 37) return 58.35;
    if(temp == 38) return 58.4;
    if(temp == 39) return 58.5;
    if(temp == 40) return 58.6;
    if(temp == 41) return 58.6;
    if(temp == 42) return 58.7;
    if(temp == 43) return 58.75;
    if(temp == 44) return 58.8;
    if(temp == 45) return 58.9;
    if(temp == 46) return 58.95;
    if(temp == 47) return 59;
    if(temp == 48) return 59.1;
    if(temp == 49) return 59.2;
    if(temp == 50) return 59.25;
    if(temp == 51) return 59.3;
    if(temp == 52) return 59.4;
    if(temp == 53) return 59.5;


  }

  getDensityRatio(temp, dewpoint, altimeter) {    
    sat_vapor = 6.1078 * Math.pow(10, ((7.5*temp)/(temp+237.3)))
    relative_hum = Math.exp((17.625*dewpoint)/(243.04+dewpoint))/Math.exp((17.625*temp)/(243.04+temp))
    act_vapor = sat_vapor * relative_hum
    dryair_press = (altimeter*33.864) - act_vapor
    density = (((dryair_press / (287.058 * (temp+273.15))) + (act_vapor / (461.495 * (temp+273.15))))*100)/515.378819
    return density/.0023769
  }

  getNormalLineSpeedFull(ratio) {
    rat = ratio*100
    if(rat > 69 && rat < 76) {
      dif = rat-70
      num = (5/5) * dif
      return Math.round((75+num)*100)/100
    }
    if(rat > 75 && rat < 81) {
      dif = rat-75
      num = (6/5) * dif
      return Math.round((80+num)*100)/100    
    }
    if(rat > 80 && rat < 86) {
      dif = rat-80
      num = (5/5) * dif
      return Math.round((86+num)*100)/100    
    }
    if(rat > 85 && rat < 91) {
      dif = rat-85
      num = (5/5) * dif
      return Math.round((91+num)*100)/100
    }
    if(rat > 90 && rat < 96) {
      dif = rat-90
      num = (6/5) * dif
      return Math.round((96+num)*100)/100
    }
    if(rat > 95 && rat < 101) {
      dif = rat-95
      num = (5/5) * dif
      return Math.round((102+num)*100)/100
    }
    if(rat > 100 && rat < 106) {
      dif = rat-100
      num = (5/5) * dif
      return Math.round((107+num)*100)/100
    }
    else return 112
  }

  getNormalLineSpeedHalf(ratio) {
    rat = ratio*100
    if(rat > 69 && rat < 76) {
      dif = rat-70
      num = (3/5) * dif
      return Math.round((92+num)*100)/100
    }
    if(rat > 75 && rat < 81) {
      dif = rat-75
      num = (3/5) * dif
      return Math.round((95+num)*100)/100    
    }
    if(rat > 80 && rat < 86) {
      dif = rat-80
      num = (3/5) * dif
      return Math.round((98+num)*100)/100    
    }
    if(rat > 85 && rat < 91) {
      dif = rat-85
      num = (3/5) * dif
      return Math.round((101+num)*100)/100
    }
    if(rat > 90 && rat < 96) {
      dif = rat-90
      num = (3/5) * dif
      return Math.round((104+num)*100)/100
    }
    if(rat > 95 && rat < 101) {
      dif = rat-95
      num = (3/5) * dif
      return Math.round((107+num)*100)/100
    }
    if(rat > 100 && rat < 106) {
      dif = rat-100
      num = (4/5) * dif
      return Math.round((110+num)*100)/100
    }
    else return 114
  }

  getSectionLineSpeed(ratio) {
    rat = ratio*100
    if(rat > 69 && rat < 76) {
      dif = rat-70
      num = (4/5) * dif
      return Math.round((74+num)*100)/100
    }
    if(rat > 75 && rat < 81) {
      dif = rat-75
      num = (4/5) * dif
      return Math.round((78+num)*100)/100    
    }
    if(rat > 80 && rat < 86) {
      dif = rat-80
      num = (5/5) * dif
      return Math.round((82+num)*100)/100    
    }
    if(rat > 85 && rat < 91) {
      dif = rat-85
      num = (5/5) * dif
      return Math.round((87+num)*100)/100
    }
    if(rat > 90 && rat < 96) {
      dif = rat-90
      num = (7/5) * dif
      return Math.round((92+num)*100)/100
    }
    if(rat > 95 && rat < 101) {
      dif = rat-95
      num = (6/5) * dif
      return Math.round((99+num)*100)/100
    }
    if(rat > 100 && rat < 106) {
      dif = rat-100
      num = (7/5) * dif
      return Math.round((105+num)*100)/100
    }
    else return 112
  }

  getNormalTOHalf(ratio) {
    rat = ratio*100
    if(rat > 69 && rat < 76) {
      dif = rat-70
      num = (724/5) * dif
      return Math.round((4932-num)*100)/100
    }
    if(rat > 75 && rat < 81) {
      dif = rat-75
      num = (549/5) * dif
      return Math.round((4208-num)*100)/100    
    }
    if(rat > 80 && rat < 86) {
      dif = rat-80
      num = (350/5) * dif
      return Math.round((3659-num)*100)/100    
    }
    if(rat > 85 && rat < 91) {
      dif = rat-85
      num = (353/5) * dif
      return Math.round((3309-num)*100)/100
    }
    if(rat > 90 && rat < 96) {
      dif = rat-90
      num = (375/5) * dif
      return Math.round((2956-num)*100)/100
    }
    if(rat > 95 && rat < 101) {
      dif = rat-95
      num = (334/5) * dif
      return Math.round((2581-num)*100)/100
    }
    if(rat > 100 && rat < 106) {
      dif = rat-100
      num = (227/5) * dif
      return Math.round((2247-num)*100)/100
    }
    else return 2020
  }

  getNormalTOFull(ratio) {
    rat = ratio*100
    if(rat > 69 && rat < 76) {
      dif = rat-70
      num = (527/5) * dif
      return Math.round((3818-num)*100)/100
    }
    if(rat > 75 && rat < 81) {
      dif = rat-75
      num = (439/5) * dif
      return Math.round((3291-num)*100)/100    
    }
    if(rat > 80 && rat < 86) {
      dif = rat-80
      num = (362/5) * dif
      return Math.round((2852-num)*100)/100    
    }
    if(rat > 85 && rat < 91) {
      dif = rat-85
      num = (296/5) * dif
      return Math.round((2490-num)*100)/100
    }
    if(rat > 90 && rat < 96) {
      dif = rat-90
      num = (270/5) * dif
      return Math.round((2194-num)*100)/100
    }
    if(rat > 95 && rat < 101) {
      dif = rat-95
      num = (196/5) * dif
      return Math.round((1954-num)*100)/100
    }
    if(rat > 100 && rat < 106) {
      dif = rat-100
      num = (161/5) * dif
      return Math.round((1758-num)*100)/100
    }
    else return 1597
  }

  getSectionTO(ratio) {
    rat = ratio*100
    if(rat > 69 && rat < 76) {
      dif = rat-70
      num = (527/5) * dif
      return Math.round((4932-num)*100)/100
    }
    if(rat > 75 && rat < 81) {
      dif = rat-75
      num = (469/5) * dif
      return Math.round((4405-num)*100)/100    
    }
    if(rat > 80 && rat < 86) {
      dif = rat-80
      num = (420/5) * dif
      return Math.round((3936-num)*100)/100    
    }
    if(rat > 85 && rat < 91) {
      dif = rat-85
      num = (380/5) * dif
      return Math.round((3516-num)*100)/100
    }
    if(rat > 90 && rat < 96) {
      dif = rat-90
      num = (350/5) * dif
      return Math.round((3136-num)*100)/100
    }
    if(rat > 95 && rat < 101) {
      dif = rat-95
      num = (332/5) * dif
      return Math.round((2786-num)*100)/100
    }
    if(rat > 100 && rat < 106) {
      dif = rat-100
      num = (320/5) * dif
      return Math.round((2454-num)*100)/100
    }
    else return 2134
  }

  getAbortDryHalf(ratio) {
    rat = Math.trunc(ratio * 100)/100 
    if(rat == .70) return 114
    if(rat == .71) return 116
    if(rat == .72) return 116
    if(rat == .73) return 119
    if(rat == .74) return 120
    if(rat == .75) return 121  
    if(rat == .76) return 122 
    if(rat == .77) return 122 
    if(rat == .78) return 123 
    if(rat == .79) return 124 
    if(rat == .80) return 126
    if(rat == .81) return 127 
    if(rat == .82) return 127 
    if(rat == .83) return 128 
    if(rat == .84) return 129 
    if(rat == .85) return 130 
    if(rat == .86) return 131 
    if(rat == .87) return 132 
    if(rat == .88) return 133 
    if(rat == .89) return 135 
    if(rat == .90) return 135    
    if(rat == .91) return 136    
    if(rat == .92) return 137    
    if(rat == .93) return 138    
    if(rat == .94) return 139    
    if(rat == .95) return 140    
    if(rat == .96) return 141
    if(rat == .97) return 142
    if(rat == .98) return 143    
    if(rat == .99) return 143    
    if(rat == 1.0) return 144
    if(rat == 1.01) return 145 
    if(rat == 1.02) return 146           
    if(rat == 1.03) return 147 
    if(rat == 1.04) return 148 
    if(rat == 1.05) return 149 
    if(rat == 1.06) return 150 
    if(rat == 1.07) return 152
    else return 152   
  }

  getAbortWetHalf(ratio) {
    rat = Math.trunc(ratio * 100)/100
    if(rat == .70) return 88
    if(rat == .71) return 89
    if(rat == .72) return 89
    if(rat == .73) return 90
    if(rat == .74) return 91
    if(rat == .75) return 91  
    if(rat == .76) return 92 
    if(rat == .77) return 93 
    if(rat == .78) return 94 
    if(rat == .79) return 95 
    if(rat == .80) return 95
    if(rat == .81) return 96 
    if(rat == .82) return 97 
    if(rat == .83) return 98 
    if(rat == .84) return 99 
    if(rat == .85) return 100 
    if(rat == .86) return 100 
    if(rat == .87) return 101 
    if(rat == .88) return 101 
    if(rat == .89) return 103 
    if(rat == .90) return 104    
    if(rat == .91) return 104    
    if(rat == .92) return 104    
    if(rat == .93) return 105    
    if(rat == .94) return 106    
    if(rat == .95) return 107    
    if(rat == .96) return 108
    if(rat == .97) return 109    
    if(rat == .98) return 109    
    if(rat == .99) return 109    
    if(rat == 1.0) return 110
    if(rat == 1.01) return 111 
    if(rat == 1.02) return 112           
    if(rat == 1.03) return 112 
    if(rat == 1.04) return 112 
    if(rat == 1.05) return 113 
    if(rat == 1.06) return 114 
    if(rat == 1.07) return 115   
    if(rat == 1.08) return 116
    else return 116 
  }

  getAbortDryFull(ratio) {
    rat = Math.trunc(ratio * 100)/100
    if(rat == .70) return 111
    if(rat == .71) return 112
    if(rat == .72) return 113
    if(rat == .73) return 114
    if(rat == .74) return 116
    if(rat == .75) return 116  
    if(rat == .76) return 117 
    if(rat == .77) return 118 
    if(rat == .78) return 119 
    if(rat == .79) return 120 
    if(rat == .80) return 121
    if(rat == .81) return 122 
    if(rat == .82) return 123 
    if(rat == .83) return 124 
    if(rat == .84) return 125
    if(rat == .85) return 126 
    if(rat == .86) return 127 
    if(rat == .87) return 128 
    if(rat == .88) return 129 
    if(rat == .89) return 130 
    if(rat == .90) return 132    
    if(rat == .91) return 132    
    if(rat == .92) return 133    
    if(rat == .93) return 133    
    if(rat == .94) return 135    
    if(rat == .95) return 136    
    if(rat == .96) return 137
    if(rat == .97) return 137    
    if(rat == .98) return 139    
    if(rat == .99) return 140    
    if(rat == 1.0) return 140
    if(rat == 1.01) return 141 
    if(rat == 1.02) return 143           
    if(rat == 1.03) return 143 
    if(rat == 1.04) return 144 
    if(rat == 1.05) return 145 
    if(rat == 1.06) return 146 
    if(rat == 1.07) return 147   
    if(rat == 1.08) return 148
    else return 148 
  }
  
  getAbortWetFull(ratio) {
    rat = Math.trunc(ratio * 100)/100
    if(rat == .70) return 89
    if(rat == .71) return 90
    if(rat == .72) return 91
    if(rat == .73) return 92
    if(rat == .74) return 93
    if(rat == .75) return 93  
    if(rat == .76) return 94 
    if(rat == .77) return 95 
    if(rat == .78) return 96 
    if(rat == .79) return 97 
    if(rat == .80) return 97
    if(rat == .81) return 98 
    if(rat == .82) return 99 
    if(rat == .83) return 100 
    if(rat == .84) return 101 
    if(rat == .85) return 101 
    if(rat == .86) return 102 
    if(rat == .87) return 103 
    if(rat == .88) return 104 
    if(rat == .89) return 105 
    if(rat == .90) return 105    
    if(rat == .91) return 106    
    if(rat == .92) return 107    
    if(rat == .93) return 108    
    if(rat == .94) return 108    
    if(rat == .95) return 109    
    if(rat == .96) return 109
    if(rat == .97) return 110    
    if(rat == .98) return 111    
    if(rat == .99) return 112    
    if(rat == 1.0) return 113
    if(rat == 1.01) return 114 
    if(rat == 1.02) return 115           
    if(rat == 1.03) return 115 
    if(rat == 1.04) return 116 
    if(rat == 1.05) return 117 
    if(rat == 1.06) return 117 
    if(rat == 1.07) return 118   
    if(rat == 1.08) return 118
    else return 118 
  }

  componentDidMount() {

    fetch('https://avwx.rest/api/metar/KNQI', { 
      method: 'get', 
      headers: new Headers({
         'Authorization': '-opirCS9HHLxCqKScGB9H7J5N4zoV3G4VLiCHeD5RI8', 
        })
      })
      .then(k_results => k_results.json())
      .then(k_results => {
        this.setState({k_metar: k_results["raw"], k_temp: k_results["temperature"]["value"], dewpoint: k_results["dewpoint"]["value"], altimeter: k_results["altimeter"]["value"]})

        ratio = this.getDensityRatio(this.state.k_temp, this.state.dewpoint, this.state.altimeter)
        this.setState({k_ratio: ratio})
        
        rpm = this.getRPM(this.state.k_temp)
        this.setState({k_rpm: rpm})

        line_norm_half = this.getNormalLineSpeedHalf(ratio)
        this.setState({k_line_normal_half: line_norm_half})

        line_norm_full = this.getNormalLineSpeedFull(ratio)
        this.setState({k_line_normal_full: line_norm_full})

        line_section = this.getSectionLineSpeed(ratio)
        this.setState({k_line_section: line_section})

        norm_TO_half = this.getNormalTOHalf(ratio)
        this.setState({k_TO_normal_half: norm_TO_half})

        norm_TO_full = this.getNormalTOFull(ratio)
        this.setState({k_TO_normal_full: norm_TO_full})

        section_TO = this.getSectionTO(ratio)
        this.setState({k_TO_section: section_TO})

        abort_dry_half = this.getAbortDryHalf(ratio)
        this.setState({k_abort_dry_half: abort_dry_half})

        abort_dry_full = this.getAbortDryFull(ratio)
        this.setState({k_abort_dry_full: abort_dry_full})

        abort_wet_half = this.getAbortWetHalf(ratio)
        this.setState({k_abort_wet_half: abort_wet_half})

        abort_wet_full = this.getAbortWetFull(ratio)
        this.setState({k_abort_wet_full: abort_wet_full})
      })

    fetch('https://avwx.rest/api/metar/KNMM', {
        method: 'get',
        headers: new Headers({
          'Authorization': '-opirCS9HHLxCqKScGB9H7J5N4zoV3G4VLiCHeD5RI8',
          })
        })
      .then(m_results => m_results.json())
      .then(m_results => {
        this.setState({m_metar: m_results["raw"], m_temp: m_results["temperature"]["value"], dewpoint: m_results["dewpoint"]["value"], altimeter: m_results["altimeter"]["value"]})
        console.log(this.state.dewpoint)

        ratio = this.getDensityRatio(this.state.m_temp, this.state.dewpoint, this.state.altimeter)
        this.setState({m_ratio: ratio})
        console.log(ratio)
        
        rpm = this.getRPM(this.state.m_temp)
        this.setState({m_rpm: rpm})

        line_norm_half = this.getNormalLineSpeedHalf(ratio)
        this.setState({m_line_normal_half: line_norm_half})

        line_norm_full = this.getNormalLineSpeedFull(ratio)
        this.setState({m_line_normal_full: line_norm_full})

        line_section = this.getSectionLineSpeed(ratio)
        this.setState({m_line_section: line_section})

        norm_TO_half = this.getNormalTOHalf(ratio)
        this.setState({m_TO_normal_half: norm_TO_half})

        norm_TO_full = this.getNormalTOFull(ratio)
        this.setState({m_TO_normal_full: norm_TO_full})

        section_TO = this.getSectionTO(ratio)
        this.setState({m_TO_section: section_TO})

        abort_dry_half = this.getAbortDryHalf(ratio)
        this.setState({m_abort_dry_half: abort_dry_half})

        abort_dry_full = this.getAbortDryFull(ratio)
        this.setState({m_abort_dry_full: abort_dry_full})

        abort_wet_half = this.getAbortWetHalf(ratio)
        this.setState({m_abort_wet_half: abort_wet_half})

        abort_wet_full = this.getAbortWetFull(ratio)
        this.setState({m_abort_wet_full: abort_wet_full})
    })

    fetch('https://avwx.rest/api/metar/KNJK', {
        method: 'get',
        headers: new Headers({
          'Authorization': '-opirCS9HHLxCqKScGB9H7J5N4zoV3G4VLiCHeD5RI8',
          })
        })
      .then(c_results => c_results.json())
      .then(c_results => {
        this.setState({c_metar: c_results["raw"], c_temp: c_results["temperature"]["value"], dewpoint: c_results["dewpoint"]["value"], altimeter: c_results["altimeter"]["value"]})

        ratio = this.getDensityRatio(this.state.c_temp, this.state.dewpoint, this.state.altimeter)
        this.setState({c_ratio: ratio})
        
        rpm = this.getRPM(this.state.c_temp)
        this.setState({c_rpm: rpm})

        line_norc_half = this.getNormalLineSpeedHalf(ratio)
        this.setState({c_line_normal_half: line_norc_half})

        line_norc_full = this.getNormalLineSpeedFull(ratio)
        this.setState({c_line_normal_full: line_norc_full})

        line_section = this.getSectionLineSpeed(ratio)
        this.setState({c_line_section: line_section})

        norc_TO_half = this.getNormalTOHalf(ratio)
        this.setState({c_TO_normal_half: norc_TO_half})

        norc_TO_full = this.getNormalTOFull(ratio)
        this.setState({c_TO_normal_full: norc_TO_full})

        section_TO = this.getSectionTO(ratio)
        this.setState({c_TO_section: section_TO})

        abort_dry_half = this.getAbortDryHalf(ratio)
        this.setState({c_abort_dry_half: abort_dry_half})

        abort_dry_full = this.getAbortDryFull(ratio)
        this.setState({c_abort_dry_full: abort_dry_full})

        abort_wet_half = this.getAbortWetHalf(ratio)
        this.setState({c_abort_wet_half: abort_wet_half})

        abort_wet_full = this.getAbortWetFull(ratio)
        this.setState({c_abort_wet_full: abort_wet_full})
    })

  }

  render() {
    if(!this.state.loading){
      this.setState({loading: 1})
      return (<Text>Loading...</Text>);
    }

    if(this.state.k_temp != -50 || this.state.m_temp != -50) {
      return (
        <View style = {styles.getStartedConatainer}>
          <Text style={styles.getStartedText}>Kingsville Metar</Text>
          <Text> </Text>
          <Text>{this.state.k_metar}</Text>
          <Text></Text>
          <Text>RPM: {this.state.k_rpm} (+/- 2)</Text>
          <Text>Normal Line Speed Half Flaps: {this.state.k_line_normal_half}</Text>
          <Text>Normal Line Speed Full Flaps: {this.state.k_line_normal_full}</Text>
          <Text>Section Line Speed: {this.state.k_line_section}</Text>
          <Text>Normal Takeoff Distance Half Flaps: {this.state.k_TO_normal_half}</Text>
          <Text>Normal Takeoff Distance Full Flaps: {this.state.k_TO_normal_full}</Text>
          <Text>Section Takeoff Distance: {this.state.k_TO_section}</Text>
          <Text>Abort Dry Half Flaps: {this.state.k_abort_dry_half} (Subtract 3 for section)</Text>
          <Text>Abort Dry Full Flaps: {this.state.k_abort_dry_full} </Text>
          <Text>Abort Wet Half Flaps: {this.state.k_abort_wet_half} (Subtract 1 for section)</Text>
          <Text>Abort Wet Full Flaps: {this.state.k_abort_wet_full} </Text>
          <Text></Text>
          <Text style={styles.getStartedText}>Meridian Metar</Text>
          <Text></Text>
          <Text>{this.state.m_metar}</Text>
          <Text></Text>
          <Text>RPM: {this.state.m_rpm} (+/- 2)</Text>
          <Text>Normal Line Speed Half Flaps: {this.state.m_line_normal_half}</Text>
          <Text>Normal Line Speed Full Flaps: {this.state.m_line_normal_full}</Text>
          <Text>Section Line Speed: {this.state.m_line_section}</Text>
          <Text>Normal Takeoff Distance Half Flaps: {this.state.m_TO_normal_half}</Text>
          <Text>Normal Takeoff Distance Full Flaps: {this.state.m_TO_normal_full}</Text>
          <Text>Section Takeoff Distance: {this.state.m_TO_section}</Text>
          <Text>Abort Dry Half Flaps: {this.state.m_abort_dry_half} (Subtract 3 for section)</Text>
          <Text>Abort Dry Full Flaps: {this.state.m_abort_dry_full} </Text>
          <Text>Abort Wet Half Flaps: {this.state.m_abort_wet_half} (Subtract 1 for section)</Text>
          <Text>Abort Wet Full Flaps: {this.state.m_abort_wet_full} </Text>
          <Text></Text>
          <Text style={styles.getStartedText}>El Centro Metar</Text>
          <Text></Text>
          <Text>{this.state.c_metar}</Text>
          <Text></Text>
          <Text>RPM: {this.state.c_rpm} (+/- 2)</Text>
          <Text>Normal Line Speed Half Flaps: {this.state.c_line_normal_half}</Text>
          <Text>Normal Line Speed Full Flaps: {this.state.c_line_normal_full}</Text>
          <Text>Section Line Speed: {this.state.c_line_section}</Text>
          <Text>Normal Takeoff Distance Half Flaps: {this.state.c_TO_normal_half}</Text>
          <Text>Normal Takeoff Distance Full Flaps: {this.state.c_TO_normal_full}</Text>
          <Text>Section Takeoff Distance: {this.state.c_TO_section}</Text>
          <Text>Abort Dry Half Flaps: {this.state.c_abort_dry_half} (Subtract 3 for section)</Text>
          <Text>Abort Dry Full Flaps: {this.state.c_abort_dry_full} </Text>
          <Text>Abort Wet Half Flaps: {this.state.c_abort_wet_half} (Subtract 1 for section)</Text>
          <Text>Abort Wet Full Flaps: {this.state.c_abort_wet_full} </Text>
          <Text></Text>

          <Text>*Pull to refresh*</Text>
        </View>
        );
      }
    return null;
  }
}


function wait(timeout) {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
}

export default function TOLDScreen() {

  const [refreshing, setRefreshing] = useState(false);
  const [val, setVal] = useState(0);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    setVal(val + 1);
    wait(1000).then(() => setRefreshing(false));
  }, [refreshing]);

  return (
    <ScrollView style={styles.container} 
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
      } key = {val} >
      <Metar></Metar>
    </ScrollView>
  );
}


TOLDScreen.navigationOptions = {
  title: 'TOLD',
  headerStyle: {
      backgroundColor: '#00264d',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 30,
    },
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  containerRefresh: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
  },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    paddingTop: 20,
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontWeight: 'bold',
    fontSize: 17,
    color: '#00264d',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});

