import { sel } from "tscircuit"

export default () => (
  <board width="52mm" height="22mm" routingDisabled>
    <chip
      name="U1"
      manufacturerPartNumber="RP2040"
      footprint="qfn56"
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
      pinLabels={{
        pin1: "GND",
        pin6: "IOVDD",
        pin7: "GPIO0",
        pin8: "GPIO1",
        pin23: "DM",
        pin24: "DP",
        pin36: "RESET",
        pin48: "GPIO25",
        pin49: "TESTEN",
        pin50: "XIN",
        pin51: "XOUT",
        pin56: "VDD",
      }}
      connections={{
        GND: sel.net.GND,
        IOVDD: sel.net.V3_3,
        VDD: sel.net.V3_3,
        TESTEN: sel.net.V3_3,
        RESET: sel.R2.pin2,
        GPIO25: sel.R1.pin1,
        DM: sel.U2.DM,
        DP: sel.U2.DP,
      }}
    />

    <chip
      name="U2"
      manufacturerPartNumber="USB-C"
      footprint="pinrow4"
      pcbX={-20}
      pcbY={0}
      schX={-8}
      schY={0}
      pinLabels={{
        pin1: "VBUS",
        pin2: "DM",
        pin3: "DP",
        pin4: "GND",
      }}
      connections={{
        VBUS: sel.net.V5,
        DM: sel.U1.DM,
        DP: sel.U1.DP,
        GND: sel.net.GND,
      }}
    />

    <resistor
      name="R1"
      resistance="1k"
      footprint="0402"
      pcbX={8}
      pcbY={5}
      schX={6}
      schY={2}
      connections={{
        pin1: sel.U1.GPIO25,
        pin2: sel.LED1.anode,
      }}
    />
    <led
      name="LED1"
      footprint="0603"
      color="green"
      pcbX={12}
      pcbY={5}
      schX={9}
      schY={2}
      connections={{
        cathode: sel.net.GND,
      }}
    />

    <resistor
      name="R2"
      resistance="10k"
      footprint="0402"
      pcbX={6}
      pcbY={-5}
      schX={5}
      schY={-2}
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.U1.RESET,
      }}
    />

    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      pcbX={2}
      pcbY={-6}
      schX={2}
      schY={-3}
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net.GND,
      }}
    />

    <chip
      name="U3"
      manufacturerPartNumber="2x4 Breakout Header"
      footprint="pinrow8"
      pcbX={20}
      pcbY={0}
      schX={10}
      schY={0}
      pinLabels={{
        pin1: "V3_3",
        pin2: "GND",
        pin3: "GPIO0",
        pin4: "GPIO1",
        pin5: "GPIO25",
        pin6: "RESET",
        pin7: "DP",
        pin8: "DM",
      }}
      connections={{
        V3_3: sel.net.V3_3,
        GND: sel.net.GND,
        GPIO0: sel.U1.GPIO0,
        GPIO1: sel.U1.GPIO1,
        GPIO25: sel.U1.GPIO25,
        RESET: sel.U1.RESET,
        DP: sel.U1.DP,
        DM: sel.U1.DM,
      }}
    />
  </board>
)