import React from "react"
import { RP2040 } from "./imports/RP2040"
import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12"
import { XL_1608UGC_04 } from "./imports/XL_1608UGC_04"

export default () => (
  <board width="52mm" height="22mm" routingDisabled>
    <TYPE_C_31_M_12 name="J1" pcbX={-21} pcbY={0} pcbRotation={180} />

    <RP2040 name="U1" pcbX={0} pcbY={0} />

    <XL_1608UGC_04 name="D1" pcbX={13} pcbY={2.5} />
    <resistor
      name="R1"
      resistance="1k"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C25744"] }}
      pcbX={10}
      pcbY={2.5}
      pcbRotation={90}
    />
    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C52923"] }}
      pcbX={4.5}
      pcbY={6.5}
    />

    <trace from="J1.A6" to="net.USB_DP" />
    <trace from="J1.B6" to="net.USB_DP" />
    <trace from="U1.USB_DP" to="net.USB_DP" />
    <trace from="J1.A7" to="net.USB_DM" />
    <trace from="J1.B7" to="net.USB_DM" />
    <trace from="U1.USB_DM" to="net.USB_DM" />

    <trace from="J1.A1B12" to="net.GND" />
    <trace from="J1.B1A12" to="net.GND" />
    <trace from="J1.EH1" to="net.GND" />
    <trace from="J1.EH2" to="net.GND" />
    <trace from="J1.EH3" to="net.GND" />
    <trace from="J1.EH4" to="net.GND" />

    <trace from="J1.A4B9" to="net.VBUS" />
    <trace from="J1.B4A9" to="net.VBUS" />

    <trace from="U1.IOVDD1" to="net.V3_3" />
    <trace from="U1.IOVDD2" to="net.V3_3" />
    <trace from="U1.IOVDD3" to="net.V3_3" />
    <trace from="U1.IOVDD4" to="net.V3_3" />
    <trace from="U1.IOVDD5" to="net.V3_3" />
    <trace from="U1.IOVDD6" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.VREG_IN" to="net.V3_3" />

    <trace from="U1.DVDD1" to="net.V1_1" />
    <trace from="U1.DVDD2" to="net.V1_1" />
    <trace from="U1.VREG_VOUT" to="net.V1_1" />
    <trace from="C1.pin1" to="net.V1_1" />
    <trace from="C1.pin2" to="net.GND" />

    <trace from="U1.GPIO25" to="net.LED_DRV" />
    <trace from="R1.pin1" to="net.LED_DRV" />
    <trace from="R1.pin2" to="net.LED_ANODE" />
    <trace from="D1.A" to="net.LED_ANODE" />
    <trace from="D1.K" to="net.GND" />

    <trace from="U1.GND" to="net.GND" />
  </board>
)