import { RP2040 } from "./imports/RP2040"
import { HX_USB3_1TYPE_C_16P_FS } from "./imports/HX_USB3_1TYPE_C_16P_FS"
import { W25Q16JVSSIQ } from "./imports/W25Q16JVSSIQ"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"
import { XC6206P332MR_G } from "./imports/XC6206P332MR_G"

export default () => (
  <board width="28mm" height="56mm" layers={2}>
    <HX_USB3_1TYPE_C_16P_FS
      name="J1"
      pcbX={0}
      pcbY={24.5}
      pcbRotation="180deg"
      schX={-9}
      schY={0}
    />

    <resistor
      name="R1"
      resistance="5.1k"
      footprint="0402"
      pcbX={-4}
      pcbY={18.2}
      schX={-6.8}
      schY={-2.5}
      schRotation="270deg"
      connections={{ pin1: "J1.A5", pin2: "net.GND" }}
    />
    <resistor
      name="R2"
      resistance="5.1k"
      footprint="0402"
      pcbX={4}
      pcbY={18.2}
      schX={-5.9}
      schY={-2.5}
      schRotation="270deg"
      connections={{ pin1: "J1.B5", pin2: "net.GND" }}
    />
    <resistor
      name="R3"
      resistance="27"
      footprint="0402"
      pcbX={-1.2}
      pcbY={15.2}
      pcbRotation="90deg"
      schX={-5.5}
      schY={1.1}
      connections={{ pin1: "J1.A6", pin2: "net.USB_DP" }}
    />
    <resistor
      name="R4"
      resistance="27"
      footprint="0402"
      pcbX={1.2}
      pcbY={15.2}
      pcbRotation="90deg"
      schX={-5.5}
      schY={0.2}
      connections={{ pin1: "J1.A7", pin2: "net.USB_DM" }}
    />

    <XC6206P332MR_G
      name="U2"
      pcbX={0}
      pcbY={11}
      pcbRotation="180deg"
      schX={-1.5}
      schY={4}
      connections={{
        Vin: "net.VBUS",
        Vout: "net.V3_3",
        GND: "net.GND",
      }}
    />
    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0402"
      pcbX={-3.3}
      pcbY={11}
      schX={-0.2}
      schY={4.8}
      connections={{ pin1: "net.VBUS", pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      capacitance="1uF"
      footprint="0402"
      pcbX={3.3}
      pcbY={11}
      schX={-0.2}
      schY={3.9}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />

    <RP2040 name="U1" pcbX={0} pcbY={2.2} schX={3} schY={0} />

    <capacitor
      name="C3"
      capacitance="1uF"
      footprint="0402"
      pcbX={4.9}
      pcbY={7.3}
      pcbRotation="90deg"
      schX={1}
      schY={4.8}
      connections={{ pin1: "U1.VREG_IN", pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      capacitance="1uF"
      footprint="0402"
      pcbX={1.9}
      pcbY={7.3}
      pcbRotation="90deg"
      schX={2}
      schY={4.8}
      connections={{ pin1: "U1.VREG_VOUT", pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="0402"
      pcbX={-5.1}
      pcbY={4.4}
      schX={3.8}
      schY={5}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C6"
      capacitance="100nF"
      footprint="0402"
      pcbX={5.1}
      pcbY={4.4}
      schX={4.6}
      schY={5}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C7"
      capacitance="100nF"
      footprint="0402"
      pcbX={-5.1}
      pcbY={0}
      schX={5.4}
      schY={5}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C8"
      capacitance="100nF"
      footprint="0402"
      pcbX={5.1}
      pcbY={0}
      schX={6.2}
      schY={5}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />

    <resistor
      name="R5"
      resistance="1k"
      footprint="0402"
      pcbX={-1.6}
      pcbY={-6.1}
      pcbRotation="90deg"
      schX={1.5}
      schY={-5.3}
      connections={{ pin1: "U1.XIN", pin2: "net.XIN_DAMPED" }}
    />
    <X322512MSB4SI
      name="Y1"
      pcbX={0}
      pcbY={-8.2}
      schX={3.5}
      schY={-5.5}
      connections={{
        OSC1: "net.XIN_DAMPED",
        OSC2: "U1.XOUT",
        GND1: "net.GND",
        GND2: "net.GND",
      }}
    />
    <capacitor
      name="C9"
      capacitance="15pF"
      footprint="0402"
      pcbX={-3.7}
      pcbY={-8.2}
      pcbRotation="90deg"
      schX={2.6}
      schY={-6.9}
      connections={{ pin1: "net.XIN_DAMPED", pin2: "net.GND" }}
    />
    <capacitor
      name="C10"
      capacitance="15pF"
      footprint="0402"
      pcbX={3.7}
      pcbY={-8.2}
      pcbRotation="90deg"
      schX={4.5}
      schY={-6.9}
      connections={{ pin1: "U1.XOUT", pin2: "net.GND" }}
    />

    <W25Q16JVSSIQ
      name="U3"
      pcbX={0}
      pcbY={-14.8}
      pcbRotation="180deg"
      schX={8}
      schY={-3}
      connections={{
        pin1: "U1.QSPI_SS",
        pin2: "U1.QSPI_SD1",
        IO2: "U1.QSPI_SD2",
        GND: "net.GND",
        pin5: "U1.QSPI_SD0",
        CLK: "U1.QSPI_SCLK",
        IO3: "U1.QSPI_SD3",
        VCC: "net.V3_3",
      }}
    />
    <capacitor
      name="C11"
      capacitance="100nF"
      footprint="0402"
      pcbX={4.6}
      pcbY={-14.8}
      pcbRotation="90deg"
      schX={9.5}
      schY={-4.6}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />

    <resistor
      name="R6"
      resistance="10k"
      footprint="0402"
      pcbX={5.2}
      pcbY={-3.8}
      pcbRotation="90deg"
      schX={6}
      schY={1.5}
      connections={{ pin1: "U1.RUN", pin2: "net.V3_3" }}
    />
    <resistor
      name="R7"
      resistance="1k"
      footprint="0402"
      pcbX={-1.3}
      pcbY={-3.8}
      pcbRotation="90deg"
      schX={5}
      schY={-1.5}
      connections={{ pin1: "U1.TESTEN", pin2: "net.GND" }}
    />

    <resistor
      name="R8"
      resistance="1k"
      footprint="0402"
      pcbX={7.2}
      pcbY={-0.2}
      pcbRotation="90deg"
      schX={7.8}
      schY={2}
      connections={{ pin1: "U1.GPIO25", pin2: "net.LED_K" }}
    />
    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX={7.2}
      pcbY={2.6}
      pcbRotation="90deg"
      schX={9}
      schY={2}
      connections={{ anode: "net.V3_3", cathode: "net.LED_K" }}
    />

    <pinheader
      name="J2"
      pinCount={20}
      pitch="2.54mm"
      holeDiameter="1mm"
      platedDiameter="1.8mm"
      pcbX={-11.43}
      pcbY={-0.2}
      pcbRotation="180deg"
      schX={-10}
      schY={9}
      schFacingDirection="right"
      pinLabels={{
        pin1: "VBUS",
        pin2: "GND",
        pin3: "V3_3",
        pin4: "RUN",
        pin5: "GPIO0",
        pin6: "GPIO1",
        pin7: "GPIO2",
        pin8: "GPIO3",
        pin9: "GPIO4",
        pin10: "GPIO5",
        pin11: "GPIO6",
        pin12: "GPIO7",
        pin13: "GPIO8",
        pin14: "GPIO9",
        pin15: "GPIO10",
        pin16: "GPIO11",
        pin17: "GPIO12",
        pin18: "GPIO13",
        pin19: "SWD",
        pin20: "SWCLK",
      }}
      connections={{
        pin1: "net.VBUS",
        pin2: "net.GND",
        pin3: "net.V3_3",
        pin4: "U1.RUN",
        pin5: "U1.GPIO0",
        pin6: "U1.GPIO1",
        pin7: "U1.GPIO2",
        pin8: "U1.GPIO3",
        pin9: "U1.GPIO4",
        pin10: "U1.GPIO5",
        pin11: "U1.GPIO6",
        pin12: "U1.GPIO7",
        pin13: "U1.GPIO8",
        pin14: "U1.GPIO9",
        pin15: "U1.GPIO10",
        pin16: "U1.GPIO11",
        pin17: "U1.GPIO12",
        pin18: "U1.GPIO13",
        pin19: "U1.SWD",
        pin20: "U1.SWCLK",
      }}
    />

    <pinheader
      name="J3"
      pinCount={20}
      pitch="2.54mm"
      holeDiameter="1mm"
      platedDiameter="1.8mm"
      pcbX={11.43}
      pcbY={-0.2}
      schX={12.5}
      schY={9}
      schFacingDirection="left"
      pinLabels={{
        pin1: "GPIO14",
        pin2: "GPIO15",
        pin3: "GPIO16",
        pin4: "GPIO17",
        pin5: "GPIO18",
        pin6: "GPIO19",
        pin7: "GPIO20",
        pin8: "GPIO21",
        pin9: "GPIO22",
        pin10: "GPIO23",
        pin11: "GPIO24",
        pin12: "GPIO25",
        pin13: "GPIO26",
        pin14: "GPIO27",
        pin15: "GPIO28",
        pin16: "GPIO29",
        pin17: "QSPI_CS",
        pin18: "GND",
        pin19: "V3_3",
        pin20: "GND2",
      }}
      connections={{
        pin1: "U1.GPIO14",
        pin2: "U1.GPIO15",
        pin3: "U1.GPIO16",
        pin4: "U1.GPIO17",
        pin5: "U1.GPIO18",
        pin6: "U1.GPIO19",
        pin7: "U1.GPIO20",
        pin8: "U1.GPIO21",
        pin9: "U1.GPIO22",
        pin10: "U1.GPIO23",
        pin11: "U1.GPIO24",
        pin12: "U1.GPIO25",
        pin13: "U1.GPIO26_ADC0",
        pin14: "U1.GPIO27_ADC1",
        pin15: "U1.GPIO28_ADC2",
        pin16: "U1.GPIO29_ADC3",
        pin17: "U1.QSPI_SS",
        pin18: "net.GND",
        pin19: "net.V3_3",
        pin20: "net.GND",
      }}
    />

    <trace from="J1.A1B12" to="net.GND" />
    <trace from="J1.B1A12" to="net.GND" />
    <trace from="J1.EH1" to="net.GND" />
    <trace from="J1.EH2" to="net.GND" />
    <trace from="J1.EH3" to="net.GND" />
    <trace from="J1.EH4" to="net.GND" />
    <trace from="J1.A4B9" to="net.VBUS" />
    <trace from="J1.B4A9" to="net.VBUS" />
    <trace from="J1.B6" to="net.USB_DP" />
    <trace from="J1.B7" to="net.USB_DM" />

    <trace from="U1.IOVDD1" to="net.V3_3" />
    <trace from="U1.IOVDD2" to="net.V3_3" />
    <trace from="U1.IOVDD3" to="net.V3_3" />
    <trace from="U1.IOVDD4" to="net.V3_3" />
    <trace from="U1.IOVDD5" to="net.V3_3" />
    <trace from="U1.IOVDD6" to="net.V3_3" />
    <trace from="U1.ADC_AVDD" to="net.V3_3" />
    <trace from="U1.USB_VDD" to="net.V3_3" />
    <trace from="U1.VREG_IN" to="net.V3_3" />
    <trace from="U1.DVDD1" to="net.V1_1" />
    <trace from="U1.DVDD2" to="net.V1_1" />
    <trace from="U1.VREG_VOUT" to="net.V1_1" />
    <trace from="U1.GND" to="net.GND" />
    <trace from="U1.USB_DP" to="net.USB_DP" />
    <trace from="U1.USB_DM" to="net.USB_DM" />
  </board>
)
