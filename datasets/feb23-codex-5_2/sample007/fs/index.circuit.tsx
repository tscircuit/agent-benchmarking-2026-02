export default () => (
  <board width="60mm" height="25mm" routingDisabled>
    <pinheader
      name="J1"
      pinCount={4}
      pitch="2.54mm"
      rightAngle
      pinLabels={{
        1: "VBUS",
        2: "USB_DN",
        3: "USB_DP",
        4: "GND",
      }}
      pcbX={-25}
      pcbY={0}
      schX={-8}
      schY={0}
    />

    <chip
      name="U1"
      footprint="QFN-56"
      pinLabels={{
        1: "GND",
        2: "USB_DN",
        3: "USB_DP",
        4: "RUN",
        5: "V3V3",
        6: "GPIO25",
        7: "SWDIO",
        8: "SWCLK",
      }}
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
    />

    <pinheader
      name="J2"
      pinCount={6}
      pitch="2.54mm"
      pinLabels={{
        1: "VBUS",
        2: "V3V3",
        3: "GND",
        4: "SWDIO",
        5: "SWCLK",
        6: "GPIO25",
      }}
      pcbX={22}
      pcbY={0}
      schX={8}
      schY={0}
    />

    <resistor name="R1" resistance="1k" footprint="0603" pcbX={10} pcbY={8} />
    <led name="D1" footprint="0603" pcbX={15} pcbY={8} />
    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0603"
      pcbX={6}
      pcbY={-8}
    />

    <trace from=".J1 > .pin1" to="net.VBUS" />
    <trace from=".J1 > .pin2" to=".U1 > .pin2" />
    <trace from=".J1 > .pin3" to=".U1 > .pin3" />
    <trace from=".J1 > .pin4" to="net.GND" />

    <trace from=".U1 > .pin1" to="net.GND" />
    <trace from=".U1 > .pin5" to="net.V3V3" />
    <trace from=".U1 > .pin7" to="net.SWDIO" />
    <trace from=".U1 > .pin8" to="net.SWCLK" />
    <trace from=".U1 > .pin6" to="net.GPIO25" />

    <trace from=".J2 > .pin1" to="net.VBUS" />
    <trace from=".J2 > .pin2" to="net.V3V3" />
    <trace from=".J2 > .pin3" to="net.GND" />
    <trace from=".J2 > .pin4" to="net.SWDIO" />
    <trace from=".J2 > .pin5" to="net.SWCLK" />
    <trace from=".J2 > .pin6" to="net.GPIO25" />

    <trace from="net.V3V3" to=".R1 > .pin1" />
    <trace from=".R1 > .pin2" to=".D1 > .pin1" />
    <trace from=".D1 > .pin2" to="net.GPIO25" />

    <trace from=".C1 > .pin1" to="net.V3V3" />
    <trace from=".C1 > .pin2" to="net.GND" />
  </board>
)