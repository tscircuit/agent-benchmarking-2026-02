import { ME6211C33M5G_N } from "./imports/ME6211C33M5G_N"
import { RP2040 } from "./imports/RP2040"
import { TYPE_C_16PIN_2MD_073_ } from "./imports/TYPE_C_16PIN_2MD_073_"
import { W25Q16JVSSIQ } from "./imports/W25Q16JVSSIQ"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"

export default function RP2040Breakout() {
  return (
    <board width="70mm" height="40mm" layers={2}>
      <TYPE_C_16PIN_2MD_073_
        name="J1"
        pcbX={0}
        pcbY={-14.2}
        schX={-14}
        schY={-2}
        shouldBeOnEdgeOfBoard
      />

      <ME6211C33M5G_N
        name="U2"
        pcbX={-18}
        pcbY={-6}
        pcbRotation={90}
        schX={-8}
        schY={5}
      />

      <RP2040
        name="U1"
        pcbX={0}
        pcbY={2}
        pcbRotation={180}
        schX={0}
        schY={0}
      />

      <W25Q16JVSSIQ
        name="U3"
        pcbX={0}
        pcbY={12}
        pcbRotation={180}
        schX={8}
        schY={0}
      />

      <X322512MSB4SI
        name="Y1"
        pcbX={-11.5}
        pcbY={6.5}
        schX={-8}
        schY={-6}
      />

      <pinheader
        name="J2"
        pinCount={8}
        pcbX={-30}
        pcbY={0}
        pcbOrientation="vertical"
        schX={-20}
        schY={2}
        pinLabels={{
          pin1: "VBUS",
          pin2: "GND",
          pin3: "GP0",
          pin4: "GP1",
          pin5: "GP2",
          pin6: "GP3",
          pin7: "SWCLK",
          pin8: "SWD",
        }}
      />

      <pinheader
        name="J3"
        pinCount={8}
        pcbX={30}
        pcbY={0}
        pcbOrientation="vertical"
        schX={20}
        schY={2}
        pinLabels={{
          pin1: "V3_3",
          pin2: "GND",
          pin3: "GP16",
          pin4: "GP17",
          pin5: "GP18",
          pin6: "GP19",
          pin7: "GP20",
          pin8: "RUN",
        }}
      />

      <led
        name="D1"
        color="green"
        footprint="0603"
        pcbX={23}
        pcbY={10}
        pcbRotation={90}
        schX={14}
        schY={-6}
      />

      <resistor
        name="R1"
        resistance="5.1k"
        footprint="0402"
        pcbX={-4}
        pcbY={-8}
        schX={-16}
        schY={-6}
      />
      <resistor
        name="R2"
        resistance="5.1k"
        footprint="0402"
        pcbX={4}
        pcbY={-8}
        schX={-16}
        schY={-8}
      />
      <resistor
        name="R3"
        resistance="10k"
        footprint="0402"
        pcbX={8}
        pcbY={8}
        schX={6}
        schY={-8}
      />
      <resistor
        name="R4"
        resistance="1k"
        footprint="0402"
        pcbX={20}
        pcbY={10}
        pcbRotation={90}
        schX={12}
        schY={-6}
      />

      <capacitor
        name="C1"
        capacitance="10uF"
        footprint="0603"
        pcbX={-22}
        pcbY={-6}
        schX={-10}
        schY={8}
      />
      <capacitor
        name="C2"
        capacitance="1uF"
        footprint="0603"
        pcbX={-14.5}
        pcbY={-6}
        schX={-6}
        schY={8}
      />
      <capacitor
        name="C3"
        capacitance="1uF"
        footprint="0402"
        pcbX={5}
        pcbY={8}
        schX={4}
        schY={-10}
      />
      <capacitor
        name="C4"
        capacitance="100nF"
        footprint="0402"
        pcbX={-4}
        pcbY={10}
        schX={-2}
        schY={9}
      />
      <capacitor
        name="C5"
        capacitance="100nF"
        footprint="0402"
        pcbX={-8}
        pcbY={0}
        schX={0}
        schY={9}
      />
      <capacitor
        name="C6"
        capacitance="100nF"
        footprint="0402"
        pcbX={8}
        pcbY={0}
        schX={2}
        schY={9}
      />
      <capacitor
        name="C9"
        capacitance="12pF"
        footprint="0402"
        pcbX={-15}
        pcbY={6.5}
        schX={-12}
        schY={-10}
      />
      <capacitor
        name="C10"
        capacitance="12pF"
        footprint="0402"
        pcbX={-8}
        pcbY={6.5}
        schX={-10}
        schY={-10}
      />

      <trace from="J1.VBUS1" to="net.VBUS" />
      <trace from="J1.VBUS2" to="net.VBUS" />
      <trace from="J1.GND1" to="net.GND" />
      <trace from="J1.GND2" to="net.GND" />
      <trace from="J1.SHELL1" to="net.GND" />
      <trace from="J1.SHELL2" to="net.GND" />
      <trace from="J1.DP1" to="U1.USB_DP" />
      <trace from="J1.DP2" to="U1.USB_DP" />
      <trace from="J1.DN1" to="U1.USB_DM" />
      <trace from="J1.DN2" to="U1.USB_DM" />
      <trace from="J1.CC1" to="R1.pin1" />
      <trace from="R1.pin2" to="net.GND" />
      <trace from="J1.CC2" to="R2.pin1" />
      <trace from="R2.pin2" to="net.GND" />

      <trace from="net.VBUS" to="U2.VIN" />
      <trace from="net.VBUS" to="C1.pin1" />
      <trace from="C1.pin2" to="net.GND" />
      <trace from="U2.VSS" to="net.GND" />
      <trace from="U2.CE" to="net.V3_3" />
      <trace from="U2.VOUT" to="net.V3_3" />
      <trace from="net.V3_3" to="C2.pin1" />
      <trace from="C2.pin2" to="net.GND" />

      <trace from="U1.VREG_IN" to="net.V3_3" />
      <trace from="U1.USB_VDD" to="net.V3_3" />
      <trace from="U1.ADC_AVDD" to="net.V3_3" />
      <trace from="U1.IOVDD1" to="net.V3_3" />
      <trace from="U1.IOVDD2" to="net.V3_3" />
      <trace from="U1.IOVDD3" to="net.V3_3" />
      <trace from="U1.IOVDD4" to="net.V3_3" />
      <trace from="U1.IOVDD5" to="net.V3_3" />
      <trace from="U1.IOVDD6" to="net.V3_3" />

      <trace from="U1.VREG_VOUT" to="net.VREG_1V1" />
      <trace from="U1.DVDD1" to="net.VREG_1V1" />
      <trace from="U1.DVDD2" to="net.VREG_1V1" />
      <trace from="net.VREG_1V1" to="C3.pin1" />
      <trace from="C3.pin2" to="net.GND" />

      <trace from="U1.GND" to="net.GND" />
      <trace from="U1.TESTEN" to="net.GND" />

      <trace from="net.V3_3" to="R3.pin1" />
      <trace from="R3.pin2" to="U1.RUN" />

      <trace from="U1.XIN" to="Y1.OSC1" />
      <trace from="U1.XOUT" to="Y1.OSC2" />
      <trace from="Y1.GND1" to="net.GND" />
      <trace from="Y1.GND2" to="net.GND" />
      <trace from="U1.XIN" to="C9.pin1" />
      <trace from="C9.pin2" to="net.GND" />
      <trace from="U1.XOUT" to="C10.pin1" />
      <trace from="C10.pin2" to="net.GND" />

      <trace from="net.V3_3" to="U3.VCC" />
      <trace from="U3.GND" to="net.GND" />
      <trace from="U1.QSPI_SS" to="U3.pin1" />
      <trace from="U1.QSPI_SD1" to="U3.pin2" />
      <trace from="U1.QSPI_SD2" to="U3.IO2" />
      <trace from="U1.QSPI_SD0" to="U3.pin5" />
      <trace from="U1.QSPI_SCLK" to="U3.CLK" />
      <trace from="U1.QSPI_SD3" to="U3.IO3" />
      <trace from="net.V3_3" to="C4.pin1" />
      <trace from="C4.pin2" to="net.GND" />

      <trace from="net.V3_3" to="C5.pin1" />
      <trace from="C5.pin2" to="net.GND" />
      <trace from="net.V3_3" to="C6.pin1" />
      <trace from="C6.pin2" to="net.GND" />
      <trace from="U1.GPIO25" to="R4.pin1" />
      <trace from="R4.pin2" to="D1.pin1" />
      <trace from="D1.pin2" to="net.GND" />

      <trace from="J2.VBUS" to="net.VBUS" />
      <trace from="J2.GND" to="net.GND" />
      <trace from="J2.GP0" to="U1.GPIO0" />
      <trace from="J2.GP1" to="U1.GPIO1" />
      <trace from="J2.GP2" to="U1.GPIO2" />
      <trace from="J2.GP3" to="U1.GPIO3" />
      <trace from="J2.SWCLK" to="U1.SWCLK" />
      <trace from="J2.SWD" to="U1.SWD" />

      <trace from="J3.V3_3" to="net.V3_3" />
      <trace from="J3.GND" to="net.GND" />
      <trace from="J3.GP16" to="U1.GPIO16" />
      <trace from="J3.GP17" to="U1.GPIO17" />
      <trace from="J3.GP18" to="U1.GPIO18" />
      <trace from="J3.GP19" to="U1.GPIO19" />
      <trace from="J3.GP20" to="U1.GPIO20" />
      <trace from="J3.RUN" to="U1.RUN" />
    </board>
  )
}
