import React from "react"

export default () => (
  <board width="52mm" height="22mm" routingDisabled>
    <chip
      name="U1"
      footprint="qfn56_p0.4mm"
      pcbX={0}
      pcbY={0}
      connections={{
        pin1: "net.V3_3",
        pin8: "net.GND",
        pin40: "net.USB_DP",
        pin41: "net.USB_DM",
        pin44: "net.GPIO25",
      }}
    />

    <chip
      name="J1"
      footprint="dip16_w0.3in"
      pcbX={-18}
      pcbY={0}
      pcbRotation={90}
      pinLabels={{
        pin1: "VBUS",
        pin2: "D_MINUS",
        pin3: "D_PLUS",
        pin4: "GND",
        pin5: "CC1",
        pin6: "CC2",
      }}
      connections={{
        VBUS: "net.VBUS",
        D_MINUS: "net.USB_DM",
        D_PLUS: "net.USB_DP",
        GND: "net.GND",
        CC1: "net.CC1",
        CC2: "net.CC2",
      }}
    />

    <resistor
      name="RCC1"
      resistance="5.1k"
      footprint="0402"
      pcbX={-12}
      pcbY={4}
      connections={{ pin1: "net.CC1", pin2: "net.GND" }}
    />
    <resistor
      name="RCC2"
      resistance="5.1k"
      footprint="0402"
      pcbX={-12}
      pcbY={-4}
      connections={{ pin1: "net.CC2", pin2: "net.GND" }}
    />

    <resistor
      name="RLED"
      resistance="1k"
      footprint="0402"
      pcbX={10}
      pcbY={5}
      connections={{ pin1: "net.GPIO25", pin2: "net.LED_A" }}
    />
    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX={14}
      pcbY={5}
      connections={{ anode: "net.LED_A", cathode: "net.GND" }}
    />

    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      pcbX={-2}
      pcbY={6}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />

    <pinheader
      name="J2"
      pinCount={10}
      pitch="2.54mm"
      pcbX={20}
      pcbY={0}
      pcbRotation={90}
      connections={{
        pin1: "net.V3_3",
        pin2: "net.GND",
        pin3: "net.GPIO0",
        pin4: "net.GPIO1",
        pin5: "net.GPIO2",
        pin6: "net.GPIO3",
        pin7: "net.GPIO4",
        pin8: "net.GPIO5",
        pin9: "net.GPIO6",
        pin10: "net.GPIO7",
      }}
    />
  </board>
)