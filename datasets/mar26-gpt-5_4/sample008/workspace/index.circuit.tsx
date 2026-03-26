import { RP2040 } from "./imports/RP2040"
import { TYPE_C_16PIN_2MD_073_ } from "./imports/TYPE_C_16PIN_2MD_073_"
import { W25Q16JVUXIQ } from "./imports/W25Q16JVUXIQ"
import { XC6206P332MR } from "./imports/XC6206P332MR"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"
import { XL_1608SYGC_06 } from "./imports/XL_1608SYGC_06"

export default () => (
  <board width="21mm" height="55mm" layers={2}>
    <TYPE_C_16PIN_2MD_073_
      name="J1"
      pcbX={0}
      pcbY={-22}
      connections={{
        GND1: "net.GND",
        GND2: "net.GND",
        SHELL1: "net.GND",
        SHELL2: "net.GND",
        pin13_alt1: "net.GND",
        pin14_alt1: "net.GND",
        VBUS1: "net.VBUS",
        VBUS2: "net.VBUS",
        DP1: "net.USB_DP_CONN",
        DP2: "net.USB_DP_CONN",
        DN1: "net.USB_DM_CONN",
        DN2: "net.USB_DM_CONN",
      }}
    />

    <pinheader
      name="J2"
      pinCount={20}
      pitch="2.54mm"
      pcbX={-8.89}
      pcbY={0}
      pcbOrientation="vertical"
      holeDiameter="1mm"
      platedDiameter="1.8mm"
      pinLabels={{
        pin1: "GPIO0",
        pin2: "GPIO1",
        pin3: "GND",
        pin4: "GPIO2",
        pin5: "GPIO3",
        pin6: "GPIO4",
        pin7: "GPIO5",
        pin8: "GND2",
        pin9: "GPIO6",
        pin10: "GPIO7",
        pin11: "GPIO8",
        pin12: "GPIO9",
        pin13: "GND3",
        pin14: "GPIO10",
        pin15: "GPIO11",
        pin16: "GPIO12",
        pin17: "GPIO13",
        pin18: "GND4",
        pin19: "GPIO14",
        pin20: "GPIO15",
      }}
      connections={{
        pin1: "U1.GPIO0",
        pin2: "U1.GPIO1",
        pin3: "net.GND",
        pin4: "U1.GPIO2",
        pin5: "U1.GPIO3",
        pin6: "U1.GPIO4",
        pin7: "U1.GPIO5",
        pin8: "net.GND",
        pin9: "U1.GPIO6",
        pin10: "U1.GPIO7",
        pin11: "U1.GPIO8",
        pin12: "U1.GPIO9",
        pin13: "net.GND",
        pin14: "U1.GPIO10",
        pin15: "U1.GPIO11",
        pin16: "U1.GPIO12",
        pin17: "U1.GPIO13",
        pin18: "net.GND",
        pin19: "U1.GPIO14",
        pin20: "U1.GPIO15",
      }}
    />

    <pinheader
      name="J3"
      pinCount={20}
      pitch="2.54mm"
      pcbX={8.89}
      pcbY={0}
      pcbOrientation="vertical"
      holeDiameter="1mm"
      platedDiameter="1.8mm"
      pinLabels={{
        pin1: "VBUS",
        pin2: "VSYS",
        pin3: "GND",
        pin4: "3V3",
        pin5: "ADC_AVDD",
        pin6: "GPIO29",
        pin7: "GPIO28",
        pin8: "GPIO27",
        pin9: "GPIO26",
        pin10: "RUN",
        pin11: "GPIO22",
        pin12: "GND2",
        pin13: "GPIO21",
        pin14: "GPIO20",
        pin15: "GPIO19",
        pin16: "GPIO18",
        pin17: "GND3",
        pin18: "GPIO17",
        pin19: "GPIO16",
        pin20: "SWCLK",
      }}
      connections={{
        pin1: "net.VBUS",
        pin2: "net.VBUS",
        pin3: "net.GND",
        pin4: "net.V3_3",
        pin5: "net.ADC_AVDD",
        pin6: "U1.GPIO29_ADC3",
        pin7: "U1.GPIO28_ADC2",
        pin8: "U1.GPIO27_ADC1",
        pin9: "U1.GPIO26_ADC0",
        pin10: "net.RUN",
        pin11: "U1.GPIO22",
        pin12: "net.GND",
        pin13: "U1.GPIO21",
        pin14: "U1.GPIO20",
        pin15: "U1.GPIO19",
        pin16: "U1.GPIO18",
        pin17: "net.GND",
        pin18: "U1.GPIO17",
        pin19: "U1.GPIO16",
        pin20: "U1.SWCLK",
      }}
    />

    <pinheader
      name="J4"
      pinCount={3}
      pitch="2.54mm"
      pcbX={0}
      pcbY={22.5}
      pcbOrientation="horizontal"
      holeDiameter="1mm"
      platedDiameter="1.8mm"
      pinLabels={["SWD", "3V3", "GND"]}
      connections={{
        pin1: "U1.SWD",
        pin2: "net.V3_3",
        pin3: "net.GND",
      }}
    />

    <RP2040
      name="U1"
      pcbX={0}
      pcbY={-4}
      connections={{
        IOVDD1: "net.V3_3",
        IOVDD2: "net.V3_3",
        IOVDD3: "net.V3_3",
        IOVDD4: "net.V3_3",
        IOVDD5: "net.V3_3",
        IOVDD6: "net.V3_3",
        USB_VDD: "net.V3_3",
        ADC_AVDD: "net.ADC_AVDD",
        VREG_IN: "net.V3_3",
        VREG_VOUT: "net.V1_1",
        DVDD1: "net.V1_1",
        DVDD2: "net.V1_1",
        GND: "net.GND",
        TESTEN: "net.GND",
        RUN: "net.RUN",
        USB_DP: "net.USB_DP",
        USB_DM: "net.USB_DM",
        XIN: "net.XIN",
        XOUT: "net.XOUT",
        QSPI_SS: "net.QSPI_SS",
        QSPI_SCLK: "net.QSPI_SCLK",
        QSPI_SD0: "net.QSPI_SD0",
        QSPI_SD1: "net.QSPI_SD1",
        QSPI_SD2: "net.QSPI_SD2",
        QSPI_SD3: "net.QSPI_SD3",
      }}
    />

    <W25Q16JVUXIQ
      name="U2"
      pcbX={5.8}
      pcbY={-5.2}
      pcbRotation="90deg"
      connections={{
        CS: "net.QSPI_SS",
        CLK: "net.QSPI_SCLK",
        pin2: "net.QSPI_SD1",
        pin3: "net.QSPI_SD2",
        GND: "net.GND",
        pin5: "net.QSPI_SD0",
        pin7: "net.QSPI_SD3",
        VCC: "net.V3_3",
        EP: "net.GND",
      }}
    />

    <XC6206P332MR
      name="U3"
      pcbX={-5.8}
      pcbY={-13.2}
      pcbRotation="90deg"
      connections={{
        VIN: "net.VBUS",
        VOUT: "net.V3_3",
        VSS: "net.GND",
      }}
    />

    <X322512MSB4SI
      name="Y1"
      pcbX={0}
      pcbY={4.8}
      connections={{
        OSC1: "net.XIN",
        OSC2: "net.XOUT",
        GND1: "net.GND",
        GND2: "net.GND",
      }}
    />

    <XL_1608SYGC_06
      name="D1"
      pcbX={5.8}
      pcbY={4.4}
      pcbRotation="90deg"
      connections={{
        A: "net.LED_A",
        K: "net.GND",
      }}
    />

    <resistor
      name="R1"
      resistance="5.1k"
      footprint="0402"
      pcbX={-2.6}
      pcbY={-15.8}
      supplierPartNumbers={{ jlcpcb: ["C11702"] }}
      connections={{ pin1: "J1.CC1", pin2: "net.GND" }}
    />
    <resistor
      name="R2"
      resistance="5.1k"
      footprint="0402"
      pcbX={2.6}
      pcbY={-15.8}
      supplierPartNumbers={{ jlcpcb: ["C11702"] }}
      connections={{ pin1: "J1.CC2", pin2: "net.GND" }}
    />
    <resistor
      name="R3"
      resistance="27"
      footprint="0402"
      pcbX={-1.6}
      pcbY={-12.8}
      supplierPartNumbers={{ jlcpcb: ["C138021"] }}
      connections={{ pin1: "net.USB_DM_CONN", pin2: "net.USB_DM" }}
    />
    <resistor
      name="R4"
      resistance="27"
      footprint="0402"
      pcbX={1.6}
      pcbY={-12.8}
      supplierPartNumbers={{ jlcpcb: ["C138021"] }}
      connections={{ pin1: "net.USB_DP_CONN", pin2: "net.USB_DP" }}
    />
    <resistor
      name="R5"
      resistance="10k"
      footprint="0402"
      pcbX={-5.2}
      pcbY={2.6}
      supplierPartNumbers={{ jlcpcb: ["C25744"] }}
      connections={{ pin1: "net.RUN", pin2: "net.V3_3" }}
    />
    <resistor
      name="R6"
      resistance="10k"
      footprint="0402"
      pcbX={5.4}
      pcbY={-8.6}
      supplierPartNumbers={{ jlcpcb: ["C25744"] }}
      connections={{ pin1: "net.QSPI_SS", pin2: "net.V3_3" }}
    />
    <resistor
      name="R7"
      resistance="330"
      footprint="0402"
      pcbX={4}
      pcbY={4.4}
      supplierPartNumbers={{ jlcpcb: ["C105875"] }}
      connections={{ pin1: "U1.GPIO25", pin2: "net.LED_A" }}
    />

    <capacitor
      name="C1"
      capacitance="1uF"
      footprint="0603"
      pcbX={-7.9}
      pcbY={-13.2}
      supplierPartNumbers={{ jlcpcb: ["C15849"] }}
      connections={{ pin1: "net.VBUS", pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      capacitance="1uF"
      footprint="0603"
      pcbX={-3.7}
      pcbY={-13.2}
      supplierPartNumbers={{ jlcpcb: ["C15849"] }}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C3"
      capacitance="1uF"
      footprint="0603"
      pcbX={2.8}
      pcbY={-0.4}
      supplierPartNumbers={{ jlcpcb: ["C15849"] }}
      connections={{ pin1: "net.V1_1", pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      capacitance="100nF"
      footprint="0402"
      pcbX={-3.9}
      pcbY={-8}
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      capacitance="100nF"
      footprint="0402"
      pcbX={-3.9}
      pcbY={-5}
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C6"
      capacitance="100nF"
      footprint="0402"
      pcbX={-3.9}
      pcbY={-2}
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C7"
      capacitance="100nF"
      footprint="0402"
      pcbX={3.9}
      pcbY={-8}
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C8"
      capacitance="100nF"
      footprint="0402"
      pcbX={3.9}
      pcbY={-5}
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C9"
      capacitance="100nF"
      footprint="0402"
      pcbX={3.9}
      pcbY={-2}
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C10"
      capacitance="100nF"
      footprint="0402"
      pcbX={7.8}
      pcbY={-5.2}
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C11"
      capacitance="100nF"
      footprint="0402"
      pcbX={5.8}
      pcbY={-0.8}
      supplierPartNumbers={{ jlcpcb: ["C1525"] }}
      connections={{ pin1: "net.ADC_AVDD", pin2: "net.GND" }}
    />
    <capacitor
      name="C12"
      capacitance="27pF"
      footprint="0402"
      pcbX={-2.2}
      pcbY={4.8}
      supplierPartNumbers={{ jlcpcb: ["C1557"] }}
      connections={{ pin1: "net.XIN", pin2: "net.GND" }}
    />
    <capacitor
      name="C13"
      capacitance="27pF"
      footprint="0402"
      pcbX={2.2}
      pcbY={4.8}
      supplierPartNumbers={{ jlcpcb: ["C1557"] }}
      connections={{ pin1: "net.XOUT", pin2: "net.GND" }}
    />

    <silkscreentext text="RP2040" pcbX={0} pcbY={9.5} fontSize="1.2mm" />
    <silkscreentext text="USB Breakout" pcbX={0} pcbY={11.6} fontSize="1mm" />
  </board>
)
