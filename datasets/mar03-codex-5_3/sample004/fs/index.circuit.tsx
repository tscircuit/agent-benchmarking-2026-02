import { RP2040 } from "./imports/RP2040"
import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12"

export default () => (
  <board width="36mm" height="24mm" routingDisabled>
    <TYPE_C_31_M_12
      name="J1"
      pcbX={-13}
      pcbY={0}
      pcbRotation={90}
      connections={{
        A4B9: "net.VBUS",
        B4A9: "net.VBUS",
        A6: "net.USB_DP",
        B6: "net.USB_DP",
        A7: "net.USB_DM",
        B7: "net.USB_DM",
        A5: "net.CC1",
        B5: "net.CC2",
        A1B12: "net.GND",
        B1A12: "net.GND",
        EH1: "net.GND",
        EH2: "net.GND",
        EH3: "net.GND",
        EH4: "net.GND",
      }}
    />

    <RP2040
      name="U1"
      pcbX={2}
      pcbY={0}
      connections={{
        VREG_IN: "net.VBUS",
        VREG_VOUT: "net.V3_3",
        IOVDD1: "net.V3_3",
        IOVDD2: "net.V3_3",
        IOVDD3: "net.V3_3",
        IOVDD4: "net.V3_3",
        IOVDD5: "net.V3_3",
        IOVDD6: "net.V3_3",
        DVDD1: "net.V3_3",
        DVDD2: "net.V3_3",
        USB_VDD: "net.V3_3",
        ADC_AVDD: "net.V3_3",
        USB_DP: "net.USB_DP",
        USB_DM: "net.USB_DM",
        GPIO25: "net.LED_DRV",
        GND: "net.GND",
      }}
    />

    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0402"
      pcbX={6}
      pcbY={5}
      supplierPartNumbers={{ jlcpcb: ["C52923"] }}
      connections={{
        pin1: "net.V3_3",
        pin2: "net.GND",
      }}
    />

    <capacitor
      name="C2"
      capacitance="100nF"
      footprint="0402"
      pcbX={8}
      pcbY={3}
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      connections={{
        pin1: "net.V3_3",
        pin2: "net.GND",
      }}
    />

    <resistor
      name="R1"
      resistance="1k"
      footprint="0402"
      pcbX={10}
      pcbY={-6}
      supplierPartNumbers={{ jlcpcb: ["C11702"] }}
      connections={{
        pin1: "net.LED_DRV",
        pin2: "net.LED",
      }}
    />

    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX={12}
      pcbY={-6}
      supplierPartNumbers={{ jlcpcb: ["C72043"] }}
      connections={{
        pin1: "net.LED",
        pin2: "net.GND",
      }}
    />

    <resistor
      name="R2"
      resistance="5.1k"
      footprint="0402"
      pcbX={-8.5}
      pcbY={6.5}
      supplierPartNumbers={{ jlcpcb: ["C25905"] }}
      connections={{
        pin1: "net.CC1",
        pin2: "net.GND",
      }}
    />

    <resistor
      name="R3"
      resistance="5.1k"
      footprint="0402"
      pcbX={-8.5}
      pcbY={8.5}
      supplierPartNumbers={{ jlcpcb: ["C25905"] }}
      connections={{
        pin1: "net.CC2",
        pin2: "net.GND",
      }}
    />
  </board>
)