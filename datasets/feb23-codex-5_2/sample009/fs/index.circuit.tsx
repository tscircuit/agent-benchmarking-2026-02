export default () => (
  <board width="50mm" height="30mm" routingDisabled>
    <chip
      name="U1"
      footprint="qfn"
      pcbX={0}
      pcbY={0}
      pinLabels={{
        pin1: "USB_DP",
        pin2: "USB_DM",
        pin3: "GND",
        pin4: "3V3",
        pin5: "GPIO25",
        pin6: "VBUS",
      }}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["USB_DP", "USB_DM", "GPIO25", "VBUS", "3V3", "GND"],
        },
      }}
      connections={{
        USB_DP: "net.USB_DP",
        USB_DM: "net.USB_DM",
        GND: "net.GND",
        "3V3": "net.V3_3",
        GPIO25: "net.LED_IO",
        VBUS: "net.V5",
      }}
    />

    <chip
      name="J1"
      footprint="pinrow6"
      pcbX={-18}
      pcbY={0}
      pinLabels={{
        pin1: "VBUS",
        pin2: "DM",
        pin3: "DP",
        pin4: "ID",
        pin5: "GND",
        pin6: "SHIELD",
      }}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["VBUS", "DM", "DP", "ID", "GND", "SHIELD"],
        },
      }}
      connections={{
        VBUS: "net.V5",
        DM: "net.USB_DM",
        DP: "net.USB_DP",
        GND: "net.GND",
        SHIELD: "net.GND",
      }}
    />

    <resistor
      name="R1"
      resistance="1k"
      footprint="0402"
      pcbX={12}
      pcbY={-6}
      connections={{
        pin1: "net.LED_IO",
        pin2: ".D1 .pin1",
      }}
    />

    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX={16}
      pcbY={-6}
      connections={{
        pin1: ".R1 .pin2",
        pin2: "net.GND",
      }}
    />

    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      pcbX={8}
      pcbY={8}
      connections={{
        pin1: "net.V3_3",
        pin2: "net.GND",
      }}
    />
  </board>
)