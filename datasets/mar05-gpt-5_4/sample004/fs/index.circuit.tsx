import React from "react"
import { sel } from "tscircuit"

import { A_0603WAF1001T5E } from "./imports/A_0603WAF1001T5E"
import { CL05B104KO5NNNC } from "./imports/CL05B104KO5NNNC"
import { NCD0805C1 } from "./imports/NCD0805C1"
import { RJ_060_1USB2_0_2 } from "./imports/RJ_060_1USB2_0_2"
import { RP2040 } from "./imports/RP2040"

const nets = {
  GND: "net.GND",
  VBUS: "net.VBUS",
  V3_3: "net.V3_3",
  USB_DP: "net.USB_DP",
  USB_DM: "net.USB_DM",
  LED_CTRL: "net.LED_CTRL",
} as const

const usbPinLabels = {
  pin1: "GND",
  pin2: "SHLD",
  pin3: "CC2",
  pin4: "CC1",
  pin5: "DM",
  pin6: "DP",
  pin7: "VBUS",
} as const

const rp2040PinArrangement = {
  leftSide: {
    direction: "top-to-bottom" as const,
    pins: ["GPIO0", "GPIO1", "GPIO24", "GPIO25", "RUN", "SWCLK", "SWD"],
  },
  rightSide: {
    direction: "top-to-bottom" as const,
    pins: ["USB_DP", "USB_DM", "VREG_IN", "VREG_VOUT", "USB_VDD", "ADC_AVDD"],
  },
  topSide: {
    direction: "left-to-right" as const,
    pins: ["IOVDD1", "IOVDD2", "IOVDD3", "IOVDD4", "IOVDD5", "IOVDD6"],
  },
  bottomSide: {
    direction: "left-to-right" as const,
    pins: ["DVDD1", "DVDD2", "GND"],
  },
}

export default () => (
  <board width="54mm" height="46mm" routingDisabled>
    <chip
      name="J1"
      footprint="pinrow7"
      pcbX={-18}
      pcbY={0}
      schX={-9}
      schY={0}
      pinLabels={usbPinLabels}
      schPinArrangement={{
        rightSide: {
          direction: "bottom-to-top",
          pins: ["VBUS", "DP", "DM", "CC1", "CC2", "SHLD", "GND"],
        },
      }}
      connections={{
        GND: nets.GND,
        SHLD: nets.GND,
        VBUS: nets.VBUS,
      }}
    />

    <RP2040
      name="U1"
      pcbX={3}
      pcbY={-5}
      schX={0}
      schY={0}
      schPinArrangement={rp2040PinArrangement}
      connections={{
        IOVDD1: nets.V3_3,
        IOVDD2: nets.V3_3,
        IOVDD3: nets.V3_3,
        IOVDD4: nets.V3_3,
        IOVDD5: nets.V3_3,
        IOVDD6: nets.V3_3,
        ADC_AVDD: nets.V3_3,
        USB_VDD: nets.V3_3,
        VREG_IN: nets.VBUS,
        VREG_VOUT: nets.V3_3,
        DVDD1: nets.V3_3,
        DVDD2: nets.V3_3,
        GND: nets.GND,
        USB_DP: nets.USB_DP,
        USB_DM: nets.USB_DM,
        GPIO25: nets.LED_CTRL,
        RUN: nets.V3_3,
      }}
    />

    <A_0603WAF1001T5E
      name="R1"
      pcbX={-12}
      pcbY={10}
      schX={-4}
      schY={-5}
      schRotation="90deg"
      connections={{
        pin1: sel.J1.CC1,
        pin2: nets.GND,
      }}
    />

    <A_0603WAF1001T5E
      name="R2"
      pcbX={-8.5}
      pcbY={10}
      schX={-6}
      schY={-5}
      schRotation="90deg"
      connections={{
        pin1: sel.J1.CC2,
        pin2: nets.GND,
      }}
    />

    <A_0603WAF1001T5E
      name="R3"
      pcbX={11}
      pcbY={-8}
      schX={6}
      schY={4}
      connections={{
        pin1: sel.U1.GPIO25,
        pin2: sel.D1.pin2,
      }}
    />

    <NCD0805C1
      name="D1"
      pcbX={15}
      pcbY={-8}
      schX={10}
      schY={4}
      connections={{
        pin2: sel.R3.pin2,
        pin1: nets.GND,
      }}
    />

    <CL05B104KO5NNNC
      name="C1"
      pcbX={17}
      pcbY={-10}
      schX={6}
      schY={-3}
      schRotation="90deg"
      connections={{
        pin1: nets.V3_3,
        pin2: nets.GND,
      }}
    />

    <CL05B104KO5NNNC
      name="C2"
      pcbX={17}
      pcbY={-6.5}
      schX={8}
      schY={-3}
      schRotation="90deg"
      connections={{
        pin1: nets.VBUS,
        pin2: nets.GND,
      }}
    />

    <RJ_060_1USB2_0_2
      name="H1"
      pcbX={14}
      pcbY={12}
      schX={0}
      schY={10}
      schRotation="180deg"
      schPinArrangement={{
        topSide: {
          direction: "left-to-right",
          pins: ["P12", "P11", "P10", "P9"],
        },
        bottomSide: {
          direction: "left-to-right",
          pins: ["P1", "P2", "P3", "P4", "P5", "P6", "P7", "P8"],
        },
      }}
    />
  </board>
)