import React, {Component} from 'react';
import { View, ScrollView, Image, Text, Modal, TouchableHighlight } from 'react-native';
import { ThemeProvider, Button } from 'react-native-elements';

const theme = {
  Button: {

    containerViewStyle: {
      borderRadius:100,
      large: true,
    },
    buttonStyle: {
      borderRadius:100,
      large: true,
      backgroundColor: 'red',
    },

  }
};

class EGTRPM extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text>In-Flight</Text>
                  <Text style={{fontWeight: 'bold'}}> 1. Throttle - IDLE </Text>
                  <Text style={{fontWeight: 'bold'}}> 2. EGT/RPM - CHECK </Text>
                  <Text>If EGT is greater than 450C for more than 6 seconds at IDLE: </Text>
                  <Text style={{fontWeight: 'bold'}}> 3. Execute Engine Failure Procedure </Text>
                  <Text>If EGT responds normally:</Text>
                  <Text style={{fontWeight: 'bold'}}> 4. Throttle - Slowly advance to minimum for safe flight </Text>


                  <ThemeProvider theme={theme}><Button
                                       style={{marginTop:30}}
                                       title="RETURN"
                                       titleStyle={{fontWeight: 'bold'}}
                                       onPress={() => {
                                         this.setModalVisible(false);
                                       }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="EGT/RPM WARNING LIGHT OR COMPRESSOR STALL"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );

  }

}

