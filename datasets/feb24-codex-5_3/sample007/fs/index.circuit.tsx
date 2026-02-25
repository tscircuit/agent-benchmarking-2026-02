export default () => (
  <board width="52mm" height="21mm" routingDisabled>
    <chip
      name="U1"
      manufacturerPartNumber="RP2040"
      footprint="qfn64_w10mm_h10mm_p0.5mm_pw0.25mm_pl0.875mm"
      pcbX={0}
      pcbY={0}
      connections={{
        pin1: "net.USB_DP",
        pin2: "net.USB_DM",
        pin3: "net.V3V3",
        pin4: "net.GND",
        pin5: "net.LED_GPIO",
        pin10: "J2.pin1",
        pin11: "J2.pin2",
        pin12: "J2.pin3",
        pin13: "J2.pin4",
        pin14: "J2.pin5",
        pin15: "J2.pin6",
        pin16: "J2.pin7",
        pin17: "J2.pin8",
        pin18: "J2.pin9",
        pin19: "J2.pin10",
        pin46: "J3.pin1",
        pin47: "J3.pin2",
        pin48: "J3.pin3",
        pin49: "J3.pin4",
        pin50: "J3.pin5",
        pin51: "J3.pin6",
        pin52: "J3.pin7",
        pin53: "J3.pin8",
        pin54: "J3.pin9",
        pin55: "J3.pin10",
      }}
    />

    <chip
      name="J1"
      manufacturerPartNumber="USB-C"
      symbol="usbc"
      footprint="pinrow6_rows1_p2.54mm_id1mm_od1.5mm_male"
      pcbX={-21}
      pcbY={0}
      pcbRotation={90}
      connections={{
        pin1: "net.GND",
        pin2: "net.USB_DP",
        pin3: "net.USB_DM",
        pin4: "net.V5_USB",
        pin5: "net.V5_USB",
      }}
    />

    <resistor
      name="R1"
      resistance="1k"
      footprint="0402"
      pcbX={11}
      pcbY={-7}
      connections={{ pin1: "net.LED_GPIO", pin2: "D1.anode" }}
    />

    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX={16}
      pcbY={-7}
      connections={{ cathode: "net.GND" }}
    />

    <capacitor
      name="C1"
      capacitance="100nF"
      footprint="0402"
      pcbX={8}
      pcbY={6}
      connections={{ pin1: "net.V3V3", pin2: "net.GND" }}
    />

    <pinheader
      name="J2"
      pinCount={10}
      pitch="2.54mm"
      pcbX={19}
      pcbY={0}
      pcbRotation={90}
    />

    <pinheader
      name="J3"
      pinCount={10}
      pitch="2.54mm"
      pcbX={-8}
      pcbY={0}
      pcbRotation={90}
    />
  </board>
)