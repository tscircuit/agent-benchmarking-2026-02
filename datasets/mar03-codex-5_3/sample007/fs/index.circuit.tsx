import React from "react"
import { RP2040 } from "./imports/RP2040"
import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12"

export default () => (
  <board width="42mm" height="24mm" routingDisabled>
    <TYPE_C_31_M_12
      name="USBC1"
      pcbX={0}
      pcbY={-9.1}
      pcbRotation={180}
      schX={-8}
      schY={0}
      connections={{
        A6: "net.USB_DP",
        B6: "net.USB_DP",
        A7: "net.USB_DM",
        B7: "net.USB_DM",
        A1B12: "net.GND",
        B1A12: "net.GND",
        EH1: "net.GND",
        EH2: "net.GND",
        EH3: "net.GND",
        EH4: "net.GND",
        A4B9: "net.VBUS",
        B4A9: "net.VBUS",
      }}
    />

    <RP2040
      name="U1"
      pcbX={0}
      pcbY={1}
      schX={6}
      schY={0}
      connections={{
        USB_DP: "net.USB_DP",
        USB_DM: "net.USB_DM",
        IOVDD1: "net.V3_3",
        IOVDD2: "net.V3_3",
        IOVDD3: "net.V3_3",
        IOVDD4: "net.V3_3",
        IOVDD5: "net.V3_3",
        IOVDD6: "net.V3_3",
        USB_VDD: "net.V3_3",
        ADC_AVDD: "net.V3_3",
        VREG_IN: "net.V3_3",
        VREG_VOUT: "net.VCORE_1V1",
        DVDD1: "net.VCORE_1V1",
        DVDD2: "net.VCORE_1V1",
        GND: "net.GND",
        GPIO25: "net.LED_CTRL",
      }}
    />

    <led
      name="D1"
      color="green"
      footprint="0603"
      supplierPartNumbers={{ jlcpcb: ["C72043"] }}
      pcbX={14}
      pcbY={1}
      schX={14}
      schY={2}
      connections={{
        pin1: "net.LED_ANODE",
        pin2: "net.GND",
      }}
    />
    <resistor
      name="R1"
      resistance="1k"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C11702"] }}
      pcbX={10}
      pcbY={1}
      schX={11}
      schY={2}
      connections={{
        pin1: "net.LED_CTRL",
        pin2: "net.LED_ANODE",
      }}
    />

    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0402"
      supplierPartNumbers={{ jlcpcb: ["C52923"] }}
      pcbX={4.5}
      pcbY={6}
      schX={6}
      schY={4}
      connections={{
        pin1: "net.VCORE_1V1",
        pin2: "net.GND",
      }}
    />
  </board>
)