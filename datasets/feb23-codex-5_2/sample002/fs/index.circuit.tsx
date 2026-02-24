export default () => (
  <board width="45mm" height="25mm" routingDisabled>
    <pinheader
      name="J1"
      pinCount={4}
      pitch="2.54mm"
      pcbX={0}
      pcbY={11}
      pcbRotation={180}
      pinLabels={["VBUS", "DP", "DM", "GND"]}
    />

    <chip
      name="U1"
      footprint="QFN-56"
      pcbX={0}
      pcbY={0}
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
        pin24: "USB_DP",
        pin25: "USB_DM",
        pin36: "VDD3V3",
        pin56: "GND",
      }}
    />

    <resistor name="R1" resistance="1k" footprint="0603" pcbX={12} pcbY={-5} />
    <led name="D1" color="green" footprint="0603" pcbX={16} pcbY={-5} />

    <pinheader
      name="J2"
      pinCount={10}
      pitch="2.54mm"
      pcbX={-18}
      pcbY={0}
      pcbRotation={90}
      pinLabels={[
        "GPIO0",
        "GPIO1",
        "GPIO2",
        "GPIO3",
        "GPIO4",
        "GPIO5",
        "VDD3V3",
        "GND",
        "USB_DP",
        "USB_DM",
      ]}
    />

    <pinheader
      name="J3"
      pinCount={8}
      pitch="2.54mm"
      pcbX={18}
      pcbY={0}
      pcbRotation={90}
      pinLabels={["GPIO6", "GPIO7", "GPIO8", "GPIO9", "GPIO10", "GPIO11", "VDD3V3", "GND"]}
    />

    <trace from=".J1 > .VBUS" to="net.VBUS" />
    <trace from=".J1 > .GND" to="net.GND" />
    <trace from=".J1 > .DP" to=".U1 > .USB_DP" />
    <trace from=".J1 > .DM" to=".U1 > .USB_DM" />

    <trace from=".U1 > .GPIO2" to=".R1 > .pin1" />
    <trace from=".R1 > .pin2" to=".D1 > .pin1" />
    <trace from=".D1 > .pin2" to="net.GND" />

    <trace from=".U1 > .GPIO0" to=".J2 > .pin1" />
    <trace from=".U1 > .GPIO1" to=".J2 > .pin2" />
    <trace from=".U1 > .GPIO2" to=".J2 > .pin3" />
    <trace from=".U1 > .GPIO3" to=".J2 > .pin4" />
    <trace from=".U1 > .GPIO4" to=".J2 > .pin5" />
    <trace from=".U1 > .GPIO5" to=".J2 > .pin6" />
    <trace from=".U1 > .VDD3V3" to=".J2 > .pin7" />
    <trace from=".U1 > .GND" to=".J2 > .pin8" />
    <trace from=".U1 > .USB_DP" to=".J2 > .pin9" />
    <trace from=".U1 > .USB_DM" to=".J2 > .pin10" />

    <trace from=".U1 > .VDD3V3" to=".J3 > .pin7" />
    <trace from=".U1 > .GND" to=".J3 > .pin8" />

    <trace from=".U1 > .GPIO6" to=".J3 > .pin1" />
    <trace from=".U1 > .GPIO7" to=".J3 > .pin2" />
    <trace from=".U1 > .GPIO8" to=".J3 > .pin3" />
    <trace from=".U1 > .GPIO9" to=".J3 > .pin4" />
    <trace from=".U1 > .GPIO10" to=".J3 > .pin5" />
    <trace from=".U1 > .GPIO11" to=".J3 > .pin6" />
  </board>
)