import { DSX321G_12MHz } from "./imports/DSX321G_12MHz"
import { HX_3x4x2_2P_1_6N_TACTILE_SWITCH } from "./imports/HX_3x4x2_2P_1_6N_TACTILE_SWITCH"
import { RP2040 } from "./imports/RP2040"
import { USB_MICRO_XNJ_JB } from "./imports/USB_MICRO_XNJ_JB"
import { W25Q16JVUXIQ } from "./imports/W25Q16JVUXIQ"
import { XC6206P332MR } from "./imports/XC6206P332MR"

export default () => (
  <board width="21mm" height="55mm" layers={2}>
    <USB_MICRO_XNJ_JB name="J3" pcbX={0} pcbY={24.2} pcbRotation={180} />

    <pinheader
      name="J1"
      pinCount={20}
      pcbX={-8.89}
      pcbY={0}
      pcbRotation={90}
      pitch="2.54mm"
      holeDiameter="1mm"
      platedDiameter="1.8mm"
      showSilkscreenPinLabels
      pcbPinLabels={{
        pin1: "GP0",
        pin2: "GP1",
        pin3: "GND",
        pin4: "GP2",
        pin5: "GP3",
        pin6: "GP4",
        pin7: "GP5",
        pin8: "GND",
        pin9: "GP6",
        pin10: "GP7",
        pin11: "GP8",
        pin12: "GP9",
        pin13: "GND",
        pin14: "GP10",
        pin15: "GP11",
        pin16: "GP12",
        pin17: "GP13",
        pin18: "GND",
        pin19: "GP14",
        pin20: "GP15",
      }}
    />

    <pinheader
      name="J2"
      pinCount={20}
      pcbX={8.89}
      pcbY={0}
      pcbRotation={90}
      pitch="2.54mm"
      holeDiameter="1mm"
      platedDiameter="1.8mm"
      showSilkscreenPinLabels
      pcbPinLabels={{
        pin1: "VBUS",
        pin2: "3V3",
        pin3: "GND",
        pin4: "RUN",
        pin5: "GP16",
        pin6: "GP17",
        pin7: "GND",
        pin8: "GP18",
        pin9: "GP19",
        pin10: "GP20",
        pin11: "GP21",
        pin12: "GND",
        pin13: "GP22",
        pin14: "GP26",
        pin15: "GP27",
        pin16: "GP28",
        pin17: "ADC",
        pin18: "GND",
        pin19: "SWD",
        pin20: "SWCLK",
      }}
    />

    <RP2040 name="U1" pcbX={0} pcbY={1.5} />
    <W25Q16JVUXIQ name="U2" pcbX={0} pcbY={-10.5} />
    <DSX321G_12MHz name="Y1" pcbX={-6.5} pcbY={-2.5} pcbRotation={90} />
    <XC6206P332MR name="U3" pcbX={0} pcbY={16.5} pcbRotation={180} />

    <HX_3x4x2_2P_1_6N_TACTILE_SWITCH
      name="SW1"
      pcbX={-4.5}
      pcbY={-20.5}
      pcbRotation={90}
    />
    <HX_3x4x2_2P_1_6N_TACTILE_SWITCH
      name="SW2"
      pcbX={4.5}
      pcbY={-20.5}
      pcbRotation={90}
    />

    <resistor
      name="R1"
      resistance="27ohm"
      footprint="0402"
      pcbX={-1.8}
      pcbY={13}
    />
    <resistor
      name="R2"
      resistance="27ohm"
      footprint="0402"
      pcbX={1.8}
      pcbY={13}
    />
    <resistor
      name="R3"
      resistance="10kohm"
      footprint="0402"
      pcbX={4.8}
      pcbY={6.2}
    />
    <resistor
      name="R4"
      resistance="330ohm"
      footprint="0402"
      pcbX={5.8}
      pcbY={-6.2}
    />

    <capacitor name="C1" capacitance="10uF" footprint="0603" pcbX={-3} pcbY={18} />
    <capacitor name="C2" capacitance="1uF" footprint="0402" pcbX={-2} pcbY={16.5} />
    <capacitor name="C3" capacitance="1uF" footprint="0402" pcbX={2} pcbY={16.5} />
    <capacitor name="C4" capacitance="1uF" footprint="0402" pcbX={3.1} pcbY={6.5} />
    <capacitor name="C5" capacitance="100nF" footprint="0402" pcbX={-5.5} pcbY={6.6} />
    <capacitor name="C6" capacitance="100nF" footprint="0402" pcbX={-5.5} pcbY={3.8} />
    <capacitor name="C7" capacitance="100nF" footprint="0402" pcbX={-5.5} pcbY={1} />
    <capacitor name="C8" capacitance="100nF" footprint="0402" pcbX={-5.5} pcbY={-1.8} />
    <capacitor name="C9" capacitance="100nF" footprint="0402" pcbX={-5.5} pcbY={-4.6} />
    <capacitor name="C10" capacitance="100nF" footprint="0402" pcbX={-5.5} pcbY={-7.4} />
    <capacitor name="C11" capacitance="100nF" footprint="0402" pcbX={5.5} pcbY={6.6} />
    <capacitor name="C12" capacitance="100nF" footprint="0402" pcbX={5.5} pcbY={3.8} />
    <capacitor name="C13" capacitance="100nF" footprint="0402" pcbX={5.5} pcbY={1} />
    <capacitor name="C14" capacitance="12pF" footprint="0402" pcbX={-6.5} pcbY={-5.2} />
    <capacitor name="C15" capacitance="12pF" footprint="0402" pcbX={-6.5} pcbY={0.2} />
    <capacitor name="C16" capacitance="100nF" footprint="0402" pcbX={0} pcbY={-7.7} />
    <capacitor name="C17" capacitance="10uF" footprint="0603" pcbX={3} pcbY={18} />

    <led
      name="LED1"
      color="green"
      footprint="0603"
      pcbX={5.8}
      pcbY={-8}
      pcbRotation={90}
      supplierPartNumbers={{ jlcpcb: ["C84267"] }}
    />

    <trace from="J3.VCC" to="net.VBUS" width="0.4mm" />
    <trace from="J3.GND" to="net.GND" width="0.4mm" />
    <trace from="J3.EH1" to="net.GND" width="0.4mm" />
    <trace from="J3.EH2" to="net.GND" width="0.4mm" />
    <trace from="J3.EH3" to="net.GND" width="0.4mm" />
    <trace from="J3.EH4" to="net.GND" width="0.4mm" />
    <trace from="J3.D_NEG" to="R1.pin1" />
    <trace from="J3.D_POS" to="R2.pin1" />
    <trace from="R1.pin2" to="U1.USB_DM" />
    <trace from="R2.pin2" to="U1.USB_DP" />

    <trace from="U3.VIN" to="net.VBUS" width="0.4mm" />
    <trace from="U3.VSS" to="net.GND" width="0.4mm" />
    <trace from="U3.VOUT" to="net.V3_3" width="0.4mm" />

    <trace from="C1.pos" to="net.VBUS" width="0.4mm" />
    <trace from="C1.neg" to="net.GND" width="0.4mm" />
    <trace from="C2.pos" to="net.VBUS" />
    <trace from="C2.neg" to="net.GND" />
    <trace from="C3.pos" to="net.V3_3" />
    <trace from="C3.neg" to="net.GND" />
    <trace from="C17.pos" to="net.V3_3" width="0.4mm" />
    <trace from="C17.neg" to="net.GND" width="0.4mm" />

    <trace from="U1.VREG_IN" to="net.V3_3" width="0.3mm" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.IOVDD1" to="net.V3_3" />
    <trace from="U1.IOVDD2" to="net.V3_3" />
    <trace from="U1.IOVDD3" to="net.V3_3" />
    <trace from="U1.IOVDD4" to="net.V3_3" />
    <trace from="U1.IOVDD5" to="net.V3_3" />
    <trace from="U1.IOVDD6" to="net.V3_3" />
    <trace from="U1.VREG_VOUT" to="U1.DVDD1" width="0.25mm" />
    <trace from="U1.VREG_VOUT" to="U1.DVDD2" width="0.25mm" />
    <trace from="U1.VREG_VOUT" to="C4.pos" width="0.25mm" />
    <trace from="C4.neg" to="net.GND" />
    <trace from="U1.GND" to="net.GND" width="0.4mm" />
    <trace from="U1.TESTEN" to="net.GND" />

    <trace from="C5.pos" to="net.V3_3" />
    <trace from="C5.neg" to="net.GND" />
    <trace from="C6.pos" to="net.V3_3" />
    <trace from="C6.neg" to="net.GND" />
    <trace from="C7.pos" to="net.V3_3" />
    <trace from="C7.neg" to="net.GND" />
    <trace from="C8.pos" to="net.V3_3" />
    <trace from="C8.neg" to="net.GND" />
    <trace from="C9.pos" to="net.V3_3" />
    <trace from="C9.neg" to="net.GND" />
    <trace from="C10.pos" to="net.V3_3" />
    <trace from="C10.neg" to="net.GND" />
    <trace from="C11.pos" to="net.V3_3" />
    <trace from="C11.neg" to="net.GND" />
    <trace from="C12.pos" to="net.V3_3" />
    <trace from="C12.neg" to="net.GND" />
    <trace from="C13.pos" to="net.V3_3" />
    <trace from="C13.neg" to="net.GND" />

    <trace from="Y1.OSC1" to="U1.XIN" />
    <trace from="Y1.OSC2" to="U1.XOUT" />
    <trace from="Y1.GND1" to="net.GND" />
    <trace from="Y1.GND2" to="net.GND" />
    <trace from="C14.pos" to="U1.XIN" />
    <trace from="C14.neg" to="net.GND" />
    <trace from="C15.pos" to="U1.XOUT" />
    <trace from="C15.neg" to="net.GND" />

    <trace from="U2.VCC" to="net.V3_3" />
    <trace from="U2.GND" to="net.GND" />
    <trace from="U2.EP" to="net.GND" />
    <trace from="C16.pos" to="net.V3_3" />
    <trace from="C16.neg" to="net.GND" />
    <trace from="U1.QSPI_SS" to="U2.CS" />
    <trace from="U1.QSPI_SCLK" to="U2.CLK" />
    <trace from="U1.QSPI_SD0" to="U2.DI" />
    <trace from="U1.QSPI_SD1" to="U2.DO" />
    <trace from="U1.QSPI_SD2" to="U2.IO2" />
    <trace from="U1.QSPI_SD3" to="U2.IO3" />

    <trace from="R3.pin1" to="net.V3_3" />
    <trace from="R3.pin2" to="U1.RUN" />
    <trace from="SW2.pin1" to="U1.RUN" />
    <trace from="SW2.pin2" to="net.GND" />
    <trace from="SW1.pin1" to="U1.QSPI_SS" />
    <trace from="SW1.pin2" to="net.GND" />

    <trace from="U1.GPIO25" to="R4.pin1" />
    <trace from="R4.pin2" to="LED1.anode" />
    <trace from="LED1.cathode" to="net.GND" />

    <trace from="J1.pin1" to="U1.GPIO0" />
    <trace from="J1.pin2" to="U1.GPIO1" />
    <trace from="J1.pin3" to="net.GND" />
    <trace from="J1.pin4" to="U1.GPIO2" />
    <trace from="J1.pin5" to="U1.GPIO3" />
    <trace from="J1.pin6" to="U1.GPIO4" />
    <trace from="J1.pin7" to="U1.GPIO5" />
    <trace from="J1.pin8" to="net.GND" />
    <trace from="J1.pin9" to="U1.GPIO6" />
    <trace from="J1.pin10" to="U1.GPIO7" />
    <trace from="J1.pin11" to="U1.GPIO8" />
    <trace from="J1.pin12" to="U1.GPIO9" />
    <trace from="J1.pin13" to="net.GND" />
    <trace from="J1.pin14" to="U1.GPIO10" />
    <trace from="J1.pin15" to="U1.GPIO11" />
    <trace from="J1.pin16" to="U1.GPIO12" />
    <trace from="J1.pin17" to="U1.GPIO13" />
    <trace from="J1.pin18" to="net.GND" />
    <trace from="J1.pin19" to="U1.GPIO14" />
    <trace from="J1.pin20" to="U1.GPIO15" />

    <trace from="J2.pin1" to="net.VBUS" width="0.4mm" />
    <trace from="J2.pin2" to="net.V3_3" width="0.4mm" />
    <trace from="J2.pin3" to="net.GND" width="0.4mm" />
    <trace from="J2.pin4" to="U1.RUN" />
    <trace from="J2.pin5" to="U1.GPIO16" />
    <trace from="J2.pin6" to="U1.GPIO17" />
    <trace from="J2.pin7" to="net.GND" />
    <trace from="J2.pin8" to="U1.GPIO18" />
    <trace from="J2.pin9" to="U1.GPIO19" />
    <trace from="J2.pin10" to="U1.GPIO20" />
    <trace from="J2.pin11" to="U1.GPIO21" />
    <trace from="J2.pin12" to="net.GND" />
    <trace from="J2.pin13" to="U1.GPIO22" />
    <trace from="J2.pin14" to="U1.GPIO26_ADC0" />
    <trace from="J2.pin15" to="U1.GPIO27_ADC1" />
    <trace from="J2.pin16" to="U1.GPIO28_ADC2" />
    <trace from="J2.pin17" to="U1.ADC_AVDD" />
    <trace from="J2.pin18" to="net.GND" />
    <trace from="J2.pin19" to="U1.SWD" />
    <trace from="J2.pin20" to="U1.SWCLK" />
  </board>
)
