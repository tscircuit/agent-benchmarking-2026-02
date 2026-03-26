import { AMS1117_3_3 } from "./imports/AMS1117_3_3"
import { A_0402WGF1001TCE } from "./imports/A_0402WGF1001TCE"
import { A_0402__1__10K } from "./imports/A_0402__1__10K"
import { CL05B104KO5NNNC } from "./imports/CL05B104KO5NNNC"
import { CT41G_0402_2X1_16V_0_1uF_K_N_ } from "./imports/CT41G_0402_2X1_16V_0_1uF_K_N_"
import { HX_USB3_1TYPE_C_16P_FS } from "./imports/HX_USB3_1TYPE_C_16P_FS"
import { RP2040 } from "./imports/RP2040"
import { W25Q16JVUXIQ } from "./imports/W25Q16JVUXIQ"
import { X322512MSB4SI } from "./imports/X322512MSB4SI"
import { XL_1608SYGC_06 } from "./imports/XL_1608SYGC_06"

const leftBreakout = [
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
] as const

const rightBreakout = [
  "GPIO10",
  "GPIO11",
  "GPIO12",
  "GPIO13",
  "GPIO14",
  "GPIO15",
  "GPIO26_ADC0",
  "GPIO27_ADC1",
  "GPIO28_ADC2",
  "GPIO29_ADC3",
] as const

const holePitch = 2.54
const topHoleY = -11.43

