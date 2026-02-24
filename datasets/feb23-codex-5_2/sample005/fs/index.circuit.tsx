export default () => (
  <board width="45mm" height="25mm" routingDisabled>
    <chip
      name="U1"
      footprint="qfn56_w7_h7_p0.4mm"
      pcbX={0}
      pcbY={0}
      connections={{
        pin1: "net.V3V3",
        pin2: "net.GND",
        pin10: "net.USB_DP",
        pin11: "net.USB_DM",
        pin20: "net.GPIO25",
      }}
    />

    <chip
      name="J1"
      footprint="pinrow4"
      pcbX={-16}
      pcbY={0}
      pcbRotation={90}
      connections={{
        pin1: "net.GND",
        pin2: "net.USB_DP",
        pin3: "net.USB_DM",
        pin4: "net.VBUS",
      }}
    />

    <chip
      name="J2"
      footprint="pinrow10"
      pcbX={14}
      pcbY={-7}
      pcbRotation={90}
      connections={{
        pin1: "net.V3V3",
        pin2: "net.GND",
        pin3: "net.GPIO25",
        pin4: "net.USB_DP",
        pin5: "net.USB_DM",
      }}
    />

    <chip
      name="J3"
      footprint="pinrow10"
      pcbX={14}
      pcbY={7}
      pcbRotation={90}
      connections={{
        pin1: "net.VBUS",
        pin2: "net.GND",
      }}
    />

    <resistor
      name="R1"
      resistance="1k"
      footprint="0402"
      pcbX={8}
      pcbY={8}
    />
    <led name="LED1" color="green" footprint="0603" pcbX={12} pcbY={8} />

    <trace from=".J1 > .pin1" to="net.GND" />
    <trace from=".J1 > .pin2" to="net.USB_DP" />
    <trace from=".J1 > .pin3" to="net.USB_DM" />
    <trace from=".J1 > .pin4" to="net.VBUS" />

    <trace from=".U1 > .pin1" to="net.V3V3" />
    <trace from=".U1 > .pin2" to="net.GND" />
    <trace from=".U1 > .pin10" to="net.USB_DP" />
    <trace from=".U1 > .pin11" to="net.USB_DM" />
    <trace from=".U1 > .pin20" to=".R1 > .pin1" />

    <trace from=".R1 > .pin2" to=".LED1 > .pin1" />
    <trace from=".LED1 > .pin2" to="net.GND" />

    <trace from=".J2 > .pin1" to="net.V3V3" />
    <trace from=".J2 > .pin2" to="net.GND" />
    <trace from=".J2 > .pin3" to="net.GPIO25" />
    <trace from=".J2 > .pin4" to="net.USB_DP" />
    <trace from=".J2 > .pin5" to="net.USB_DM" />
    <trace from=".J3 > .pin1" to="net.VBUS" />
    <trace from=".J3 > .pin2" to="net.GND" />
  </board>
)