import { RP2040 } from "./imports/RP2040"
import { W25Q16JVUXIQ } from "./imports/W25Q16JVUXIQ"
import { TYPE_C_16PIN_2MD_073_ } from "./imports/TYPE_C_16PIN_2MD_073_"
import { ME6211C33M5G_N } from "./imports/ME6211C33M5G_N"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"
import { XL_1608SYGC_06 } from "./imports/XL_1608SYGC_06"

export default () => (
  <board width="30mm" height="50mm" layers={2}>
    <TYPE_C_16PIN_2MD_073_
      name="J1"
      pcbX={0}
      pcbY={-19.1}
      schX={0}
      schY={-16}
    />

    <RP2040
      name="U1"
      pcbX={0}
      pcbY={0}
      pcbRotation={180}
      schX={0}
      schY={0}
    />

    <W25Q16JVUXIQ
      name="U2"
      pcbX={7.8}
      pcbY={-5.2}
      pcbRotation={90}
      schX={16}
      schY={0}
    />

    <ME6211C33M5G_N
      name="U3"
      pcbX={-7.5}
      pcbY={-10.5}
      pcbRotation={180}
      schX={-18}
      schY={-10}
    />

    <X322512MSB4SI
      name="Y1"
      pcbX={0}
      pcbY={7}
      schX={-17}
      schY={7}
    />

    <XL_1608SYGC_06
      name="D1"
      pcbX={5.2}
      pcbY={14.5}
      pcbRotation={180}
      schX={19}
      schY={-11}
    />

    <pinheader
      name="J2"
      pinCount={15}
      pinLabels={[
        "GP0",
        "GP1",
        "GP2",
        "GP3",
        "GP4",
        "GP5",
        "GP6",
        "GP7",
        "GP8",
        "GP9",
        "GP10",
        "GP11",
        "GP12",
        "GP13",
        "GP14",
      ]}
      pcbX={-12.7}
      pcbY={-6.47}
      pcbRotation={90}
      schX={-30}
      schY={0}
      schFacingDirection="right"
    />

    <pinheader
      name="J3"
      pinCount={15}
      pinLabels={[
        "GP15",
        "GP16",
        "GP17",
        "GP18",
        "GP19",
        "GP20",
        "GP21",
        "GP22",
        "GP23",
        "GP24",
        "GP25",
        "GP26",
        "GP27",
        "GP28",
        "GP29",
      ]}
      pcbX={12.7}
      pcbY={-6.47}
      pcbRotation={90}
      schX={31}
      schY={0}
      schFacingDirection="left"
    />

    <pinheader
      name="J4"
      pinCount={6}
      pinLabels={["3V3", "GND", "VBUS", "RUN", "SWD", "SWCLK"]}
      pcbX={0}
      pcbY={20.32}
      schX={0}
      schY={18}
      schFacingDirection="up"
    />

    <resistor name="R1" resistance="5.1k" footprint="0402" pcbX={-1.8} pcbY={-13.4} schX={-10} schY={-18} />
    <resistor name="R2" resistance="5.1k" footprint="0402" pcbX={1.8} pcbY={-13.4} schX={-7} schY={-18} />
    <resistor name="R3" resistance="27" footprint="0402" pcbX={1.8} pcbY={-10.2} pcbRotation={90} schX={8} schY={-14} />
    <resistor name="R4" resistance="27" footprint="0402" pcbX={3.6} pcbY={-10.2} pcbRotation={90} schX={11} schY={-14} />
    <resistor name="R5" resistance="10k" footprint="0402" pcbX={3.6} pcbY={6.2} pcbRotation={90} schX={8} schY={11} />
    <resistor name="R6" resistance="1k" footprint="0402" pcbX={-3.6} pcbY={6.2} pcbRotation={90} schX={-8} schY={11} />
    <resistor name="R7" resistance="1k" footprint="0402" pcbX={2.8} pcbY={14.5} pcbRotation={90} schX={23} schY={-11} />

    <capacitor name="C1" capacitance="10uF" footprint="0603" pcbX={-4.8} pcbY={-10.4} schX={-24} schY={-12} />
    <capacitor name="C2" capacitance="1uF" footprint="0402" pcbX={-5.4} pcbY={-7.8} schX={-24} schY={-8} />
    <capacitor name="C3" capacitance="1uF" footprint="0402" pcbX={5.2} pcbY={-6.8} schX={6} schY={8} />
    <capacitor name="C4" capacitance="100nF" footprint="0402" pcbX={-5.3} pcbY={2.8} schX={-8} schY={4} />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX={-5.3} pcbY={-1.2} schX={-8} schY={1} />
    <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX={-5.3} pcbY={-5.2} schX={-8} schY={-2} />
    <capacitor name="C7" capacitance="100nF" footprint="0402" pcbX={5.3} pcbY={2.8} schX={8} schY={4} />
    <capacitor name="C8" capacitance="100nF" footprint="0402" pcbX={5.3} pcbY={-1.2} schX={8} schY={1} />
    <capacitor name="C9" capacitance="100nF" footprint="0402" pcbX={5.3} pcbY={-5.2} schX={8} schY={-2} />
    <capacitor name="C10" capacitance="10pF" footprint="0402" pcbX={-3.4} pcbY={9.8} schX={-20} schY={9} />
    <capacitor name="C11" capacitance="10pF" footprint="0402" pcbX={3.4} pcbY={9.8} schX={-14} schY={9} />

    <trace from="J1.GND1" to="net.GND" />
    <trace from="J1.GND2" to="net.GND" />
    <trace from="J1.SHELL1" to="net.GND" />
    <trace from="J1.SHELL2" to="net.GND" />
    <trace from="J1.pin13_alt1" to="net.GND" />
    <trace from="J1.pin14_alt1" to="net.GND" />
    <trace from="J1.VBUS1" to="net.VBUS_5V" />
    <trace from="J1.VBUS2" to="net.VBUS_5V" />
    <trace from="J1.CC1" to="R1.pin1" />
    <trace from="R1.pin2" to="net.GND" />
    <trace from="J1.CC2" to="R2.pin1" />
    <trace from="R2.pin2" to="net.GND" />
    <trace from="J1.DP1" to="net.USB_DP_CONN" />
    <trace from="J1.DP2" to="net.USB_DP_CONN" />
    <trace from="J1.DN1" to="net.USB_DM_CONN" />
    <trace from="J1.DN2" to="net.USB_DM_CONN" />
    <trace from="net.USB_DP_CONN" to="R3.pin1" />
    <trace from="R3.pin2" to="U1.USB_DP" />
    <trace from="net.USB_DM_CONN" to="R4.pin1" />
    <trace from="R4.pin2" to="U1.USB_DM" />

    <trace from="net.VBUS_5V" to="U3.VIN" />
    <trace from="U3.VSS" to="net.GND" />
    <trace from="U3.CE" to="net.VBUS_5V" />
    <trace from="U3.VOUT" to="net.V3_3" />
    <trace from="net.VBUS_5V" to="C1.pin1" />
    <trace from="C1.pin2" to="net.GND" />
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
    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.VREG_VOUT" to="net.CORE_1V1" />
    <trace from="U1.DVDD1" to="net.CORE_1V1" />
    <trace from="U1.DVDD2" to="net.CORE_1V1" />
    <trace from="net.CORE_1V1" to="C3.pin1" />
    <trace from="C3.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C4.pin1" />
    <trace from="C4.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C5.pin1" />
    <trace from="C5.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C6.pin1" />
    <trace from="C6.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C7.pin1" />
    <trace from="C7.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C8.pin1" />
    <trace from="C8.pin2" to="net.GND" />
    <trace from="net.V3_3" to="C9.pin1" />
    <trace from="C9.pin2" to="net.GND" />

    <trace from="U1.XIN" to="Y1.OSC1" />
    <trace from="U1.XOUT" to="Y1.OSC2" />
    <trace from="Y1.GND1" to="net.GND" />
    <trace from="Y1.GND2" to="net.GND" />
    <trace from="U1.XIN" to="C10.pin1" />
    <trace from="C10.pin2" to="net.GND" />
    <trace from="U1.XOUT" to="C11.pin1" />
    <trace from="C11.pin2" to="net.GND" />

    <trace from="U1.RUN" to="net.RUN" />
    <trace from="net.RUN" to="R5.pin1" />
    <trace from="R5.pin2" to="net.V3_3" />
    <trace from="U1.TESTEN" to="R6.pin1" />
    <trace from="R6.pin2" to="net.GND" />

    <trace from="U2.VCC" to="net.V3_3" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="U2.EP" to="net.GND" />
    <trace from="U2.CS" to="U1.QSPI_SS" />
    <trace from="U2.CLK" to="U1.QSPI_SCLK" />
    <trace from="U2.pin5" to="U1.QSPI_SD0" />
    <trace from="U2.pin2" to="U1.QSPI_SD1" />
    <trace from="U2.pin3" to="U1.QSPI_SD2" />
    <trace from="U2.pin7" to="U1.QSPI_SD3" />

    <trace from="U1.GPIO25" to="R7.pin1" />
    <trace from="R7.pin2" to="D1.A" />
    <trace from="D1.K" to="net.GND" />

    <trace from="U1.GPIO0" to="J2.pin1" />
    <trace from="U1.GPIO1" to="J2.pin2" />
    <trace from="U1.GPIO2" to="J2.pin3" />
    <trace from="U1.GPIO3" to="J2.pin4" />
    <trace from="U1.GPIO4" to="J2.pin5" />
    <trace from="U1.GPIO5" to="J2.pin6" />
    <trace from="U1.GPIO6" to="J2.pin7" />
    <trace from="U1.GPIO7" to="J2.pin8" />
    <trace from="U1.GPIO8" to="J2.pin9" />
    <trace from="U1.GPIO9" to="J2.pin10" />
    <trace from="U1.GPIO10" to="J2.pin11" />
    <trace from="U1.GPIO11" to="J2.pin12" />
    <trace from="U1.GPIO12" to="J2.pin13" />
    <trace from="U1.GPIO13" to="J2.pin14" />
    <trace from="U1.GPIO14" to="J2.pin15" />

    <trace from="U1.GPIO15" to="J3.pin1" />
    <trace from="U1.GPIO16" to="J3.pin2" />
    <trace from="U1.GPIO17" to="J3.pin3" />
    <trace from="U1.GPIO18" to="J3.pin4" />
    <trace from="U1.GPIO19" to="J3.pin5" />
    <trace from="U1.GPIO20" to="J3.pin6" />
    <trace from="U1.GPIO21" to="J3.pin7" />
    <trace from="U1.GPIO22" to="J3.pin8" />
    <trace from="U1.GPIO23" to="J3.pin9" />
    <trace from="U1.GPIO24" to="J3.pin10" />
    <trace from="U1.GPIO25" to="J3.pin11" />
    <trace from="U1.GPIO26_ADC0" to="J3.pin12" />
    <trace from="U1.GPIO27_ADC1" to="J3.pin13" />
    <trace from="U1.GPIO28_ADC2" to="J3.pin14" />
    <trace from="U1.GPIO29_ADC3" to="J3.pin15" />

    <trace from="net.V3_3" to="J4.pin1" />
    <trace from="net.GND" to="J4.pin2" />
    <trace from="net.VBUS_5V" to="J4.pin3" />
    <trace from="net.RUN" to="J4.pin4" />
    <trace from="U1.SWD" to="J4.pin5" />
    <trace from="U1.SWCLK" to="J4.pin6" />
  </board>
)
