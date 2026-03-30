import { A_3225_12_00_10_10_10_A } from "./imports/A_3225_12_00_10_10_10_A"
import { HX_USB3_1TYPE_C_16P_FS } from "./imports/HX_USB3_1TYPE_C_16P_FS"
import { RP2040 } from "./imports/RP2040"
import { W25Q16JVSSIQ } from "./imports/W25Q16JVSSIQ"
import { XC6206P332MR_G } from "./imports/XC6206P332MR_G"

export default () => (
  <board width="25mm" height="52mm" layers={4}>
    <HX_USB3_1TYPE_C_16P_FS
      name="J1"
      pcbX={0}
      pcbY={22}
      pcbRotation="180deg"
      connections={{
        GND_A: "net.GND",
        GND_B: "net.GND",
        VBUS_A: "net.VBUS",
        VBUS_B: "net.VBUS",
        SHIELD1: "net.GND",
        SHIELD2: "net.GND",
        SHIELD3: "net.GND",
        SHIELD4: "net.GND",
        DP_A: "net.USB_DP_RAW",
        DP_B: "net.USB_DP_RAW",
        DM_A: "net.USB_DM_RAW",
        DM_B: "net.USB_DM_RAW",
      }}
    />

    <XC6206P332MR_G
      name="U2"
      pcbX={0}
      pcbY={14}
      pcbRotation="90deg"
      connections={{
        Vin: "net.VBUS",
        Vout: "net.V3_3",
        GND: "net.GND",
      }}
    />

    <RP2040
      name="U1"
      pcbX={0}
      pcbY={0}
      connections={{
        IOVDD1: "net.V3_3",
        IOVDD2: "net.V3_3",
        IOVDD3: "net.V3_3",
        IOVDD4: "net.V3_3",
        IOVDD5: "net.V3_3",
        IOVDD6: "net.V3_3",
        ADC_AVDD: "net.V3_3",
        USB_VDD: "net.V3_3",
        VREG_IN: "net.V3_3",
        VREG_VOUT: "net.VCORE",
        DVDD1: "net.VCORE",
        DVDD2: "net.VCORE",
        GND: "net.GND",
        TESTEN: "net.GND",
        RUN: "net.RUN",
        USB_DP: "net.USB_DP",
        USB_DM: "net.USB_DM",
        QSPI_SD0: "U3.IO0",
        QSPI_SD1: "U3.IO1",
        QSPI_SD2: "U3.IO2",
        QSPI_SD3: "U3.IO3",
        QSPI_SCLK: "U3.CLK",
        QSPI_SS: "U3.CS",
        XIN: "X1.XIN",
        XOUT: "X1.XOUT",
      }}
    />

    <W25Q16JVSSIQ
      name="U3"
      pcbX={0}
      pcbY={10}
      pcbRotation="0deg"
      connections={{
        VCC: "net.V3_3",
        GND: "net.GND",
      }}
    />

    <A_3225_12_00_10_10_10_A
      name="X1"
      pcbX={-2}
      pcbY={-10}
      pcbRotation="0deg"
      connections={{
        GND1: "net.GND",
        GND2: "net.GND",
      }}
    />

    <pinheader
      name="J2"
      pinCount={20}
      pitch="2.54mm"
      pcbX={-11.43}
      pcbY={0}
      pcbRotation="90deg"
      pinLabels={[
        "VBUS",
        "GND",
        "3V3",
        "RUN",
        "GPIO0",
        "GPIO1",
        "GPIO2",
        "GPIO3",
        "GPIO4",
        "GPIO5",
        "GPIO6",
        "GPIO7",
        "GPIO8",
        "GPIO9",
        "GPIO10",
        "GPIO11",
        "GPIO12",
        "GPIO13",
        "GPIO14",
        "GPIO15",
      ]}
      connections={{
        pin1: "net.VBUS",
        pin2: "net.GND",
        pin3: "net.V3_3",
        pin4: "net.RUN",
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
        pin19: "U1.GPIO14",
        pin20: "U1.GPIO15",
      }}
    />

    <pinheader
      name="J3"
      pinCount={20}
      pitch="2.54mm"
      pcbX={11.43}
      pcbY={0}
      pcbRotation="270deg"
      pinLabels={[
        "GPIO29",
        "GPIO28",
        "GPIO27",
        "GPIO26",
        "GPIO25",
        "GPIO24",
        "GPIO23",
        "GPIO22",
        "GPIO21",
        "GPIO20",
        "GPIO19",
        "GPIO18",
        "GPIO17",
        "GPIO16",
        "SWCLK",
        "SWD",
        "GND",
        "3V3",
        "ADC_AVDD",
        "VBUS",
      ]}
      connections={{
        pin1: "U1.GPIO29_ADC3",
        pin2: "U1.GPIO28_ADC2",
        pin3: "U1.GPIO27_ADC1",
        pin4: "U1.GPIO26_ADC0",
        pin5: "U1.GPIO25",
        pin6: "U1.GPIO24",
        pin7: "U1.GPIO23",
        pin8: "U1.GPIO22",
        pin9: "U1.GPIO21",
        pin10: "U1.GPIO20",
        pin11: "U1.GPIO19",
        pin12: "U1.GPIO18",
        pin13: "U1.GPIO17",
        pin14: "U1.GPIO16",
        pin15: "U1.SWCLK",
        pin16: "U1.SWD",
        pin17: "net.GND",
        pin18: "net.V3_3",
        pin19: "net.V3_3",
        pin20: "net.VBUS",
      }}
    />

    <resistor
      name="R1"
      resistance="5.1k"
      footprint="0402"
      pcbX={-3.2}
      pcbY={15.5}
      pcbRotation="90deg"
      connections={{ pin1: "J1.CC1", pin2: "net.GND" }}
    />
    <resistor
      name="R2"
      resistance="5.1k"
      footprint="0402"
      pcbX={3.2}
      pcbY={15.5}
      pcbRotation="90deg"
      connections={{ pin1: "J1.CC2", pin2: "net.GND" }}
    />
    <resistor
      name="R3"
      resistance="27"
      footprint="0402"
      pcbX={-2}
      pcbY={10}
      connections={{ pin1: "J1.DP_A", pin2: "net.USB_DP" }}
    />
    <resistor
      name="R4"
      resistance="27"
      footprint="0402"
      pcbX={2}
      pcbY={10}
      connections={{ pin1: "J1.DM_A", pin2: "net.USB_DM" }}
    />
    <resistor
      name="R5"
      resistance="10k"
      footprint="0402"
      pcbX={5.5}
      pcbY={-4}
      pcbRotation="90deg"
      connections={{ pin1: "net.V3_3", pin2: "net.RUN" }}
    />
    <resistor
      name="R6"
      resistance="10k"
      footprint="0402"
      pcbX={4}
      pcbY={10}
      pcbRotation="90deg"
      connections={{ pin1: "net.V3_3", pin2: "U3.CS" }}
    />
    <resistor
      name="R7"
      resistance="330"
      footprint="0402"
      pcbX={8}
      pcbY={4}
      connections={{ pin1: "U1.GPIO25", pin2: "D1.anode" }}
    />

    <led
      name="D1"
      color="green"
      footprint="0603"
      pcbX={8}
      pcbY={7}
      pcbRotation="90deg"
      connections={{ cathode: "net.GND" }}
    />

    <capacitor
      name="C1"
      capacitance="10uF"
      footprint="0603"
      pcbX={-2}
      pcbY={16}
      pcbRotation="90deg"
      connections={{ pin1: "net.VBUS", pin2: "net.GND" }}
    />
    <capacitor
      name="C2"
      capacitance="1uF"
      footprint="0402"
      pcbX={-1.5}
      pcbY={13}
      pcbRotation="90deg"
      connections={{ pin1: "net.VBUS", pin2: "net.GND" }}
    />
    <capacitor
      name="C3"
      capacitance="1uF"
      footprint="0402"
      pcbX={1.5}
      pcbY={13}
      pcbRotation="90deg"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C4"
      capacitance="10uF"
      footprint="0603"
      pcbX={2}
      pcbY={16}
      pcbRotation="90deg"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C5"
      capacitance="1uF"
      footprint="0402"
      pcbX={2.5}
      pcbY={1.5}
      pcbRotation="90deg"
      connections={{ pin1: "net.VCORE", pin2: "net.GND" }}
    />
    <capacitor
      name="C6"
      capacitance="100nF"
      footprint="0402"
      pcbX={6.5}
      pcbY={6}
      pcbRotation="90deg"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C7"
      capacitance="100nF"
      footprint="0402"
      pcbX={6.5}
      pcbY={2}
      pcbRotation="90deg"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C8"
      capacitance="100nF"
      footprint="0402"
      pcbX={6.5}
      pcbY={-2}
      pcbRotation="90deg"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C9"
      capacitance="100nF"
      footprint="0402"
      pcbX={6.5}
      pcbY={-6}
      pcbRotation="90deg"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C10"
      capacitance="100nF"
      footprint="0402"
      pcbX={-6.5}
      pcbY={6}
      pcbRotation="90deg"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C11"
      capacitance="100nF"
      footprint="0402"
      pcbX={-6.5}
      pcbY={2}
      pcbRotation="90deg"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C12"
      capacitance="100nF"
      footprint="0402"
      pcbX={-6.5}
      pcbY={-2}
      pcbRotation="90deg"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C13"
      capacitance="100nF"
      footprint="0402"
      pcbX={-6.5}
      pcbY={-6}
      pcbRotation="90deg"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <capacitor
      name="C14"
      capacitance="27pF"
      footprint="0402"
      pcbX={-4}
      pcbY={-12.5}
      pcbRotation="90deg"
      connections={{ pin1: "U1.XIN", pin2: "net.GND" }}
    />
    <capacitor
      name="C15"
      capacitance="27pF"
      footprint="0402"
      pcbX={0}
      pcbY={-12.5}
      pcbRotation="90deg"
      connections={{ pin1: "U1.XOUT", pin2: "net.GND" }}
    />
  </board>
)
