import { RP2040 } from "./imports/RP2040"
import { TYPE_C_16PIN_2MD_073_ } from "./imports/TYPE_C_16PIN_2MD_073_"

export default () => (
  <board width="44mm" height="24mm" routingDisabled>
    <TYPE_C_16PIN_2MD_073_ name="USB1" pcbX={-16} pcbY={0} />
    <RP2040 name="U1" pcbX={4} pcbY={0} />

    <resistor
      name="RCC1"
      resistance="5.1k"
      footprint="0402"
      pcbX={-7}
      pcbY={3}
      supplierPartNumbers={{ jlcpcb: ["C25905"] }}
    />
    <resistor
      name="RCC2"
      resistance="5.1k"
      footprint="0402"
      pcbX={-7}
      pcbY={-3}
      supplierPartNumbers={{ jlcpcb: ["C25905"] }}
    />

    <resistor
      name="RLED1"
      resistance="1k"
      footprint="0402"
      pcbX={13}
      pcbY={-2}
      supplierPartNumbers={{ jlcpcb: ["C11702"] }}
    />
    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX={16}
      pcbY={-2}
      supplierPartNumbers={{ jlcpcb: ["C72043"] }}
    />

    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      pcbX={8}
      pcbY={5}
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
    />

    <trace from="USB1.GND1" to="net.GND" />
    <trace from="USB1.GND2" to="net.GND" />
    <trace from="USB1.SHELL1" to="net.GND" />
    <trace from="USB1.SHELL2" to="net.GND" />

    <trace from="USB1.VBUS1" to="net.V3_3" />
    <trace from="USB1.VBUS2" to="net.V3_3" />
    <trace from="USB1.CC1" to="net.CC1" />
    <trace from="RCC1.pin1" to="net.CC1" />
    <trace from="RCC1.pin2" to="net.GND" />
    <trace from="USB1.CC2" to="net.CC2" />
    <trace from="RCC2.pin1" to="net.CC2" />
    <trace from="RCC2.pin2" to="net.GND" />

    <trace from="USB1.DP1" to="net.USB_DP" />
    <trace from="USB1.DP2" to="net.USB_DP" />
    <trace from="USB1.DN1" to="net.USB_DM" />
    <trace from="USB1.DN2" to="net.USB_DM" />
    <trace from="U1.USB_DP" to="net.USB_DP" />
    <trace from="U1.USB_DM" to="net.USB_DM" />

    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.IOVDD1" to="net.V3_3" />
    <trace from="U1.IOVDD2" to="net.V3_3" />
    <trace from="U1.IOVDD3" to="net.V3_3" />
    <trace from="U1.IOVDD4" to="net.V3_3" />
    <trace from="U1.IOVDD5" to="net.V3_3" />
    <trace from="U1.IOVDD6" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.VREG_IN" to="net.V3_3" />
    <trace from="U1.VREG_VOUT" to="net.V3_3" />
    <trace from="C1.pin1" to="net.V3_3" />

    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.DVDD1" to="net.GND" />
    <trace from="U1.DVDD2" to="net.GND" />
    <trace from="C1.pin2" to="net.GND" />

    <trace from="U1.GPIO25" to="net.LED_CTRL" />
    <trace from="RLED1.pin1" to="net.LED_CTRL" />
    <trace from="RLED1.pin2" to="net.LED_NODE" />
    <trace from="D1.pin1" to="net.LED_NODE" />
    <trace from="D1.pin2" to="net.GND" />
  </board>
)