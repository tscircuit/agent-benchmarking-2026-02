import { KT_0603R } from "./imports/KT_0603R"
import { RP2040 } from "./imports/RP2040"
import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12"

export default () => (
  <board width="60mm" height="24mm" routingDisabled>
    <TYPE_C_31_M_12 name="J_USB" pcbX={0} pcbY={8.3} pcbRotation={180} />

    <RP2040 name="U1" pcbX={0} pcbY={0} />

    <pinheader
      name="J1"
      pinCount={8}
      pcbX={-20}
      pcbY={0}
      pinLabels={["GPIO0", "GPIO1", "GPIO2", "GPIO3", "GPIO4", "GPIO5", "3V3", "GND"]}
      showSilkscreenPinLabels
    />

    <pinheader
      name="J2"
      pinCount={8}
      pcbX={20}
      pcbY={0}
      pinLabels={["GPIO6", "GPIO7", "GPIO8", "GPIO9", "RUN", "VBUS", "3V3", "GND"]}
      showSilkscreenPinLabels
    />

    <KT_0603R name="D1" pcbX={17} pcbY={8} />
    <resistor
      name="R_LED"
      resistance="1k"
      footprint="0402"
      pcbX={13.5}
      pcbY={8}
      supplierPartNumbers={{ jlcpcb: ["C25804"] }}
    />

    <resistor
      name="R_CC1"
      resistance="5.1k"
      footprint="0402"
      pcbX={-8}
      pcbY={9}
      supplierPartNumbers={{ jlcpcb: ["C25905"] }}
    />
    <resistor
      name="R_CC2"
      resistance="5.1k"
      footprint="0402"
      pcbX={-11}
      pcbY={9}
      supplierPartNumbers={{ jlcpcb: ["C25905"] }}
    />

    <capacitor name="C_VREG" capacitance="1uF" footprint="0402" pcbX={4} pcbY={-6} />
    <capacitor name="C_3V3" capacitance="100nF" footprint="0402" pcbX={7} pcbY={-6} />

    <trace from="U1.USB_DP" to="net.USB_DP" />
    <trace from="J_USB.A6" to="net.USB_DP" />
    <trace from="J_USB.B6" to="net.USB_DP" />
    <trace from="U1.USB_DM" to="net.USB_DM" />
    <trace from="J_USB.A7" to="net.USB_DM" />
    <trace from="J_USB.B7" to="net.USB_DM" />

    <trace from="J_USB.A4B9" to="net.VBUS" />
    <trace from="J_USB.B4A9" to="net.VBUS" />
    <trace from="J_USB.A1B12" to="net.GND" />
    <trace from="J_USB.B1A12" to="net.GND" />
    <trace from="J_USB.EH1" to="net.GND" />
    <trace from="J_USB.EH2" to="net.GND" />
    <trace from="J_USB.EH3" to="net.GND" />
    <trace from="J_USB.EH4" to="net.GND" />

    <trace from="J_USB.A5" to="net.USB_CC1" />
    <trace from="R_CC1.pin1" to="net.USB_CC1" />
    <trace from="R_CC1.pin2" to="net.GND" />
    <trace from="J_USB.B5" to="net.USB_CC2" />
    <trace from="R_CC2.pin1" to="net.USB_CC2" />
    <trace from="R_CC2.pin2" to="net.GND" />

    <trace from="U1.GPIO25" to="net.LED_DRV" />
    <trace from="R_LED.pin1" to="net.LED_DRV" />
    <trace from="R_LED.pin2" to="net.LED_ANODE" />
    <trace from="D1.A" to="net.LED_ANODE" />
    <trace from="D1.K" to="net.GND" />

    <trace from="U1.VREG_VOUT" to="net.VREG_1V1" />
    <trace from="C_VREG.pin1" to="net.VREG_1V1" />
    <trace from="C_VREG.pin2" to="net.GND" />

    <trace from="U1.GPIO0" to="net.GPIO0" />
    <trace from="J1.pin1" to="net.GPIO0" />
    <trace from="U1.GPIO1" to="net.GPIO1" />
    <trace from="J1.pin2" to="net.GPIO1" />
    <trace from="U1.GPIO2" to="net.GPIO2" />
    <trace from="J1.pin3" to="net.GPIO2" />
    <trace from="U1.GPIO3" to="net.GPIO3" />
    <trace from="J1.pin4" to="net.GPIO3" />
    <trace from="U1.GPIO4" to="net.GPIO4" />
    <trace from="J1.pin5" to="net.GPIO4" />
    <trace from="U1.GPIO5" to="net.GPIO5" />
    <trace from="J1.pin6" to="net.GPIO5" />
    <trace from="net.V3_3" to="J1.pin7" />
    <trace from="net.GND" to="J1.pin8" />

    <trace from="U1.GPIO6" to="net.GPIO6" />
    <trace from="J2.pin1" to="net.GPIO6" />
    <trace from="U1.GPIO7" to="net.GPIO7" />
    <trace from="J2.pin2" to="net.GPIO7" />
    <trace from="U1.GPIO8" to="net.GPIO8" />
    <trace from="J2.pin3" to="net.GPIO8" />
    <trace from="U1.GPIO9" to="net.GPIO9" />
    <trace from="J2.pin4" to="net.GPIO9" />
    <trace from="U1.RUN" to="net.RUN" />
    <trace from="J2.pin5" to="net.RUN" />
    <trace from="net.VBUS" to="J2.pin6" />
    <trace from="net.V3_3" to="J2.pin7" />
    <trace from="net.GND" to="J2.pin8" />

    <trace from="U1.IOVDD1" to="net.V3_3" />
    <trace from="U1.IOVDD2" to="net.V3_3" />
    <trace from="U1.IOVDD3" to="net.V3_3" />
    <trace from="U1.IOVDD4" to="net.V3_3" />
    <trace from="U1.IOVDD5" to="net.V3_3" />
    <trace from="U1.IOVDD6" to="net.V3_3" />
    <trace from="U1.DVDD1" to="net.V3_3" />
    <trace from="U1.DVDD2" to="net.V3_3" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.VREG_IN" to="net.V3_3" />
    <trace from="U1.GND" to="net.GND" />

    <trace from="C_3V3.pin1" to="net.V3_3" />
    <trace from="C_3V3.pin2" to="net.GND" />
  </board>
)