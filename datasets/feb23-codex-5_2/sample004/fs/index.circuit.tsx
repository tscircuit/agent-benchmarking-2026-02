import React from "react"

export default () => (
  <board width="60mm" height="25mm" routingDisabled>
    <chip
      name="U1"
      footprint="qfn56"
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
      pinLabels={{
        pin1: "GND",
        pin2: "VDD33",
        pin24: "USB_DM",
        pin25: "USB_DP",
        pin30: "GPIO0",
        pin31: "GPIO1",
        pin32: "GPIO2",
        pin33: "GPIO3",
        pin34: "GPIO4",
        pin35: "GPIO5",
        pin36: "GPIO6",
        pin37: "GPIO7",
        pin50: "GPIO25",
      }}
      connections={{
        GND: "net.GND",
        VDD33: "net.VDD33",
        USB_DM: "net.USB_DM",
        USB_DP: "net.USB_DP",
        GPIO0: "net.GPIO0",
        GPIO1: "net.GPIO1",
        GPIO2: "net.GPIO2",
        GPIO3: "net.GPIO3",
        GPIO4: "net.GPIO4",
        GPIO5: "net.GPIO5",
        GPIO6: "net.GPIO6",
        GPIO7: "net.GPIO7",
        GPIO25: "net.GPIO25",
      }}
    />

    <pinheader
      name="J1"
      pinCount={4}
      pcbX={-22}
      pcbY={0}
      schX={-10}
      schY={0}
      schFacingDirection="left"
      connections={{
        pin1: "net.VBUS",
        pin2: "net.USB_DM",
        pin3: "net.USB_DP",
        pin4: "net.GND",
      }}
    />

    <resistor
      name="R1"
      resistance="330"
      footprint="0603"
      pcbX={10}
      pcbY={-6}
      schX={6}
      schY={-6}
    />
    <led
      name="D1"
      footprint="0603"
      pcbX={14}
      pcbY={-6}
      schX={9}
      schY={-6}
      connections={{
        pin2: "net.GND",
      }}
    />
    <trace from=".R1 > .pin2" to=".D1 > .pin1" />
    <trace from=".R1 > .pin1" to="net.GPIO25" />

    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0603"
      pcbX={6}
      pcbY={8}
      schX={4}
      schY={6}
      connections={{
        pin1: "net.VDD33",
        pin2: "net.GND",
      }}
    />

    <pinheader
      name="J2"
      pinCount={10}
      pcbX={22}
      pcbY={0}
      schX={10}
      schY={0}
      schFacingDirection="right"
      connections={{
        pin1: "net.GND",
        pin2: "net.VDD33",
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

    <pinheader
      name="J3"
      pinCount={6}
      pcbX={-6}
      pcbY={-10}
      schX={-2}
      schY={-8}
      schFacingDirection="down"
      connections={{
        pin1: "net.VBUS",
        pin2: "net.GND",
        pin3: "net.USB_DM",
        pin4: "net.USB_DP",
        pin5: "net.GPIO25",
        pin6: "net.GND",
      }}
    />
  </board>
)