import React from "react"
import { sel } from "tscircuit"

export default () => (
  <board width="48mm" height="22mm" routingDisabled>
    <chip
      name="U1"
      footprint="qfn56_w7mm_h7mm_p0.4mm_pw0.2mm_pl0.6mm"
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
      pinLabels={{
        pin1: "GPIO0",
        pin2: "GPIO1",
        pin3: "GPIO2",
        pin4: "GPIO3",
        pin5: "GPIO4",
        pin6: "GPIO5",
        pin7: "GPIO6",
        pin8: "GPIO7",
        pin9: "GPIO8",
        pin10: "GPIO9",
        pin11: "GPIO10",
        pin12: "GPIO11",
        pin13: "GPIO12",
        pin14: "GPIO13",
        pin15: "GPIO14",
        pin16: "GPIO15",
        pin17: "GPIO16",
        pin18: "GPIO17",
        pin19: "GPIO18",
        pin20: "GPIO19",
        pin21: "GPIO20",
        pin22: "GPIO21",
        pin23: "GPIO22",
        pin24: "GPIO23",
        pin25: "GPIO24",
        pin26: "GPIO25",
        pin27: "RUN",
        pin28: "USB_DM",
        pin29: "USB_DP",
        pin30: "VDD",
        pin31: "GND",
        pin32: "VDDIO",
      }}
      connections={{
        GPIO0: sel.J2.pin1,
        GPIO1: sel.J2.pin2,
        GPIO2: sel.J2.pin3,
        GPIO3: sel.J2.pin4,
        GPIO4: sel.J3.pin5,
        GPIO5: sel.J3.pin6,
        GPIO25: sel.J3.pin4,
        RUN: sel.J2.pin5,
        USB_DM: sel.R2.pin2,
        USB_DP: sel.R1.pin2,
        VDD: sel.net.V3_3,
        VDDIO: sel.net.V3_3,
        GND: sel.net.GND,
      }}
    />

    <chip
      name="J1"
      footprint="pinrow5"
      pcbX={-20}
      pcbY={0}
      pcbRotation={90}
      allowOffBoard
      pinLabels={{
        pin1: "VBUS",
        pin2: "DM",
        pin3: "DP",
        pin4: "ID",
        pin5: "GND",
      }}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["VBUS", "DM", "DP", "ID", "GND"],
        },
      }}
      connections={{
        VBUS: sel.net.V5,
        DM: sel.R2.pin1,
        DP: sel.R1.pin1,
        GND: sel.net.GND,
      }}
    />

    <chip
      name="J2"
      footprint="pinrow6"
      pcbX={15}
      pcbY={6}
      pcbRotation={270}
      pinLabels={{
        pin1: "GPIO0",
        pin2: "GPIO1",
        pin3: "GPIO2",
        pin4: "GPIO3",
        pin5: "RUN",
        pin6: "GND",
      }}
      connections={{
        GPIO0: sel.U1.pin1,
        GPIO1: sel.U1.pin2,
        GPIO2: sel.U1.pin3,
        GPIO3: sel.U1.pin4,
        RUN: sel.U1.pin27,
        GND: sel.net.GND,
      }}
    />

    <chip
      name="J3"
      footprint="pinrow6"
      pcbX={15}
      pcbY={-6}
      pcbRotation={270}
      pinLabels={{
        pin1: "VBUS",
        pin2: "V3V3",
        pin3: "GND",
        pin4: "GPIO25",
        pin5: "GPIO4",
        pin6: "GPIO5",
      }}
      connections={{
        VBUS: sel.net.V5,
        V3V3: sel.net.V3_3,
        GND: sel.net.GND,
        GPIO25: sel.U1.pin26,
        GPIO4: sel.U1.pin5,
        GPIO5: sel.U1.pin6,
      }}
    />

    <resistor
      name="R1"
      resistance="22"
      footprint="0402"
      pcbX={-7}
      pcbY={2}
      connections={{
        pin1: sel.J1.pin3,
        pin2: sel.U1.pin29,
      }}
    />
    <resistor
      name="R2"
      resistance="22"
      footprint="0402"
      pcbX={-7}
      pcbY={-2}
      connections={{
        pin1: sel.J1.pin2,
        pin2: sel.U1.pin28,
      }}
    />

    <resistor
      name="R3"
      resistance="1k"
      footprint="0402"
      pcbX={6}
      pcbY={-6}
      connections={{
        pin1: sel.U1.pin26,
        pin2: sel.D1.anode,
      }}
    />
    <led
      name="D1"
      footprint="0402"
      color="green"
      pcbX={9}
      pcbY={-6}
      connections={{
        anode: sel.R3.pin2,
        cathode: sel.net.GND,
      }}
    />

    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      pcbX={2}
      pcbY={6}
      connections={{
        pin1: sel.net.V3_3,
        pin2: sel.net.GND,
      }}
    />

  </board>
)