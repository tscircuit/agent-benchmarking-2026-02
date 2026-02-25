import React from "react"

export default () => (
  <board width="52mm" height="22mm" routingDisabled>
    <chip
      name="U1"
      manufacturerPartNumber="RP2040"
      footprint="qfn56_w7mm_h7mm_p0.4mm_pw0.2mm_pl0.35mm"
      pcbX={8}
      schX={8}
      pinLabels={{
        pin1: "VBUS_IN",
        pin2: "USB_DN",
        pin3: "USB_DP",
        pin4: "GPIO25",
        pin5: "GND",
      }}
    />

    <chip
      name="J1"
      manufacturerPartNumber="TYPE-C-31-M-12"
      footprint="pinrow6"
      pcbX={-20}
      pcbY={0}
      schX={-18}
      pinLabels={{
        pin1: "VBUS",
        pin2: "DN",
        pin3: "DP",
        pin4: "GND",
      }}
    />

    <resistor
      name="R1"
      resistance="1k"
      footprint="0603"
      pcbX={20}
      pcbY={3}
      schX={20}
      schY={3}
    />

    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX={24}
      pcbY={3}
      schX={24}
      schY={3}
    />

    <trace from=".J1 > .VBUS" to=".U1 > .VBUS_IN" />
    <trace from=".J1 > .DN" to=".U1 > .USB_DN" />
    <trace from=".J1 > .DP" to=".U1 > .USB_DP" />
    <trace from=".J1 > .GND" to=".U1 > .GND" />

    <trace from=".U1 > .GPIO25" to=".R1 > .pin1" />
    <trace from=".R1 > .pin2" to=".D1 > .anode" />
    <trace from=".D1 > .cathode" to=".U1 > .GND" />
  </board>
)