export default () => (
  <board width="30mm" height="58mm">
    <HX_USB3_1TYPE_C_16P_FS
      name="USB1"
      pcbX={0}
      pcbY={25}
      pcbRotation="180deg"
      connections={{
        A1B12: "net.GND",
        B1A12: "net.GND",
        A4B9: "net.VBUS",
        B4A9: "net.VBUS",
        A5: "net.CC1",
        B5: "net.CC2",
        A6: "net.USB_DP_RAW",
        B6: "net.USB_DP_RAW",
        A7: "net.USB_DM_RAW",
        B7: "net.USB_DM_RAW",
        EH1: "net.GND",
        EH2: "net.GND",
        EH3: "net.GND",
        EH4: "net.GND",
      }}
    />

    <AMS1117_3_3
      name="U2"
      pcbX={0}
      pcbY={12}
      pcbRotation="180deg"
      connections={{
        pin1: "net.GND",
        pin2: "net.V3_3",
        pin3: "net.VBUS",
        TAB: "net.V3_3",
      }}
    />

    <capacitor
      name="CIN"
      capacitance="10uF"
      footprint="0603"
      pcbX={-9}
      pcbY={12}
      pcbRotation="90deg"
      connections={{ pin1: "net.VBUS", pin2: "net.GND" }}
    />
    <capacitor
      name="COUT"
      capacitance="10uF"
      footprint="0603"
      pcbX={9}
      pcbY={12}
      pcbRotation="90deg"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
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
        DVDD1: "net.VCORE",
        DVDD2: "net.VCORE",
        VREG_VOUT: "net.VCORE",
        GND: "net.GND",
        TESTEN: "net.GND",
        RUN: "net.RUN",
        USB_DP: "net.USB_DP",
        USB_DM: "net.USB_DM",
        SWCLK: "net.SWCLK",
        SWD: "net.SWD",
        XIN: "net.XIN",
        XOUT: "net.XOUT",
        GPIO0: "net.GPIO0",
        GPIO1: "net.GPIO1",
        GPIO2: "net.GPIO2",
        GPIO3: "net.GPIO3",
        GPIO4: "net.GPIO4",
        GPIO5: "net.GPIO5",
        GPIO6: "net.GPIO6",
        GPIO7: "net.GPIO7",
        GPIO8: "net.GPIO8",
        GPIO9: "net.GPIO9",
        GPIO10: "net.GPIO10",
        GPIO11: "net.GPIO11",
        GPIO12: "net.GPIO12",
        GPIO13: "net.GPIO13",
        GPIO14: "net.GPIO14",
        GPIO15: "net.GPIO15",
        GPIO16: "net.GPIO16",
        GPIO17: "net.GPIO17",
        GPIO18: "net.GPIO18",
        GPIO19: "net.GPIO19",
        GPIO20: "net.GPIO20",
        GPIO21: "net.GPIO21",
        GPIO22: "net.GPIO22",
        GPIO23: "net.GPIO23",
        GPIO24: "net.GPIO24",
        GPIO25: "net.GPIO25",
        GPIO26_ADC0: "net.GPIO26_ADC0",
        GPIO27_ADC1: "net.GPIO27_ADC1",
        GPIO28_ADC2: "net.GPIO28_ADC2",
        GPIO29_ADC3: "net.GPIO29_ADC3",
        QSPI_SD0: "net.QSPI_SD0",
        QSPI_SD1: "net.QSPI_SD1",
        QSPI_SD2: "net.QSPI_SD2",
        QSPI_SD3: "net.QSPI_SD3",
        QSPI_SCLK: "net.QSPI_SCLK",
        QSPI_SS: "net.QSPI_SS",
      }}
    />

    <W25Q16JVUXIQ
      name="U3"
      pcbX={-7.5}
      pcbY={8}
      pcbRotation="0deg"
      connections={{
        CS: "net.QSPI_SS",
        CLK: "net.QSPI_SCLK",
        pin2: "net.QSPI_SD1",
        pin3: "net.QSPI_SD2",
        pin5: "net.QSPI_SD0",
        pin7: "net.QSPI_SD3",
        VCC: "net.V3_3",
        GND: "net.GND",
        EP: "net.GND",
      }}
    />

    <X322512MSB4SI
      name="Y1"
      pcbX={0}
      pcbY={-8}
      connections={{
        OSC1: "net.XIN",
        OSC2: "net.XOUT",
        GND1: "net.GND",
        GND2: "net.GND",
      }}
    />
    <capacitor
      name="C9"
      capacitance="27pF"
      footprint="0402"
      pcbX={-4}
      pcbY={-8}
      pcbRotation="90deg"
      connections={{ pin1: "net.XIN", pin2: "net.GND" }}
    />
    <capacitor
      name="C10"
      capacitance="27pF"
      footprint="0402"
      pcbX={4}
      pcbY={-8}
      pcbRotation="90deg"
      connections={{ pin1: "net.XOUT", pin2: "net.GND" }}
    />

    <resistor
      name="R1"
      resistance="27"
      footprint="0402"
      pcbX={3}
      pcbY={17}
      pcbRotation="90deg"
      connections={{ pin1: "net.USB_DP_RAW", pin2: "net.USB_DP" }}
    />
    <resistor
      name="R2"
      resistance="27"
      footprint="0402"
      pcbX={5.2}
      pcbY={17}
      pcbRotation="90deg"
      connections={{ pin1: "net.USB_DM_RAW", pin2: "net.USB_DM" }}
    />
    <resistor
      name="R3"
      resistance="5.1k"
      footprint="0402"
      pcbX={-3}
      pcbY={20}
      pcbRotation="90deg"
      connections={{ pin1: "net.CC1", pin2: "net.GND" }}
    />
    <resistor
      name="R4"
      resistance="5.1k"
      footprint="0402"
      pcbX={-5.2}
      pcbY={20}
      pcbRotation="90deg"
      connections={{ pin1: "net.CC2", pin2: "net.GND" }}
    />

    <A_0402__1__10K
      name="R5"
      pcbX={9}
      pcbY={0}
      pcbRotation="90deg"
      connections={{ pin1: "net.RUN", pin2: "net.V3_3" }}
    />
    <A_0402WGF1001TCE
      name="R6"
      pcbX={7.5}
      pcbY={14}
      pcbRotation="90deg"
      connections={{ pin1: "net.GPIO25", pin2: "net.LED_A" }}
    />
    <XL_1608SYGC_06
      name="D1"
      pcbX={9.8}
      pcbY={14}
      pcbRotation="90deg"
      connections={{ A: "net.LED_A", K: "net.GND" }}
    />

    <CT41G_0402_2X1_16V_0_1uF_K_N_
      name="C1"
      pcbX={6.8}
      pcbY={5.8}
      pcbRotation="90deg"
      connections={{ pin1: "net.VCORE", pin2: "net.GND" }}
    />
    <CL05B104KO5NNNC
      name="C2"
      pcbX={6.8}
      pcbY={2.8}
      pcbRotation="90deg"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <CL05B104KO5NNNC
      name="C3"
      pcbX={6.8}
      pcbY={-0.2}
      pcbRotation="90deg"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <CL05B104KO5NNNC
      name="C4"
      pcbX={-6.8}
      pcbY={2.8}
      pcbRotation="90deg"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />
    <CL05B104KO5NNNC
      name="C5"
      pcbX={-6.8}
      pcbY={-0.2}
      pcbRotation="90deg"
      connections={{ pin1: "net.V3_3", pin2: "net.GND" }}
    />

    {leftBreakout.map((pin, index) => (
      <platedhole
        name={`H_L${index + 1}`}
        shape="circle"
        holeDiameter="0.9mm"
        outerDiameter="1.6mm"
        pcbX={-13}
        pcbY={topHoleY + index * holePitch}
        connectsTo={`net.${pin}`}
      />
    ))}

    {rightBreakout.map((pin, index) => (
      <platedhole
        name={`H_R${index + 1}`}
        shape="circle"
        holeDiameter="0.9mm"
        outerDiameter="1.6mm"
        pcbX={13}
        pcbY={topHoleY + index * holePitch}
        connectsTo={`net.${pin}`}
      />
    ))}

    <platedhole
      name="H_VBUS"
      shape="circle"
      holeDiameter="0.9mm"
      outerDiameter="1.7mm"
      pcbX={-3.81}
      pcbY={16.5}
      connectsTo="net.VBUS"
    />
    <platedhole
      name="H_3V3"
      shape="circle"
      holeDiameter="0.9mm"
      outerDiameter="1.7mm"
      pcbX={-1.27}
      pcbY={16.5}
      connectsTo="net.V3_3"
    />
    <platedhole
      name="H_GND"
      shape="circle"
      holeDiameter="0.9mm"
      outerDiameter="1.7mm"
      pcbX={1.27}
      pcbY={16.5}
      connectsTo="net.GND"
    />
    <platedhole
      name="H_RUN"
      shape="circle"
      holeDiameter="0.9mm"
      outerDiameter="1.7mm"
      pcbX={3.81}
      pcbY={16.5}
      connectsTo="net.RUN"
    />

    <platedhole
      name="H_SWCLK"
      shape="circle"
      holeDiameter="0.9mm"
      outerDiameter="1.6mm"
      pcbX={-2.54}
      pcbY={-16.5}
      connectsTo="net.SWCLK"
    />
    <platedhole
      name="H_SWD"
      shape="circle"
      holeDiameter="0.9mm"
      outerDiameter="1.6mm"
      pcbX={0}
      pcbY={-16.5}
      connectsTo="net.SWD"
    />
    <platedhole
      name="H_GND_SWD"
      shape="circle"
      holeDiameter="0.9mm"
      outerDiameter="1.6mm"
      pcbX={2.54}
      pcbY={-16.5}
      connectsTo="net.GND"
    />
  </board>
)
