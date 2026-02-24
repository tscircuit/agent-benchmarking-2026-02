import React from "react"

export default () => (
  <board width="60mm" height="25mm" routingDisabled>
    <chip
      name="J1"
      footprint={[
        {
          type: "pcb_smtpad",
          x: -1.5,
          y: 0,
          width: 0.6,
          height: 1.6,
          portHints: ["pin1"],
        },
        {
          type: "pcb_smtpad",
          x: -0.5,
          y: 0,
          width: 0.6,
          height: 1.6,
          portHints: ["pin2"],
        },
        {
          type: "pcb_smtpad",
          x: 0.5,
          y: 0,
          width: 0.6,
          height: 1.6,
          portHints: ["pin3"],
        },
        {
          type: "pcb_smtpad",
          x: 1.5,
          y: 0,
          width: 0.6,
          height: 1.6,
          portHints: ["pin4"],
        },
      ]}
      pcbX={-25}
      pcbY={0}
      pcbRotation={90}
      pinLabels={{
        pin1: "VBUS",
        pin2: "USB_DM",
        pin3: "USB_DP",
        pin4: "GND",
      }}
    />

    <chip
      name="U1"
      footprint="qfn"
      pcbX={0}
      pcbY={0}
      pinLabels={{
        pin1: "GND",
        pin2: "V3V3",
        pin3: "USB_DP",
        pin4: "USB_DM",
        pin5: "GPIO25",
      }}
    />

    <resistor name="R1" resistance="330" footprint="0603" pcbX={12} pcbY={-6} />
    <led name="D1" footprint="0603" color="green" pcbX={18} pcbY={-6} />

    <pinheader
      name="J2"
      pinCount={6}
      pitch="2.54mm"
      pcbX={22}
      pcbY={6}
      pcbRotation={90}
      pcbOrientation="vertical"
      pinLabels={["VBUS", "GND", "V3V3", "USB_DP", "USB_DM", "GPIO25"]}
    />

    <trace from=".J1 > .pin1" to="net.VBUS" />
    <trace from=".J1 > .pin2" to="net.USB_DM" />
    <trace from=".J1 > .pin3" to="net.USB_DP" />
    <trace from=".J1 > .pin4" to="net.GND" />

    <trace from=".U1 > .pin1" to="net.GND" />
    <trace from=".U1 > .pin2" to="net.V3V3" />
    <trace from=".U1 > .pin3" to="net.USB_DP" />
    <trace from=".U1 > .pin4" to="net.USB_DM" />
    <trace from=".U1 > .pin5" to="net.GPIO25" />

    <trace from=".R1 > .pin1" to="net.GPIO25" />
    <trace from=".R1 > .pin2" to=".D1 > .anode" />
    <trace from=".D1 > .cathode" to="net.GND" />

    <trace from=".J2 > .pin1" to="net.VBUS" />
    <trace from=".J2 > .pin2" to="net.GND" />
    <trace from=".J2 > .pin3" to="net.V3V3" />
    <trace from=".J2 > .pin4" to="net.USB_DP" />
    <trace from=".J2 > .pin5" to="net.USB_DM" />
    <trace from=".J2 > .pin6" to="net.GPIO25" />
  </board>
)