export default () => (
  <board width="50mm" height="25mm" routingDisabled>
    <chip
      name="U1"
      footprint="QFN-56-1EP_7x7mm_P0.4mm_EP3.2x3.2mm"
      pcbX={0}
      pcbY={0}
      schX={0}
      schY={0}
    />

    <pinheader
      name="J1"
      pinCount={6}
      pitch="0.5mm"
      pcbX={-20}
      pcbY={0}
      pcbRotation={90}
      schX={-8}
      schY={0}
    />

    <resistor
      name="R1"
      resistance="1k"
      footprint="0402"
      pcbX={8}
      pcbY={4}
      schX={7}
      schY={3}
    />

    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX={11}
      pcbY={4}
      schX={10}
      schY={3}
    />

    <pinheader
      name="J2"
      pinCount={6}
      pitch="2.54mm"
      pcbX={-17}
      pcbY={0}
      pcbRotation={90}
      schX={-12}
      schY={-6}
    />

    <pinheader
      name="J3"
      pinCount={6}
      pitch="2.54mm"
      pcbX={17}
      pcbY={0}
      pcbRotation={90}
      schX={12}
      schY={-6}
    />

    <trace from=".R1 > .pin1" to=".U1 > .pin25" />
    <trace from=".R1 > .pin2" to=".D1 > .anode" />
    <trace from=".D1 > .cathode" to="net.GND" />

    <trace from=".J1 > .pin1" to="net.VBUS" />
    <trace from=".J1 > .pin2" to=".U1 > .pin46" />
    <trace from=".J1 > .pin3" to=".U1 > .pin47" />
    <trace from=".J1 > .pin4" to="net.GND" />
    <trace from=".J1 > .pin5" to="net.GND" />
    <trace from=".J1 > .pin6" to="net.GND" />

    <trace from=".J2 > .pin1" to="net.GND" />
    <trace from=".J2 > .pin2" to="net.VBUS" />
    <trace from=".J2 > .pin3" to=".U1 > .pin2" />
    <trace from=".J2 > .pin4" to=".U1 > .pin3" />
    <trace from=".J2 > .pin5" to=".U1 > .pin4" />
    <trace from=".J2 > .pin6" to=".U1 > .pin5" />
    <trace from=".J3 > .pin1" to="net.GND" />
    <trace from=".J3 > .pin2" to="net.VBUS" />
    <trace from=".J3 > .pin3" to=".U1 > .pin3" />
    <trace from=".J3 > .pin4" to=".U1 > .pin24" />
    <trace from=".J3 > .pin5" to=".U1 > .pin23" />
    <trace from=".J3 > .pin6" to=".U1 > .pin22" />
  </board>
)