import { RP2040 } from "./imports/RP2040"
import { TYPE_C_31_M_12 } from "./imports/TYPE_C_31_M_12"

export default () => (
  <board width="120mm" height="60mm" routingDisabled>
    <TYPE_C_31_M_12 name="J1" pcbX="-25mm" pcbY="0mm" pcbRotation={270} />
    <RP2040 name="U1" pcbX="0mm" pcbY="0mm" />

    <pinheader name="J2" pinCount={15} pcbX="-16mm" pcbY="0mm" pcbRotation={90} />
    <pinheader name="J3" pinCount={17} pcbX="16mm" pcbY="0mm" pcbRotation={270} />

    <resistor
      name="R1"
      resistance="1k"
      footprint="0603"
      pcbX="10mm"
      pcbY="6mm"
      pcbRotation={90}
    />
    <led name="D1" color="green" footprint="0603" pcbX="13mm" pcbY="6mm" />

    <trace pcbStraightLine from=".J1 > .pin8" to=".U1 > .pin47" />
    <trace pcbStraightLine from=".J1 > .pin10" to=".U1 > .pin47" />
    <trace pcbStraightLine from=".J1 > .pin9" to=".U1 > .pin46" />
    <trace pcbStraightLine from=".J1 > .pin7" to=".U1 > .pin46" />
    <trace pcbStraightLine from=".J1 > .pin15" to=".U1 > .pin44" />
    <trace pcbStraightLine from=".J1 > .pin16" to=".U1 > .pin44" />
    <trace pcbStraightLine from=".J1 > .pin13" to=".U1 > .pin57" />
    <trace pcbStraightLine from=".J1 > .pin14" to=".U1 > .pin57" />

    <trace pcbStraightLine from=".U1 > .pin45" to=".U1 > .pin1" />
    <trace pcbStraightLine from=".U1 > .pin45" to=".U1 > .pin10" />
    <trace pcbStraightLine from=".U1 > .pin45" to=".U1 > .pin22" />
    <trace pcbStraightLine from=".U1 > .pin45" to=".U1 > .pin33" />
    <trace pcbStraightLine from=".U1 > .pin45" to=".U1 > .pin42" />
    <trace pcbStraightLine from=".U1 > .pin45" to=".U1 > .pin43" />
    <trace pcbStraightLine from=".U1 > .pin45" to=".U1 > .pin49" />
    <trace pcbStraightLine from=".U1 > .pin45" to=".U1 > .pin23" />
    <trace pcbStraightLine from=".U1 > .pin45" to=".U1 > .pin50" />
    <trace pcbStraightLine from=".U1 > .pin45" to=".U1 > .pin48" />

    <trace pcbStraightLine from=".U1 > .pin37" to=".R1 > .pin1" />
    <trace pcbStraightLine from=".R1 > .pin2" to=".D1 > .pin1" />
    <trace pcbStraightLine from=".D1 > .pin2" to=".U1 > .pin57" />

    <trace pcbStraightLine from=".J2 > .pin1" to=".U1 > .pin2" />
    <trace pcbStraightLine from=".J2 > .pin2" to=".U1 > .pin3" />
    <trace pcbStraightLine from=".J2 > .pin3" to=".U1 > .pin4" />
    <trace pcbStraightLine from=".J2 > .pin4" to=".U1 > .pin5" />
    <trace pcbStraightLine from=".J2 > .pin5" to=".U1 > .pin6" />
    <trace pcbStraightLine from=".J2 > .pin6" to=".U1 > .pin7" />
    <trace pcbStraightLine from=".J2 > .pin7" to=".U1 > .pin8" />
    <trace pcbStraightLine from=".J2 > .pin8" to=".U1 > .pin9" />
    <trace pcbStraightLine from=".J2 > .pin9" to=".U1 > .pin11" />
    <trace pcbStraightLine from=".J2 > .pin10" to=".U1 > .pin12" />
    <trace pcbStraightLine from=".J2 > .pin11" to=".U1 > .pin13" />
    <trace pcbStraightLine from=".J2 > .pin12" to=".U1 > .pin14" />
    <trace pcbStraightLine from=".J2 > .pin13" to=".U1 > .pin15" />
    <trace pcbStraightLine from=".J2 > .pin14" to=".U1 > .pin16" />
    <trace pcbStraightLine from=".J2 > .pin15" to=".U1 > .pin17" />

    <trace pcbStraightLine from=".J3 > .pin1" to=".U1 > .pin18" />
    <trace pcbStraightLine from=".J3 > .pin2" to=".U1 > .pin27" />
    <trace pcbStraightLine from=".J3 > .pin3" to=".U1 > .pin28" />
    <trace pcbStraightLine from=".J3 > .pin4" to=".U1 > .pin29" />
    <trace pcbStraightLine from=".J3 > .pin5" to=".U1 > .pin30" />
    <trace pcbStraightLine from=".J3 > .pin6" to=".U1 > .pin31" />
    <trace pcbStraightLine from=".J3 > .pin7" to=".U1 > .pin32" />
    <trace pcbStraightLine from=".J3 > .pin8" to=".U1 > .pin34" />
    <trace pcbStraightLine from=".J3 > .pin9" to=".U1 > .pin35" />
    <trace pcbStraightLine from=".J3 > .pin10" to=".U1 > .pin36" />
    <trace pcbStraightLine from=".J3 > .pin11" to=".U1 > .pin37" />
    <trace pcbStraightLine from=".J3 > .pin12" to=".U1 > .pin38" />
    <trace pcbStraightLine from=".J3 > .pin13" to=".U1 > .pin39" />
    <trace pcbStraightLine from=".J3 > .pin14" to=".U1 > .pin40" />
    <trace pcbStraightLine from=".J3 > .pin15" to=".U1 > .pin41" />
    <trace pcbStraightLine from=".J3 > .pin16" to=".U1 > .pin45" />
    <trace pcbStraightLine from=".J3 > .pin17" to=".U1 > .pin57" />
  </board>
)