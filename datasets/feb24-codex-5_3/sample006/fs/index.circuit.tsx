export default () => (
  <board width="52mm" height="24mm" routingDisabled>
    <chip
      name="U1"
      manufacturerPartNumber="RP2040"
      footprint="qfn56"
      pcbX={0}
      pcbY={0}
    />

    <chip
      name="J1"
      manufacturerPartNumber="USB-C"
      footprint="pinrow6"
      pcbX={0}
      pcbY={-9.5}
      pcbRotation={180}
    />

    <pinheader
      name="J2"
      pinCount={8}
      pcbX={-22}
      pcbY={0}
      pcbRotation={90}
      showSilkscreenPinLabels
    />

    <pinheader
      name="J3"
      pinCount={8}
      pcbX={22}
      pcbY={0}
      pcbRotation={270}
      showSilkscreenPinLabels
    />

    <resistor
      name="R1"
      resistance="1k"
      footprint="0402"
      pcbX={12}
      pcbY={6}
      pcbRotation={90}
    />
    <led name="D1" color="green" footprint="0402" pcbX={16} pcbY={6} />

    <trace from=".U1 > .pin1" to=".J2 > .pin1" />
    <trace from=".U1 > .pin2" to=".J2 > .pin2" />
    <trace from=".U1 > .pin3" to=".J2 > .pin3" />
    <trace from=".U1 > .pin4" to=".J2 > .pin4" />
    <trace from=".U1 > .pin5" to=".J2 > .pin5" />
    <trace from=".U1 > .pin6" to=".J2 > .pin6" />
    <trace from=".U1 > .pin7" to=".J2 > .pin7" />
    <trace from=".U1 > .pin8" to=".J2 > .pin8" />

    <trace from=".U1 > .pin9" to=".J3 > .pin1" />
    <trace from=".U1 > .pin10" to=".J3 > .pin2" />
    <trace from=".U1 > .pin11" to=".J3 > .pin3" />
    <trace from=".U1 > .pin12" to=".J3 > .pin4" />
    <trace from=".U1 > .pin13" to=".J3 > .pin5" />
    <trace from=".U1 > .pin14" to=".J3 > .pin6" />
    <trace from=".U1 > .pin15" to=".J3 > .pin7" />
    <trace from=".U1 > .pin16" to=".J3 > .pin8" />

    <trace from=".J1 > .pin1" to="net.VBUS" />
    <trace from=".J1 > .pin2" to=".U1 > .pin40" />
    <trace from=".J1 > .pin3" to=".U1 > .pin41" />
    <trace from=".J1 > .pin6" to="net.GND" />

    <trace from=".U1 > .pin29" to=".R1 > .pin1" />
    <trace from=".R1 > .pin2" to=".D1 > .pos" />
    <trace from=".D1 > .neg" to="net.GND" />
  </board>
)