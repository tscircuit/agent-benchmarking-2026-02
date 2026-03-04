import { AMS1117_3_3 } from "./imports/AMS1117_3_3"
import { RP2040 } from "./imports/RP2040"
import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12"

export default () => (
  <board width="48mm" height="22mm" routingDisabled>
    <TYPE_C_31_M_12 name="USBC1" pcbX={0} pcbY={8.1} />
    <AMS1117_3_3 name="U2" pcbX={-17} pcbY={0} pcbRotation={180} />
    <RP2040 name="U1" pcbX={0} pcbY={-1.5} />

    <capacitor name="CIN" capacitance="10uF" footprint="0603" pcbX={-12.5} pcbY={2.5} />
    <capacitor name="COUT" capacitance="10uF" footprint="0603" pcbX={-12.5} pcbY={-1.5} />
    <capacitor name="CVREG" capacitance="1uF" footprint="0402" pcbX={5.8} pcbY={-7.5} />
    <capacitor name="C3V3_1" capacitance="100nF" footprint="0402" pcbX={-5.8} pcbY={4.3} />
    <capacitor name="C3V3_2" capacitance="100nF" footprint="0402" pcbX={5.8} pcbY={4.3} />

    <resistor name="RCC1" resistance="5.1k" footprint="0402" pcbX={-3.5} pcbY={10.5} />
    <resistor name="RCC2" resistance="5.1k" footprint="0402" pcbX={3.5} pcbY={10.5} />

    <resistor name="RLED" resistance="1k" footprint="0402" pcbX={13} pcbY={-3} />
    <led name="D1" color="green" footprint="0603" pcbX={17} pcbY={-3} />

    <trace from="USBC1.A4B9" to="net.VBUS" />
    <trace from="USBC1.B4A9" to="net.VBUS" />
    <trace from="USBC1.A1B12" to="net.GND" />
    <trace from="USBC1.B1A12" to="net.GND" />
    <trace from="USBC1.EH1" to="net.GND" />
    <trace from="USBC1.EH2" to="net.GND" />
    <trace from="USBC1.EH3" to="net.GND" />
    <trace from="USBC1.EH4" to="net.GND" />

    <trace from="USBC1.A5" to="net.USB_CC1" />
    <trace from="RCC1.pin1" to="net.USB_CC1" />
    <trace from="RCC1.pin2" to="net.GND" />
    <trace from="USBC1.B5" to="net.USB_CC2" />
    <trace from="RCC2.pin1" to="net.USB_CC2" />
    <trace from="RCC2.pin2" to="net.GND" />

    <trace from="USBC1.A6" to="net.USB_DP" />
    <trace from="USBC1.B6" to="net.USB_DP" />
    <trace from="U1.USB_DP" to="net.USB_DP" />
    <trace from="USBC1.A7" to="net.USB_DM" />
    <trace from="USBC1.B7" to="net.USB_DM" />
    <trace from="U1.USB_DM" to="net.USB_DM" />

    <trace from="U2.VIN" to="net.VBUS" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="U2.VOUT1" to="net.V3_3" />
    <trace from="U2.VOUT2" to="net.V3_3" />

    <trace from="CIN.pin1" to="net.VBUS" />
    <trace from="CIN.pin2" to="net.GND" />
    <trace from="COUT.pin1" to="net.V3_3" />
    <trace from="COUT.pin2" to="net.GND" />

    <trace from="U1.IOVDD1" to="net.V3_3" />
    <trace from="U1.IOVDD2" to="net.V3_3" />
    <trace from="U1.IOVDD3" to="net.V3_3" />
    <trace from="U1.IOVDD4" to="net.V3_3" />
    <trace from="U1.IOVDD5" to="net.V3_3" />
    <trace from="U1.IOVDD6" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.VREG_IN" to="net.V3_3" />

    <trace from="U1.DVDD1" to="net.VCORE" />
    <trace from="U1.DVDD2" to="net.VCORE" />
    <trace from="U1.USB_VDD" to="net.VCORE" />
    <trace from="U1.VREG_VOUT" to="net.VCORE" />
    <trace from="CVREG.pin1" to="net.VCORE" />
    <trace from="CVREG.pin2" to="net.GND" />
    <trace from="U1.GND" to="net.GND" />

    <trace from="C3V3_1.pin1" to="net.V3_3" />
    <trace from="C3V3_1.pin2" to="net.GND" />
    <trace from="C3V3_2.pin1" to="net.V3_3" />
    <trace from="C3V3_2.pin2" to="net.GND" />

    <trace from="U1.GPIO25" to="net.LED_DRIVE" />
    <trace from="RLED.pin1" to="net.LED_DRIVE" />
    <trace from="RLED.pin2" to="net.LED_RETURN" />
    <trace from="D1.pin1" to="net.LED_RETURN" />
    <trace from="D1.pin2" to="net.GND" />
  </board>
)