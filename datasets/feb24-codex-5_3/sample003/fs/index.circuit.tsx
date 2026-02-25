export default () => (
  <board width="36mm" height="26mm" routingDisabled>
    <chip
      name="U1"
      footprint="qfn56"
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
      pinLabels={{
        pin1: "IOVDD",
        pin2: "GPIO0",
        pin3: "GPIO1",
        pin4: "GPIO2",
        pin5: "GPIO3",
        pin24: "USB_DM",
        pin25: "USB_DP",
        pin29: "GPIO25",
        pin39: "VSYS",
        pin44: "VBUS",
        pin48: "GND",
      }}
      connections={{
        IOVDD: "net.VBUS",
        VSYS: "net.VBUS",
        VBUS: "net.VBUS",
        GND: "net.GND",
        USB_DM: "J1.DM",
        USB_DP: "J1.DP",
        GPIO25: "R1.pin1",
        GPIO0: "H1.GPIO0",
        GPIO1: "H1.GPIO1",
        GPIO2: "H1.GPIO2",
        GPIO3: "H1.GPIO3",
      }}
    />

    <chip
      name="J1"
      footprint="pinrow4"
      pcbX={0}
      pcbY={10}
      pcbRotation={180}
      schX={-9}
      schY={0}
      pinLabels={{
        pin1: "VBUS",
        pin2: "DM",
        pin3: "DP",
        pin4: "GND",
      }}
      connections={{
        VBUS: "net.VBUS",
        GND: "net.GND",
        DP: "U1.USB_DP",
        DM: "U1.USB_DM",
      }}
    />

    <resistor
      name="R1"
      resistance="1k"
      footprint="0402"
      pcbX={8}
      pcbY={-2}
      schX={7}
      schY={2}
      connections={{
        pin1: "U1.GPIO25",
        pin2: "D1.pin1",
      }}
    />

    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX={11}
      pcbY={-2}
      schX={10}
      schY={2}
      connections={{
        pin1: "R1.pin2",
        pin2: "net.GND",
      }}
    />

    <chip
      name="H1"
      footprint="pinrow8"
      pcbX={-15}
      pcbY={0}
      pcbRotation={90}
      schX={-8}
      schY={-8}
      pinLabels={{
        pin1: "GPIO0",
        pin2: "GPIO1",
        pin3: "GPIO2",
        pin4: "GPIO3",
        pin7: "VBUS",
        pin8: "GND",
      }}
      connections={{
        GPIO0: "U1.GPIO0",
        GPIO1: "U1.GPIO1",
        GPIO2: "U1.GPIO2",
        GPIO3: "U1.GPIO3",
        VBUS: "net.VBUS",
        GND: "net.GND",
      }}
    />
  </board>
)