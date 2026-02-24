export default () => (
  <board width="55mm" height="25mm" routingDisabled>
    <chip name="U1" footprint="soic8" pcbX={0} pcbY={0} schX={0} schY={0} />
    <chip name="J1" footprint="soic4" pcbX={-20} pcbY={0} schX={-8} schY={0} />

    <resistor name="R1" resistance="1k" footprint="0402" pcbX={12} pcbY={-6} schX={6} schY={-4} />
    <led name="D1" footprint="0603" pcbX={16} pcbY={-6} schX={8} schY={-4} />

    <resistor name="R2" resistance="27" footprint="0402" pcbX={-10} pcbY={-4} schX={-2} schY={2} />
    <resistor name="R3" resistance="27" footprint="0402" pcbX={-10} pcbY={-6} schX={-2} schY={1} />

    <capacitor name="C1" capacitance="100nF" footprint="0402" pcbX={6} pcbY={6} schX={2} schY={4} />
    <capacitor name="C2" capacitance="1uF" footprint="0603" pcbX={10} pcbY={6} schX={4} schY={4} />

    <trace from=".J1 > .pin1" to="net.VBUS" />
    <trace from="net.VBUS" to=".U1 > .pin1" />
    <trace from="net.VBUS" to=".C2 > .pin1" />
    <trace from=".C2 > .pin2" to="net.GND" />

    <trace from=".U1 > .pin2" to="net.GND" />
    <trace from=".J1 > .pin4" to="net.GND" />

    <trace from=".J1 > .pin2" to=".R2 > .pin1" />
    <trace from=".R2 > .pin2" to=".U1 > .pin3" />

    <trace from=".J1 > .pin3" to=".R3 > .pin1" />
    <trace from=".R3 > .pin2" to=".U1 > .pin4" />

    <trace from=".U1 > .pin5" to=".R1 > .pin1" />
    <trace from=".R1 > .pin2" to=".D1 > .pin1" />
    <trace from=".D1 > .pin2" to="net.GND" />

    <trace from=".U1 > .pin1" to=".C1 > .pin1" />
    <trace from=".C1 > .pin2" to="net.GND" />
  </board>
)