class SKID extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text style={{fontWeight: 'bold'}}> 1. Go-around if practical </Text>
                  <Text>If go around not practical: </Text>
                  <Text style={{fontWeight: 'bold'}}> 2. Brakes - Release </Text>
                  <Text style={{fontWeight: 'bold'}}> 3. ANTI-SKID switch - OFF </Text>
                  <Text style={{fontWeight: 'bold'}}> 4. Brakes - Apply gradually </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="SKID CAUTION LIGHT"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class TPHOT extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text>Ground </Text>
                  <Text style={{fontWeight: 'bold'}}> 1. Execute Emergency Shutdown/Egress </Text>
                  <Text>In Flight</Text>
                  <Text style={{fontWeight: 'bold'}}> 1. Throttle - Minimum for safe flight </Text>

                  
                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="TP HOT CAUTION LIGHT"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class CLEARENG extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text style={{fontWeight: 'bold'}}> 1. Throttle - OFF </Text>
                  <Text style={{fontWeight: 'bold'}}> 2. ENGINE Switches - ON </Text>
                  <Text style={{fontWeight: 'bold'}}> 3. FUEL SHUTOFF Handle - DOWN </Text>
                  <Text style={{fontWeight: 'bold'}}> 4. GTS - START </Text>
                  <Text style={{fontWeight: 'bold'}}> 5. IGNITION Switch - ISOLATE </Text>
                  <Text>When rpm below 20 percent and GTS advisory light illuminates: </Text>
                  <Text style={{fontWeight: 'bold'}}> 6. ENGINE switch - START </Text>

                  
                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="CLEAR ENGINE PROCEDURE/ABNORMAL START/TP FIRE ON SHUTDOWN"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class EFIRE extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text style={{fontWeight: 'bold'}}> 1. GENERATOR Switch - OFF </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="ELECTRICAL FIRE"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class FIRE extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text>GROUND </Text>
                  <Text style={{fontWeight: 'bold'}}> 1. Execute Emergency Shutdown/Egress </Text>
                  <Text>TAKEOFF </Text>
                  <Text>If decision is made to stop: </Text>
                  <Text style={{fontWeight: 'bold'}}> 1. ABORT </Text>
                  <Text>If fire is confirmed and unable to abort: </Text>
                  <Text style={{fontWeight: 'bold'}}> 2. EJECT </Text>
                  <Text>In Flight </Text>
                  <Text style={{fontWeight: 'bold'}}> 1. Throttle - Minimum for safe flight </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="FIRE WARNING LIGHT"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class BRAKE extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text>If flyaway airspeed available: </Text>
                  <Text style={{fontWeight: 'bold'}}> 1. Go-around </Text>
                  <Text>If flyaway airspeed not available, or during taxi: </Text>
                  <Text style={{fontWeight: 'bold'}}> 1. Throttle - IDLE </Text>
                  <Text style={{fontWeight: 'bold'}}> 2. Brakes - RELEASE </Text>
                  <Text style={{fontWeight: 'bold'}}> 3. ANTI SKID Switch - OFF </Text>
                  <Text style={{fontWeight: 'bold'}}> 4. Attempt Braking </Text>
                  <Text>If brakes still unavailable: </Text>
                  <Text style={{fontWeight: 'bold'}}> 5. HOOK - DOWN (if required) </Text>
                  <Text style={{fontWeight: 'bold'}}> 6. Parking Brake Handle - PULL (if required) </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="BRAKE FAILURE"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class AIRSTART extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text style={{fontWeight: 'bold'}}> 1. Emergency Oxygen Green Ring(s) - PULL</Text>
                  <Text style={{fontWeight: 'bold'}}> 2. Throttle - OFF</Text>
                  <Text>Simultaneously perform steps 3 & 4 </Text>
                  <Text style={{fontWeight: 'bold'}}> 3. GTS start button - PRESS AND HOLD </Text>
                  <Text style={{fontWeight: 'bold'}}> 4. THROTTLE - IDLE </Text>
                  <Text>If unsuccessful (no relight within 30 seconds after moving the throttle to idle or EGT exceeds limits): </Text>
                  <Text style={{fontWeight: 'bold'}}> 5. Throttle - OFF (allow 30s to drain if practical) </Text>
                  <Text>If within airstart envelope (below 25,000 ft MSL, minimum 13% N2 RPM, recommended minimum 250 KIAS): </Text>
                  <Text style={{fontWeight: 'bold'}}> 6. Repeat steps 3 & 4 </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="AIRSTART"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class SMOKE extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text style={{fontWeight: 'bold'}}> 1. ALTITUDE - DESCEND BELOW 18,000 FT (if practical)</Text>
                  <Text style={{fontWeight: 'bold'}}> 2. AIRFLOW knob - OFF</Text>
                  <Text>If unable to clear smoke or unable to see</Text>
                  <Text style={{fontWeight: 'bold'}}> 3. AIRSPEED - REDUCE (as practical) </Text>
                  <Text style={{fontWeight: 'bold'}}> 4. WARN OCCUPANT/SECURE LOOSE ITEMS </Text>
                  <Text style={{fontWeight: 'bold'}}> 5. SEAT - LOWER </Text>
                  <Text style={{fontWeight: 'bold'}}> 6. MDC FIRING HANDLE - PULL</Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="SMOKE OR FUMES FROM COCKPIT"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class ELEC extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text style={{fontWeight: 'bold'}}> 1. Emergency oxygen green ring(s) - PULL </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="TOTAL ELECTRICAL FAILURE"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class GTS extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text>Ground </Text>
                  <Text style={{fontWeight: 'bold'}}> 1. Execute Emergency Shutdown/Egress </Text>
                  <Text>In Flight</Text>
                  <Text style={{fontWeight: 'bold'}}> 1. Engine Switch - OFF </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="GTS FIRE WARNING LIGHT"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class OIL extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text style={{fontWeight: 'bold'}}> 1. Throttle - Minimum for safe flight </Text>
                  <Text style={{fontWeight: 'bold'}}> 2. Avoid unnecessary throttle movements </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="OIL PRESSURE WARNING LIGHT"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class OXYGEN extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text>If hypoxic systems are evident and/or suspected, proceed as follows: </Text>
                  <Text style={{fontWeight: 'bold'}}> 1. Emergency oxygen green ring - PULL </Text>
                  <Text style={{fontWeight: 'bold'}}> 2. OBOGS Flow Selector - OFF </Text>
                  <Text style={{fontWeight: 'bold'}}> 3. Initiate rapid descent below 10,000 FT MSL or Minimum Safe Altitude </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="OXYGEN WARNING LIGHT & HYPOXIA/OBOGS CONTAMINATION"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class FLOW extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text style={{fontWeight: 'bold'}}> 1. Throttle - Increase RPM above 75% (80% above FL300) </Text>
                  <Text>If no mask flow or low mask flow continues 10 seconds after increasing RPM: </Text>
                  <Text style={{fontWeight: 'bold'}}> 2. Emergency oxygen green ring - PULL </Text>
                  <Text style={{fontWeight: 'bold'}}> 3. OBOGS Flow Selector - OFF </Text>
                  <Text style={{fontWeight: 'bold'}}> 4. Initiate rapid descent below 10,000 FT MSL or Minimum Safe Altitude </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="LOW/NO MASK FLOW"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class BRKPRES extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text>CATAPULT</Text>
                  <Text style={{fontWeight: 'bold'}}> 1. Suspend launch </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="BRK PRESS CAUTION LIGHT"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class CANOPY extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text style={{fontWeight: 'bold'}}> 1. Canopy Control Lever - CHECK LOCKED </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="CANOPY CAUTION LIGHT"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class EGRESS extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text style={{fontWeight: 'bold'}}> 1. Throttle - OFF </Text>
                  <Text style={{fontWeight: 'bold'}}> 2. ENGINE Switches - OFF </Text>
                  <Text style={{fontWeight: 'bold'}}> 3. FUEL SHUTOFF Handle - PULL </Text>
                  <Text style={{fontWeight: 'bold'}}> 4. EJECTION SEATS - SAFE </Text>
                  <Text style={{fontWeight: 'bold'}}> 5. BATT Switches - OFF </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="EMERGENCY ENGINE SHUTDOWN/GROUND EGRESS"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class AFLOAT extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text style={{fontWeight: 'bold'}}> 1. Throttle - IDLE </Text>
                  <Text style={{fontWeight: 'bold'}}> 2. Parking Brake Handle - PULL </Text>
                  <Text style={{fontWeight: 'bold'}}> 3. HOOK - DOWN </Text>
                  <Text style={{fontWeight: 'bold'}}> 4. Transmit </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="BRAKE FAILURE AFLOAT"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class LDC extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text style={{fontWeight: 'bold'}}> 1. Go-around </Text>
                  <Text>If flyaway airspeed not available: </Text>
                  <Text style={{fontWeight: 'bold'}}> 2. ABORT </Text>
                  <Text>If blown tire suspected: </Text>
                  <Text style={{fontWeight: 'bold'}}> 3. Brakes - RELEASE </Text>
                  <Text style={{fontWeight: 'bold'}}> 4. ANTI SKID Switch - OFF </Text>
                  <Text style={{fontWeight: 'bold'}}> 5. Brakes - Apply </Text>
                  <Text>NWS Failure suspected: </Text>
                  <Text style={{fontWeight: 'bold'}}> 6. Paddle Switch - PRESS </Text>
                  <Text>If airborne: </Text>
                  <Text style={{fontWeight: 'bold'}}> 7. GEAR AND FLAPS - DO NOT REPOSITION </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="LOSS OF DIRECTIONAL CONTROL"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class ABORT extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text style={{fontWeight: 'bold'}}> 1. Throttle - IDLE </Text>
                  <Text style={{fontWeight: 'bold'}}> 2. SPEED BRAKES - EXTEND </Text>
                  <Text style={{fontWeight: 'bold'}}> 3. BRAKES - APPLY </Text>
                  <Text style={{fontWeight: 'bold'}}> 4. HOOK - DOWN (if required) </Text>
                  <Text style={{fontWeight: 'bold'}}> 5. Release brakes prior to crossing the arresting gear </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="ABORT"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class CAT extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text style={{fontWeight: 'bold'}}> 1. Throttle - MRT </Text>
                  <Text style={{fontWeight: 'bold'}}> 2. Maintain 24 units AOA </Text>
                  <Text>If engine failed, or unable to stop settle: </Text>
                  <Text style={{fontWeight: 'bold'}}> 3. EJECT </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="EMERGENCY CATAPULT FLYAWAY"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class CARRIER extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text style={{fontWeight: 'bold'}}> 1. GEAR AND FLAPS - DO NOT REPOSITION </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="BLOWN TIRE AT CARRIER"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class FAIL extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text>If below 1500 FT and less than 180 KIAS: </Text>
                  <Text style={{fontWeight: 'bold'}}> 1. EJECT </Text>
                  <Text>If above 1500 FT or more than 180 KIAS: </Text>
                  <Text style={{fontWeight: 'bold'}}> 2. Execute Airstart </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="ENGINE FAILURE"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class ROLL extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text>If rolling and yawing is experienced during operation of the wings flaps or while the flaps are extended, an asymmetric wing flaps condition probably exists:</Text>
                  <Text style={{fontWeight: 'bold'}}> 1. FLAPS/SLATS lever - RETURN TO PREVIOUS SETTING </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="UNCOMMANDED ROLL/YAW"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class DEPARTURE extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Text style={{fontWeight: 'bold'}}>1. Controls - NEUTRALIZE/FORCIBLY CENTER RUDDER PEDALS </Text>
                  <Text style={{fontWeight: 'bold'}}>2. Speed Brakes - RETRACT</Text>
                  <Text style={{fontWeight: 'bold'}}>3. Throttle - IDLE</Text>
                  <Text style={{fontWeight: 'bold'}}>4. Check altitude, AOA, airspeed, and turn needle</Text>
                  <Text>If spin confirmed:</Text>
                  <Text>INVERTED (AOA pegged at 0 units):</Text>
                  <Text style={{fontWeight: 'bold'}}>5. Rudder pedal - FULL OPPOSITE TURN NEEDLE</Text>
                  <Text style={{fontWeight: 'bold'}}>6. Lateral stick - FULL OPPOSITE TURN NEEDLE</Text>
                  <Text style={{fontWeight: 'bold'}}>7. Longitudinal stick - NEUTRALIZE</Text>
                  <Text>UPRIGHT (AOA above 28 units):</Text>
                  <Text style={{fontWeight: 'bold'}}>8. Rudder pedal - FULL OPPOSITE TURN NEEDLE</Text>
                  <Text style={{fontWeight: 'bold'}}>9. Lateral stick - FULL WITH TURN NEEDLE</Text>
                  <Text style={{fontWeight: 'bold'}}>10. Longitudinal stick - NEUTRALIZE</Text>
                  <Text>If recovery indicated or airspeed increasing through 160 KIAS:</Text>
                  <Text style={{fontWeight: 'bold'}}>11. Lateral stick - NEUTRALIZE</Text>
                  <Text>  When recovery indicated:</Text>
                  <Text style={{fontWeight: 'bold'}}>12. Rudder pedals - SMOOTHLY CENTER</Text>
                  <Text>If out of control passing through 10,000 feet AGL:</Text>
                  <Text style={{fontWeight: 'bold'}}>13. Eject </Text>

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="DEPARTURE/SPIN PROCEDURE"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </View>
    );
  }
}

