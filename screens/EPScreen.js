import React from 'react';
import { View, ScrollView, Image, Text } from 'react-native';
import { ExpoConfigView } from '@expo/samples';

export default function EPScreen() {
  /**
   * Go ahead and delete ExpoConfigView and replace it with your content;
   * we just wanted to give you a quick view of your config.
   */
  return (
  	<ScrollView>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
  		<Text/>
  		<Text style={{fontWeight: 'bold'}}> EGT/RPM WARNING LIGHT OR COMPRESSOR STALL </Text>
  		<Text>In-Flight</Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Throttle - IDLE </Text>
  		<Text style={{fontWeight: 'bold'}}> 2. EGT/RPM - CHECK </Text>
  		<Text>If EGT is greater than 450C for more than 6 seconds at IDLE: </Text>
  		<Text style={{fontWeight: 'bold'}}> 3. Execute Engine Failure Procedure </Text>
  		<Text>If EGT responds normally:</Text>
  		<Text style={{fontWeight: 'bold'}}> 4. Throttle - Slowly advance to minimum for safe flight </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> SKID CAUTION LIGHT </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Go-around if practical </Text>
  		<Text>If go around not practical: </Text>
  		<Text style={{fontWeight: 'bold'}}> 2. Brakes - Release </Text>
  		<Text style={{fontWeight: 'bold'}}> 3. ANTI-SKID switch - OFF </Text>
  		<Text style={{fontWeight: 'bold'}}> 4. Brakes - Apply gradually </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> TP HOT CAUTION LIGHT </Text>
  		<Text>Ground </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Execute Emergency Shutdown/Egress </Text>
  		<Text>In Flight</Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Throttle - Minimum for safe flight </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> CLEAR ENGINE PROCEDURE/ABNORMAL START/TP FIRE ON SHUTDOWN </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Throttle - OFF </Text>
  		<Text style={{fontWeight: 'bold'}}> 2. ENGINE Switches - ON </Text>
  		<Text style={{fontWeight: 'bold'}}> 3. FUEL SHUTOFF Handle - DOWN </Text>
  		<Text style={{fontWeight: 'bold'}}> 4. GTS - START </Text>
  		<Text style={{fontWeight: 'bold'}}> 5. IGNITION Switch - ISOLATE </Text>
  		<Text>When rpm below 20 percent and GTS advisory light illuminates: </Text>
  		<Text style={{fontWeight: 'bold'}}> 6. ENGINE switch - START </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> ELECTRICAL FIRE </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. GENERATOR Switch - OFF </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> FIRE WARNING LIGHT </Text>
  		<Text>GROUND </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Execute Emergency Shutdown/Egress </Text>
  		<Text>TAKEOFF </Text>
  		<Text>If decision is made to stop: </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. ABORT </Text>
  		<Text>If fire is confirmed and unable to abort: </Text>
  		<Text style={{fontWeight: 'bold'}}> 2. EJECT </Text>
  		<Text>In Flight </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Throttle - Minimum for safe flight </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> BRAKE FAILURE </Text>
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
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> AIRSTART </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Emergency Oxygen Green Ring(s) - PULL</Text>
  		<Text style={{fontWeight: 'bold'}}> 2. Throttle - OFF</Text>
  		<Text>Simultaneously perform steps 3 & 4 </Text>
  		<Text style={{fontWeight: 'bold'}}> 3. GTS start button - PRESS AND HOLD </Text>
  		<Text style={{fontWeight: 'bold'}}> 4. THROTTLE - IDLE </Text>
  		<Text>If unsuccessful (no relight within 30 seconds after moving the throttle to idle or EGT exceeds limits): </Text>
  		<Text style={{fontWeight: 'bold'}}> 5. Throttle - OFF (allow 30s to drain if practical) </Text>
  		<Text>If within airstart envelope (below 25,000 ft MSL, minimum 13% N2 RPM, recommended minimum 250 KIAS): </Text>
  		<Text style={{fontWeight: 'bold'}}> 6. Repeat steps 3 & 4 </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> SMOKE OR FUMES FROM COCKPIT </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. ALTITUDE - DESCEND BELOW 18,000 FT (if practical)</Text>
  		<Text style={{fontWeight: 'bold'}}> 2. AIRFLOW knob - OFF</Text>
  		<Text>If unable to clear smoke or unable to see</Text>
  		<Text style={{fontWeight: 'bold'}}> 3. AIRSPEED - REDUCE (as practical) </Text>
  		<Text style={{fontWeight: 'bold'}}> 4. WARN OCCUPANT/SECURE LOOSE ITEMS </Text>
  		<Text style={{fontWeight: 'bold'}}> 5. SEAT - LOWER </Text>
  		<Text style={{fontWeight: 'bold'}}> 6. MDC FIRING HANDLE - PULL</Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> TOTAL ELECTRICAL FAILURE </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Emergency oxygen green ring(s) - PULL </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> GTS FIRE WARNING LIGHT </Text>
  		<Text>Ground </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Execute Emergency Shutdown/Egress </Text>
  		<Text>In Flight</Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Engine Switch - OFF </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> OIL PRESSURE WARNING LIGHT </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Throttle - Minimum for safe flight </Text>
  		<Text style={{fontWeight: 'bold'}}> 2. Avoid unnecessary throttle movements </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> OXYGEN WARNING LIGHT & HYPOXIA/OBOGS CONTAMINATION </Text>
  		<Text>If hypoxic systems are evident and/or suspected, proceed as follows: </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Emergency oxygen green ring - PULL </Text>
  		<Text style={{fontWeight: 'bold'}}> 2. OBOGS Flow Selector - OFF </Text>
  		<Text style={{fontWeight: 'bold'}}> 3. Initiate rapid descent below 10,000 FT MSL or Minimum Safe Altitude </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> LOW/NO MASK FLOW </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Throttle - Increase RPM above 75% (80% above FL300) </Text>
  		<Text>If no mask flow or low mask flow continues 10 seconds after increasing RPM: </Text>
  		<Text style={{fontWeight: 'bold'}}> 2. Emergency oxygen green ring - PULL </Text>
  		<Text style={{fontWeight: 'bold'}}> 3. OBOGS Flow Selector - OFF </Text>
  		<Text style={{fontWeight: 'bold'}}> 4. Initiate rapid descent below 10,000 FT MSL or Minimum Safe Altitude </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> BRK PRESS CAUTION LIGHT</Text>
  		<Text>CATAPULT</Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Suspend launch </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> CANOPY CAUTION LIGHT </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Canopy Control Lever - CHECK LOCKED </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> EMERGENCY SHUTDOWN/EGRESS </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Throttle - OFF </Text>
  		<Text style={{fontWeight: 'bold'}}> 2. ENGINE Switches - OFF </Text>
  		<Text style={{fontWeight: 'bold'}}> 3. FUEL SHUTOFF Handle - PULL </Text>
  		<Text style={{fontWeight: 'bold'}}> 4. EJECTION SEATS - SAFE </Text>
  		<Text style={{fontWeight: 'bold'}}> 5. BATT Switches - OFF </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> BRAKE FAILURE AFLOAT </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Throttle - IDLE </Text>
  		<Text style={{fontWeight: 'bold'}}> 2. Parking Brake Handle - PULL </Text>
  		<Text style={{fontWeight: 'bold'}}> 3. HOOK - DOWN </Text>
  		<Text style={{fontWeight: 'bold'}}> 4. Transmit </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> LOSS OF DIRECTIONAL CONTROL </Text>
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
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> ABORT </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Throttle - IDLE </Text>
  		<Text style={{fontWeight: 'bold'}}> 2. SPEED BRAKES - EXTEND </Text>
  		<Text style={{fontWeight: 'bold'}}> 3. BRAKES - APPLY </Text>
  		<Text style={{fontWeight: 'bold'}}> 4. HOOK - DOWN (if required) </Text>
  		<Text style={{fontWeight: 'bold'}}> 5. Release brakes prior to crossing the arresting gear </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> EMERGENCY CATAPULT FLYAWAY </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. Throttle - MRT </Text>
  		<Text style={{fontWeight: 'bold'}}> 2. Maintain 24 units AOA </Text>
  		<Text>If engine failed, or unable to stop settle: </Text>
  		<Text style={{fontWeight: 'bold'}}> 3. EJECT </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> BLOWN TIRE(S) AT CARRIER </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. GEAR AND FLAPS - DO NOT REPOSITION </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> ENGINE FAILURE </Text>
  		<Text>If below 1500 FT and less than 180 KIAS: </Text>
  		<Text style={{fontWeight: 'bold'}}> 1. EJECT </Text>
  		<Text>If above 1500 FT or more than 180 KIAS: </Text>
  		<Text style={{fontWeight: 'bold'}}> 2. Execute Airstart </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> UNCOMMANDED ROLL/YAW </Text>
  		<Text>If rolling and yawing is experienced during operation of the wings flaps or while the flaps are extended, an asymmetric wing flaps condition probably exists:</Text>
  		<Text style={{fontWeight: 'bold'}}> 1. FLAPS/SLATS lever - RETURN TO PREVIOUS SETTING </Text>
  		<Text/>
  		<View
     	 style={{
     	 borderBottomColor: 'black',
     	 borderBottomWidth: 1,
      	 }}
      	/>
      	<Text/>
  		<Text style={{fontWeight: 'bold'}}> DEPARTURE/SPIN PROCEDURE </Text>
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
		<Text>	When recovery indicated:</Text>
		<Text style={{fontWeight: 'bold'}}>12. Rudder pedals - SMOOTHLY CENTER</Text>
		<Text>If out of control passing through 10,000 feet AGL:</Text>
		<Text style={{fontWeight: 'bold'}}>13. Eject </Text>
		<Text/>  		

		<Image
		style={{ width: '100%', resizeMode: 'stretch'}}
          source={require('../assets/images/OPS.png')}
        />

  	</ScrollView>

  		);
}

EPScreen.navigationOptions = {
  title: 'EPs & Limits',
};
