import { RP2040 } from "./imports/RP2040"

const usbCMinimalPinLabels = {
  pin1: "VBUS",
  pin2: "DM",
  pin3: "DP",
  pin4: "CC1",
  pin5: "CC2",
  pin6: "GND",
} as const

export default () => (
  <board width="52mm" height="34mm" routingDisabled>
    <RP2040 name="U1" pcbX={0} pcbY={1} />

    <chip
      name="J1"
      pcbX={0}
      pcbY={-12}
      pinLabels={usbCMinimalPinLabels}
      manufacturerPartNumber="USB_C_PORT_MINIMAL"
      supplierPartNumbers={{ jlcpcb: ["C49261591"] }}
      footprint={<footprint>
        <smtpad portHints={["pin1"]} pcbX={-2} pcbY={0} width="0.7mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin2"]} pcbX={-1} pcbY={0} width="0.7mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin3"]} pcbX={0} pcbY={0} width="0.7mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin4"]} pcbX={1} pcbY={0} width="0.7mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin5"]} pcbX={2} pcbY={0} width="0.7mm" height="1.6mm" shape="rect" />
        <smtpad portHints={["pin6"]} pcbX={0} pcbY={2.2} width="2.6mm" height="1.4mm" shape="rect" />
      </footprint>}
    />

    <pinheader name="J2" pinCount={8} pcbX={-16} pcbY={0} pcbRotation={90} />
    <pinheader name="J3" pinCount={8} pcbX={16} pcbY={0} pcbRotation={90} />
    <pinheader
      name="J4"
      pinCount={3}
      pcbX={0}
      pcbY={13.5}
      pcbPinLabels={{ pin1: "VBUS", pin2: "3V3", pin3: "GND" }}
    />

    <resistor name="R1" resistance="1k" footprint="0402" pcbX={10} pcbY={12} />
    <led name="D1" color="green" footprint="0603" pcbX={14} pcbY={12} />
    <resistor name="R2" resistance="5.1k" footprint="0402" pcbX={-8} pcbY={-7} />
    <resistor name="R3" resistance="5.1k" footprint="0402" pcbX={8} pcbY={-7} />
    <resistor name="R4" resistance="10k" footprint="0402" pcbX={-10} pcbY={12} />
    <capacitor name="C1" capacitance="1uF" footprint="0402" pcbX={-12} pcbY={8} />
    <capacitor name="C2" capacitance="1uF" footprint="0402" pcbX={-12} pcbY={5} />
    <capacitor name="C3" capacitance="100nF" footprint="0402" pcbX={-12} pcbY={2} />

    <trace from="J1.DP" to="net.USB_DP" />
    <trace from="U1.USB_DP" to="net.USB_DP" />
    <trace from="J1.DM" to="net.USB_DM" />
    <trace from="U1.USB_DM" to="net.USB_DM" />

    <trace from="J1.CC1" to="net.USB_CC1" />
    <trace from="R2.pin1" to="net.USB_CC1" />
    <trace from="J1.CC2" to="net.USB_CC2" />
    <trace from="R3.pin1" to="net.USB_CC2" />
    <trace from="R2.pin2" to="net.GND" />
    <trace from="R3.pin2" to="net.GND" />

    <trace from="J1.GND" to="net.GND" />

    <trace from="J1.VBUS" to="net.VBUS" />
    <trace from="J4.pin1" to="net.VBUS" />
    <trace from="J4.pin2" to="net.V3_3" />
    <trace from="J4.pin3" to="net.GND" />

    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.TESTEN" to="net.GND" />

    <trace from="U1.VREG_IN" to="net.V3_3" />
    <trace from="U1.IOVDD1" to="net.V3_3" />
    <trace from="U1.IOVDD2" to="net.V3_3" />
    <trace from="U1.IOVDD3" to="net.V3_3" />
    <trace from="U1.IOVDD4" to="net.V3_3" />
    <trace from="U1.IOVDD5" to="net.V3_3" />
    <trace from="U1.IOVDD6" to="net.V3_3" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />

    <trace from="U1.VREG_VOUT" to="net.CORE_1V1" />
    <trace from="U1.DVDD1" to="net.CORE_1V1" />
    <trace from="U1.DVDD2" to="net.CORE_1V1" />

    <trace from="C1.pin1" to="net.V3_3" />
    <trace from="C1.pin2" to="net.GND" />
    <trace from="C2.pin1" to="net.CORE_1V1" />
    <trace from="C2.pin2" to="net.GND" />
    <trace from="C3.pin1" to="net.V3_3" />
    <trace from="C3.pin2" to="net.GND" />

    <trace from="U1.RUN" to="net.RUN" />
    <trace from="R4.pin1" to="net.RUN" />
    <trace from="R4.pin2" to="net.V3_3" />

    <trace from="U1.GPIO25" to="net.LED_SIG" />
    <trace from="R1.pin1" to="net.LED_SIG" />
    <trace from="R1.pin2" to="net.LED_OUT" />
    <trace from="D1.pin1" to="net.LED_OUT" />
    <trace from="D1.pin2" to="net.GND" />

    <trace from="U1.GPIO0" to="net.GPIO0" />
    <trace from="J2.pin1" to="net.GPIO0" />
    <trace from="U1.GPIO1" to="net.GPIO1" />
    <trace from="J2.pin2" to="net.GPIO1" />
    <trace from="U1.GPIO2" to="net.GPIO2" />
    <trace from="J2.pin3" to="net.GPIO2" />
    <trace from="U1.GPIO3" to="net.GPIO3" />
    <trace from="J2.pin4" to="net.GPIO3" />
    <trace from="U1.GPIO4" to="net.GPIO4" />
    <trace from="J2.pin5" to="net.GPIO4" />
    <trace from="U1.GPIO5" to="net.GPIO5" />
    <trace from="J2.pin6" to="net.GPIO5" />
    <trace from="U1.GPIO6" to="net.GPIO6" />
    <trace from="J2.pin7" to="net.GPIO6" />
    <trace from="U1.GPIO7" to="net.GPIO7" />
    <trace from="J2.pin8" to="net.GPIO7" />

    <trace from="U1.GPIO8" to="net.GPIO8" />
    <trace from="J3.pin1" to="net.GPIO8" />
    <trace from="U1.GPIO9" to="net.GPIO9" />
    <trace from="J3.pin2" to="net.GPIO9" />
    <trace from="U1.GPIO10" to="net.GPIO10" />
    <trace from="J3.pin3" to="net.GPIO10" />
    <trace from="U1.GPIO11" to="net.GPIO11" />
    <trace from="J3.pin4" to="net.GPIO11" />
    <trace from="U1.GPIO12" to="net.GPIO12" />
    <trace from="J3.pin5" to="net.GPIO12" />
    <trace from="U1.GPIO13" to="net.GPIO13" />
    <trace from="J3.pin6" to="net.GPIO13" />
    <trace from="U1.GPIO14" to="net.GPIO14" />
    <trace from="J3.pin7" to="net.GPIO14" />
    <trace from="U1.GPIO15" to="net.GPIO15" />
    <trace from="J3.pin8" to="net.GPIO15" />
  </board>
)