class OPS extends Component {

   state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <ScrollView style={{marginTop: 22}}>
          
          <Modal
            animationType="slide"
            transparent={false}
            visible={this.state.modalVisible}
            onRequestClose={() => {
              alert('Modal has been closed.');
            }}>
            <View style={{marginTop: 100}}>
              <View>

                  <Image
                    style={{ width: '100%', resizeMode: 'stretch'}}
                          source={require('../assets/images/OPS.png')}
                        />

                  <ThemeProvider theme={theme}><Button
                                      style={{marginTop:30}}
                                      title="RETURN"
                                      titleStyle={{fontWeight: 'bold'}}
                                      onPress={() => {
                                        this.setModalVisible(false);
                                      }}>
                                    </Button></ThemeProvider>

              </View>
            </View>
          </Modal>

          <ThemeProvider theme={theme}><Button
                      title="OPS LIMITS"
                      titleStyle={{fontWeight: 'bold'}}
                      onPress={() => {
                        this.setModalVisible(true);
                      }}>
                    </Button></ThemeProvider>

        </ScrollView>
    );
  }
}

export default function EPScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
    <ScrollView>
      <EGTRPM/>
      <SKID/>
      <TPHOT/>
      <CLEARENG/>
      <EFIRE/>
      <FIRE/>
      <BRAKE/>
      <AIRSTART/>
      <SMOKE/>
      <ELEC/>
      <GTS/>
      <OIL/>
      <OXYGEN/>
      <FLOW/>
      <BRKPRES/>
      <CANOPY/>
      <EGRESS/>
      <AFLOAT/>
      <LDC/>
      <ABORT/>
      <CAT/>
      <CARRIER/>
      <FAIL/>
      <ROLL/>
      <DEPARTURE/>
      <OPS/>
    </ScrollView>

  		);
}

EPScreen.navigationOptions = {
  title: 'EPs & Limits',
  headerStyle: {
      backgroundColor: 'black',
    },
    headerTintColor: '#fff',
    headerTitleStyle: {
      fontWeight: 'bold',
      fontSize: 30,
    },
};
