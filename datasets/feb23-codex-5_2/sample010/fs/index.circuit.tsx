import React from "react"

export default () => (
  <board width="45mm" height="30mm" routingDisabled>
    <chip name="U1" footprint="qfn-56" pcbX={0} pcbY={0} />
    <chip name="J1" footprint="soic4" pcbX={-17} pcbY={0} pcbRotation={90} />

    <resistor name="R1" resistance="1k" footprint="0402" pcbX={12} pcbY={8} />
    <led name="D1" color="green" footprint="0603" pcbX={16} pcbY={8} />
    <capacitor name="C1" capacitance="100nF" footprint="0402" pcbX={4} pcbY={10} />

    <trace from=".J1 > .pin1" to="net.VBUS" />
    <trace from=".J1 > .pin2" to="net.USB_DM" />
    <trace from=".J1 > .pin3" to="net.USB_DP" />
    <trace from=".J1 > .pin4" to="net.GND" />

    <trace from="net.USB_DM" to=".U1 > .pin1" />
    <trace from="net.USB_DP" to=".U1 > .pin2" />
    <trace from="net.VBUS" to=".U1 > .pin3" />
    <trace from="net.GND" to=".U1 > .pin4" />
    <trace from=".U1 > .pin5" to="net.V3V3" />

    <trace from="net.V3V3" to=".R1 > .pin1" />
    <trace from=".R1 > .pin2" to=".D1 > .pin1" />
    <trace from=".D1 > .pin2" to="net.GND" />

    <trace from="net.V3V3" to=".C1 > .pin1" />
    <trace from=".C1 > .pin2" to="net.GND" />
  </board>
)