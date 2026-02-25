export default () => (
  <board width="52mm" height="24mm" routingDisabled>
    <chip
      name="USB1"
      manufacturerPartNumber="USB-Micro-B"
      pcbX={-22}
      pcbY={0}
      schX={-18}
      schY={0}
      pinLabels={{
        1: "VBUS",
        2: "USB_DM",
        3: "USB_DP",
        4: "ID",
        5: "GND",
      }}
    />

    <chip
      name="U1"
      manufacturerPartNumber="RP2040"
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
      pinLabels={{
        1: "GPIO0",
        2: "GPIO1",
        23: "USB_DM",
        24: "USB_DP",
        36: "3V3",
        57: "GND",
      }}
    />

    <resistor
      name="R_LED"
      resistance="1k"
      footprint="0603"
      pcbX={9}
      pcbY={-2}
      schX={9}
      schY={-2}
    />

    <led
      name="LED1"
      color="green"
      footprint="0603"
      pcbX={14}
      pcbY={-2}
      schX={14}
      schY={-2}
    />

    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0603"
      pcbX={6}
      pcbY={3}
      schX={6}
      schY={3}
    />

    <pinheader
      name="J1"
      pinCount={8}
      pitch="2.54mm"
      pcbX={20}
      pcbY={0}
      schX={20}
      schY={0}
      pinLabels={["3V3", "GND", "GPIO0", "GPIO1", "USB_DM", "USB_DP", "VBUS", "GND"]}
    />

    <trace from=".USB1 > .VBUS" to="net.VBUS" />
    <trace from=".USB1 > .USB_DM" to=".U1 > .USB_DM" />
    <trace from=".USB1 > .USB_DP" to=".U1 > .USB_DP" />
    <trace from=".USB1 > .GND" to="net.GND" />

    <trace from=".U1 > .GPIO0" to=".R_LED > .pin1" />
    <trace from=".R_LED > .pin2" to=".LED1 > .pin1" />
    <trace from=".LED1 > .pin2" to="net.GND" />

    <trace from=".U1 > .3V3" to=".C1 > .pin1" />
    <trace from=".C1 > .pin2" to="net.GND" />

    <trace from=".J1 > .pin1" to=".U1 > .3V3" />
    <trace from=".J1 > .pin2" to="net.GND" />
    <trace from=".J1 > .pin3" to=".U1 > .GPIO0" />
    <trace from=".J1 > .pin4" to=".U1 > .GPIO1" />
    <trace from=".J1 > .pin5" to=".U1 > .USB_DM" />
    <trace from=".J1 > .pin6" to=".U1 > .USB_DP" />
    <trace from=".J1 > .pin7" to="net.VBUS" />
    <trace from=".J1 > .pin8" to="net.GND" />
  </board>
)