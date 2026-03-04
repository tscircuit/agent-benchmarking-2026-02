import { AMS1117_3_3 } from "./imports/AMS1117_3_3"
import { RP2040 } from "./imports/RP2040"
import { KT_0603R } from "./imports/KT_0603R"
import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12"

export default () => (
  <board width="55mm" height="30mm" routingDisabled>
    <TYPE_C_31_M_12 name="J1" pcbX={-21.5} pcbY={0} pcbRotation={270} />

    <AMS1117_3_3 name="U2" pcbX={-14} pcbY={0} pcbRotation={180} />
    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="0805"
      supplierPartNumbers={{ jlcpcb: ["C15850"] }}
      pcbX={-18}
      pcbY={4.5}
    />
    <capacitor
      name="C2"
      capacitance="10uF"
      footprint="0805"
      supplierPartNumbers={{ jlcpcb: ["C15850"] }}
      pcbX={-10}
      pcbY={4.5}
    />

    <RP2040 name="U1" pcbX={2} pcbY={0} />
    <capacitor
      name="C3"
      capacitance="1uF"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C15849"] }}
      pcbX={8}
      pcbY={-4}
    />

    <resistor
      name="R1"
      resistance="1k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C21190"] }}
      pcbX={14}
      pcbY={-6}
    />
    <KT_0603R name="D1" pcbX={18} pcbY={-6} pcbRotation={180} />

    <resistor
      name="R2"
      resistance="5.1k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C23186"] }}
      pcbX={-21}
      pcbY={6.5}
    />
    <resistor
      name="R3"
      resistance="5.1k"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C23186"] }}
      pcbX={-21}
      pcbY={-6.5}
    />

    <trace from="J1.A1B12" to="net.GND" />
    <trace from="J1.B1A12" to="net.GND" />
    <trace from="J1.EH1" to="net.GND" />
    <trace from="J1.EH2" to="net.GND" />
    <trace from="J1.EH3" to="net.GND" />
    <trace from="J1.EH4" to="net.GND" />

    <trace from="J1.A4B9" to="net.VBUS5" />
    <trace from="J1.B4A9" to="net.VBUS5" />
    <trace from="J1.A5" to="net.CC1" />
    <trace from="R2.pin1" to="net.CC1" />
    <trace from="J1.B5" to="net.CC2" />
    <trace from="R3.pin1" to="net.CC2" />
    <trace from="R2.pin2" to="net.GND" />
    <trace from="R3.pin2" to="net.GND" />

    <trace from="J1.A6" to="net.USB_DP" />
    <trace from="J1.B6" to="net.USB_DP" />
    <trace from="U1.USB_DP" to="net.USB_DP" />
    <trace from="J1.A7" to="net.USB_DM" />
    <trace from="J1.B7" to="net.USB_DM" />
    <trace from="U1.USB_DM" to="net.USB_DM" />

    <trace from="U2.VIN" to="net.VBUS5" />
    <trace from="U2.pin1" to="net.GND" />
    <trace from="U2.pin2" to="net.V3_3" />
    <trace from="U2.TAB" to="net.V3_3" />
    <trace from="C1.pin1" to="net.VBUS5" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin1" to="net.V3_3" />
    <trace from="C2.pin2" to="net.GND" />

    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.VREG_IN" to="net.V3_3" />
    <trace from="U1.IOVDD1" to="net.V3_3" />
    <trace from="U1.IOVDD2" to="net.V3_3" />
    <trace from="U1.IOVDD3" to="net.V3_3" />
    <trace from="U1.IOVDD4" to="net.V3_3" />
    <trace from="U1.IOVDD5" to="net.V3_3" />
    <trace from="U1.IOVDD6" to="net.V3_3" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.VREG_VOUT" to="net.V1_1" />
    <trace from="U1.DVDD1" to="net.V1_1" />
    <trace from="U1.DVDD2" to="net.V1_1" />
    <trace from="C3.pin1" to="net.V1_1" />
    <trace from="C3.pin2" to="net.GND" />

    <trace from="R1.pin1" to="net.V3_3" />
    <trace from="R1.pin2" to="net.LED_A" />
    <trace from="D1.A" to="net.LED_A" />
    <trace from="D1.K" to="net.LED_K" />
    <trace from="U1.GPIO25" to="net.LED_K" />
  </board>
)